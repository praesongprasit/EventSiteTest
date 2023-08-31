---
fullName: Adam Howard
jobTitle: Engineering Manager
organisation:
bio: "<p>Adam is a quality engineering specialist, and is passionate about continually improving how teams are able to rapidly deliver quality software products.</p>

<p>His career has seen him help transform and evolve the way that some of New Zealand’s most successful technology companies think about and approach quality engineering; with a bias towards the collective, the context-driven, and the pragmatic. He’s also regularly shared his experiences through speaking at conferences and meet-ups, providing training and coaching, and contributing  to the quality community in New Zealand and around the world.</p>

<p>Adam currently leads the quality engineering practice at Xero.</p>"
profileUrl: [{
  "name": "Website",
  "url": "https://www.adammhoward.com/",
  "icon": "code"
},{
  "name": "LinkedIn",
  "url": "https://www.linkedin.com/in/adammichaelhoward/",
  "icon": "linkedin"
},{
  "name": "Instagram",
  "url": "https://www.instagram.com/adammichaelhoward/",
  "icon": "instagram"
}]
profilePhoto: /assets/images/speakers/adam_howard.jpg
profilePhotoAltText: Adam's portrait. He's a white man in his thirties with a shaved head and a close cropped dark beard. He presents with a slight, knowing smile and the glimmer of a good idea in his blue eyes.
event: NZTechRally2023
talkTitle: Fostering a quality quality culture
talkExcerpt: A model for shaping those principles and practices in engineering teams that can nurture a culture of quality engineering
talkStartTime: 2023-07-07T14:00:00.000+12
talkEndTime: 2023-07-07T14:30:00.000+12
featuredImage: /assets/images/speakers/adam_howard_og.png
featuredImageAlt: "Fostering a quality quality culture by Adam Howard, an engineering manager. Join us to hear Adam and other speakers at NZ Tech Rally, 7th July, Wellington"
featuredImageType: image/png
featuredImageWidth: 1200
featuredImageHeight: 630
talkRecordingID: Wx6Mf4acEMM
---

{% layoutblock 'talkAbout' %}

<p>Quality is a slippery notion, and not something that can simply be manufactured and measured. In that sense, it’s a lot like culture.</p>

<p>And just as culture is emergent from a peoples’ values and behaviours, quality emerges from teams’ principles and practices.</p>

<p>In this talk, Adam describes a model for shaping those principles and practices in engineering teams that can nurture a culture of quality engineering.</p>
{% endlayoutblock %}

{% layoutblock 'bio' %}
{{ bio | safe }}
{% endlayoutblock %}

{% layoutblock 'talkReferences' %}

<ul>
    <li><a rel="external" href="https://docs.pact.io/">Pact</a></li>
    <li><a rel="external" href="https://pactflow.io/blog/what-is-contract-testing/">Contract Testing</a></li>
    <li><a rel="external" href="https://docs.pact.io/getting_started/sharing_pacts">PactBroker</a></li>
    <li><a rel="external" href="https://www.selenium.dev/">Selenium</a></li>
    <li><a rel="external" href="https://en.wikipedia.org/wiki/Software_as_a_service">SaaS</a></li>
    <li><a rel="external" href="https://www.atlassian.com/microservices/microservices-architecture/distributed-architecture">Distributed Architecture:</a></li>
    <li><a rel="external" href="https://en.wikipedia.org/wiki/Diffusion_of_innovations">Diffusion of innovations</a></li>
    <li><a rel="external" href="https://slidesgo.com/">Slidesgo</a></li>
    <li><a rel="external" href="https://www.flaticon.com/">Flaticon</a></li>
    <li><a rel="external" href="https://www.freepik.com/">Freepik</a></li>
    <li><a rel="external" href="https://storyset.com/">Storyset</a></li>
  </ul>
  
{% endlayoutblock %}

{% layoutblock 'talkTranscript' %}

<p>
  <strong>Prae:</strong>
