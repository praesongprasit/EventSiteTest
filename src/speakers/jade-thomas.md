---
fullName: Jade Thomas
jobTitle: Engineering Manager Online Channels
organisation: BNZ
bio: "<p>After a couple of decades of software development, Jade accidentally found himself in an engineering leadership role. Initially not keen on the engineering manager title, as he never saw himself as a manager, but enticed by the hope of having some influence in building a better environment for engineers to flourish. Jade fights to keep the management part of the role to a minimum while trying to stay relevant and valuable to engineers.</p>

<p>Over the last 4 years as manager, Jade has been involved in reshaping BNZ online banking ways of working — standardising and industrialising their software patterns, increasing their scalability and reliability — all while the organisation reshapes their technology business unit.</p>"
profileUrl: [{
  "name": "LinkedIn",
  "url" : "https://www.linkedin.com/in/jadethomaswellington/",
  "icon": "linkedin"
}]
profilePhoto: /assets/images/speakers/jade_thomas.jpg
profilePhotoAltText: Jade's headshot; a man with glasses, wearing a light blue pattern shirt and a dark blue woollen jacket.
event: NZTechRally2023
talkTitle: The fine line between chaos and order
talkExcerpt: "How do you balance speed to market, compliance and certainty in a financial institution?"
talkStartTime: 2023-07-07T11:30:00.000+12:00
talkEndTime: 2023-07-07T12:00:00.000+12:00
featuredImage: /assets/images/speakers/jade_thomas_og.png
featuredImageAlt: "The fine line between chaos and order by Jade Thomas, Engineering Manager Online Channels at BNZ. Join us to hear Jade and other speakers at NZ Tech Rally, 7th July, Wellington"
featuredImageType: image/png
featuredImageWidth: 1200
featuredImageHeight: 630
talkRecordingID: RBpjp0GqDII
---

{% layoutblock 'talkAbout' %}

<p>
  Financial institutions have a reputation for being slow and cumbersome with software delivery, and there is often a good reason for that: we deal with your money.
</p>

<p>
  The consequences of any mishap can be enormous; not just financial and reputational, but also remediation imposed by regulators can be crippling.
</p>

<p>
  However, at what point does this lack of agility become a risk, and how do you balance speed to market, compliance and certainty?
</p>
{% endlayoutblock %}

{% layoutblock 'bio' %}
{{ bio | safe }}
{% endlayoutblock %}

{% layoutblock 'talkReferences' %}

<ul>
  <li><a rel="exnternal" href="https://thecynefin.co/about-us/about-cynefin-framework/">Cynefin framework</a></li>
  <li><a rel="exnternal" href="https://en.wikipedia.org/wiki/Yin_and_yang">Yin and Yang in Taosim</a></li>
  <li><a rel="exnternal" href="https://en.wikipedia.org/wiki/">COTS (Commercial off-the-shelf)</a></li>
  <li><a rel="exnternal" href="https://en.wikipedia.org/wiki/Software_as_a_service">SaaS (software-as-a-service)</a></li>
  <li><a rel="exnternal" href="https://learnwardleymapping.com/">Wardley Mapping</a> by Simon Wardley</li>
  <li><a rel="exnternal" href="https://learn.launchdarkly.com/ ">LaunchDarkly</a></li>
  <li><a rel="exnternal" href="https://en.wikipedia.org/wiki/Threat_model">Threat modelling</a></li>
</ul>
{% endlayoutblock %}

{% layoutblock 'talkTranscript' %}

</p>
  <strong>Prae:</strong>
</p>
<p>
  Now, our next speaker was Camy's, top of her list.
</p>
<p>
  I didn't know Jade before this and so when we had our first meeting, and I heard about how he was heavily involved in how the bank transformed the way it does best engineering practices, that fascinates me, because we see large corporate, right, banks, traditional institution as something that is slow moving, there's just like how do we even change or begin to impact the culture of that.
</p>
<p>
  So please welcome Jade Thomas, an engineering manager at BNZ.
</p>
<p>
  <strong>Jade:</strong>
</p>
<p>
  Thank you very much, Prae. Thank you everybody.
</p>
<p>
  Today I'm going to talk about a bit of my experience at BNZ.
</p>
<p>
  A bit about me, I've been in software engineering for 25 years and so this talk isn't about the whole 25 years there's lots and lots of stories that I could talk about. This is about the last four years of me somewhat reluctantly becoming an engineering manager.
