---
imports:
  Link: components/Link.js
  Admonition: components/Admonition.js
  IntroParagraph: components/IntroParagraph.js
---

# Product Language Style Guide

<IntroParagraph>

This document defines styles for Culture Amp product and product-related (but not marketing) communications.

It also contains writing advice for these different contexts.

This document is intended for use by anyone who adds text to the Culture Amp product or related properties, including Designers, Product Managers and, of course, Product Writers. However, the writing advice is intended primarily for use by people who are not professional writers.

You can also view the <Link to='/language/checklist'>Product Writing Checklist</Link> to quickly check any text you are adding to the Culture Amp product or related communications.

</IntroParagraph>

## Table of Contents

[[toc]]

---

## Culture Amp: brand tone and design principles

Most style guides begin with tone and brand advice. However in the case of product writing for non-writers, this is not often a very useful starting point. The Culture Amp Design Principles, developed in light of the Culture Amp values, are a better one.

| Design principle      | All interface text must be…                   |
| --------------------- | --------------------------------------------- |
| Nurture to grow       | Guiding: don't presume.                       |
| We're all human       | Human: be understanding and empathetic.       |
| Honest and purposeful | Clear: be direct, not subtle.                 |
| Consider everyone     | Inclusive: write at a grade 7 level or lower. |

Every time you write or review product text, ask yourself if it reflects the four qualities listed above. If it doesn’t, you can improve it using the advice in this guide.

<Admonition type="tip">

**_Importantly_**, these principles encourage us to:

* refer to the user (you) and ourselves (we) in the interface and product communications
* write as if we are speaking to the people using the product.

This helps us avoid “computer speak”. For example, “16 items deleted” becomes “You deleted 16 items”.

</Admonition>

If you’re writing longer text and you’re wondering about tone, the Brand tone of voice is:

* Friendly but not casual
* Educational but not dull
* Expert but not dictatorial
* Familiar but not inappropriate
* Positive but not unopinionated
* Vulnerable but not hesitant
* Warm but not mushy
* Fun but not childish
* A community but not a clique.

Select from these to shape the tone depending on the use case and persona. Always keep in mind the many languages into which the text will be translated, and the cultures in which it will be used. For advice on internationalization of text, see the [IBM Globalization guidelines][1]

[1]: (http://www-01.ibm.com/software/globalization/guidelines/guideb.html).

Also, if you apply Brand tone of voice, be sure to check what you’ve written with a Product Writer.

---

## Moments of delight and language

If you want to use language to help build a “moment of delight”, check it with a Product Writer. Don’t rely solely on language to create a moment of delight, otherwise you risk jarring the user experience.

<img src={require('file-loader!./img/smash.png')} alt='Screenshot of culture amp "Delete Survey" confirmation where the user must type "SMASH!" to confirm' />

Delight is usually best engendered through the combination of design, interaction and language used in a way that consistently reflects the brand and culture.

---

## Asking Product Writers for help

If you’re in doubt about anything you write, or anything in this guide, have the courage to be vulnerable and ask a Product Writer. When you’re writing high-stakes text, or text that requires the application of brand tone, you _definitely_ need to have a writer involved.

Using this guide and the associated training, you should be able to develop basic interface text without too much trouble, including labels, button names, and so on. You may need some – or more – writer involvement on longer text, like errors and emails.

---

## Writing advice: Product interface text

### Writing process

1.  **Understand the context**

    Where does the text appear in the user flow? What’s just happened? How did the user get here? What else in the current context gives the user cues and clues about possible next steps?

2.  **Think about users and cultures**

    Consider the personas (and actual people) using the interface, and the languages and cultures into which it will be translated. That means you’ll avoid:

    * jargon
    * colloquialisms
    * references to popular culture and in-jokes
    * humour (unless you’re working with a Product Writer)
    * language that suggests or references violence or destruction.

    Next, identify likely audience feelings at this moment in the UX. What are they trying to get done and how do they feel about it?

3.  **Check the component specifications**

    The Culture Amp design team has set specifications for certain interface components (buttons, tooltips, and so on). Check the Component Specifications section of this guide to see if the component you’re working on is defined there. If it is, you’ll need to write to those specifications.

4.  **Write the message**

    The message is the key information you need to communicate at this moment to help the user achieve their objective with Culture Amp.

    Ask yourself:

    1.  What’s the goal of this text? What is its role in helping the user achieve their larger objective within Culture Amp?
    2.  At its _most basic_, what’s the message we need to communicate? Write this as if you were _speaking_ to the person trying to use the product.
    3.  What in 2) is not communicated elsewhere on the page/in the context? The point here is to avoid stating the already-obvious, but take care to consider non-visual users who may not be able to see other visual cues. Consider the example below. Here, the heading puts the action into the continuous tense — it’s happening now. We have the little three-step process diagram at top-right. And we have the three bullets (which change colour as the progress bar gets filled in and each one is completed). In this context, the word “currently” and the line “What we’re processing” seem unnecessary.

    <img src={require('file-loader!./img/analyze-imports.png')} alt="Analyze Imports" />

    With your answers to the three questions above, write down what the text _must_ communicate in fewer than 10 words (obviously for buttons and labels the text will be _much_ shorter).

    Don’t write like a marketer. Use plain English. If it helps, imagine you’re explaining to someone who doesn’t speak English as a first language – not because our users can’t speak English, but because you’re probably very close to the product, and you’ve likely been looking at this process or interaction for a while. You want to get outside that mindset to make the text work.

