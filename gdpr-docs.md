---
layout: default
title: Personal Information and Access
---

<table class="table table-striped table-responsive">
	<thead>
		<tr>
			{% for row in site.data.pii.meta.headers %}
			<th>
				{{ row.title }}
				<div style='font-weight: normal'>
					{{ row.comment }}
				</div>
			</th>
			{% endfor %}
		</tr>
		<tr>
		</tr>
	</thead>
	<tbody>
		{% for row in site.data.pii.data %}
		<tr>
			<td>{{ row.data }}</td>
			<td>{{ row.source }}</td>
			<td>{{ row.reason }}</td>
			<td>{{ row.handling }}</td>
			<td>
				<ul>
					{% for person in row.access %}
					<li>
						<abbr title="{{ site.data.people[person].name }} ({{ site.data.people[person].affil }})">{{ person }}</abbr>
					</li>
					{% endfor %}
				</ul>
			</td>
			<td>{{ row.disposal }}</td>
			<td>{{ row.consent }}</td>
			<td>{{ row.over_13 }}</td>
			<td>{{ row.mission_crit }}</td>
			<td>{{ row.pd }}</td>
			<td>{{ row.spd }}</td>
		</tr>
		{% endfor %}
	</tbody>
</table>

# Data Storage Locations

<table class="table table-striped table-responsive">
	<thead>
		<tr>
			{% for row in site.data.datastorage.meta.headers %}
			<th>{{ row.title }}</th>
			{% endfor %}
		</tr>
		<tr>
		</tr>
	</thead>
	<tbody>
		{% for row in site.data.datastorage.data %}
		<tr>
			<td>{{ row.datastore }}</td>
			<td>{{ row.contents }}</td>
			<td>
				<ul>
					{% for person in row.access %}
					<li>
						<abbr title="{{ site.data.people[person].name }} ({{ site.data.people[person].affil }})">{{ person }}</abbr>
					</li>
					{% endfor %}
				</ul>
			</td>
			<td>{{ row.pii }}</td>
		</tr>
		{% endfor %}
	</tbody>
</table>