</p>
<p> 
  I'd always been a software developer and I always enjoyed software developing and I was back at BNZ about four years ago and my boss at the time, Luke, convinced me somewhat reluctantly to get into management.
</p>
<p>
  I thought, I don't want to be a manager. Managers just go to meetings and talk rubbish all day long and he was just like but you'll be so good at it, Jade!
</p>
<p>
  So he kind of said, "but you'll have some influence" and I was like "Hey, I can tell people what to do, this would be awesome".
</p>
<p>
  So somewhat reluctantly went in there, I was kind of like "ugh", repulsed by that word manager, but I started and the month that I started, it was like a bad omen or something.
</p>
<p>
  It was something like someone has released a chaos monkey into the system and databases were being shut down, cascading failures were happening everywhere.
</p>
<p>
  I was on One Tech Bridge, I remember being on One Tech Bridge before – our transactional database – going down and next thing, our Oracle databases, where all the logs go, were going down. We're generating so many errors that we brought that database down.
</p>
<p>
  So I was going from one event to another and as soon as I had that title everybody came rushing to me with problems:
</p>
<p>
  "this is broken, Jade you need to fix this, this is broken" and I was like "what the hell have I got myself into?".
</p>
<p>
  I remember looking back at the first month we had 91% availability. I was kind of embarrassed being an engineering manager of online channels with nine one and like a low nine one.
</p>
<h4>How did his large bank get into this state of chaos?</h4>
<p>
  So, I was kind of reflecting on that. How did we get ourselves into this scenario?
</p>
<p>
  BNZ is an awesome place and we're doing some awesome work and we were in this positive feedback loop, where the two years before that, we were hiring more engineers and they were creating more features.
</p>
<p>
  They were creating more usage in the mobile app and that generated more sales. So people were like "okay cool, let's hire more engineers".
</p>
<p>
  So they kept on doing this this positive feedback loop and that was that was great, we had massive growth and the apps were improved massively and we had some awesome talent that was hired during that time and did some really really good job.
</p>
<p>
  Well, we went from 120 people in digital and online space to 320 people, relatively quickly.
</p>
<p>
  Little do we know that a lot of that funding that was moved to hire those extra 200 people was moved away from the infrastructure teams to the delivery teams.
</p>
<p>
  When new teams were on boarded what did new teams do? They create new things, and they did a really good job of those those new things, but what we found when we looked at our mobile stack it had over 900 dependencies in it.
</p>
<p>
  And this is Dynatrace and it looks pretty chaotic. Some of those dependencies were 12 deep, so we had layers on layers.
</p>
<p>
  So new teams were doing a really good job and no discredit to them, they were awesome engineering their things, but they didn't fully understand the old things. So quite often they'd create the new thing that called the old thing, that then called the other old thing, that then called that
</p>
<p>
  So we had these big chains cascading services behind the scenes. And what happens with that when you have cascading services, you get cascading failures. And so all it needed was one of these 900 things to be go down and then everything was down.
</p>
<p>
  Cool, so that made me kind of think about what was chaos and what was order and how did they relate?
</p>
<p>
  So I did a lot of research. This is going on in my mind for for quite a lot long time and I started to look at different frameworks.
</p>
<h4>Cynefin framework</h4>
<p>
  So, <a rel="external" href="https://thecynefin.co/about-us/about-cynefin-framework/">Cynefin framework</a>.
</p>
<p>
  Probably not saying that well. It's a Welsh word for habitat.
</p>
<p>
  Really good framework. Really good way of identifying what kind of order your system is in. Whether it's in a chaotic space, whether it's in a complex space and how to act within those systems. So I found that kind of useful but it didn't really explain everything to me.
</p>
<p>
  I think it was quite good for a consultant going to a place that was relatively new um but it was missing somewhat for me. Maybe I didn't understand it.
</p>
<p>
  So, it wasn't to a while later because this was problem was still going on in my head. How does chaos and order relate? I stumbled over a book.
</p>
<h4>Taoist belief on balance of Chaos and order</h4>
<p>
  I'll probably have to read this from the slides but stumbled on how Taoists believe that reality is essentially made up of chaos and order.
</p>
<p>
  Chaos is all those things that you don't understand.
