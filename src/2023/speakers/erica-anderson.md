---
firstName: Erica
lastName: Anderson
pronouns: She/Her
jobTitle: COO and Co-Founder
organisation: SafeStack
bio: "<p>
  Erica has played many roles in security: consultant, engineer, tester, analyst, incident responder, and even instructor. She has worked with many people and orgs, and knows what it feels like to try and move fast while staying secure - she even <a rel='external' href='https://www.holloway.com/g/security-for-everyone'>co-authored a book</a> on the topic! 

</p>

<p>
  Erica is the Co-Founder, COO, and generally huge security nerd at SafeStack, where their goal is to help development teams (of all shapes and sizes) build secure things. She also does heaps of work in the community too. She is a lead organiser for a New Zealand infosec conference called <a rel='external' href='https://kawaiicon.org/'>Kawaiicon (Kiwicon)</a>, and also a Trustee for a charity called <a rel='external' href='https://www.digitalfutureaotearoa.nz/'>Digital Future Aotearoa</a>. She also wrote a book about it called ‘Security For Everyone’, published by Holloway.

</p>"
profileUrl:
  [
    {
      "name": "LinkedIn",
      "url": "https://www.linkedin.com/in/erica-anderson-sputnik/",
      "icon": "linkedin",
    },
  ]
profilePhoto: /assets/images/speakers/erica_anderson.jpg
profilePhotoAltText: A portrait of Erica; a smiling woman in her thirties with brown hair and a pale skin tone.
talkTitle: Including security in your engineering culture
talkExcerpt: How security is actually something all of us can do as part of the discipline we bring to our teams.
talkStartTime: 2023-07-07T14:30:00.000+12:00
talkEndTime: 2023-07-07T15:00:00.000+12:00
featuredImage: /assets/images/speakers/erica_anderson_og.png
featuredImageAlt: "Light high contrast text on top of a darkened image of a crowd reads “Including security in your engineering culture by Erica Anderson, COO and Co-Founder of SafeStack. Join us to hear Erica and other speakers at NZ Tech Rally, 7th July, Wellington”
Erica's portrait shows a smiling woman in her thirties with brown hair and a pale skin tone."
featuredImageType: image/png
featuredImageWidth: 1200
featuredImageHeight: 630
talkRecordingID: wKP5LIVzZks
---

{% layoutblock 'talkAbout' %}

<p>
  Cybersecurity has a rough reputation. It is often portrayed as an unattainable, sci-fi type skill, reserved only for hackers or people in The Matrix. Or worse, something only large organisations with big budgets and dedicated security teams can handle.
</p>

<p>
  In this talk, we will talk about how security is actually something all of us can do as part of the discipline we bring to our teams - no Keanu Reeves required.
</p>
{% endlayoutblock %}

{% layoutblock 'bio' %}
{{ bio | safe }}
{% endlayoutblock %}

{% layoutblock 'talkReferences' %}

<ul>
  <li><a rel="external" href="https://en.wikipedia.org/wiki/The_Matrix">The Matrix</a></li>
  <li><a rel="external" href="https://en.wikipedia.org/wiki/Trinity_(The_Matrix)">Trinity (The Matrix)</a></li>
  <li><a rel="external" href="https://www.cert.govt.nz/">CERT New Zealand</a></li>
  <li><a rel="external" href="https://github.com/">GitHub</a></li>
  <li><a rel="external" href="https://about.gitlab.com/">GitLab</a></li>
  <li><a rel="external" href="https://www.datadoghq.com/">Datadog</a></li>
  <li><a rel="external" href="https://owasp.org/www-community/Threat_Modeling">Threat Modeling</a></li>
  <li><a rel="external" href="https://en.wikipedia.org/wiki/STRIDE_(security)">Microsoft STRIDE</a></li>
<ul>
{% endlayoutblock %}

{% layoutblock 'talkTranscript' %}

<p>
  <strong>Prae:</strong>
</p>

<p>
  Next up, we have someone who is a self-proclaimed security nerd.
</p>

<p>
  She has written books.
</p>

<p>
  She has also organized or is a lead organizer of Kawaiicon.
