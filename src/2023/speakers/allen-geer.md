---
firstName: Allen
lastName: Geer
pronouns: He/Him
jobTitle: Cloud Platforms and Engineering Practice Lead
organisation: Provoke
bio: "<p>For the last 6 years he has been helping New Zealand organisations modernise business processes and applications leveraging DevOps practices as well as public cloud platforms.</p>

<p>Prior to moving to New Zealand, Allen worked as a consultant and software engineer at several Fortune 500 enterprises across the United States.</p>

<p>Allen has been involved with startups, multinational banks, and governments and has seen DevOps and software development practices implemented to varying degrees at many different scales.</p>"
profileUrl: [{
  "name": "LinkedIn",
  "url" : "https://www.linkedin.com/in/allengeer/",
  "icon": "linkedin"
},{
  "name": "Github",
  "url" : "https://github.com/allengeer",
  "icon": "github"
}]
profilePhoto: /assets/images/speakers/allen_geer.jpg
profilePhotoAltText: Allen's portrait. A bearded man with a big smile, wearing a white shirt, in a headshot.
talkTitle: One DevOps does not git all
talkExcerpt: How DevOps Seeds different cultural practices in small and large Kiwi Organisations
talkStartTime: 2023-07-07T10:00:00.000+12:00
talkEndTime: 2023-07-07T10:30:00.000+12:00
featuredImage: /assets/images/speakers/allen_geer_og.png
featuredImageAlt: "One DevOps does not git all by Allen Geer, Cloud Platforms and Engineering Practice Lead at Provoke. Join us to hear Allen and other speakers at NZ Tech Rally, 7th July, Wellington"
featuredImageType: image/png
featuredImageWidth: 1200
featuredImageHeight: 630
talkRecordingID: hdG9T60tbLI
---

{% layoutblock 'talkAbout' %}

<p>New Zealand organisations use DevOps practices and culture in different ways.</p>

<p>In this talk, we will investigate how different sizes and scale organisations are using DevOps technical and cultural practices to drive different outcomes.</p>

<p>We will investigate how in large enterprises, DevOps is more about assurance and safety, whereas, in resource-constrained startups, DevOps is about speed and learning.</p>
{% endlayoutblock %}

{% layoutblock 'bio' %}
{{ bio | safe }}
{% endlayoutblock %}

{% layoutblock 'talkReferences' %}

<ul>
  <li><a rel="external" href="https://git-scm.com/">Git</a></li>
  <li><a rel="external" href="https://chat.openai.com/">Chat GPT</a></li>
  <li><a rel="external" href="https://openai.com/research/dall-e">DALL·E by OpenAI</a></li>
  <li><a rel="external" href="https://kubernetes.io/">Kubernetes</a></li>
  <li><a rel="external" href="https://www.jedi.be/">Patrick Dubois</a></li>
  <li><a rel="external" href="http://stochasticresonance.wordpress.com/">Andrew Shafer</a></li>
  <li><a rel="external" href="https://en.wikipedia.org/wiki/Commercial_off-the-shelf">COTS (Commercial off-the-shelf)</a></li>
  <li><a rel="external" href="https://pokemongolive.com/">Pokémon GO</a></li>
  <li><a rel="external" href="https://www.ird.govt.nz/">IRD (Inland Revenue Department)</a></li>
  <li><a rel="external" href="https://assurity.nz/wp-content/uploads/2021/07/Inland-Revenue-Digital-Partner-Services-case-study.pdf">IRD tax system roll-out</a></li>
  <li><a rel="external" href="https://en.wikipedia.org/wiki/Eye_of_Sauron_(disambiguation)">Eye of Sauron</a></li>
</ul>
{% endlayoutblock %}

{% layoutblock 'talkTranscript' %}

<p>
  <strong>Prae:</strong>
</p>
<p>
  Now that we have examined the Kiwi flavor of good software engineering or at least what a lot of us believe is the way, we are going to be looking at another aspect that is an integral part of building...anything...well building software anyway, and that is DevOps.