</p>
<p>
  So, we would say that chaos is all those things that exist outside of our perception. Order is all those things that you do understand and all those places you go to produce the results you intend.
</p>
<p>
  The <a rel="external" href="https://en.wikipedia.org/wiki/Yin_and_yang">Taoist system</a> is a circle and closing two serpents; the black serpent is Chaos and the white serpent is Order.
</p>
<p>
  They're intertwined, and in the heart or the eye of the black chaos serpent is order, and in the eye of order is chaos and so these two are interchangeable and this is kind of recognises that any system can go from chaos to order at any point.
</p>
<p>
  Now, order's really, really good makes you feel safe and order is really good for predictability, safety and all those good things but it doesn't have opportunity.
</p>
<p>
  Where chaos: the unknown has opportunity, the unknown has excitement, the unknown has good things.
</p>
<p>
  So the Tao belief that the way to deal with this is to walk the line between chaos and order. One foot in each camp. Not to be too focused in order, because that can be mundane and boring and also and not too much chaos. Too much chaos is too much unpredictability. But you need to find balance between the two.
</p>
<p>
  So the analogy I drew is product development and developing new feature is dealing with the unknown and engineering is dealing with order and making the unknown known and quantifying that.
</p>
<p>
  So I thought: "that's cool" and The Way is how you balance the two.
</p>
<h4>Creating strong engineering culture</h4>
<p>
  It was "Our Way", so first we wanted to create a culture of engineering and we had really good, back in that time we had really good pockets of engineering but we didn't have a ubiquitous culture so we wanted to see how we could create that.
</p>
<p>
  Second point: industrialize our patterns and the third point: continuously simplify.
</p>
<p>
  For a culture of engineering that we didn't have very strong culture back then. What we set up early days was this concept of the Triad and in every kind of important meeting in every level there should be representations of: engineering, product, and people.
</p>
<p>
  Now, BNZ is a really good place to work and people are at the heart of everything we do so we saw this as really important, to have people underpinning everything and quite often they refereed when there was decisions between engineering and products couldn't decide. But each one of these these Triads were equal partners in everything.
</p>
<h4>Identifying owners, and structuring ownership model</h4>
<p>
  In the hierarchies we had. Is this the right slide? Yep.
</p>
<p>
  At BNZ the teams there was engineering leads in every team, product owners in every team and people leaders.
</p>
<p>
  At the domain – that's our kind of like business unit within technology – there was engineering managers product managers and capability managers.
</p>
<p>
  And at the top level of technology there's a head of engineering. Head of each of the domains and head of capability. So that was a way that we could kind of bring engineering to the table of every conversation.
</p>
<p>
  Also, some instructions we introduced were: dedicated platform teams.
</p>
<p>
  So, in online we had lots and lots of teams of all important missions doing lots of different, important stuff but everybody kind of owned all systems, which meant nobody owned the systems.
</p>
<p>
  So what we instilled was our clear ownership and in all the different areas but also platform teams that would look after the important platforms to support a lot of the product teams doing a lot of the delivery now.
</p>
<p>
  This is also backed up by a new engineering department that looked after all the important stuff like databases, documentation, and the patterns we use for CI/CD and stuff.
</p>
<p>
  So this gave a good opportunity for these teams to just focus on the business problems and use good patterns.
</p>
<p>
  But culture is not just structure. You can have all the structure you want.
</p>
<p>
  Structure facilitates culture but it's not culture.
</p>
<p>
  Culture to us is what you do and how you operate and in the core of that is having a shared belief system What I noticed in the early days we created an engineering manifesto and that was really good and I think what was really good about that was the creation of that, getting everybody together to create that, all together.
</p>
<p>
  But when I was talking to my mentor at the time said like
</p>
<p>
  "if you write your values on the wall, there's something about that, it's like they're dead straight away. So don't write your stuff on the wall" and I was kind of perplexed and he goes
</p>
<p>
  "remember that other bank we're working at?" and he goes
</p>
<p>
  "yeah they had some amazing values and as soon as they put them on the wall everybody acted the complete opposite way" and I was just like "wow".
</p>
<p>
  So I drew the analogy of like it's kind of like giving your kids Nerf guns and saying don't shoot the cat. What's the first thing they do? Shoot the cat! My kids anyway... I don't know.