</p>

<p>
So now that the stage have been
magically or not magically reset,
let's dive into another aspect of the engineering
practice that is again very core to culture.</p>

<p>
That is quality. 
</p>

<p>
I've personally felt the impact
of our next speaker's approach to Quality practice,
even though, we have never worked in the same
team in the five years that I've been in the 
same company with him. 
</p>

<p>
His style of communication insights and the pragmatic approach to influence is something to be admired. </p>

<p>
Something that you can just feel and see from far, from the way he talks and things.
</p>

<p> 
So I'm delighted to welcome Adam Howard, an engineering manager. [Applause]
</p>

<p>
  <strong>Adam:</strong>
</p>

<p>
All right, Hello everyone. I was worried we might be in the post-lunch lull but you're all rowdy enough to require free claps from Prae there. So that's good news.
</p>

<p> 
So yeah my name is Adam and I've been in the quality space for like 12 years and I still apparently can't resist using quality as an adjective and a noun successively. 
</p>

<p>
It'sa joke I never get tired of, but here we are.
</p>

<p>
I'm here today to talk about the core engineering domain within engineering, and more specifically, how I've attempted to foster a culture of quality Engineering in my work.
</p>

<p>
So my employer is a bit shy about people representing them sometimes. 
</p>

<p>
So I want to assure you this is all very much based in my experience at work and I'll doubtless mention them a few times along the way.
</p>

</p>But please do me the kindness of remembering this is purely my views as an individual and if I happen to say the word "Zero" at any point, it definitely starts with a Z, okay.
</p>

<p>
Before we get into the meat of it, I want to ensure that we all know what we're talking about when we say culture.
</p>

<p>
It's kind of a slippery notion. We've heard lots about it today already.
</p>

<p>
But you know lunch and panels 
and excitement, we might have blank minds by now.
</p>

<p>
So for me, the way that I think about culture 
is, it's the sort of intangible social goo that 
a group of people sort of float around in and 
crucially, that goo is created by or I suppose more actually emerges, from the experiences 
of the people in a community.
</p>

<p>
And when I think about those social experiences, there's three 
main things that shape culture. 
</p>

<p>
There's the values that people hold, so the things that are important to them, the things that they hold dear, the beliefs that shape the way that they see 
the world. 
</p>

<p>
There's the behaviours, the things that people actually do, how they conduct themselves, the actions that they choose to take.    
</p>

<p>
There's the values that people hold, so the things that are 
important to them, the things that they hold dear, the beliefs that shape the way that they see 
the world. There's the behaviours, the things that
people actually do, how they conduct themselves,
the actions that they choose to take. 
</p>

<p>
And finally, there's the interactions; the way that people's 
values and behaviours intersect, and the way - in essence - that people affect, like have an effect 
on each other and the world around them. 
</p>

<p>
And with that in mind, culture is a constantly shifting 
evolving thing.
</p>

<p>
The culture of New Zealand now, 
is very different to what it was say even three 
four years ago - our shared experiences of a global 
pandemic, cost of living crisis.
</p>

<p>
All of the potentially great and terrible 
things that have happened over the last couple of 
years, they've forever changed the things that we 
value, the ways that we behave and how we interact 
with one another and our environment.    
</p>

<p>
And those 
changes mean that the intangible goo that is our 
shared culture, is now different. What it feels 
like to live in and experience life as a New 
Zealander is different.
</p>

<p>
Because while culture is intangible in the sense that you can't touch it or even easily describe it, as I'm demonstrating we all feel it.
</p>

<p>
To a greater or lesser degree, we all live in culture, and sometimes that's good, and sometimes it's bad. 
</p>

<p>
It's also precisely why shaping culture or changing it is something really powerful. 
</p>

<p>
If we can change the culture that we're a part of, we can change the experiences of ourselves and others - for better, or for worse.
</p>

<p>
Crucially, we must remember though, that we can't change culture directly.
</p>