</p>

<p>
  She has done heaps of community stuff and she is also a co-founder of a security education software company called SafeStack.
</p>

<p>
  Please welcome the co-founder and COO of SafeStack, Erica Anderson!
</p>

<p>
    <strong>Erica:</strong>
</p>

<p>
  Hello good afternoon everyone.
</p>

<p>
  Just out of curiosity, we've had some really brilliant talks and I feel like everything's been set up perfectly for me to come nerd out about security with you all.
</p>

<p>
  Would really be interested for those of you out in the audience, who here feels that cyber security or security is part of what your team does?
</p>

<p>
  Raise your hands.
</p>

<p>
  Oh there's so many more hands than last time I asked this question.
</p>

<p>
  This is really exciting.
</p>

<p>
  Who out there is interested in security and would love to find maybe ways that you can build things that are a bit more secure; who cares about security?
</p>

<p>
  Okay, so most of the hands which is really good.
</p>

<p>
  So, it's really nice to be here.
</p>

<p>
  As Prae mentioned, I'm a huge security nerd and I probably have seen you all throughout various different points of the software or security community.
</p>

<p>
  My name is Erica.
</p>

<p>
  I'm the co-founder and COO of SafeStack and that's what we do: we talk about security and we try and teach software development teams - everyone on the development team, not just the engineers and developers - what they can do about security.
</p>

<p>
  And really when you think about security, the very first thing you think about is probably this perception in your head of what someone in security looks like.
</p>

<p>
  And it's got a pretty rough reputation.
</p>

<p>
  I mean as someone in the security community, I definitely know that some of my peers have their challenges, I guess.
</p>

<p>
  And when you think about it, the very first thing that a lot of us, without having any work experience working with security, the very first thing you think of is some type of sci-fi-type movie where there's an underground community of nerds and weirdos who are out there to stop some lethal malware from taking over the world, silently, without anyone knowing.
</p>

<p>
  And as a con organiser myself, and as a member of the security community, I am a self-proclaimed nerd and weirdo, so I accept this perception that comes with it.
</p>

<p>
  But that's not exactly what security is all about.
</p>

<p>
  But to be honest, who didn't grow up watching <a rel="external" href="https://en.wikipedia.org/wiki/The_Matrix">The Matrix</a> and idolising <a rel="external" href="https://en.wikipedia.org/wiki/Trinity_(The_Matrix)">Trinity</a> and her cyber rain and all of the trench coats and what-not, but that is the first thing that you think about when you think about security.
</p>

<p>
  Those of us who have worked experience - I know definitely from some of the questions that were asked earlier is that security feels a little bit like a gatekeeper, right?
</p>

<p>
  There's a really good question earlier about, "How can our teams get involved in stuff like this?"
</p>

<p>
  "How can our teams maybe interact better with security?"
</p>

<p>
  And my ears pricked up and I was intently listening because a lot of us have the experience of it's that gate that you must pass.
</p>

<p>
  And a lot of the times it's kind of the team - I mean, I've worked in many places across New Zealand where it was seen as the "Department of No."
</p>

<p>
  And there's a long queue of people coming to ask for permission from security only to get a really difficult response.
</p>

<p>
  Or interacting with them in a way that made them feel like they couldn't have the choice or didn't have the freedom to be able to do the good security thing on their behalf without asking for permission.
</p>

<p>
  So, overall, putting aside the whole sci-fi cyberpunk aesthetic and vibe that you get from security, overall, it's a bit rough.
</p>

<p>
  But it's been getting better.
</p>

<p>
  I do genuinely believe that and I try to push to try and encourage everyone to feel that security can be part of building awesome things and building amazing things.
</p>

<p>
  For those of you who are in organisations of various shapes and sizes, one of the common perceptions that I have come across is that no matter which end of the spectrum you're on, you feel that maybe now is not the time to think about security.
</p>

<p>
  When you're on a small team, at a small startup, you probably feel like,
</p>

<p>
  "Security's too sophisticated"<br>
"We're too small"<br>
"It's too expensive for us to get started"
</p>