</p>
<p>
  So what was really good was creating some shared belief systems and it's not about having them up on the wall and having them seen everywhere it's about enacting them and as a leader being the example of those.
</p>
<p>
  So that was really important for us. Having a shared system and making sure that that's coming from all directions not just down and we we tell you our values but the values are coming from the ground roots to everywhere.
</p>
<p>
  Everybody has a part into those values. So it's having good forums, we have tech talks, we have chapters, we have guilds. All those good things that a lot of people have, but also having a culture where you can speak up and communicate and work together to create that shared belief system.
</p>
<h4>Industrialised patterns</h4>
<p>
  Second point that's really important was this, Industrialised patterns.
</p>
<p>
  So in online, we have four major patterns and everything would be built from those patterns. So you could choose anything you want, as long as it's from those four patterns. They were around those platform teams: iOS, Android.
</p>
<p>
  So they had real good module frameworks that had been built out really well. Mini apps for webs, that's our micro front-ends and spring boot APIs. So that was really good and we've been industrialising them for the last couple of years and has made a huge, huge benefit.
</p>
<p>
  Before that we had some really good stuff, but we looked across our API space just online and we had 25 different types of the same thing, and now we have one type of the same thing. So that was a really important part of us.
</p>
<p>
  We've tried to take that to the next level now, across the bank, with a concept called Five Flavors.
</p>
<p>
  So the idea of this is that we should be able to build 80% of all our technology within these five patterns. Making good progress in the micro front-ends and APIs have got a good start.
</p>
<p>
  Actually, Core systems, they've been doing this for decades. They've got some really good patterns.
</p>
<p>
  Now if anybody would like to talk about DevOps, well they actually have been doing DevOps before the word of DevOps has been around. Doing some really really cool stuff. Doesn't get recognized like that and it's not visible across or ubiquitous across the organization, but that's a really good pattern. Probably just need some better promotion and documentation and wrapped up.
</p>
<p>
  We haven't really started on off the shelf stuff, that's our <a rel="external" href="https://en.wikipedia.org/wiki/Commercial_off-the-shelf">COTS</a> and <a rel="external" href="https://en.wikipedia.org/wiki/Software_as_a_service">SaaS</a> offering. That's really big for us at the moment.
</p>
<p>
  We need to put some investment in that and our data analytics is some really good stuff happening, but again it's not spread across and ubiquitous across organisation, and we want to pump that across the organisation.
</p>
<p>
  And then, what's really important, I think too, is because you create these patterns and you make it easier for things to be created. Guess what you're going to have? Lots of things.
</p>
<p>
  So if you make it easier to create micro front ends, you get lots of micro front ends.
</p>
<p>
  Make it easier to create micro-services get lots and lots and lots of micro-services!
</p>
<p>
  So you need a bit of discipline with that as well. What we're embarking on, as well, in the kind of third wave, and the third way is Continuously Simplify.
</p>
<p>
  I'll talk a bit about this and what I mean by this.
</p>
<h4>Continuously simplify</h4>
<p>
  So the first thing is you may need to make everything visible.
</p>
<p>
  You can't simplify things that you can't see and you can't understand what you don't understand and everybody needs to have the same picture and same map.
</p>
<p>
  So a way that we quite often do it is get a whiteboard and some Post-its and map out our understanding and work together to try and make things as visible as possible with story maps, value streams, <a rel="external" href="https://learnwardleymapping.com/">Wardly Maps</a>, to try to visualise that.
</p>
<p>
  There's no point one person having a bigger context than everybody else. Everybody else needs to have the same understanding and that doesn't happen just by somebody writing a <a rel="external" href="https://www.atlassian.com/software/confluence">Confluence</a> page and put it into Confluence and it never be seen again.
</p>
<p>
  It's the exercise of doing that, that drives that common understanding.
</p>
<p>
   Cool, so once you can kind of visualise everything the next kind of concept – and this might be a bit of abstract so I apologise for that – but you need to adapt things from the specific to the general, and what do I mean by that?
</p>
<p>
  So tech has this evolution. Well, good tech has this evolution.
</p>
<p>
  That things start with an idea, move to a custom build, then often move to a product, then to a commodity and if anybody's done Wardly mappings or if anybody wants to find a bit more about this have a look, have a Google for Simon Wardley, really amazing. It's been heavily used by the by the open source area as a way to adapt things and to make it make it more of a commodity make it more of a utility.