<p>
It's an abstract, emergent, intangible thing and so you cannot simply mould it in a given direction. 
</p>

<p>
So no matter how much your CEO or your senior leaders want to 
instil a "great culture" in your organization, they can't just tell you and make it happen,
which doesn't stop people trying. 
</p>

<p>
Surprisingly common to see people have a crack at that, but it won't work just to say this is our culture now, because it emerges from people, and 
people are quite hard to change but let's have a go.
</p>

<p>
So pivoting slightly to my day 
job.
</p>

<p>
Here I am, a big old nerd walking in on day one, a job in which I was hired to help 
improve the practice of quality engineering.
</p>

<p>
They didn't actually say that, though they 
kind of said we have a problem with quality.
</p>

<p>
But to me that's what it meant it meant,
"Please build the quality engineering capability of our teams".
</p>

<p>
And I was pretty nervous 
about that actually, it's a big global company and even before I joined, I knew that 
they moved fast and they did lots of things.
</p>

<p>
I also quickly learned when I started, that 
the teams had heaps of autonomy to choose how they 
worked and what they did, and in some ways this 
was really good, but it also meant there was a 
lot of unhelpful diversity in terms of how 
they did things, and this was especially true
in the quality engineering space, where there 
hadn't really been any technical or strategic 
leadership for a little while. 
</p>

<p>
And so lots 
of teams were doing their best but they were all solving the same problem in different 
ways and with differing degrees of success.
</p>

<p>
So I approached with caution because it really 
felt like I might be trying to put stuff back into 
Pandora's Box and they'd had the freedom to choose 
how they were doing things and then this guy sort 
of comes along out of nowhere and might try and 
tell them, "Oh, maybe you should do it differently".
</p>

<p>
So this anxiety was kind of rooted 
in my unfamiliarity with the culture - 
though I wasn't conscious of that at the 
time. 
</p>

<p>
At this stage, I didn't know that I was going to instigate a cultural change that wasn't 
my grand plan.
</p>

<p>But clearly my instinct as a new entrant into this community was to respect the 
culture, not to go in there and just disregard it and muck it up.
</p>

<p>
I'd seen someone attempt that kind 
of approach in a previous job - they sort of brought the culture of their prior organization and tried 
to apply it like a paste over the top of a new and 
unfamiliar canvas and it didn't work out well for 
the cultural colonizer and I wasn't about to make that same mistake. 
</p>

<p>
But I did intend to succeed in 
building capability - and I decided that the way to do it was not through colonization of ideas or 
conquering of hierarchy - it was through enablement.
</p>

<p>
In reality, I think I recognized that the only 
way I could achieve the scale of change that 
I was aiming for was to help the people and 
the teams themselves to be the real drivers behind that change.
</p>

<p>
If I could enable them, 
then they would change the culture for me.
</p>

<p>
So the first thing I set about doing was building a community.
It was pretty clear to 
me that while Communities of Practice were a big thing 
at Xero, there wasn't a healthy Community around 
Quality Engineering. 
</p>

<p>
Though there were relics, there 
was you know, a dusty old Confluence space, there was a largely dormant slack Channel but nobody 
was talking about quality engineering, at least not 
outside of their direct teams.
</p>

<p>
And so I knew this 
had to be one of the first things that I focus on.  
</p>

<p>
Because I'd also quickly discovered that there 
were a lot of super talented super smart people who cared about quality all around the place.
</p>

<p>
Some of them were Quality Specialists, QA's or quality coaches. But a lot were also developers, 
engineers who were just really passionate about 
delivering high-quality software. 
</p>

<p>
And what's more, 
they typically knew that they needed a bit of help. 
</p>

<p>
They wanted it in a lot of cases, so they were 
actually kind of stoked when I went sticking my nose in and that started to allay some of my fears, 
about you know pulling off that reverse Pandora's Box maneuver.
</p>