</p>
<p>
  When we were looking for a DevOps speaker, our next speaker came at the top of Aaron's list
</p>
<p>
  We were like "Fine Aaron, if you feel so strongly about this person we're going to meet this person and we're going to get through it." We met him and decided, yep, in that first meeting we're definitely getting him on board, and so here he is.
</p>
<p>
  I will let him introduce himself but please welcome Allen Geer, the cloud platforms engineering practice lead at Provoke.
</p>
<p>
  Allen: Welcome to New Zealand Tech Rally this is pretty exciting...first conference. I just finished my degree here at Vic Uni and there is pretty much one guarantee in the world and that's if you've got to be here in this classroom on a Friday or Saturday it will be incredibly sunny outside and it will be really really quite nice which begs the question,
</p>
<p>
  "How do these plants stay green?"
</p>
<p>
  Today I want to talk to you about my experiences over the last seven years with DevOps here in New Zealand and when we go through this discussion I'm going to echo a lot of the things that Katrina has aptly put because my experiences kind of span the gamut if you will.
</p>
<p>
  The talk is called One DevOps does not Git All and there's a pun there. Anybody identify the pun?
</p>
<p>
  The pun is "Git".
</p>
<p>
  Now, some of you might think that's because I might be a cantankerous old man but actually it's about versions, right?
</p>
<p>
  <a rel="external" href="https://git-scm.com/">Git</a> is a Version Control System and we have different versions of how organisations implement DevOps. Some of you might be looking at that picture going
</p>
<p>
  "What is going on here?"<br>
  "This is incredibly strange."
</p>
<p>
  For this talk I'm going to do a little experiment because like most people, today, I find myself constantly asking, "What does <a rel="external" href="https://chat.openai.com/">Chat GPT</a> think?" and so all of the imagery that you see today is artificially generated and it's generated through stable diffusion algorithms.
</p>
<p>
  I think these things are really quite fascinating because they interpret our language and so one of the really quite fascinating things that I discovered is any time that I prompt with the word "DevOps," I get a middle-aged bearded man almost universally.
</p>
<p>
  And it's really quite profound.
</p>
<p>
  I'll tell you a story about a time where at Assurity when the boss grew a beard and we're like "Oh! The DevOps team is now whole again!" so you know, One DevOps does not Git All.
</p>
<p>
  This is what <a rel="external" href="https://openai.com/research/dall-e">DALL·E</a> thinks: "DONT GOTS MS DIGOTIONS" so if you're not all a little bit weirder after this experience, I haven't done my job.
</p>
<p>
  I'm gonna move to the next slide.
</p>
<h4>Differences in scale between New Zealand and USA </h4>
<p>
  You might have surmised that I ain't from around here. I am from Texas.
</p>
<p>
  Anybody been to Texas? All right! Love it, love it.
</p>
<p>
  "A pop art slide of a portly American with a knapsack trotting across the globe from Texas to New Zealand."
</p>
<p>
  Quite an apt photo, I think. Three chins...
</p>
<p>
  Seven years ago the city of Wellington did this contest and they said, "Submit your resumes and we're going to invite 100 people over for a free trip to New Zealand" and so I like most people were like yeah I like a free trip to New Zealand that seems like a great idea, and the only caveat was you had to apply for jobs.
</p>
<p>
  So 46,000 people applied and somehow, through some profound amount of luck, I got selected to come over on this free trip to New Zealand and interview for jobs. I interviewed for three jobs went home and didn't hear anything back.
</p>
<p>
  Now, one of those jobs I interviewed for was with one of our sponsors, which is Assurity. Now, I wrote this talk before I knew Assurity was a sponsor so so this talk might seem really quite like a vendor pitch almost, but I no longer work for Assurity, but Assurity, I know you're in the room; If you'd like me to give this talk, I will give it for a small fee.
</p>
<p>
  I was doing DevOps in the United States and doing DevOps for United-States-sized businesses: American Express, Fox News, really big companies that have a lot of resources and a lot of people.