</p>
<p>
  Now, if you're doing it right, then it happens. If you're doing it wrong you just get more things, okay?
</p>
<p>
  So you don't get a lot, you don't do that evolution.
</p>
<p>
  Now I first saw this when I learned TDD and I was doing the bowling kata and my first one was like "okay do this bowling kata by Uncle Bob" and like "build that, without TDD" and so I kind of bashed away at that and produced some really ugly code.
</p>
<p>
  But I looked at that ugly code and I was like "oh there's got to be a better way". Followed the example where you basically create a really easy unit test and then you build that unit test, then you refactor it. And you keep on doing that process and the paradox is:
</p>
<p>
  as the tests become more specific, the code should become more general.
</p>
<p>
  And at the end I had about 11 lines of code and it was a hell of a lot more elegant than my first thing of that. The same idea is with your software as well. So I'll go into some examples.
</p>
<p>
  This is Wardly Mapping. This is us Wardly Mapping the API pattern.
</p>
<p>
  So what we did is: we have a user who has a need and then we mapped out all the things, all the dependencies and then placed it where it is on the map and then looked at where it needed to be.
</p>
<p>
  Really, really good way to build a strategy of how you can build something out, but also you can use it to push things, use it to tell like "hey, if you want a lot of commodities, honest things, then you can go and buy those".
</p>
<p>
  Like you don't need to go and build yourself Feature Flags, you can go and use <a rel="external" href="https://learn.launchdarkly.com/ ">LaunchDarkly</a> or maybe an open source one as well to do that.
</p>
<p>
  We found this is a really good tool to try and move things on and we're also experimenting how to do that with simplifying our integration landscape as well.
</p>
<p>
  But also not just for tech too, but also for governance as well which is quite strange so banks love processes and controls and all those things. If there's a possible risk of something going bad, there's a process that you can follow. So what we did is we went
</p>
<p>
  "hey, okay cool trying to get stuff to cloud is really, really hard. Why is that hard?"<br>
  "Okay, let's map it down, all the processes that we need".
</p>
<p>
  And so we we got it all up and we're doing this, the whiteboard stuff and I was up on a chair at the top, with wheels on it, scaring people and I was mapping everything down. We put all the stuff down in there and when we mapped it out. Like, this went for pages.
</p>
<p>
  We kind of found that: first time doing this would take months to get a simple web app that might take you four weeks to build but to try and get that to cloud.
</p>
<p>
  So we really looked at: what's the process? How do we simplify these tasks? And working with some friends and security, we tried this out.
</p>
<p>
  So we took specialised skills like <a rel="external" href="https://en.wikipedia.org/wiki/Threat_model">threat modeling</a> and then we we move them into self-service.
</p>
<p>
  Instead of like having a security consultant tell you how to do threat modeling, or do threat modeling for you, it was: here's providing you the ability and the training to do it yourself.
</p>
<p>
  And what that has done is it's freed up the security people to work on the automation and to improve the process. So you can do that and identify these things to move them from an idea from a custom implementation that uses a specialist skill, to then make it self-service and then make it automated.
</p>
<p>
  And then with that pattern software, after doing this we kind of, it was not quite there yet, but it's almost there, we then came up for a process that builds a lot of that governance and everything into the pattern.
</p>
<p>
  So then building a much simplified process to enable that can move from your governance activities that could take several months to days.
</p>
<p>
  So this is our our way of navigating chaos and try to create an order in chaos. So the first way is highly recommended: working on a culture of engineering.
</p>
<p>
  The other two ways don't happen if you don't have a good culture of engineering and you don't have engineering at every table. That's what we've found.
</p>
<p>
  Industrialise your patterns, invest in the patterns rather than instances. That will create lots and lots of those instances, but then work at continuously simplify.
</p>
<p>
  And that's me, that's my speech. Thank you very much.
</p>
<p>
  <strong>Prae:</strong>
</p>
<p>
  Thank you, Jade.
</p>
<p>
  I'm going to get you a bit closer to here, just because our captioner couldn't hear.
</p>
<p>
  Right, any questions?
</p>
<p>
  <strong>Audience:</strong>
</p>
<p>
  Hi, thanks for the talk.
</p>
<p>
  I'm just wondering, how do you induct new people into your engineering culture?
</p>
<p>
  <strong>Jade:</strong>