<p>
They were eager to learn not just 
from me but from others, about how they could solve some of their challenges.
</p>

<p>
They were stuck in silos, 
but it wasn't through choice - there just hadn't been any visible champions of quality making any 
noise for a while, so I established a Community Practice and raised a metaphorical flag. 
</p>

<p>
This meant 
we suddenly made quality engineering visible in the organization again.
</p>

<p>
We brought people together 
to talk about quality and we created a space where it was worthwhile you know, talking about testing 
and testability, where you could ask questions about your automation challenges, where you could 
see if anyone had any experience with accessible design or non-functional requirements.
</p>

<p>
And of 
course, this all doesn't just happen. I made it part of my job to nurture this community. I relentlessly 
annoyed people to talk at our fortnightly sessions.
</p>

<p>
And this was easy enough for a while because I'd 
made it my job to also find out all of the cool things that were happening, happening in the 
quality space around Xero, so I could queue them up.
</p>

<p>
But over time it gets harder, you run through 
all of the easy obvious topics you have, to dig deeper, persuade more subtly. 
</p>

<p>
And crucially 
you need to make the forum accessible to all the different people - regardless of their level 
of expertise, of their confidence, of what their 
first language might be, of what time zone they 
exist in.
</p>

<p>
So we ran different types of sessions: 
Lean Coffees, talks, screenings of conference 
talks and other videos; and we recorded them all 
and we re-ran them for a northern hemisphere 
time zone and constantly learned and refined.
</p>

<p>
So it took a lot of time and a lot of energy, 
but I knew how important it was and so you 
know, kept this running, this community as 
part of my day job, it still is to this day.
</p>

<p>Because I knew that what we needed to start 
to build capability in quality engineering was a space in which people could interact 
meaningfully, they needed to learn from their 
peers, they also needed to realize that they 
could teach their peers a thing or two as well.
</p>

<p>
So talking about it made it real, made it valuable 
and made it important and that was a good start.
</p>

<p>
The Second step needed to build on the momentum 
of that first one. So Xero remained kind of a hopelessly large place and I was still just one 
person trying to enable a company with you know 
probably close to a thousand engineers, across a 
literally unknowable number of teams. I still can't tell you how many are scattered around the globe 
on at least four continents and five major time 
zones.
</p>

<p>
So I knew I needed to try and provide a way 
for all of those people to feel confident in their 
quality engineering choices without all of them 
having to queue up to talk to me. 
</p>

<p>
Frankly - I don't enjoy talking that much, which probably sounds 
ironic standing in front of a room full of people.
</p>

<p>
So I realized that my second major challenge 
would be to establish a set of principles for 
Quality engineering at Xero. 
</p>

<p>
So a principle is a 
fundamental proposition that is the foundation 
for a system of belief, or behaviour, or chain 
of reasoning.
</p>

In other words, it's a key idea 
or tenet that underpins and influences the way 
that we think act and decide.

</p>

<p>
We all have personal 
principles - knowingly or unknowingly - that sort of 
help us navigate the world on a daily basis. 
</p>

<p>
Now I wanted to craft a set of principles that would 
help engineers and teams navigate the
Quality Engineering World confidently and 
that could guide their decisions and their actions 
in a way that would be consistent with our overall 
journey. 
</p>

<p>
Of course, at this point I still felt like 
a relative interloper into this community, so 
I really really didn't want to simply inscribe 
some principles on some stone tablets and sort of 
proclaim them to be the word of the quality gods.
</p>

<p>
Instead, I wanted to tap into my burgeoning 
community and truly extract the values that were 
already in place at Xero. 
</p>

<p>
So I ran a whole host of 
workshops, with all different people, at different time zones. 
</p>

<p>
We worked through several exercises in 
each - framing prompts like positively: what's 
good about quality, what do we love, negatively: what 
are our challenges, what are we struggling with, 
and aspirationally: what do you wish your world 
looked like. 
</p>