5.  **Tighten up your text**

    Revise the message by asking yourself these questions. Note that you’ll likely need to balance these points against one another to arrive at a best-case scenario for each piece of text.

    These guidelines are summarized for easy reference in the <Link to='/language/checklist'>Product Writing Checklist</Link>

    1.  **Does your text talk about what the user has just done?** They already know that, so you can cut that part.

    2.  **Does your text talk in terms of the product, or descriptions?** Put the focus on people and actions instead.

        * **Needs work:** The latest import of employee data was successful. You can now manage your surveys or employee data.
        * **Good:** Your import worked. Now, go to your surveys or employee data.

    3.  **Does your text talk in the negative?** Rephrase it to the positive wherever possible.

        * **Needs work:** Don’t click Delete unless...
        * **Good:** If you click Delete you will...

    4.  **Is your text polite?** As with the examples above, polite text is usually longer than plain language. Opt for the plainest language you can write. Plain doesn’t mean rude.

        * **Needs work:** Sorry, that didn’t work. Please try again, and if you’re still having problems feel free to get in touch with us at support@cultureamp.com
        * **Good:** Sorry, that didn’t work. Try again, or contact us at support@cultureamp.com.

    5.  **Shorten or break up sentences wherever you can.**

        * **Needs work:** Along with options to launch, share and complete multiple 360 processes, you can now change due dates, set reminders, or delete multiple 360s in just one click!
        * **Good:** It’s now easier than ever to manage multiple 360 processes. Change due dates, set reminders, and delete multiple 360s in one click.

    6.  **Check each word** and make sure it aligns with contextual interface text
        and the product lexicon:

        * Use consistent capitalization and spelling.
        * Use consistent nomenclature. In this example, “apply” would ideally be “review” because we’re at the Review step in the import process, and the heading reflects this.

          <img src={require('file-loader!./img/apply-review.png')} alt="Screenshot of import modal" />

        - Check that your text has the same grammatical structure as parallel text on the page (that is, text that serves the same purpose in the same level of the interface). For example, in the form below, the final heading (and button text) should ideally reflect the verb-noun structure of the other two. It could read: Extract Survey Data.

          <img src={require('file-loader!./img/verb-noun.png')} alt="Screenshot of survey admin" />

        - Remove any redundancy. For example, in the warning below, “no longer” is redundant in the context of a reference to the “future”. We could rephrase this to: If you delete a demographic, it won’t be available to use in future surveys, but it will stay in existing surveys.

          <img src={require('file-loader!./img/no-longer.png')} alt="Screenshot of Culture Amp warning" />

        - If, as you write, you need to associate particular concepts with a feature (e.g. working with/managing “batches” of 360° processes), choose language that you can use consistently, and ask the Product Writer to add it to the product lexicon so that it is used consistently.

    7.  **For words that don’t appear elsewhere in the interface, try to find a synonym that’s simpler** and has fewer syllables. Use a thesaurus (e.g. Apple thesaurus) if you need to.

        * **Needs work:** We’ve been notified and are investigating the issue.

        * **Good:** We’re working on the problem now.

    8.  **Check the tense.** Make sure that the text maintains the same tense throughout, unless a change in tense is needed. Present tense is most commonly needed for interface text. Change tense (e.g. from present to future text) only when it’s needed (e.g. when you’re talking about the consequences of an action).

        * **Needs work:** We’ve added some features that would make it easy for you to manage 360 surveys at scale.
        * **Good:** New features make it easier for you to manage 360 surveys at scale.

    9.  **Remove -ing verbs** (gerunds and continuous constructions).

        Ing verbs tend to add syllables and complicate grammar, which often raises the reading level of text for no benefit. These verbs fall into 2 categories:

        * Continuous verbs, which we use to describe actions that have begun but haven’t finished (e.g. We’re saving your changes).
        * Gerunds, or ing-verbs acting as nouns. (e.g. Saving will make your changes live.)

        Continuous verbs are fine if you’re alerting people about a process that’s in progress. In all other cases, reword text to avoid verbs that end in ing.

        * **Needs work:** Deleting survey name will also delete any associated responses and reporting data.
        * **Good:** If you delete survey name, the survey and its data will be gone forever.

    10. **Make sure the text is active, not passive.**

        There are two kinds of construction in English: active and passive.

        Active sentences have an <u>actor</u>, an <b>action</b>, and a <i>thing that receives the action</i>: <u>The cat</u> <b>sat</b> on <i>the mat</i>.

        Passive sentences demote the actor (or remove them entirely) to prioritize either the action, or the thing that’s receiving action: <i>The mat</i> was <b>sat on</b> [by <u>the cat</u>].

        As you can see, passive sentences tend to be longer. They’re also murkier. Let’s look at the previous example, which is passive:

        <b>Deleting</b> <i>survey name</i> will also <b>delete</b> any <i>associated responses and reporting data</i>.

        To fix it, we can add the actor and make “deleting” the action (that is, a verb) rather than the name of a task (that is, a gerund).

        If <u>you</u> <b>delete</b> <i>survey name</i> <u>you’ll</u> also <b>delete</b> its <i>responses and report data</i>.

    11. **Check that you’ve used American English.** See the General Styles for details.
    12. **Check that your usage of Culture Amp language aligns with the Product Lexicon.**
    13. **Check punctuation** and any other questions against the information in this style guide and the AP Stylebook.
    14. **Check the readability of your text** at https://www.webpagefx.com/tools/read-able/check.php, or on your own copy of [Hemingway for desktop](http://www.hemingwayapp.com/desktop.html). It should be at grade 7 level or below. To reduce the reading level:
        * shorten sentences
        * make sentences active
        * use simpler words
        * cut words.
    15. **Show your text to a friend** in design for a sanity check.

