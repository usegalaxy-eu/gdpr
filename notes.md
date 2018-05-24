---
layout: default
title: GDPR Notes
---

> This Regulation does not therefore concern the processing of such anonymous information, including for statistical or research purposes.

Implies that we are OK to analyse user data (without emails / without user identities) for statistical and research purposes.

> To ascertain whether means are reasonably likely to be used to identify the
> natural person, account should be taken of all objective factors, such as the
> costs of and the amount of time required for identification, taking into
> consideration the available technology at the time of the processing and
> technological developments. The principles of data protection should
> therefore not apply to anonymous information, namely information which does
> not relate to an identified or identifiable natural person or to personal
> data rendered anonymous in such a manner that the data subject is not or no
> longer identifiable

- GRT data doesn't include user IDs.
- https://stats.usegalaxy.eu/d/000000012/galaxy-user-statistics?refresh=15m&orgId=1
  includes user IDs, but these are extremely hard to attribute to an
  identifiable person. You must identify probably users of a tool (we have
  >1.2k users) based on their research or some other property. And then there
  is nothing you can do with that ID since it isn't published anywhere else.

> The application of pseudonymisation to personal data can reduce the risks to
> the data subjects concerned and help controllers and processors to meet their
> data-protection obligations.

using user IDs is probably sufficient here. See above discussion, but it would
require a copy of the galaxy database which is not available except via access
from cn029, or via the database server itself.

> Natural persons should be made aware of risks, rules, safeguards and rights
> in relation to the processing of personal data and how to exercise their
> rights in relation to such processing. In particular, the specific purposes
> for which personal data are processed should be explicit and legitimate and
> determined at the time of the collection of the personal data.

We could improve the registration form to link to our terms.

> Personal data should be processed only if the purpose of the processing could
> not reasonably be fulfilled by other means. In order to ensure that the
> personal data are not kept longer than necessary, time limits should be
> established by the controller for erasure or for a periodic review.

Only PD we keep is email, making this easy. email is absolutely necessary
(post-workflow email notification, bug report communications, etc.)

> Personal data should be processed in a manner that ensures appropriate
> security and confidentiality of the personal data, including for preventing
> unauthorised access to or use of personal data and the equipment used for the
> processing

As an admin I do not need to know a user's email address basically ever. This
could be hidden from me in a lot of places.

the only times that come to mind are:

- when I'm discussing a bug with a user and need to impersonate them (but their
  email is in the bug report email and I could use that for launching
  impersonation.)
- I'm testing something in a user who has previously permitted me to
  impersonate them.