<p>
And it was super fascinating I got 
to meet loads of new people, which was useful 
and I learned heaps about the organization 
and made lots of connections and you know sowed 
the seeds of future collaboration along the way.
</p>

<p>
And when I was done, I collated all the data that 
we'd collected and then hacked and shaped it down 
into groups and then into themes and then 
wordsmith it into five proposed principles.
</p>

<p>
I took those principles played them back to the 
community and with a few minor tweaks, through 
that feedback, we had them - our fundamental 
propositions for Quality engineering at Xero 
ought to be.
</p>

<p>
And honestly it doesn't even really 
matter what they actually are.
</p>

<p>
What's important is that they exist and they were drawn from 
the community. We effectively came together and decided the things that are most valued at 
Xero, in the practice of quality engineering.
</p>

<p>
With that we gave ourselves some really clear 
decision-making principles that meant, that any 
team could ask themselves - "this thing that 
we're doing, does it align to our principles?".
</p>

<p>
And so that meant that not only did many 
engineers and teams feel a legit legitimate
sense of ownership over those principles, because 
they'd literally helped to shape them -but it gave 
us a device through which we started to sort 
of slowly and steadily, converge towards a more 
consistent practice, where we would all be aligned.
</p>

<p>
In certain ways and it mainly also sort of 
managed to maintain a sense of autonomy for teams 
as well, since they were still empowered to design 
the specifics of their approach, as long as they 
were aligned fundamentally to those principles.
</p>

<p>
Now I've since used these principles countless 
times and in countless ways, to sort of help shape 
and evolve the development of quality engineering 
at Xero and I've seen others do the same as well.
</p>

<p>
But what I'm most proud of is that each time I 
look back over them, they feel more and more like 
they reflect what I'm actually seeing happening 
around me. So things have started to shift.
</p>

<p>
And that brings us to the third example 
of the things I've been doing to kind of enable 
capability growth at Xero. 
</p>

<p>
Because once we had 
the great foundation of a community, and some shared principles, we could get stuck into the more 
practical elements - helping to directly shape what teams were doing in their day-to-day. 
</p>

<p>
Now this has 
been the main bulk of the work that I've done at Xero.
</p>

<p>
I now have three lead engineers as part of my 
team, each of them specialists in various areas of 
quality engineering, and the four of us continue to 
support that globally scaled organization. 
</p>

<p>
I could talk for days about this and you know, hit me up 
later, if that's your jam, but for now I'll focus 
on one example.
</p>

<p>
So, we recognize really quickly that 
the bulk of automated testing that was happening 
at Xero was of the end-to-end persuasion. 
</p>

<p>It was made up of selenium tests that were in the way of 
selenium tests, you know a bit flaky, a bit slow, a 
bit blunt. 
</p>

<p>
We also knew that we were increasingly moving towards a distributed architecture, 
modernizing services away from sort of big 
old monoliths and building more granular, dedicated 
services and microservices. 
</p>

<p>
And it was clear that the existing practices and tools that teams had at 
their disposal weren't going to you know help them 
to automate the right tests in the right way for these new systems that they were building.
</p>

<p>
So crucially, we knew that we needed to enable our 
teams in this rapidly distributing world to be self-reliant, that they couldn't be hamstrung by 
having to deploy and test against the myriad of 
distributed services that they had dependencies 
on, all in one integrated space with long 
kind of laborious and complicated end-to-end 
tests. 
</p>

<p>
So in short, we recognized that the 
practice of contract testing was going to 
unlock a lot of value for a lot of teams 
but crucially, almost nobody was doing it and we 
wanted to change that. 
</p>

<p>
So step one was to find 
the team that were interested in the practice. 
</p>

<p>
We helped them understand the approach we built out, 
a proof of concept, that meant getting to grips 
with Pact, our tool of choice, with standing up an internally hosted pact broker, that would manage 
the contracts. 
</p>