<p>
  And as time goes on and as that business grows, on the other end of the spectrum when you're working for some larger, perhaps global organisations, the too expensive probably gets even more expensive, but it starts to feel,
</p>

<p>
  "We can't do it because it's too restrictive"<br>
"It's going to slow us down"<br>
"We're not going to be able to provide the best features or provide those experiences that we need to provide"<br>
"It's too slow"<br>
"It's too hard"
</p>

<p>
  And no matter where you look at the spectrum of the size of the organisation, there's always going to be that really good excuse for why security might not be a good time.
</p>

<p>
  And there's reasons and context behind those reasons that are really mindful to keep in mind.
</p>

<p>
  Security isn't a simple thing that you can purchase off of a shelf no matter how vendors might [inaudible]...it's something that really changes based off of the context of the systems that you're building or the teams that you're working in.
</p>

<p>
  So, when you're a part of a small team or a small startup, you've got small teams, you've got quick releases, you've got limited complexity, because maybe you've just built your MVP, and you're living in this green fields of opportunity.
</p>

<p>
  And on the other side of the equation, when you're working for large organisations, you have some of those legacy monolithic systems that can be hard to update and apply security fixes for something that's recently been released or recently been fixed.
</p>

<p>
  You've got something like these big niche teams, that kind of maybe don't communicate as well. They're slower releases; there's higher complexity.
</p>

<p>
  So, it's definitely different types of security challenges depending on where your organisation is at.
</p>

<p>
  Now, one of the things from my experience of working with organisations, literally from one end of the spectrum of a team of one, all the way through to massive global teams, both as an external consultant and also an internal security engineer, is that it's something when you don't start thinking about it and start embedding it in what you do early on, it becomes a bit of a stormy cloud.
</p>

<p>
  When you're quite small and you're moving quite fast, you're very quickly going to be growing, you're going to be having to take on customers who give you their data - their valuable data - to run your product or run your system, and that data to them is really valuable.
</p>

<p>
  But it's also protected per different types of legislation or regulation.
</p>

<p>
  And very quickly what happens when you start emerging from a small little team as a startup into something that has a pretty sizable book of business, is that you're going to have to start telling your customers what you do for security.
</p>

<p>
  There's an expectation that you're going to start, although you are a small maybe scrappy team and a small product, they still expect that their data is going to be respected, their data is going to be kept secure, and that expectation starts to compound as you make your way through.
</p>

<p>
  You might move into - you might start offering your software into locations that have rules and regulations that are different from where you currently operate from.
</p>

<p>
  You start to build and build your software even bigger, and you start to grow what we call the attack surface, which is the surface of what people can poke and prod to try and do something bad, and that will start to get bigger the bigger your software gets.
</p>

<p>
  And ultimately you get at the other end of the spectrum where you're in a really big organization with a really, really big software footprint, and there's so much software in use, and we all know that software needs to be updated, and can you imagine trying to roll out a patching process in a global organization that has hundreds and hundreds of different types of software?
</p>

<p>
  It'd be massive and be really quite challenging.
</p>

<p>
  And what we've spoken about all day today is that really all of these disciplines and all of these things that we're talking about, whether or not it's security or it's culture or it's anything else, it's not a matter of just switching it on, right?
</p>

<p>
  You can't just turn on one DevOps and then on you go, and it's the same thing goes for security.
</p>

<p>
  It's something that is something that we start to practise, which is why I'm so, so excited to be listening to some of these talks, because it's very much the same thing.
</p>

<p>
  Security isn't really something that's reserved for just a certain type of nerd or a certain person who has a skill set to be able to hack something or break into something.
</p>

<p>
  Security is something that all of us can build as part of our practice, and it's something that definitely something that Adam touched upon, is something that was touched upon in the panel was that: think about your sphere of influence.
</p>

<p>
  There's definitely stuff that everyone here, within your own teams, no matter how big your organization, that you can have a positive influence to build a better security culture.
</p>

<p>
  Is it going to change the entire organization?
</p>

<p>
  Probably not.
</p>

<p>
  But it probably means that the stuff that your team ships and the stuff that you push out is going to be more secure, and your customers who use that particular feature or that particular service will be a little bit happier, and that stuff starts to snowball.