</p>
<p> 
  I'm sorry, could you repeat?<br>
  How do you onboard new people into engineering culture?
</p>
<p> 
  I think, when the culture's not on the wall and lived out and breathed. It's passed on from one person to the other.
</p>
<p> 
  So this is the sheer belief system when people have those beliefs and stuff, and really kind of strongly believe in that and it's not just one person doing it but when everybody does that.
</p>
<p> 
  Then when somebody comes in with a different idea of things, they get naturally pulled into line. So if they step out or anything like that they naturally pick it up and it becomes ubiquitous.
</p>
<p> 
  I think we found, that I found personally, that that's a better way than: here's our culture and it's dictated to you, but when you've seen it acted then you're encouraged to onboard.
</p>
<p>
  <strong>Prae:</strong>
</p>
<p>
  Thank you for that. There's a person over there.
</p>
<p>
  <strong>Tim:</strong>
</p>
<p>
  Throwing...
</p>
<p>
  <strong>Prae:</strong>
</p>
<p>
  Nice catch!
</p>
<p>
  <strong>Audience:</strong>
</p>
<p>
  What do you mean by industrialised patterns?
</p>
<p>
  <strong>Jade:</strong>
</p>
<p>
  Okay cool. For us, that means making the patterns really, really robust and homogenized so when you have. Initially when a lot of our services were created without investing in the patterns and we didn't have the platform teams doing that.
</p>
<p>
  Everybody solved some of those problems in their own way, so they'll do logging in their own way, they would do authentication in their own way, and we had – like I said – 25 different flavors.
</p>
<p>
  They were spring boot APIs, they were all spring boot APIs but they were all slightly different and that got really hard, when we were trying to migrate something because we had to treat them all in a different way.
</p>
<p>
  When I mean by industrializing, I mean building all the non-functionals into those patterns so pipelines, the security, the logging, everything that is needed from a non-functional point of view into that and being highly opinionated with that so there's only one way to do that.
</p>
<p>
  So essentially if you notice Cynefin kind of quadrants, that's making something really constrained and by making it really constrained, initially I couldn't think that was a great idea, but then I learned with those constraints came freedom.
</p>
<p>
  So that the teams could really focus on the on the business problem and not have to worry about the the non-functional issues.
</p>
<p>
  <strong>Audience:</strong>
</p>
<p>
  First of all, great call out, brilliant stuff. Everybody should look at them.
</p>
<p>
  How did you overcome security's natural suspicions, and desires to to always be involved?
</p>
<p>
  How did you build the confidence in your stakeholders there to say "back off, we've got this"?
</p>
<p>
  <strong>Jade:</strong>
</p>
<p>
  So, I've been working really hard with a relationship with ICS, our Security Consultants.
</p>
<p>
  We've built a really strong alliance and it actually started with me ringing this guy who's slightly mad, a bit of a maniac and just going "what the..." and giving him a big lecture and he was like "who's this angry ginge who's talking to me?"
</p>
<p>
  So now we actually meet up, he lives close to me, our kids actually played basketball together and so we catch up for coffee and for beers quite on a regular basis but we're on the same page we have that same shared belief system we'll work really hard on that and the idea is:
</p>
<p>
  he wants he doesn't want to be stuck in the detail. They don't want to be gatekeepers, he doesn't want his people to be gatekeepers. He wants them to be enablers.
</p>
<p>
  So we're partnered up, we do our own security reviews and everything in OC3 now and we're piloting that. It hasn't been pushed out to all the other domains but we want want to work really hard to get that out of there and that's been starting to free them up.
</p>
<p>
  Like at BNZ you could be waiting four months to get a security consultant, you know? So in that process that's mapped out, there's wait times for these specialised skills. To get a risk assessment and a security consultant done it's a long time.
</p>
<p>
  So I'm really partnering with them and getting them to work on the process, has been the big thing. So them documenting the process and training us how to do that process and then auditing that process to make sure we're doing it well that's been so much better than us waiting for a long time to get a security consultant and then, you know, then their security consultant being a real blocker for us to go live.
</p>
<p>
  <strong>Prae:</strong>
</p>
<p>
  Thank you, Jade!
</p>
<p>
  Can you please give a round of applause for Jade Thomas?
</p>
<p>
  [audience applause]
</p>
{% endlayoutblock %}