<p>
And so we did all that, we tried it 
all out, and we saw the value and the gains start 
to happen pretty quickly. 
</p>

<p>
So then we shouted about it a bit - we went back to the Community of Practice. We 
showed it off, we sort of gauge the interest from 
more people, more teams, kind of validating our 
bet, that this was a practice that teams wouldb
find compelling, that they would see the value in 
it and they would jump out at them, as solving a 
problem that maybe, they hadn't even entirely 
realized that they had or would have. 
</p>

<p>
So the next step was to streamline it or scale it for 
more teams. So we didn't want each and every team 
in the organization to need to stand up and host 
their own pact broker, so we license the Pactflow, 
as software-as-a-service offering that took the 
cognitive load of doing that off of their plates, of
each individual team. 
<p>

<p>    
It also added a good deal 
of safety and security by minimizing the amount of 
infrastructure that we would need to configure 
internally.
</p>

<p>
So we set that up, we put licensing 
process in place and we sorted out user management 
for teams as well. We also knew we'd need to ensure 
that teams could easily run these newfangled sort 
of contract tests, wherever they needed to, and so 
we developed and published helpers and webhooks 
for our CI/CD pipelines, so that teams could easily 
trigger builds from software as a service (SaaS) broker, 
that lived on the public internet without any 
security issues, and without them having to figure 
it all out for themselves.
</p>

<p>
And of course, along the way we wrote guides about the practice of contract 
testing and how it varies from regular integration 
testing, the different value that it provides.
</p>

<p>
We wrote about the tools themselves, how to get 
started, how to configure it for their team, how to 
get licenses and then how to start building tests.
</p>

<p>
And of course we regularly demoed all of this 
back to the community and sought input and 
indeed, had help from the early adopters in 
proving the tooling that we were providing.
</p>

<p>
This means that it's really easy now 
for a team at Xero to understand whether 
contract testing is a practice that they 
ought to be partaking of, depending on 
the component that they're building and 
what type of dependencies that they have.
</p>

<p>
And if they ought to be, it's super easy 
for them to get started. There's a supported 
tooling platform, there's guiding material and 
there's also you know us as an enablement team, 
and a whole Community around them for help, 
to get them going. So it was in this way - by 
investing in building knowledge, by providing 
hands-on coaching alongside teams, and 
by developing specific tools and templates - we've 
reduced the barrier to entry for the practices 
that will add value for our teams. 
</p>

<p>
Not just contracts, contract testing, but a whole host of 
others as well. And as such we're seeing more and 
more of those behaviours start to happen out there
in the wild, all without ever sort of having 
to tell anyone that they had to do something.
</p>

<p>
So we started with culture and then we talked 
about quality engineering, and it's time to 
cross those streams, because well I thought, 
that I was building capability, I realized 
at some point along the way, that what was 
more important was actually that I was also 
influencing the culture of quality engineering 
at Xero.
</p>

<p>
There's a pretty clear moment where 
I remember this happening actually. So I'd been 
rocking along sort of doing stuff, a lot of  
stuff that I've talked about already and it was 
going pretty well. 
People were excited, we started 
to see some shifts. 
</p>

<p>
There was kind of you know, 
the sound of quality engineering was in the air 
and then I got one of those really annoying 
requests from my boss's boss. 
</p>

<p>
We were sat 
down talking about it and he was like "Adam, 
this is great, you're really making a difference. 
I want to see if we can do the same 
thing in other domains - so can you share 
your model with me, so that we can show it 
to other teams?". 
</p>

<p>
And what I said was "Yes Paul, 
I can definitely share with you 
the model that I definitely have".
</p>

<p>
But what I thought was "Ah, 
now I've got to invent a model."
So of course, I did have a model in the same way 
that you know, an exploratory tester always has a 
model, and that they're testing against but might 
not be super cognizant of it.
</p>

<p>
Ironically, I'd spent years coaching testers to make their models 
explicit and visible, and here I was caught in my 
own trap! An internalized model full of tacit and 
almost unconscious knowledge. 
</p>

