---
layout: default
---

# Data Processing Activity (DPA) Register

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
			<td>{{ row.types }}</td>
			<td>{{ row.categories }}</td>
			<td>{{ row.purpose }}</td>
			<td>{{ row.recipients }}</td>
			<td>{{ row.storage_period }}</td>
			<td>{{ row.security }}</td>
			<td>{{ row.exported }}</td>
		</tr>
		{% endfor %}
	</tbody>
</table>
