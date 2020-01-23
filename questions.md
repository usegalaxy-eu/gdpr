---
layout: default
title: GDPR Questions
---

# General questions first version

- ~~Do we need a cookie notice? (We do not track or analyse user behaviour, cookie is required for functionality.)~~
- ~~Are there issues with embedding our GitHub site? This sets cookies, I do not know the purpose of these cookies.~~
- ~~Are there issues with using CDNs for our website resources, IP address + browser info + cookies are potentially sent/set by the third party services and we have no control over this. Even if they do not do so now, they might change their behvaiour in the future.~~
- ~~Is deciding where to send job data based on features like "this is a heavy user" considered "automatic decision making" affecting them? They should continue to have the same experience, we are just optimising our resource allocation.~~
- ~~Are we OK to analyse completely anonymous data from our database. E.g. "how often was tool X used", completely disconnected from user data or any PD/SPD.~~
- Do I need to do development to further remove email address from user interfaces? E.g. should the user list page redact this information from administrative users? It is not strictly necessary to accomplish administration tasks that we know the identity of any users.
- Case: Alice shares data with Bob, Alice then deletes her account. Must we remove the data that she shared with Bob? (Or are we required to inform them that this user created/uploaded data will not be removed?)
- Case: a user who leaves their position and has data on our service that their coworkers/boss needs. Is releasing this (with proof of identity from boss/of previous employee to sufficiently identify the relationship) a GDPR issue?

# Further questions

Author: Jan Leendertse

## About „Personal Information and Access“

What was the reason to publish that?

Why are the people announed, who have access, instead of indicating the functions?

Was does „Subject over 13“ mean?

Why was the perspective set the way „What data are you collecting“?

The „data storage location“ *Google Drive* is problematic.

What is the platform used for „registration form“?

„Job execution data“ are stored anonymously without deletion. Check if this is in contradiction to other assertions.

## About „data storage Locations“

The system name is listed, but not the service provider and the place of the machines. Most obvious is this for *Google Drive*.

## Data itself

### Data collected

Which data are used by Galaxy?

- Cookies (set by ???): link to a person is not intended, solely technical use
  - referrer
  - pages visited
- uploaded data sets
  - name?
  - e-mail
  - institution
- registration
  - access date and time
  - username
  - e-mail


### Data processed further

- referrer for showing wanted site
- pages visited to do statistics about usage: data are anonymized <!--directly, before processing?-->
- registration
  - make use of Galaxy possible
  - to prevent double registration
  - to prevent exceeded use of quota

### Data controlling and deletion

- profile can be seen and edited
  - usegalaxy.eu: user → preferences → manage information
- retract consent possible
  - send mail to ???

### Data sharing with third parties

- no sharing with third parties

<!--Is that true?-->

### Scope

- services of Freiburg Galaxy Group

**Contact**

```
Bioinformatics Group
contact@usegalaxy.eu
Department of Computer Science
Albert-Ludwigs-University Freiburg
Georges-Köhler-Allee 106
79110 Freiburg
Germany
```



<!-- Are there embedded sites which are not clearly distinguishible?-->