</p>
<p>
  That's a completely it's like wildly different than what I experienced in New Zealand wildly different the scope and the scale of the DevOps problems here in New Zealand are significantly smaller we are dealing with much much smaller systems and much much smaller people, right?
</p>
<p>
  Eeer...not shorter... that didn't come out right!
</p>
<p>
  The number of people is less right? You just don't have as many folks to actually work on these systems, so quite a significant difference. Assurity got me into a lot of different places that were attempting to implement DevOps in a variety of different ways - move to some different organisations - and so I got quite a bit of experience. Probably about 15 different organisations here in New Zealand working in the DevOps space.
</p>
<p>
  The first thing when we talk about "What is DevOps in New Zealand?"
</p>
<p>
  I think we've got to first look at — go ahead, yeah, middle-age male beards right — but I didn't put DevOps in this one — um so um I've lost my train of thought...
</p>
<h4>What is DevOps?</h4>
<p>
  "What is DevOps right?"
</p>
<p>
  There are so many different definitions of this concept
</p>
<p>
  "Is it continuous integration?"<br>
  "Is it continuous testing?"<br>
  "Is it continuous delivery?"<br>
  "Is it Kubernetes? Surely it's Kubernetes, right?"
</p>
<p>
  We've all heard that word it's got to be that.
</p>
<p>
  Lots of middle-aged men are telling us about it. It must be that's what DevOps is right?
</p>
<p>
  There's just so many different perspectives and different interpretations of this word. So like any logical system, we decided to make that a job description!
</p>
<p>
  Then we made it a team description.
</p>
<p>
  We had DevOps engineers, DevOps Architects, DevOps teams, DevOps practices, DevOps service lines.
</p>
<p>
  The truth of the matter is that the word doesn't mean anything.
</p>
<p>
  The word is this projection of our interpretation of the word and our interpretation of the word really depends on our experience through media and through our social interactions.
</p>
<p>
  It really is quite meaningless and so to give somebody a job description, "you're now a DevOps engineer," there's no telling what they're going to do there's absolutely no telling what reality is going to happen.
</p>
<p>
  The truth of the matter is DevOps started as this idea that — and this is back in 2006 — you had development teams who wrote code, and then you had operations teams who operated that code in production.
</p>
<p>
  Development teams wanted to push that code out so they want change and the operation teams were like "No no no, too much risk! We're going to slow things down."
</p>
<p>
  So there's this tension between new features and stability.
</p>
<p>
  There was this guy, <a rel="external" href="https://www.jedi.be/">Patrick Dubois</a>, also known as The Godfather of DevOps, and a guy named <a rel="external" href="http://stochasticresonance.wordpress.com/">Andrew Shafer</a> who's the CTO of Pivotal, which is another big U.S company platform type thing.
</p>
<p>
  They decided, "We're going to do a talk or a little conference thing called #DevOps," and so DevOps quite literally is a hashtag.
</p>
<p>
  We now have job descriptions named after a hashtag!
</p>
<p>
  (That's the hashtag symbol. I've just learnt that.)
</p>
<p>
  So what we see with people implementing DevOps, is really just a projection of the context of the organisation.
</p>
<p>
  That's, I think, probably one of the biggest insights that I've had from experiencing it in New Zealand, and particularly a lot of different organisations in New Zealand, is what you see when teams Implement DevOps is really the projection of the context of the organisation which they operate.
</p>
<p>
  So with that, we're going to go through four different stories of four different kinds of classes of organisations that I have experienced here in New Zealand and see what we can conclude about great engineering culture from those experiences.
</p>
<h4>Story 1 - Where DevOps is a bad word</h4>
<p>
  The first story is, so sitting down with an organisation — (This is one that generates anime images and so now every time you see anime it can all be computed which is quite fascinating right? Anyways...) — so sent out with this organisation and They're like "Oh, we've got to release this new bit of software and it's going to be so risky, and it's going to be so hard."
</p>
<p>
  I'm like, "Oh, do you have any kind of DevOps processes?"
</p>
<p>
  They go, "No. DevOps is a bad word."
</p>
<p>
  But I'm like, "Okay, that's a strange way to respond to something."