<p>
So this request 
turned out to be a great thing, because in sitting 
down and extracting the model from my brain, and 
interrogating it a bit, I discovered that at some 
point I had unknowingly realized that I needed to 
create a cultural shift in the quality engineering 
landscape and was taking steps to sort of achieve 
that, because that was the only way that the work 
that we were doing was really going to scale.
</p>

<p>
So in previous jobs, I'd been a direct influencer, 
I knew all the engineers and testers, I could run  
workshops for them, have regular conversations, 
jump in when they had incidents and participate 
in the learning from those challenges.
</p>

<p>
At Xero, that wasn't going to fly, and I'd recognize that, 
even unconsciously and started to build out an 
enablement model that could scale, and without even 
you know knowing, it was set up to influence 
the culture of quality engineering as well.
</p>

<p>
So, here's the model - or at least, a simplified 
representation of it. It's based on sort of 
three core pillars - but everything is really in 
service of my team's mission statement, which 
is that we want to enable the rapid delivery 
of quality products. 
</p>

<p>
That's what we exist for, and while we obviously highlight that quality is self-evidently crucial, so is speed. 
</p>

<p>
We want to ensure we're supporting teams to work at the sort of cadence that Xero and any modern agile software 
delivery company demands. 
</p>

<p>
The pillars though,
the first one is that we need to really clearly ensure that teams understand what success looks 
like, for them in quality engineering. We have to 
define great quality engineering, so they can work 
towards it and we do this in a number of ways. 
</p>

<p>
So we've covered the principles. They give teams a 
high level aligned set of sort of fundamental 
propositions that can guide their choices and 
their actions. 
</p>

<p>
The vision is the next really 
important part. So that sets out an aspirational 
view of what quality engineering at Xero can be 
and I really like this way of framing it. When 
we're working with teams and asking them to change 
and asking them to do the work, 'Why' often comes up. 
It's like why are we investing this effort in it 
and I find that like this aspirational view of a 
description of what the experience of quality can 
be like in the future is a really nice way of sort 
of framing that and helping them to connect to it.
</p>

<p>
We also have a standard for Quality engineering. 
It's part of a wider set of engineering standards 
and that sets the baseline expectations for what 
teams need to be doing. Now I see the standard as 
the start of our journey, so the present and I 
see the vision as the future that we're working 
towards and then we also help teams to measure 
their quality engineering both their level of 
capability, but also the resultant quality 
of their products. For the former we use a 
scorecard where teams are empowered to identify 
how confident they are in quality throughout the 
life cycle and then for the latter they're all 
proxies that we use because we can't objectively 
measure quality. So things like test automation 
coverage and SLOs are our main tools here.
</p>

<p>
Of course, just knowing what great quality 
engineering looks like isn't enough. Teams 
also need to have the knowledge the skills 
and the tools to actually go and enact that 
definition and to bring it into reality. So that's 
the second pillar, this pure enablement piece.
</p>  

<p>
A big part of that is knowledge, capability and growth and so we do that through you know providing clear guidance, written stuff that can be consumed asynchronously but also more targeted education efforts, workshops that we develop internal stuff that we find externally 
to actually grow skills and knowledge and 
concepts in our, in our people and teams.
</p>

<p>
Of course, a lot of software engineering is 
inherently practical and learning by doing 
is often the most effective. So we also try and 
spend as much time as we can working with teams 
in practice in their day-to-day coaching them and 
helping them to implement stuff, learning alongside 
us and sort of creating lasting capability through 
that genuine practice.
</p>