</p>

<p>
  That becomes something that other teams can copy.
</p>

<p>
  They can look to you for a bit of influence and inspiration and perhaps copy it for their team.
</p>

<p>
  Now, no doubt, yes, a lot of your large organizations will have security teams, and it's always important to definitely bring them along with you, but there's nothing to stop you, and there's a bunch of small things that I've seen that have been really, really successful that I wanted to share with you all as ideas for things that you could do to build that security culture in your teams.
</p>

<p>
  Now none of these are perfect, but it's just some examples of some of the things that I've seen be successful in its small little pockets in small little communities.
</p>

<p>
  So, the very first one is starting with a team that you have.
</p>

<p>
  Some of you might work for small teams who don't have a security person on your team.
</p>

<p>
  Your security person might be Google, and you might Google things and check things or ask people on Discord or Slack channels and whatnot for how they might have done something around security, or how they responded to that report that came into the security@ inbox asking about a particular bug that they might have found in your products.
</p>

<p>
  How do I respond to that, right?
</p>

<p>
  So, you don't have to have a security team or a specific person to help do it to help start doing anything about security.
</p>

<p>
  You can definitely start within the team that you have.
</p>

<p>
  I'll let you in on a bit of a secret.
</p>

<p>
  I have been in security teams.
</p>

<p>
  I've been a security engineer and I've been an analyst and I've been a consultant, and people have brought me in to help point out the security risk of their systems.
</p>

<p>
  There is no magic to that.
</p>

<p>
  Literally most of those conversations start with the other person who actually built the system talking to me about how it's built and all of that context and all of that information: What data is collected?
</p>

<p>
  Why do we collect it?
</p>

<p>
  Where does it go?
</p>

<p>
  How do we make those decisions?
</p>

<p>
  All of that context is so, so, so fundamental, and actually that's the secret to identifying the security stuff.
</p>

<p>
  It's not having me, someone who has a security background, it's just a matter of talking through how those things were built and understanding how we made those decisions and what inherent security decisions we made from that.
</p>

<p>
  So really, you all as the builders and the development teams, you all have the superpower to answer most of those questions.
</p>

<p>
  So definitely starting thinking about it and starting with the team that you have.
</p>

<p>
  And as part of starting with that, something that you could do is just understanding your customers and  and understanding your industry.
</p>

<p>
  A lot of you obviously wouldn't have created the organisations that you work for, but there's a lot of decisions around: Why is it that we provide this product?
</p>

<p>
  What is some of the thinking behind it?
</p>

<p>
  What are some of the early decisions that we've made?
</p>

<p>
  Why did we go for this particular type of tech stack versus this?
</p>

<p>
  Understanding those things can really give you a good amount of context to help make it better and make it more secure.
</p>

<p>
  So starting there and really knowing your industry, knowing your customers is a really, really good first start.
</p>

<p>
  And then of course, knowing your system.
</p>

<p>
  Especially if you're new to a team, sitting down at the team and really understanding.
</p>

<p>
  Me personally, I'm a very visual person.
</p>

<p>
  I like to get out with a whiteboard and a couple of markers and just draw it out and understanding exactly,
</p>

<p>
  Where do our users interact with our system?
</p>

<p>
  Where do they do really important things like authenticating, and proving who they are?
</p>

<p>
  Where do we take their data?
</p>

<p>
  Where do we put that data?
</p>

<p>
  Where do we even process that data?
</p>

<p>
  All of that stuff is knowledge within your teams and that really helps drive a lot of the security stuff that you can do.
</p>

<p>
  So very, very early on starting with the team that you have, and then from there, starting with the tools that you have.
</p>

<p>
  I've worked for quite a few New Zealand's large organisations, quite a few that we've talked about today, and unfortunately a lot of the things that I would have come across is so many people within the organisations trying to push for a particular product or particular thing, and "this is going to be the surefire thing that's going to solve our security problems," and we get so preoccupied with trying to figure out how to purchase and embed these big tools that we forget a lot about the tools that we do have.
</p>