</p>
<p>
  This is multiple classes of organisations where the sheer idea of modernizing a software product is a bad word. That's a no-go. So I had to think about that, because to me, everybody should want to improve. They should want to make things safer and less risky.
</p>
<p>
  Why would an organisation think that DevOps is a bad word?
</p>
<p>
  How many people here have worked for Xero at some point, or TradeMe, one of the big darlings? These are not these organisations!
</p>
<p>
  These are older organisations where the software that they're operating is older than 30 years old.
</p>
<p>
  Who here is younger than 30?
</p>
<p>
  Yeah, software that's older than you!
</p>
<p>
  And that's quite fascinating because our entire country operates on systems, some of them are so antiquated that there is no one around that even knows how they work.
</p>
<p>
  There is no testing of this system, the system was built organically over decades and now there's nobody around that actually appreciates or understands how it operates.
</p>
<p>
  So the mere idea of changing that system is a bad word because it's risky.
</p>
<p>
  It's risky.
</p>
<p>
  And what you also find in these organisations is that they are incredibly resource constrained. And when I say resource constrained, I don't mean resource like money or resource like people — (if you ever call resources people, don't do it, people are people) — it's all of these things together. They're very constrained on the talent that they have they're very constrained on the money that they have, so the idea of changing the system?
</p>
<p>
  Bad word, right?
</p>
<p>
  I see a lot of this, particularly in highly regulated entities, where they use <a rel="external" href="https://en.wikipedia.org/wiki/Commercial_off-the-shelf">COTS</a> products that are 'off the shelf'. They were configured many years ago and just touching that product gives a lot of people anxiety.
</p>
<p>
  So in that situation DevOps is a bad word.
</p>
<p>
  One of the things I've come to learn is Novopay. Anybody heard of Novopay?
</p>
<p>
  Apparently this is an old system we're going to modernise the system we're going to pay the teachers and then our esteemed sponsor Assurity is like, "No you shouldn't do that!" and they did it anyway and many teachers got not paid right.
</p>
<p>
  So there's a lot of that Novopay scar tissue when modernizing these kinds of old systems right?
</p>
<p>
  I see this quite a bit particularly in government organisations here in New Zealand.
</p>
<h4>Story 2 - DevOps for feedback</h4>
<p>
  The next story. DevOps is about speed right?
</p>
<p>
  This organisation is very resource constrained - it's actually multiple organisations - but very resource constrained, and when they went to implement DevOps, they really focused on the delivery of assets out to production.
</p>
<p>
  So all they focused on was the automation to deliver something out to production. Now, that sounds really okay; that should be faster, you shouldn't make this release manual and risky.
</p>
<p>
  Problem with that is that if you're just thinking about DevOps like a one direction thing, you're doing it wrong.
</p>
<p>
  DevOps is about feedback and about learning from these processes and so when you only focus on that golden thread you don't actually get any information back.
</p>
<p>
  So what happens with these organisations is they're able to release out to production pretty regularly, but what they release out to production doesn't actually meet the needs of their customers.
</p>
<p>
  And so what I see in these is — this happens at startups that really focus on delivery of assets — they won't spend a lot of time on vetting those assets to make sure that
</p>
<p>
  A) A customer actually wants to pay for that, and <br>
  B) It actually serves a need right?
</p>
<p>
  And so without that feedback loop, there's a problem.
</p>
<p>
  I've seen this in a few places.
</p>
<p>
  Again, I think it's a resource constraint thing:
</p>
<p>
  "Oh, we don't have time for testing!"<br>
  "Oh we don't have time for that," and "we don't have money for that."<br>
  "What I need you to do is just get the code out to production."
</p>
<p>
  I see some people going "yeah I know this," right?
</p>
<p>
  That immediately circumvents the whole feedback loop, and DevOps is really about getting that feedback rapidly, and learning from that feedback, and that's really quite important.
</p>
<h4>Story 3 - Big solutions for small problems; over-engineering solutions</h4>
<p>
  Next story. Now, this one as Katrina had put, there's a lot of listening to thought leaders in America and tech leaders in America and technology problems in America and then applying them to a New Zealand context.