So, basically, we could reduce the impersonate select box to an empty textbox
where we have to supply an email address. We could additionally allow users to
consent to impersonation, some users may not wish to. We could do this with
user preferences (and maybe giving us a nice way to link to it, so we could
write in an email "Hey, please allow me to impersonate you [link] and I'll
check out what's going on.")

> Where processing is based on the data subject's consent, the controller
> should be able to demonstrate that the data subject has given consent to the
> processing operation. In particular in the context of a written declaration
> on another matter, safeguards should ensure that the data subject is aware of
> the fact that and the extent to which consent is given.

- Need to check what all is based on consent.
- is ToS plain enough language?
- do we declare what we collect and why?

> Controllers that are part of a group of undertakings or institutions
> affiliated to a central body may have a legitimate interest in transmitting
> personal data within the group of undertakings for internal administrative
> purposes, including the processing of clients' or employees' personal data.  

So we're allowed to discuss people over email.

> The processing of personal data to the extent strictly necessary and
> proportionate for the purposes of ensuring network and information security 

So IP address logs for 24 hours are OK under this. And we could really just
discard if we move to CA auth'd stuff.

> The processing of personal data for purposes other than those for which the
> personal data were initially collected should be allowed only where the
> processing is compatible with the purposes for which the personal data were
> initially collected. In such a case, no legal basis separate from that which
> allowed the collection of the personal data is required. ... Further
> processing for archiving purposes in the public interest, scientific or
> historical research purposes or statistical purposes should be considered to
> be compatible lawful processing operations.

This could probably be theoretically used to justify retaining email addresses
indefinitely? But I'm not sure and it doesn't really sit right with me. We
don't collect any other personal information (name, email) that this could be
used with.

OOOH This might be able to be used to justify giving access to an account when
the user departs the lab or so.

> If the personal data processed by a controller do not permit the controller
> to identify a natural person, the data controller should not be obliged to
> acquire additional information in order to identify the data subject for the
> sole purpose of complying with any provision of this Regulation. However, the
> controller should not refuse to take additional information provided by the
> data subject in order to support the exercise of his or her rights.
> Identification should include the digital identification of a data subject,
> for example through authentication mechanism such as the same credentials,
> used by the data subject to log-in to the on-line service offered by the data
> controller.

No idea what to do with this. Wish they gave concrete examples. We aren't
obligated to discover the identity of a natural person matching "jane-doe
<jane@example.com>" in our galaxy user database, but if they ... supply a
physical address? we cannot refuse to take this. I think. Not sure how the last
sentence even relates.

> The controller should be obliged to respond to requests from the data subject
> without undue delay and at the latest within one month and to give reasons
> where the controller does not intend to comply with any such requests.  

1 month to respond to emails.

>  Furthermore, the data subject should be informed of the existence of
>  profiling and the consequences of such profiling. Where the personal data
>  are collected from the data subject, the data subject should also be
>  informed whether he or she is obliged to provide the personal data and of
>  the consequences, where he or she does not provide such data. That
>  information may be provided in combination with standardised icons in order
>  to give in an easily visible, intelligible and clearly legible manner, a
>  meaningful overview of the intended processing.

So our login page should say "You are not legally obligated to supply your
name, you are free to choose a pseudonym to better protect your privacy."? Maybe?

> Where personal data can be legitimately disclosed to another recipient, the
> data subject should be informed when the personal data are first disclosed to
> the recipient. Where the controller intends to process the personal data for
> a purpose other than that for which they were collected, the controller
> should provide the data subject prior to that further processing with
> information on that other purpose and other necessary information. Where the
> origin of the personal data cannot be provided to the data subject because
> various sources have been used, general information should be provided. 

I think this means we need to be very clear that when we enable OpenID Connect
authentication, that it is explicit that "OIDC users can update their
information there. We will obtain a username from that service to use with your
account"

> The controller should use all reasonable measures to verify the identity of a
> data subject who requests access, in particular in the context of online
> services and online identifiers. A controller should not retain personal data
> for the sole purpose of being able to react to potential requests.

good to know.

> To strengthen the right to be forgotten in the online environment, the right
> to erasure should also be extended in such a way that a controller who has
> made the personal data public should be obliged to inform the controllers
> which are processing such personal data to erase any links to, or copies or
> replications of those personal data.  

Think we're safe from this too. No PD exposed to third parties.


> Where, in a certain set of personal data, more than one data subject is
> concerned, the right to receive the personal data should be without prejudice
> to the rights and freedoms of other data subjects in accordance with this
> Regulation. Furthermore, that right should not prejudice the right of the
> data subject to obtain the erasure of personal data and the limitations of
> that right as set out in this Regulation and should, in particular, not imply
> the erasure of personal data concerning the data subject which have been
> provided by him or her for the performance of a contract to the extent that
> and for as long as the personal data are necessary for the performance of
> that contract. Where technically feasible, the data subject should have the
> right to have the personal data transmitted directly from one controller to
> another.

I think this could be read as "when a user requests deletion and has shared
datasets with other users, we should remove the related datasets."

Or, maybe this isn't at that level since datasets aren't PD, but something
smaller like cleaning up roles, we're erasing members of a set without
affecting the rights of others.

> The data subject should have the right not to be subject to a decision, which
> may include a measure, evaluating personal aspects relating to him or her
> which is based solely on automated processing and which produces legal
> effects concerning him or her or similarly significantly affects him or her,
> such as automatic refusal of an online credit application or e-recruiting
> practices without any human intervention. 

My reading of this is that it does not affect our desire to automatically
decide where to send user jobs based on aspects about them. Because: there are
no legal effects, it does not significantly affect them, and the examples are
much stronger than just where to process data.

> Such processing includes ‘profiling’ that consists of any form of automated
> processing of personal data evaluating the personal aspects relating to a
> natural person, in particular to analyse or predict aspects concerning the
> data subject's performance at work, economic situation, health, personal
> preferences or interests, reliability or behaviour, location or movements,
> where it produces legal effects concerning him or her or similarly
> significantly affects him or her 

This seems like we shouldn't ever try to categories users as "genomics users"
or try to predict what tools they might be interested in. If we do, we'll need
to take a much closer look at this.

> where personal data are processed which reveal racial or ethnic origin,
> political opinions, religion or philosophical beliefs, 

If we allowed users to choose what news they wanted to see on their home page,
we probably couldn't really look at this data and see "oh, jane doe enabled
[left wing news source]" since that would revear her political opinions to us
and we don't need those for our processing. Or at least if we ever did look,
we'd have to be very sure to pseudonymise/anonymize first and only look at bulk
results.

> aware that a personal data breach has occurred, the controller should notify
> the personal data breach to the supervisory authority without undue delay
> and, where feasible, not later than 72 hours after having become aware of it,
> unless the controller is able to demonstrate, in accordance with the
> accountability principle, that the personal data breach is unlikely to result
> in a risk to the rights and freedoms of natural persons  

good to know.

> Provisions should be made for the possibility for transfers in certain
> circumstances where the data subject has given his or her explicit consent,
> where the transfer is occasional and necessary in relation to a contract or a
> legal claim, regardless of whether in a judicial procedure or whether in an
> administrative or any out-of-court procedure, including procedures before
> regulatory bodies. Provision should also be made for the possibility for
> transfers where important grounds of public interest laid down by Union or
> Member State law so require or where the transfer is made from a register
> established by law and intended for consultation by the public or persons
> having a legitimate interest. In the latter case, such a transfer should not
> involve the entirety of the personal data or entire categories of the data
> contained in the register and, when the register is intended for consultation
> by persons having a legitimate interest, the transfer should be made only at
> the request of those persons or, if they are to be the recipients, taking
> into full account the interests and fundamental rights of the data subject.

Or maybe this is a better one to justify transferring user data to their boss?
We need to find a solid justification to that (in addition to written approval
by their boss.) (113) is sounding good as well except for "supervisory
authority needs to be informed." It would be optimal if we could share the
account data BUT mask all access to personal data.

Since we're resetting the password/changing the email on the account to make it
accessible, maybe this isn't something we need to worry about since no PD is
transferred. they are proving to us they know the identity of the user (via
their email address)

> Art 13(1)a: the identity and the contact details of the controller and,

must be listed prominently on gdpr page

> Art 13(1)c: the purposes of the processing for which the personal data are intended as well as the legal basis for the processing; 

need to be clearer about this probably.

> 13(2)a:  the period for which the personal data will be stored, or if that is not possible, the criteria used to determine that period; 

are we doing this well enough in the data stuff?


> Art 14 Information to be provided where personal data have not been obtained from the data subject
>> 1. Where personal data have not been obtained from the data subject, the
>>    controller shall provide the data subject with the following information: 

ugh OIDC.

(a) the identity and the contact details of the controller and, where applicable, of the controller's representative;
(b) the contact details of the data protection officer, where applicable;
(c) the purposes of the processing for which the personal data are intended as well as the legal basis for the processing;
(d) the categories of personal data concerned;
(e) the recipients or categories of recipients of the personal data, if any;
(f) where applicable, that the controller intends to transfer personal data to a recipient in a third country or international
organisation and the existence or absence of an adequacy decision by the Commission, or in the case of
transfers referred to in Article 46 or 47, or the second subparagraph of Article 49(1), reference to the appropriate or
suitable safeguards and the means to obtain a copy of them or where they have been made available


2. In addition to the information referred to in paragraph 1, the controller shall provide the data subject with the
following information necessary to ensure fair and transparent processing in respect of the data subject:
(a) the period for which the personal data will be stored, or if that is not possible, the criteria used to determine that period;
(b) where the processing is based on point (f) of Article 6(1), the legitimate interests pursued by the controller or by a third party;
(c) the existence of the right to request from the controller access to and rectification or erasure of personal data or restriction of processing concerning the data subject and to object to processing as well as the right to data portability;
(d) where processing is based on point (a) of Article 6(1) or point (a) of Article 9(2), the existence of the right to withdraw consent at any time, without affecting the lawfulness of processing based on consent before its withdrawal;
(e) the right to lodge a complaint with a supervisory authority;
(f) from which source the personal data originate, and if applicable, whether it came from publicly accessible sources;
(g) the existence of automated decision-making, including profiling, referred to in Article 22(1) and (4) and, at least in those cases, meaningful information about the log


3. The controller shall provide the information referred to in paragraphs 1 and 2:
(a) within a reasonable period after obtaining the personal data, but at the latest within one month, having regard to the specific circumstances in which the personal data are processed;
(b) if the personal data are to be used for communication with the data subject, at the latest at the time of the first communication to that data subject; or
(c) if a disclosure to another recipient is envisaged, at the latest when the personal data are first disclosed. 




> > Article 37(1) The controller and the processor shall designate a data protection officer in any case where:
> (a) the processing is carried out by a public authority or body, except for courts acting in their judicial capacity;
> (b) the core activities of the controller or the processor consist of processing operations which, by virtue of their nature, their scope and/or their purposes, require regular and systematic monitoring of data subjects on a large scale;or 
> (c) the core activities of the controller or the processor consist of processing on a large scale of special categories of data pursuant to Article 9 and personal data relating to criminal convictions and offences referred to in Article 10

I interpret this to mean that we do not need a DPO:
- We are not a public authority.
- core activities do not require systematic monitoring of data subjects on a large scale
- we do not process SPD.