<p>
  So my next piece of advice is: think about the tools that you use to build your software, build your products, thinking about where is your source code actually hosted, thinking about the infrastructure that it runs on.
</p>

<p>
  You've got a plethora of probably SAAS tools and build tools that you use and starting out with just the basics of protecting those accounts.
</p>

<p>
  It comes down to some of those basic security advice that we hear from the likes of <a rel="external" href="https://www.cert.govt.nz/">CERT New Zealand</a> or other organisations around multi-factor authentication.
</p>

<p>
  If those things have software that you can update, keeping them updated.
</p>

<p>
  But really, thinking about the stuff that's within your realm of influence to protect, rather than having to think about whether or not we need a particular type of software product or thing to solve those things.
</p>

<p>
  Really a lot of the incidents that I've personally been involved in back when I was part of CERT New Zealand, the country's incident response team, a lot of them honestly come back to some of the securing, some of the support tools that are around the edges rather than the actual more complex attacks that you might see.
</p>

<p>
  So definitely starting with securing the tools that you have.
</p>

<p>
  The next couple I wanted to chat through are things that I think anyone here could relate to whether or not some of these things might be within your realm of influence.
</p>

<p>
  It probably depends on the role that you play or the team that you're part of, but every single thing across what a development team might do has some element of how you can do that securely, and often with those things you don't necessarily need to buy a widget or buy a tool or perhaps need really expensive consultants to come in and tell you what to do.
</p>

<p>
  There's small things that can really cover that foundational level.
</p>

<p>
  The very first one is configuring and deploying infrastructure.
</p>

<p>
  So this is something that a lot of us understand: the concept of shared responsibility.
</p>

<p>
  Just because you know you're using an as-a-service model doesn't mean that security is instantly no longer your problem.
</p>

<p>
  So shared responsibility.
</p>

<p>
  At the end of the day there's lots of configurations and things that you can do as part of your building to make sure that your spot is covered.
</p>

<p>
  Now can that vendor still have a bad day and cause you to have a bad day?
</p>

<p>
  Yes, that is also part of the shared responsibility, but what I'm saying here is that it's important to think about the tools that you use and what you can do to make that more secure.
</p>

<p>
  And the key to this is: chances are with the tools that you use with a really simple search online finding what they call security hardening guidelines and those are things where they say, 'Hey, here are some of the configurations that are most important when it comes to security.'
</p>

<p>
  And this is stuff within the stuff that you build have the ability to control.
</p>

<p>
  So that could be, for example, if you're standing up a whole bunch of servers within AWS, there's a few key configurations that you can make sure that is part of your cloud formation that those things are automatically configured so you don't have to think about it each time.
</p>

<p>
  That also, pro-tip, will save you from getting a phone call probably, if you do have a security team, later on because something might have been exposed to the internet unknowingly.
</p>

<p>
  So by building those things up front, you're doing your bit to make sure that the tools and the things that you use are built secure from the start, and the key word to that is: "security hardening guidelines".
</p>

<p>
  The next one is if you're in the realm of testing or if you help out with the testing practice within your teams, security testing - although yes it's very cool;
</p>

<p>
  you've got penetration testers and they do all these really cool red team things and they're really, really neat and the talks are really cool - all of the stuff that they do is is totally accessible to other people as well.
</p>

<p>
  A lot of the build tools that we use nowadays or the source code repos where we store our stuff nowadays has a lot of this tooling actually built in.
</p>

<p>
  If your stuff is hosted in <a rel="external" href="https://github.com/">GitHub</a> or <a rel="external" href="https://about.gitlab.com/">GitLab</a> and they've got a whole bunch of built-in integrated tools that will do your vulnerability scanning for you, it will go through and scan for common vulnerabilities within the code that you have.
</p>

<p>
  So my biggest advice here is use built-in tools in the stuff that you already have.
</p>

<p>
  Just the same as you might build test cases for how your users are meant to use a particular feature, you can always inverse that and think about the bad use cases.
</p>

<p>
  So for example if we're trying to build some changes into how people authenticate with our service well think about the reverse.
</p>

<p>
  You obviously want someone to be able to log into your system and enter in