</p>
<p>
  This is a photo of a single person being held up by an overly resilient and reinforced platform. I think it did a pretty good job, actually.
</p>
<p>
  This is this what I've seen in terms of Kubernetes in New Zealand.
</p>
<p>
  Now, those of you that don't know what Kubernetes is, <a rel="external" href="https://kubernetes.io/">Kubernetes</a> is this beast of a platform. One of its initial customers was <a rel="external" href="https://pokemongolive.com/">Pokémon GO</a>.
</p>
<p>
  Who has played Pokémon GO? Everybody's played Pokémon GO, right?
</p>
<p>
  And you remember when Pokémon GO came out and everybody's going *boop boop boop* right off the cliff and you know great things - terrible things happened, right?
</p>
<p>
  Kubernetes was built to scale up to that scale very quickly.
</p>
<p>
  Now, a lot of people, they either immigrate into New Zealand like myself, or maybe they read it somewhere, they decide that Kubernetes is what they need.
</p>
<p>
  And then they go and they get these magnificent budgets and then they pay another one of our sponsors a nice monthly fee for the privilege of operating Kubernetes.
</p>
<p>
  And then the truth of the matter is, they're operating a single API on like seven virtual machines, and that API gets called maybe a hundred times a day, right?
</p>
<p>
  Just immense amounts of waste have been delivered to deliver this API.
</p>
<p>
  I've seen this multiple times here, and it's terrifying. And the reason it's terrifying is not so much because of the waste; the waste can be identified, the waste can be managed.
</p>
<p>
  It's the risk of carrying such a technically advanced platform to serve your organisation. Remember, there was only 3,600 immigrants to New Zealand. Technically, Kubernetes is this very complicated learning curve, there's a lot there, and now, all of a sudden, you have a mission critical system that depends on expertise that is not readily available in the market.
</p>
<p>
  The carrying cost of some of these platforms is hyper-expensive.
</p>
<p>
  Hyper-expensive.
</p>
<p>
  And I've seen it a lot, and it's unnecessary. I see that a lot here: Organisations building something that isn't fit for purpose. It's just overly resilient.
</p>
<p>
  (Would you like me to speak up? I can be a louder American.)
</p>
<p>
  I think the insight here is there's a lot of uptake of American company patterns - Remember, American companies are hundreds to thousands of times larger - to solve very very small problems. I see a lot of over-engineering and not really thinking about what sort of people do I need to manage this thing for 30 years.
</p>
<p>
  Remember, technology systems — particularly in government — they last for a very long time. So to maintain that intellectual — that knowledge capital — in an organisation, can be very expensive for something very complicated like Kubernetes.
</p>
<p>
  And the final one, and this is my roaring endorsement of Assurity, is when an organisation looks at that first situation where
</p>
<p>
  "Oh, DevOps is a bad word." <br>
  "Change is a bad word."<br>
  "Change is risky."
</p>
<p>
  And says, "Hey actually, we've got the power here. We can make this change safe." And so this is "DevOps is about safety."
</p>
<p>
  When organisations focus on the safety of the systems that they're building. Not only of the functionality of the system but the safety of the users of the system and also the safety of the people that are contributing to that system.
</p>
<p>
  When they focus on that safety, you get all this magic from DevOps.
</p>
<p>
  And that safety just is fundamental.
</p>
<p>
  I think if we were to look at Kiwi culture and particularly here in Wellington for sure, safety is kind of like a core Kiwi value. Safety is something that you see in every kind of building construct, every kind of...
</p>
<p>
  You think about our COVID response; was incredibly safety focused. I think it's a core Kiwi value, and when I see organisations taking DevOps as a safety problem, and in particular a quality problem, they're able to move a lot faster.
</p>
<p>
  Let me give you an example, and this example, I think this is a public case study so I can talk about this.