For tips on user-testing interface text, see https://userresearch.blog.gov.uk/2015/07/01/what-does-this-mean-tips-for-testing-your-words/

---

## Writing advice: Transactional email

### Purposes

Transactional emails are usually used:

* to alert users about changes to their permissions/capabilities
* to remind users to take a survey
* to inform users that an auto-upload has completed.

Note that occasionally email will be sent through Intercom to notify people who haven’t logged into the platform for weeks about a piece of news.

### General guidelines

To write transactional emails, follow the writing process below. Keep these points in mind:

* Prioritize the action you want the reader to take. Make this the focus of your email.
* Prioritize the reader. Don’t tell them, “we’ve done this.” Tell them, “now you can do this.”
* Avoid providing advice or instructions, either for things like meeting with employees, or how to use the interface, in the email itself. Instead, create a piece of Academy content that can be complete, and to which you can link from the email.
* Do _everything you can_ to reduce formality, reduce the reading level of your text, and make it read naturally. If you’re having trouble doing that, paste it sentence by sentence into the [text analysis tool](https://www.webpagefx.com/tools/read-able/) (or use Hemingway) so you can identify and improve the specific ones that are problematic.
* Try to avoid using the kinds of words that spam filters focus on. Check your message against [a list like this one](https://prospect.io/blog/455-email-spam-trigger-words-avoid-2017/).

### Writing process

* Identify the action you’re trying to generate, considering the user, their point in the process, and so on. If all you’re doing is confirming something, first ask yourself if an email is actually necessary — can you confirm whatever the user has requested in the interface?
* Write the messaging _just_ for that action or confirmation (ideally 5 words or fewer).
* Use that messaging as the basis for writing the email subject line (5 words or fewer).
* Insert a greeting between the subject line and the call to action.
* Write why that action is needed (ideally no more than a sentence).
* Offer help with the action (or confirmation) – either link to the Academy or include the support email address, or both.
* Write a signoff.
* Tighten up the text. Use the advice in Step 5 in the writing advice for Product interface text to help.
* Apply the Product lexicon and General styles included in this guide. If you need more information, check the AP Stylebook. If, as you write, you need to associate particular concepts with a feature (e.g. working with/managing “batches” of 360° processes), choose language that you can use consistently, and ask a Product Writer to add it to the product lexicon so that it is used consistently.
* Check the readability of your text at https://www.webpagefx.com/tools/read-able/check.php, or on your own copy of [Hemingway for desktop](http://www.hemingwayapp.com/desktop.html). It should be at grade 7 level or below. To reduce the reading level:
  * shorten sentences
  * make sentences active
  * use simpler words
  * cut words.
* Proofread and then show your system emails to a Product Writer, ideally before you make them live.

---

## Writing advice: Intercom messages

### Purposes

Intercom messages are used primarily:

* to alert users to a system outage in which the platform remains accessible
* to reassure users previously alerted about an outage that the service has resumed
* to tell users about a coming feature change so that they can choose to opt out if they wish
* to tell users about a feature change that has taken place
* to remind users about regular actions (like maintenance) that will make the product, or parts of it, unavailable
* to solicit quantitative feedback from users about a feature, where you don’t have the time or contacts to work with the Customer team to do this.

As a new feature is progressively rolled out, funnelled Intercom messages about it can also be valuable if used judiciously.

To communicate about launches through Intercom, speak to Product Marketing.

### General guidelines

Guidelines for writing Intercom messages:

* Focus on communicating the action/s the user needs to take now.
* The shorter the message, the better.
* Include one small image if you need to highlight a change to the interface.
* Prioritize the reader. Don’t tell them, “we’ve done this.” Tell them, “now you can do this.”
* Where possible, display the primary call to action on a button, unless you’re linking to a website (e.g. the Academy).
* Use the thumbs up/down tool to gauge broad user sentiment about the message.
* Don’t engage with users in a chat thread within Intercom.
* Have another PM, or a Product Writer, read over the text for tone before you make it live.

### Writing process

* Identify the action you’re trying to generate (considering the user, their point in the process, etc.).
* Write the messaging for that action (ideally 5 words or fewer).
* Above this, greet the user and say why you’re interrupting them (one sentence).
* After your action message, provide essential supporting detail (ideally one sentence).
* Offer help with the action – either link to the Academy or include the support email address, or both.
* Tighten up the text. Use the advice in Step 5 in the writing advice for Product interface text to help.
* Apply the Product lexicon and General styles included in this guide. If you need more information, check the AP Stylebook. If, as you write, you need to associate particular concepts with a feature (e.g. working with/managing “batches” of 360° processes), choose language that you can use consistently, and ask a Product Writer to add it to the product lexicon so that it is used consistently.
* Check the readability of your text at https://www.webpagefx.com/tools/read-able/check.php, or on your own copy of [Hemingway for desktop](http://www.hemingwayapp.com/desktop.html). It should be at grade 7 level or below. To reduce the reading level:
  * shorten sentences
  * make sentences active
  * use simpler words
  * cut words.
* Proofread the message, then have another PM proofread your work.

---

## Writing advice: Academy articles

### Purpose

Culture Amp Academy articles help customers get things done with Culture Amp.

Avoid writing Academy articles as product documentation. Consider every content item a tool to help someone use the product to achieve a goal.

### General guidelines

When you’re writing help content:

* Write step-by-step, numbered instructions.
* Write in short sentences and paragraphs.
* Use lists to present alternatives or options within a step.
* Start from the same point in the software every time (e.g. agree between product teams that Step 1 is always Log into Culture Amp, and subsequent steps show how to access the functionality in question from there).
* Make sure that the text maintains the same tense throughout, unless a change in tense is needed. Change tense (e.g. from present to future tense) only when it’s needed – for example, when you’re talking about the consequences of an action.
* Use images and ALT text wherever they logically make sense.

* Use a blue arrow to highlight important features of product screen captures.

  * **This style is pending designer review.**

* If you add See Also links, consider the next steps a user is likely to take after they use the help article you’re writing.
* If you include a video, include a transcript of it.
* Don’t forget to [maintain your articles in the Academy](https://academy.cultureamp.com/hc/en-us/articles/205062809-Using-Academy-maintaining-articles) over time.

### Writing process

1.  **Consider users and context**

    Orient yourself to the user’s mindset. How do they feel when they reach this piece of help content? Consider their stresses, frustrations and desires in this moment.

2.  **Identify their goal within the product**

    Define what the user wants to do in around five words.

    Shape this into a title for your help article. In doing this:

    * consider the title’s searchability and the natural language of users
    * consider the scannability of the title in a list of categorised articles
    * ensure How-to titles begin with a present-simple-tense verb:
      * **Needs work:** Running Onboard & Exit Surveys
      * **Good:** Run Onboard and Exit Surveys
    * ensure titles are written in sentence case with appropriate product- and feature-name capitalization.

3.  **Map the process to achieve that goal**

    Map the process as a series of numbered steps. Allocate a new step for each interaction a user must make (e.g. each click, each field-completion-and-click, and so on).

    * **Use an image** to clarify any point that might confuse users.
    * **Use subheadings** to break up parallel chunks of information that must logically appear in the same help article.
    * **Use a Note** to highlight information which is not a direct part of the process of achieving the user’s goal, but will help them complete that process.

4.  **Tighten up the text**

* Shorten or break up sentences wherever you can.
* Put the focus on users and actions.
* Is your text talking in the negative? Rephrase it to the positive wherever possible.
  * **Needs work:** Don’t click Delete unless….
  * **Good:** Click Delete to...
* Talk in the singular unless the help is specifically focused on completing multiple actions, or acting on multiple items at once.
  * **Needs work:** To archive surveys...
  * **Good:** To archive a survey…
* Check each word and make sure it aligns with contextual interface text and the product lexicon. Note that if, as you write, you need to associate particular concepts with a feature (e.g. working with/managing “batches” of 360° processes), choose language that you can use consistently, and ask a Product Writer to add it to the product lexicon so that it is used consistently.
* For non-contextual words, try to find a synonym that’s simpler and has fewer syllables. Use a thesaurus (e.g. Apple thesaurus) if you need to.
* Remove ing verbs (gerunds and continuous constructions). See this point in the writing advice for Product interface text for details.
* Make sure the text is active, not passive. See this point in the writing advice for Product interface text for details.
* Check that you’ve used American English.
* Check punctuation and any other questions against the information in this style guide.
* Apply the Product lexicon and General styles included in this guide. If you need more information, check the AP Stylebook. If, as you write, you need to associate particular concepts with a feature (e.g. working with/managing “batches” of 360° processes), choose language that you can use consistently, and ask a Product Writer to add it to the product lexicon so that it is used consistently.
* Check the readability of your text at https://www.webpagefx.com/tools/read-able/check.php, or on your own copy of [Hemingway for desktop](http://www.hemingwayapp.com/desktop.html). It should be at grade 7 level or below. To reduce the reading level:
  * shorten sentences
  * make sentences active
  * use simpler words
  * cut words.
* Proofread the message, then have another PM proofread your work.

---

## Product lexicon

**Info:** As of November 2017, Product Managers and the [Product Marketing](https://cultureamp.atlassian.net/wiki/spaces/PRODMARKETING/overview) team are working on the product lexicon.

##### Modules, Plans, Tiers

Culture Amp is a platform with three modules: Employee Engagement, Employee Experience, and Employee Effectiveness. You can subscribe to two plans, which contain different modules. Each plan contains three tiers, which dictate service levels, product inclusions, and price.

---

## Component Specifications

**Info:** Images to come

### Buttons

Maximum character length: 2-3 words. Avoid phrases.

Capitalization: Sentence case.

Punctuation: No finishing punctuation.

Other: Put verbs first; use only verbs where possible. Let the button identify the action the user is taking. An angle bracket before or after the text shows which direction in the process the user’s click on the button will take them.

<Admonition type="warning">

**Warning:** The “backward” and “forward” directions for arrows are dependent on the writing direction (specifically, they are reversed in right-to-left writing systems).

</Admonition>

* **Good:** Create survey
* **Needs work:** New survey

<img src={require('file-loader!./img/btn1.png')} alt="Restart import" />
<img src={require('file-loader!./img/btn2.png')} alt="Review" />

### Notifications

Maximum length: ideally 90 characters for single-line and toast notifications. If the text is longer, use a multi-line notification broken at 90 characters.

Capitalization: Sentence case.

Punctuation: As usual for prose.

Other: Must have a heading which reflects the key message of the text. That is, it may say less than the text. It shouldn’t simply identify the topic of the notification; it must give the user some indication of why the information is important.

* **Good:** Your questions have moved
* **Needs work:** Deleted section and moved questions

### Not Applicable (NA) values

Use NA, without spaces, slashes or stops, when the function or data are not applicable.

See also [Nil values](#nil-values).

### Nil values

A nil value is a value for which there is no result or value.

Nil values are shown as an en-dash (–) presented as an icon. Refer to the Component Library for details.

See also [Not Applicable (NA) values](#not-applicable-na-values).

### Tooltips

Maximum length: depends on the tooltip’s purpose.

Capitalization: Sentence case.

Punctuation: Explained below.

Other:

Tooltips are used for two purposes:

* To explain an element of the interface.

  <img src={require('file-loader!./img/tooltip1.png')} alt="Tooltip saying 'Feedback is complete'" />

  Maximum length: 4 words.

  Punctuation: No finishing punctuation

* To give guidance on concepts inherent in the product.

  <img src={require('file-loader!./img/tooltip1.png')} alt="Tooltip with 'Survey Administrator' heading and large paragraph of text" />

  Maximum length: 35 words, including optional title.

  Punctuation: Where the tooltip comprises a full sentence (or more), use finishing punctuation.

* Other: contains a header that reflects the topic of the guidance.

### Empty states

<Admonition type="warning">

**Warning:** These guidelines require confirmation and clarification.

</Admonition>

Maximum character length: N/A

Capitalization: Sentence case.

Punctuation: As usual for prose.

Other:

* The empty state displays a sentence explaining why there’s nothing to show.
* If the message displays on its own page, it includes:
  * a subheading
  * an explanation of what will appear on the page, and when
  * a back link to take the user to the previous page
  * a line drawing or sketch.
* If it’s practical, include an explanation to the user about what to do if they want to see data in the currently-empty state.

### Errors

Maximum character length: N/A

Capitalization: Sentence case.

Punctuation: As usual for prose.

Other: Say sorry, and lead with that, not the error number (if there is one). Don’t tell users not to worry. Don’t use “please.” Don’t be cute (unless you’re working with a Product Writer).

Provide options, as appropriate, to:

* try again
* go home
* go back
* visit/contact support.

Some examples of error messages from the app:

* We couldn't sync your data. We've been notified and will look into the issue as soon as possible. If you need your data updated now, contact support.
* Your file took too long to upload. Check your Internet connection and try again.
* Your HRIS took too long to respond. Your Internet connection might be too slow or your HRIS unavailable. Check your connection and try again.
* There is no Internet connection. Check your connection and try again.
* Your file is empty. We found no employees. Check for a header and employee data in your spreadsheet, and try again.

### Page titles

Maximum character length: N/A

Capitalization: Sentence case.

Punctuation: No finishing punctuation.

Other: Keep them short and direct. Focus on nouns; page titles are not calls to action, nor are they descriptions.

### Placeholder text

Maximum character length: N/A

Capitalization: Sentence case.

Punctuation: No finishing punctuation.

Other: Placeholder text is used in any form field which isn’t prefilled on pageload. It is always preceded by: e.g. in lowercase, regardless of the fact that nothing precedes it. Common patterns we use for placeholder text are:

* Email addresses: contact@example.com
  * **Georgina says:** This is not shown in the example below but I think it would be a good generic one to use, rather than changing the placeholder email depending on the type of email we need.
* Names: Given-name Family-name (as “First name” and “last name” are reversed in different cultures).
* Dates: mmm, dd, yyyy
* Generic: example label; example title, example description

<img src={require('file-loader!./img/placeholder.png')} alt="Example input field showing placeholder which says 'e.g. support@example.com'" />

### Onboarding messages

_Undefined as yet._

---

## General styles

For full details of general styles, refer to the AP Stylebook online. Each Product Manager has a license, as does Product Marketing.

##### American spellings

If you have a word whose spelling you need to confirm, use https://www.merriam-webster.com/ or the Apple dictionary. The first spelling displayed in both is the dominant American English form.

Check https://en.oxforddictionaries.com/spelling/british-and-spelling to understand what kinds of words have regionalized spellings.

##### and/or

And is used for addition. Or is used to introduce an alternative, that is, in cases where only one option can be selected.

* **Needs work:** Please see our website for up-to-date pricing plans, or you can contact someone to arrange a demonstration.
* **Good:** See our pricing plans and contact us to arrange a demonstration.

##### &

An ampersand is included in some product feature names, and must be included in them every time, in every instance.

Otherwise, don’t use ampersands in prose, nor in titles or labels or other text.

##### Apostrophes

For a singular possessive, the apostrophe comes before the s: the employee’s review.

For a plural possessive, it comes after the s: the employees’ change rooms.

In possessives forms of plurals that don’t simply take an s in the plural, the apostrophe goes before the s: women’s, children’s.

##### Bold text

See also [References to interface elements](#references-to-interface-elements).

Unless you’re referring to interface elements, avoid making text bold. Do not use bold text or talking marks for emphasis, nor to draw users’ attention to particular text. Instead, rewrite the text to highlight the part you want to draw attention to. Perhaps consider a list (see also [Lists](#lists)).

##### Capitalization

Names of product features must take initial capitals in all cases: Account Demographics, not Account demographics.

Capitalise proper nouns (e.g. names of cities and people) as per the AP Stylebook, and Culture Amp products and features only as they appear in the Product Lexicon.

Avoid unnecessary capitalization, for example, using initial capitals on words you want to emphasize, or feel are important.

##### Colons and semicolons

A colon introduces a list (see also [Lists](#lists)). Colons also separate hours from minutes when we’re talking about time (see also [Times](#times)).

You’ll probably never need to use a semicolon.

##### Commas

Refer to the AP Stylebook.

##### Contractions

Use common contractions whenever you can: you’ll, we’ll, it’s, you’re.

Don’t use contractions that aren’t commonly written: this’ll, we’ll’ve.

##### Dashes

Use **spaced en dashes**, like – this.

##### Dates

For dates, use this format: `Mmm DD, YYYY` or **Jun 12, 2017**. This is consistent with our employee data import practices (which may change in the future). Including the month in letters instead of numbers supports internationalization for our global audience by removing the ambiguity in dates like 06/12/2017 – is this referring to DD/MM/YYYY or MM/DD/YYYY?

For dates that include days 1-9 of the month, the day takes a single digit: Jun 3, 2017.

##### Dates and times

We use the user’s local time without a time zone in all cases where that’s clear and unambiguous. The examples below show time zones for completeness.

For dates and times, use the above considerations and combine like this: **Oct 17, 2017 at 4:00 p.m. (EST).**

For dates that include days 1-9 of the month, the day takes a single digit: **Oct 7, 2017 at 4:00 p.m. (EST).**

##### e.g.

See also [i.e.](#ie)

e.g. can be used to introduce an example or a suggestion within a sentence. Don’t use it to present a recommendation.

If you want to use e.g. at the beginning of a sentence, don’t. Instead, write “For example” or “One example is.”

##### Ellipses

Ellipses have two purposes. They’re used:

* when a word in the interface needs to be truncated due to space constraints
* to indicate that a menu item will take a user to a new screen.

Otherwise, avoid using ellipses. They wear thin quickly.

##### etc.

Use “and so on” rather than etc.

##### Exclamation marks

Avoid using these. They wear thin quickly.

##### Gender

Avoid using gendered language. Refer to “people”, and “the person” rather than “he or she.”

**Note**: _This may need to change depending on what language the PMs choose to use to refer to users._

Note that gender describes the characteristics that a society or culture delineates as masculine or feminine, while sex refers to biological differences; chromosomes, hormonal profiles, internal and external sex organs. ([Source](http://www.med.monash.edu.au/gendermed/sexandgender.html).)

##### Headings and titles

Page titles in both the product and the Academy take sentence case, without finishing punctuation.

##### i.e.

See also [e.g.](#eg)

Use “that is” rather than i.e.

##### Internationalization of text

Culture Amp is already translated into numerous languages, and the scope for this work will only increase. IBM presents good [guidelines for writing text that is to be translated](http://www-01.ibm.com/software/globalization/guidelines/guideb.html).

##### Links

Make link text communicate information, so that it’s scannable and accessible.

* **Needs work:** You can see our reports with some sample data here.

* **Good:** Our new Employee Data Import Wizard ships on Monday.

If a link appears at the end of a sentence, make sure the sentence has a period which is _not_ part of the link.

##### Lists

Standardize the grammatical structure of list items.

If the list items are full sentences, give each one sentence case and finishing punctuation.

If the list items are not grammatically complete sentences:

* don’t give them initial capitals or finishing punctuation
* make sure the initial word in each list item follows on from the stem sentence (that is, the sentence that introduces your list)
* give the final item a period.

Bulleted lists are a good way of making paragraph text scannable, as in this example:

> Hi `<name>`, Good news. You can now manage 360 surveys in batches:
>
> In one click, you can:
>
> * send reminders
> * change due dates, and
> * delete multiple 360 surveys.
>
> Got questions? Contact us at support@cultureamp.com.

##### Login/login

See [Two words or one?](#two-words-or-one)

##### Not Applicable/Nil values

Not Applicable (NA) and Nil values are represented differently in the interface.

See the [Component Specifications](#nil-values) in this guide for details.

##### Numbers

Should you use numbers or words in prose? Numbers.

##### Okay

If you use it, use the full word, not ok or o.k.

##### Oxford comma

Culture Amp refers to the AP Stylebook for general styles, and the AP Stylebook advocates against the use of the Oxford comma. As in, no.

##### Paragraphs

Start a new paragraph with each new point or thought.

* **Paragraph needs work:**

  > The Survey & Interview Workflow is used where you want the option for someone to follow up with the employee for an onboard/exit interview once they have completed their survey, and have this captured in Culture Amp. It provides the opportunity for a more detailed exploration of the employee’s responses and therefore the possibility of direct intervention or action based on the employee’s response. Some people use the basic setup and do occasional interviews but the Survey & Interview Workflow is used when this is a standard approach. The Survey & Interview Workflow introduces the concept of an 'Interviewer'. The Interviewer is an individual who is responsible for managing and potentially reviewing responses from the onboard/exit process. This is typically the employee’s manager or someone from HR. Interviewers and Administrators can review the employee's individual responses prior to the interview to capture any notes and prepare. The Survey & Interview Workflow is illustrated below.

* **Good paragraphs _(note the text does not follow the advice in this guide)_:**

  > The Survey & Interview Workflow is used where you want the option for someone to follow up with the employee for an onboard/exit interview once they have completed their survey, and have this captured in Culture Amp.
  >
  > It provides the opportunity for a more detailed exploration of the employee’s responses and therefore the possibility of direct intervention or action based on the employee’s response. Some people use the basic setup and do occasional interviews but the Survey & Interview Workflow is used when this is a standard approach.
  >
  > The Survey & Interview Workflow introduces the concept of an 'Interviewer'. The Interviewer is an individual who is responsible for managing and potentially reviewing responses from the onboard/exit process. This is typically the employee’s manager or someone from HR. Interviewers and Administrators can review the employee's individual responses prior to the interview to capture any notes and prepare.
  >
  > The Survey & Interview Workflow is illustrated below.

##### Personal pronouns

See also [Us and them](#us-and-them-and-we-you-they-i).

Use personal pronouns where they’re needed. They’re a good way to make prose conversational, put it in the active voice, and avoid “computer-speak.” But for labels, for example, you may be able to avoid them entirely (e.g. instead of My Profile, just call it Profile). Where you use them will likely depend on use cases and their implications.

* I – reserved for user actions where ownership/agency is important. Eg. I agree to the terms of service.
* You – should be the most common personal pronoun. In general, text should talk about users, not Culture Amp.
* We – used where the user is waiting on Culture Amp to do something, or a problem the user is experiencing is our fault. For example, a waiting message that talks about an ongoing process might explain that “we’re” doing something.

##### Please

It’s rarely necessary to say please. Users don’t notice if it’s not there. In the interests of keeping text concise and direct, the preference is to omit it, particularly in interface text.

##### References to interface elements

You may need to refer to elements of the interface in emails, Academy articles and intercom messages.

Make the reference to the label that appears in the interface bold and italicized. Or, in the Academy, red and italicized.

**Note:** _This style is pending designer review._

Describe the interaction as simply as possible: click, drag, select, highlight.

Use the most active and clearest verb you can.

* **Good:** If none of the existing surveys or templates suit your needs, click
  **Create Blank Survey** to make a new one.

* **Good:** Can’t find a survey that suits your need? Click **Create Blank Survey** to make a new one.

* **Needs work:** If no existing surveys and templates really suit what you're looking for, you can make your own survey using the **Create Blank Survey**
  button.

##### Sex

See [Gender](#gender).

##### Sign in/signin

See [Two words or one?](#two-words-or-one)

##### Slashes

In prose, use the word “or” instead of a slash.

Use stops instead of a slash in a contraction (see also [Stops][#stops]).

##### Stops

Stops are used between e.g., p.m., and a.m., and after contractions like Ms., vs. and etc.

They’re not used for capitalized abbreviations like EST, PDT, or NA.

##### Times

For times, use the user’s local time without a time zone if that’s clear and unambiguous. If it’s necessary to distinguish the user’s time zone from others (the most likely scenario), show local time with time zone: `4:00 p.m. (EST)`. For _midnight_/_noon_, use the words instead of awkward timestamps (00:00/12:00 or 12:00 a.m.).

* Use **non-breaking spaces** between the time and the meridiem a.m. or p.m. marker. If possible, use non-breaking spaces between the meridiem a.m. or p.m. marker and time zone as well.
* A **colon** separates hours from minutes.
* **Time ranges use spaced en dashes**, e.g. 8:30 a.m. – 9:45 a.m.
* **Time ranges in a sentence use words to separate them**: Automatically run sync between midnight and 3:00 a.m. (PDT)
  * Note: this is a _window_ of time so the sync could occur at any time within that window. If the sync started at midnight and continued until 3:00 a.m., then it should say “Automatically run sync **from** midnight **to** 3:00 a.m. (PDT).”

##### Two words or one?

If you’re worried about whether words like log in, log out, sign in and sign out are two words or one, they’re both.

The single word login is used as a noun: You need a login. The single word can also be used as an adjective: Rewrite the login CTA. The two-word version is used as a phrasal verb, to talk about the action: You need to log in.

Every day is two words unless you’re using it as an adjective: an everyday action.

##### Us and them (and we, you, they, I)

See also [Personal Pronouns](#personal-pronouns).

_They_ are more important than _we_ are. In other words, always prioritize the reader. Don’t tell them, “we’ve changed this.” Tell them, “now you can do this.”

* **Needs work**: We’ve added some features to make it easy for you to manage 360 surveys at scale.

* **Good**: You can now manage 360 surveys in batches.