their username and password and hopefully be prompted for a second factor of authentication
but what about the reverse?
</p>

<p>
  What if someone was able to throw a whole bunch of garbage credential information that they found online
on the internet to see if anything works?
</p>

<p>
  At what point are we going to stop that from happening?
</p>

<p>
  How might we know that that's happening?
</p>

<p>
  And just trying to reverse some of those positive use cases for negative use cases.
</p>

<p>
  Now, does that mean that you do that for every single time you do testing? Probably not. But probably the most important ones which is usually around when you're getting into authentication or getting into accepting input from people.
</p>

<p>
  So that's just something small that you can start incorporating when you're building out some of your test cases.
</p>

<p>
  The next one is: A lot of you will build in a certain layer of logging as part of the systems that you're building because you want to be able to tell when your system or application might be having a bad day or to be able to troubleshoot something that happens later.
</p>

<p>
  Can I highly recommend that as part of some of those things that you're building in to consider some of your "oh crud" moments.
</p>

<p>
  You know and there's some really key moments that you can build into those logs that you ship to that dashboard or to your <a rel="external" href="https://www.datadoghq.com/">Datadog</a> server or whatever you might use.
</p>

<p>
  A lot of these things have a security benefit but also a performance benefit too which is a double win.
</p>

<p>
  Knowing when your server has been constantly restarting or shutting down.
</p>

<p>
  That's a bit of a red flag that someone is messing with our servers and causing it to do things that it shouldn't be doing.
</p>

<p>
  Definitely authenticating to your server is usually the first big red flag from a security perspective, but it's also something that is helpful from a usability perspective as well.
</p>

<p>
  And then, of course, when these configurations change, if someone's turned off logging, not only is that like turning off your visibility of being able to maintain your platform but also it's a really big concern from a security perspective because someone's trying to cover their tracks.
</p>

<p>
  So these are, again, when your teams are at that point it's just a matter of starting to think about what is that one small additional thing that I can think about to make sure that what we're building is not just resilient and this thing and we're not just able to maintain it but we can maintain the security of that as well.
</p>

<p>
  <a rel="external" href="https://owasp.org/www-community/Threat_Modeling">Threat Modelling</a> is something that Jade mentioned earlier and I was sitting in the chair in the back of my ears just kind of like perked up and I got really, really excited, as I tend to do when I hear the word threat modelling.
</p>

<p>
  I'm a really big fan, a huge security nerd, but this is something that again 100% I'm a firm believer that the power of having a conversation and performing what they call a threat model - which is basically looking at a feature or looking at part of a system or a whole system which is pretty massive but trying to think about looking here are our biggest security problems where is our biggest risk - and the magic about running these sessions is that again I can facilitate that.
</p>

<p>
  Jade mentioned that, yes of course you can go out and ask your security team to come and run the session for you, but honestly I just be asking questions because I have none of the answers and there's so many frameworks and models out there that you can run through because all of the knowledge and all of the power lays in the team.
</p>

<p>
  So getting the whole team together, collecting together that knowledge and that context and be able to talk through it and run through it together is so powerful because what it starts to pull apart and identify is that we might have inherently made a decision to, for example, expose something to the internet that didn't need to be exposed.
</p>

<p>
  Well, did you know putting anything on the Internet is just usually not a good time if you don't need it to be there? So that's a decision you can call out right away because, guarantee you, usually re-engineering something to that degree is really, really painful afterwards.
</p>

<p>
  But all it starts with is a question on a whiteboard and talking through and asking a few questions.
</p>

<p>
  Now, if threat modelling is something that you're like, "oh, this is really interesting; we're working on something right now; maybe this is something worth trying," there's a bunch of frameworks out there.
</p>

<p>
  <a rel="external" href="https://en.wikipedia.org/wiki/STRIDE_(security)">Microsoft STRIDE</a> is one that's been around for ages and they tend to have a lot of pre-canned questions and a whole bunch of stuff that the community has made online to make it much more accessible.
</p>

<p>
  So highly recommend doing that for things that maybe feel really important.
</p>