</p>
<p>
  Assurity was contracted to do the <a rel="external" href="https://assurity.nz/wp-content/uploads/2021/07/Inland-Revenue-Digital-Partner-Services-case-study.pdf">IRD tax system rollout</a>. Now, tax system: very complicated system, and if it goes wrong, what happens? Revolutions happen, right? If it goes wrong, bad things can happen. I don't know if you've seen what happens in America — if the president just starts rallying really loudly — but if the tax system goes wrong, oh God help us all, right?
</p>
<p>
  So, I already spent a lot of resources on making sure that the tax system was safe, and keep in mind, there's a lot of Kiwisaver providers out here, so this system had to integrate with a whole bunch of different organisations on Go Live Day.
</p>
<p>
  And so they spent resources on focusing on making that safe for everybody participating in the ecosystem.
</p>
<p>
  What was the result?
</p>
<p>
  The BT programme finished ahead of time, under budget. It was a roaring success and we now have one of the best tax systems in the world.
</p>
<p>
  Now, I don't know if you've ever done taxes for America but it's a terrible experience. It costs me $600 to do every year. I've got to have a professional do it and I don't get any money back.
</p>
<p>
  Here, it's done all automatically all for me. Investments, tax, that sort of thing, and that's all because when they implemented - I know we were kind of bad-mouthing the leadership team, but for all their woes, they did focus on the right thing.
</p>
<p>
  When implementing that solution they focused on the safety and the quality of the solution.
</p>
<p>
  And as a result, things moved faster.
</p>
<p>
  Things moved better.
</p>
<h4>Story 4 - Technology systems are actually techno-social systems</h4>
<p>
  Takeaway there: if I see these these types of scenarios, safety really leads to this emergent property of DevOps.
</p>
<p>
  So some takeaways here. I think number one: technology systems are techno-social systems and in the United States, it's very easy to forget the social aspect of the technology systems we implement. And the reason it's very easy to forget those things is because it's huge scale, right?
</p>
<p>
  Huge scale.
</p>
<p>
  And part of the huge scale is that readily available talent.
</p>
<p>
  In the United States, we can really treat people like cogs in a wheel. You can't do that here. When you build a technology system, you're building a social system that will last for many years.
</p>
<p>
  Being able to onboard to that system,learn how to wield that system, learn how to change that system, learn how to own and operate that system efficiently, those are all social problems.
</p>
<p>
  Those are all social knowledge that has to be transferred between different owners of the system.
</p>
<p>
  So when we implement DevOps systems and we implement these fancy things, we really have to think about the people and the culture of the people that are involved in operating it.
</p>
<p>
  If we forget those things, then we focus on the wrong stuff.
</p>
<p>
  I think if I look back on all my New Zealand experiences, it's technology is a social problem, it's not a technical problem.
</p>
<p>
  It's a social problem. How to keep people engaged with this technical thing for an extended period of time.
</p>
<p>
  (This is a very cool picture, hey? This is Dreamlike Art. This is...I don't know what it is, but it's really quite beautiful isn't it? Now this one. I love this. This picture is great. What is this? I don't even know what this is.)
</p>
<h4>Safety is an emergent property of DevOps</h4>
<p>
  The other thing that I've noticed in New Zealand organisations is, depending on where you're at - not in your Xeros and your TradeMes - but kind of in the government space, there is a lot of fear around technology.
</p>
<p>
  And that fear is not so much unfounded. It's again the fear of being on the front page of the paper. I think it's one of the first things that I learned about New Zealand is "Well, you don't want to be on the front page of the paper," which I always thought was an apt description of the <a rel="external" href="https://en.wikipedia.org/wiki/Eye_of_Sauron_(disambiguation)">Eye of Sauron</a>, right?
</p>
<p>
  The Eye of Sauron points at you it's bad news, right?
</p>
<p>
  I sense that from a lot of organisations. I think that's because there are so few people that the only people that are going to own the problem are the people there, and they don't want to own the problem. They would like to avoid a problem, if at all necessary.
</p>
<p>
  Expert pilots avoid situations that require expert skill. It's that same kind of nuance. Expert engineers avoid situations that require expert engineering skills. It's quite simple.
