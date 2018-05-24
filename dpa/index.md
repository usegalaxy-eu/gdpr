---
layout: default
title: Data Processing Activity (DPA) Register
---

This table inspired by the [EC's Factsheet](https://ec.europa.eu/commission/sites/beta-political/files/data-protection-factsheet-business-7-steps_en.pdf)

{% include contact.html %}

<table class="table table-striped table-responsive">
	<thead>
		<tr>
			{% for row in site.data.dpa_register.meta.headers %}
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
		{% for row in site.data.dpa_register.data %}
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