<p>
  Again, just like everything else is it something that you should do every single time, or set a cadence of doing it once per month? No, because frankly you probably have enough on your plates that you don't need to add on additional types of processes like that, but what I'm saying here is that when you have a really big project or maybe a really big integration with another system or maybe you're working on something that is quite high risk, that is a perfect opportunity to sit down and run through an experiment like that.
</p>

<p>
  And then the last thing that I've seen be really successful in trying to just do your little part for security, is for those of you who are perhaps that person who can influence others on the team.
</p>

<p>
  Whether or not you're the leader or you're the most senior person on the development team who has the most amount of knowledge.
</p>

<p>
  But it all comes with again the same thing that all of us have been drumming on each morning it comes from that culture aspect: it comes from the small things that you do and that you practice as a team that really has that start to form about part of what your team is about.
</p>

<p>
  Now there's a million and one different things that you could do and again it depends down to the type of team that you have.
</p>

<p>
  Maybe you have a development team that is all of you are particularly interested and very nerdy about understanding and nitpicking about various different aspects of technology and how things are built.
</p>

<p>
  Well, probably setting up some time where once a fortnight after your retro you have a bit of a discussion around breaking down some recent vulnerabilities, how did they happen, how did those things come to be, is that something that we should think about, what is there something from this that we could learn from, or how can we look at the response of how the organization responded to it and how that team responded, and reflect on those and embed them into what we do. So that could be something that works if that's something that interests your team.
</p>

<p>
  They could also be from the aspect of talking about mistakes that were made because ultimately, at the end of the day, security and vulnerabilities are really terrible things to talk about because security is really all about, you know, keeping your data or your users feeling like their data is safe.
</p>

<p>
  And usually, security happens when that trust has been broken, you know, their data has been lost, their accounts have been compromised, in some cases perhaps that impacts people from the money that they've lost, or the perception or the reputation they have, and ultimately, talking about that stuff can really feel terrible.
</p>

<p>
  For those of you who maybe live or work in organisations that have that really positive, blameless kind of post-mortem review of your incidents, this is exactly something that you can incorporate that security element.
</p>

<p>
  You might have pushed out something that opened up a vulnerability and caused you to have a security incident and not a bad time, well taking this back into your team and talking about the decisions that we made and the mistakes that we made but how we can change them going forward and opening up and being a little bit vulnerable within your team so that you can make better decisions.
</p>

<p>
  So that's another way to build it up.
</p>

<p>
  So many times within the organisations I've helped, I've heard teams say
</p>

<p>
  "Oh, I was so stupid to do this" and<br>
"I can't believe this person did that"

</p>

<p>
  and that has no place in security because shaming people, and making people feel bad for the decisions that they've done is a negative security culture, and then nobody wants to participate.
</p>

<p>
  So that could be something that your teams might find helpful.
</p>

<p>
  Something as well as sharing the load.
</p>

<p>
  Those of you who are the more senior person on your teams or perhaps do you feel that security is part of what you do, one would guess that maybe in the past people would just pass you the security tickets that come into your queue or "security wants to have a chat go talk to this particular person" and all of that work comes back to one person.
</p>

<p>
  And what I encourage is to share the load.
</p>

<p>
  Especially if you are the most senior person to tackle that ticket, sure, you might lead on it, but you might take someone else new along with you to really understand:
</p>

<p>
  How did you troubleshoot that?<br>
How did you dig into that?<br>
How did you fix it?
</p>

<p>
  Because if everyone learns a little bit and understands what their realm of influence is, they might feel empowered to then take on the next one.
</p>

<p>
  So sharing the load with other people just means that it's not going to be just your job.
</p>

<p>
  That it's a shared culture amongst the team.
</p>

<p>
  And ultimately, it all comes down to just what everyone else has been saying: it's the culture change and the mind shift change that we can all do as part of our day-to-day jobs.
</p>

<p>
  And it doesn't mean that it's going to have an overarching effect outside of your team instantly, but it does mean that the stuff that your team push out is probably a little bit more secure and ultimately kind of changing that culture and doing that little bit now will hopefully prepare you a little bit better for managing the Cyber Rain in the future.
</p>

<p>
  Thank you!
</p>

{% endlayoutblock %}