</p>
<p>
  So, I don't think that the fear is a sign of weakness;
</p>
<p>
  The fear is a sign of wisdom.
</p>
<p>
  So when I look at the organisations where that fear thing is really quite big, there's some wisdom there, but if change has to happen, then focusing on that safety problem, and making it safe for people to participate in it, that's what makes the magic happen.
</p>
<p>
  So I guess the final thought here is that all these DevOps things -
</p>
<p>
  (This really quite a beautiful picture, I just don't know what it is)
</p>
<p>
  - DevOps is an emergent property of focusing on safety and quality.
</p>
<p>
  That speed thing, that culture thing. All those kinds of concepts that we hear about DevOps, those emerge when we focus on quality and safety.
</p>
<p>
  The organisations that have worked with that and have been incredibly successful, that have moved really fast, they've really focused heavily on the quality and safety of something.
</p>
<p>
  And they got all the tertiary effects of DevOps for free.
</p>
<p>
  That's the end of the conversation.
</p>
<p>
  I did want to mention one thing though and because there's something that's happening in New Zealand that I think is really quite tragic. We're being hosted by Vic Uni today. Tertiary education in New Zealand exists on international students, right, and so as a result we're starting to see us cutting professors in tertiary education.
</p>
<p>
  Tertiary education is the lifeblood of Wellington and so my invitation to you all is, is there a way that you can participate in tertiary education here in New Zealand, to keep it alive, because it really is the knowledge capital of the society and without it it's not good.
</p>
<p>
  So that's my one little political statement. All right, thank you.
</p>
<p>
  [applause]
</p>
<p>
  <strong>Prae:</strong>
</p>
<p>
  Well Allen, we do have about two minutes, and thank you for transitioning for me, that was perfect.
</p>
<p>
  Any questions?
</p>
<p>
  All right let's throw that over. Tim's very good at throwing
</p>
<p>
  [audience laughs]
</p>
<p>
  <strong>Audience:</strong>
</p>
<p>
  I heard you were leaving New Zealand, Allen. Why?
</p>
<p>
  <strong>Allen:</strong>
</p>
<p>
  Ah thanks, thanks. So why am I leaving New Zealand? My parents are retiring and I don't have a family here so I'm by myself and my parents are getting into their mid-60s and I'd like to spend that time actually with them, instead of 12,000 kilometers away. That's why.</p>
<p>
  [applause]
</p>
<p>
  <strong>Audience:</strong>
</p>
<p>
  Can you tell us about in that organisation — you were saying — where DevOps was a dirty word, what sort of work did you have to do to change that mindset?
</p>
<p>
  <strong>Prae:</strong>
</p>
<p>
  Please let me repeat that question. The question was, DevOps is a dirty word. What changes were required to change that mindset in the organisations.
</p>
<p>
  <strong>Allen:</strong>
</p>
<p>
  Yeah, there's a few things that are at play in those types of organisations. That's not just one organisation it's multiple organisations.
</p>
<p>
  The first is funding fiefdoms. Now, funding fiefdoms is an actual thing. What happens is, a product will be built and then there will be a support construct that is funded.
</p>
<p>
  And so that thing: we're paying for that thing to exist. And so that funding fiefdoms, if you want to change an organisation with funding fiefdoms you've got to stand up something beside it, that's not part of that, that doesn't threaten That Thing.
</p>
<p>
  If it threatens it - so let's say that there's an on-premises data centre and then there's the cloud. "Oh, we're going to move all your stuff from the on-premises data centre to the cloud."
</p>
<p>
  All of a sudden this funding fiefdom is very threatened. And that becomes a very bad example, and so you have got to pick the opportunities piecemeal to modernise over time, and be real slow and deliberate about it, keeping in mind that there's lots of people's jobs that exist on this antiquated thing and the idea of getting rid of all that or making them learn new paradigms actually does not feel safe. Not focusing on the safety of introducing new technologies.
</p>
<p>
  Prae: Thank you for that.
</p>
{% endlayoutblock %}
