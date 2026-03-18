import { execFileSync } from 'child_process';

export interface GitMetadata {
  authors: string[];
  totalCommits: number;
  lastCommitDate: string;
  lastCommitSha: string;
}

/** Returns the root of the main git repository (works from worktrees too). */
function getRepoRoot(): string {
  try {
    return execFileSync('git', ['rev-parse', '--show-toplevel'], {
      encoding: 'utf-8',
    }).trim();
  } catch {
    return process.cwd();
  }
}

/**
 * Get git metadata for a file using --follow to trace renames.
 * @param filePath  Path relative to the git repo root, e.g. "src/pages/scope.md".
 *                  --follow traces back through the migration rename to include
 *                  pre-migration history from the original root-level location.
 */
export function getGitMetadata(filePath: string): GitMetadata {
  const repoRoot = getRepoRoot();

  try {
    // Single git log call: emit "<date> <sha> <author>" per commit, follow renames.
    // %x1F is the ASCII unit separator — safe delimiter even with special chars in names.
    const raw = execFileSync(
      'git',
      ['log', '--follow', '--format=%ci%x1F%H%x1F%aN', '--', filePath],
      { encoding: 'utf-8', cwd: repoRoot }
    ).trim();

    if (!raw) {
      return { authors: [], totalCommits: 0, lastCommitDate: '', lastCommitSha: '' };
    }

    const lines = raw.split('\n').filter(Boolean);
    const totalCommits = lines.length;

    // First line is the most recent commit
    const [firstDate, firstSha] = lines[0]!.split('\x1f');
    const lastCommitDate = (firstDate ?? '').split(' ')[0] ?? '';
    const lastCommitSha = firstSha ?? '';

    // Collect unique authors (order: most recent first)
    const authors = [
      ...new Set(lines.map(l => l.split('\x1f')[2] ?? '').filter(Boolean)),
    ];

    return { authors, totalCommits, lastCommitDate, lastCommitSha };
  } catch {
    // Git not available or file not tracked — return empty metadata
    return {
      authors: [],
      totalCommits: 0,
      lastCommitDate: '',
      lastCommitSha: '',
    };
  }
}
