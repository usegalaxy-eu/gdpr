---
layout: default
title: GDPR Questions
---


- Do we need a cookie notice? (We do not track or analyse user behaviour, cookie is required for functionality.)
- Are there issues with embedding our GitHub site? This sets cookies, I do not know the purpose of these cookies.
- Are there issues with using CDNs for our website resources, IP address + browser info + cookies are potentially sent/set by the third party services and we have no control over this. Even if they do not do so now, they might change their behvaiour in the future.
- Analysis:
- Are we OK to analyse completely anonymous data from our database. E.g. "how often was tool X used", completely disconnected from user data or any PD/SPD.
- Do I need to do development to further remove email address from user interfaces? E.g. should the user list page redact this information from administrative users? It is not strictly necessary to accomplish administration tasks that we know the identity of any users.
- Case: Alice shares data with Bob, Alice then deletes her account. Must we remove the data that she shared with Bob? (Or are we required to inform them that this user created/uploaded data will not be removed?)
- Case: a user who leaves their position and has data on our service that their coworkers/boss needs. Is releasing this (with proof of identity from boss/of previous employee to sufficiently identify the relationship) a GDPR issue?
- Is deciding where to send job data based on features like "this is a heavy user" considered "automatic decision making" affecting them? They should continue to have the same experience, we are just optimising our resource allocation.