<p>
And just as importantly we 
also invest really heavily in providing the tools 
that will allow people to perform that great 
quality engineering. Each team shouldn't have to 
assess the landscape for every tool and every need 
that they have. We can do that for them. We know the 
technologies that we largely work with, we know the 
context that we largely operate in, and so we can 
choose the best solution for most teams. And we can 
integrate that into accelerators and our templates 
for different component types and stuff like that.
Even with all of that giving people that 
definition and giving people that capability,
isn't necessarily going to be enough for genuine 
capability growth to occur. You also need to create 
the space and the culture for them to succeed in 
achieving it. That means ensuring that everyone 
understands the value of getting better at 
quality engineering, so what's in it for them.
</p>

<p>
Wow, I'm running out of time, so let's speed up  
this last column. So yeah lots of engaging with 
people who are in programs of work, making sure we 
build quality outcomes into the program outcomes.
And yeah day-to-day propaganda of writing blog 
posts and just sticking my nose in places where 
it needs to and the community that exists,
starts to do peer-to-peer work um across the place.
</p>

<p>
So this is kind of the basic model for how we're enabling quality engineering at Xero. It's not 
finished, it's not done but it seems to be working so far and there's some correlations to some 
things that we heard about earlier. So it's pretty easy to draw a line from those three pillars to 
the values, behaviors and interactions. That are those things that shape culture, that we talked 
about at the start. 
</p>

<p>
When we're defining what great quality engineering looks like, we're really saying 
here are the things that we value, the things that 
we think are important, the things that we believe in. When we're enabling quality engineering for 
building knowledge skills and tools, we're directly
influencing the ability of our engineers and teams 
to perform certain practices. We're helping them to 
do those specific things. And when we're advocating 
for Quality engineering capability growth is 
something that's important. We bring together 
people to talk about quality engineering and 
to create intersection between people who might 
not otherwise have both recognized that they have 
you know, a shared goal or a common interest in 
quality engineering.
</p>

<p>
So ultimately my enablement model for Quality engineering at xero is a model 
that provides direct ways to influence the factors 
that contribute to Culture by defining principles, 
enabling practices and advocating for communities. 
We start to affect the values and behaviors 
and interactions of the community at Xero, in 
a way that ought to cause a more quality 
engineering optimized culture to emerge.
</p>

<p>
So importantly, I want to highlight this lesson just about quality engineering. Aside from the mission statement, nothing on that model was specific to Quality engineering and I want to share this model, because I think it's something 
that you can take back and apply in your context 
as well.
</p>

<p>
All you really need to do is to find 
your own levers for those values behaviors and 
interactions.
</p>

<p>
For me, this translated first into 
"principles", "practice" and "community" and it evolved 
when I thought more consciously about it into the 
"define", "enable" and "advocate", that the model is now 
built around.
</p>

<p>
But you can find your own levers, and 
add your own labels and work in your context to make that appropriate. 
</p>

<p>
Remember that your culture will have its own way of changing just as ours did.
</p>

<p>
We should also revisit that lesson from the start of the talk that culture is an emergent property. So you can't change it directly and even trying to trigger changes on a smaller scale is really difficult. 
</p>

<p>
So this is where something called the "law of diffusion of innovation" comes in and is really your friend.
</p>

<p>
This is the idea that you shouldn't even try and influence all of a community at once.
</p>

<p>
Instead, focus on identifying those early adopters and willing participants who will self-select into a good idea, and be valuable contributors to your change. 
</p>

<p>
Once you start changing them, their values, their behaviors and their interactions will start to show in the community and that will start to shape the culture and bring more people on board.
</p>

<p>
Then slowly but surely you see others come along and say well, "that looks cool. Can we get involved?"
</p>

<p>
And if that isn't fostering a Quality quality culture then I don't know what it is.
</p>

<p>
I didn't make my slides look this pretty, look them up, it's really cool.
</p>

<p>
And that's a wrap for me. I really hope you took something from this talk.
</p>

<p>
I love enablement and I love culture. They are great topics. So thank you to the NZ Tech rally crew for inviting me along.
</p>

<p>
Thanks to you all for listening and I'll take questions later or online. Thank you!
</p>

{% endlayoutblock %}
