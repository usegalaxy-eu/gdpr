default: help

dev: ## Run Astro development server
	npm install && npm run dev
.PHONY: dev

build: ## Build Astro site
	npm install && npm run build
.PHONY: build

preview: ## Preview built Astro site
	npm install && npm run preview
.PHONY: preview

help:
	@grep -E '^[a-zA-Z_-]+:.*?## .*$$' $(MAKEFILE_LIST) | sort | awk 'BEGIN {FS = ":.*?## "}; {printf "\033[36m%-30s\033[0m %s\n", $$1, $$2}'
.PHONY: help
