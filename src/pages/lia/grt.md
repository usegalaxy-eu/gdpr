---
layout: ../../layouts/History.astro
date: 2018-05-08 11:29:20+02:00
author: Helena Rasche
title: Galactic Radio Telescope (GRT) Legitimate Interest Assessment
---

## Legitimate Interests

- We want to process the data in order to improve the Galaxy service and be able to run more user jobs simultaneously, optimising our usage of compute resources.
- UseGalaxy.eu, the wider Galaxy community, and the public benefit from our collection of this data.
- The data is made available, free of charge, for anyone to analyse and draw conclusions about tool runtimes and cpu/memory usage based on input parameters.
- The benefit to optimising resource consumption is significant.
- If we could not go ahead we will continue to poorly schedule resources and not be able to freely support all of our users.
- Our usage is ethical and lawful.

## Necessity Test

- The processing of the data is necessary to achieve the goals of the GRT project.
- This is the only way to go about it.
- We only obtain and send the minimum amount of data required to process the analysis.

## Balancing Test

- We have a contract with the user who is providing the data, which they entered into voluntarily.
- None of the data is sensitive data.
- None of the data is private data.
- None of the data is personal data.
- Some examples of the data transmitted to the GRT service and exposed publicly are provided below.
- People generally expect that we analyse and optimise our resource usage in order to reduce costs and improve quality of services provided.
- We are happy to explain as needed.
- It is unlikely that this will be considered intrusive. It is possible that some users may object to the processing of their information and we can provide an opt-out mechanism.
- We know nothing of the identity or classification of any users on our service. We have no interest in this knowledge as it does not help our processing of this data.
- We have adopted a filtering mechanism to remove any potentially sensitive parameters.
- We can allow users to opt-out.

## Examples of Data Shared

Please note that NO user identifiers are included anywhere in the results. There are additionally no identifiers that could link a data point back to the original user.

Job Data:

<table class="table table-striped">
  <thead><tr><th>id</th><th>tool_id</th><th>tool_version</th><th>state</th><th>create_time</th></tr></thead>
  <tbody>
    <tr><td>2018626</td><td>toolshed.g2.bx.psu.edu/repos/bgruening/deeptools_plot_heatmap/deeptools_plot_heatmap/2.5.1.1.0</td><td>2.5.1.1.0</td><td>ok</td><td>2017-10-22 09:44:24.077315</td></tr>
  </tbody>
</table>

Job Metric Data:

<table class="table table-striped">
  <thead><tr><th>job_id</th><th>plugin</th><th>name</th><th>value</th></tr></thead>
  <tbody>
    <tr><td>2018526</td><td>cpuinfo</td><td>processor_count</td><td>24.0000000</td></tr>
    <tr><td>2018526</td><td>core</td><td>runtime_seconds</td><td>11.0000000</td></tr>
    <tr><td>2018526</td><td>core</td><td>galaxy_slots</td><td>1.0000000</td></tr>
    <tr><td>2018526</td><td>core</td><td>start_epoch</td><td>1508592081.0000000</td></tr>
    <tr><td>2018526</td><td>core</td><td>end_epoch</td><td>1508592092.0000000</td></tr>
  </tbody>
</table>

Job Parameter Data:

<table class="table table-striped">
  <thead><tr><th>job_id</th><th>name</th><th>value</th></tr></thead>
  <tbody>
    <tr><td>2018526</td><td>chromInfo</td><td><code>{"chromInfo": "/usr/local/galaxy/galaxy-dist/tool-data/shared/ucsc/chrom/mm10.len"}</code></td></tr>
    <tr><td>2018526</td><td>input</td><td><code>{"input": {"values": [{"src": "hda", "id": 4464980, "size": 26941}]}}</code></td></tr>
    <tr><td>2018526</td><td>delimiter</td><td><code>{"delimiter": ""}</code></td></tr>
    <tr><td>2018526</td><td>cut_type_options</td><td><code>{"cut_type_options": {"list": ["9"], "__current_case__": 0, "cut_element": "-f"}}</code></td></tr>
    <tr><td>2018526</td><td>dbkey</td><td><code>{"dbkey": "mm10"}</code></td></tr>
    <tr><td>2018526</td><td>complement</td><td><code>{"complement": ""}</code></td></tr>
  </tbody>
</table>


## Conclusion

We have concluded that we have a Legitimate Interest in processing this data due to the ability of not just our organisation but the entire world to benefit from processing data in this way.
