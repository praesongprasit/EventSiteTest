---
fullName: Jenny Sahng
jobTitle: Data & Founding team
organisation: Multitudes
bio: "<p>Jenny is a data enthusiast and product lead of a Kiwi team analytics startup, Multitudes, which provides ethical engineering metrics. Having a keen interest in how technology impacts our world, she is interested in exploring how we can use data in ways that are not reductive but empowering. Before Multitudes, she built data products at Xero.</p>

<p>Outside of work, Jenny has been involved in several organisations around DEI, climate action, and youth civic engagement. She is currently a data ethics facilitator at Colab Cohorts’ Equitable Product course. She is also co-founder and editor of <a href='https://climateclub.nz' rel='external'>Climate Club</a>, a weekly newsletter for busy folks who care about climate change.</p>"
profileUrl: [{
  "name": "LinkedIn",
  "url" : "https://www.linkedin.com/in/jennysahng/",
  "icon": "linkedin"
}]
profilePhoto: /assets/images/speakers/jenny_sahng.jpg
profilePhotoAltText: A portrait photo of Jenny smiling at the camera. She is wearing sunnies on her head, silver dangly earrings, a collared shirt, and is standing in front of some jungly bush.
event: NZTechRally2023
talkTitle: Engineering metrics, minus the creepiness
talkExcerpt: How might we use metrics to help us improve what matters, in a way that supports, not damages, an empowering and sustainable engineering team culture?
talkStartTime: 2023-07-07T15:30:00.000+12:00
talkEndTime: 2023-07-07T16:00:00.000+12:00
featuredImage: /assets/images/speakers/jenny_sahng_og.png
featuredImageAlt: "Engineering metrics, minus the creepiness by Jenny Sahng, Data & Founding team at Multitudes. Join us to hear Jenny and other speakers at NZ Tech Rally, 7th July, Wellington"
featuredImageType: image/png
featuredImageWidth: 1200
featuredImageHeight: 630
talkRecordingID: Lo2s480oI3U
---

{% layoutblock 'talkAbout' %}

<p>Engineering metrics that give teams and managers better visibility over productivity and team health have been gaining popularity. But we’ve also heard the horror stories: layoffs based on lines of code, Big Brother-esque monitoring of behaviour.</p>

<p>How might we use metrics to help us improve what matters in a way that supports, not damages, an empowering and sustainable engineering team culture?</p>
{% endlayoutblock %}

{% layoutblock 'bio' %}
{{ bio | safe }}
{% endlayoutblock %}

{% layoutblock 'talkReferences' %}

<ul>
  <li><a rel="external" href="https://dora.dev/">DORA (DevOps Research & Assessment) metrics</a></li>
  <li><a rel="external" href="https://www.nytimes.com/2016/02/28/magazine/what-google-learned-from-its-quest-to-build-the-perfect-team.html">What Google Learned From Its Quest to Build the Perfect Team</a> by New Work Times</li>
  <li><a rel="external" href="https://en.wikipedia.org/wiki/Industrial_and_organizational_psychology">Org psych (Organisational Psychology)</a></li>
  <li><a rel="external" href="https://rework.withgoogle.com/guides/understanding-team-effectiveness/steps/introduction/">Guide: Understand team effectiveness</a> by re:Work with Google</a></li>
  <li><a rel="external" href="https://www.hbs.edu/faculty/Pages/item.aspx?num=19992">The Firm Specificity of Individual Performance: Evidence from Cardiac Surgery</a></li>
  <li><a rel="external" href="https://www.deloitte.com/au/en/services/consulting/perspectives/inclusive-leadership.html">Waiter, is that inclusion in my soup? A new recipe to improve organisational performance</a> by Deloitte</li>
  <li><a rel="external" href=" https://www.amazon.com.au/Accelerate-Software-Performing-Technology-Organizations-ebook/dp/B07B9F83WM/">Accelerate</a> by Gene Kim, Jez Humble, and Nicole Forsgren</li>
  <li><a rel="external" href="https://cloud.google.com/blog/products/devops-sre/dora-2022-accelerate-state-of-devops-report-now-out">Announcing the 2022 Accelerate State of DevOps Report: A deep dive into security</a> by Google Cloud</li>
  <li><a rel="external" href="https://queue.acm.org/detail.cfm?id=3454124">The SPACE of Developer Productivity; there's more to it than you think</a></li>
  <li><a rel="external" href="https://www.atlassian.com/team-playbook/health-monitor">Team Health Check (red-yellow-green)</a> by Atlassian</li>
</ul>
{% endlayoutblock %}

{% layoutblock 'talkTranscript' %}

<p>
	<strong>Prae:</strong> 
</p>
<p>
	So! The last session for the day is — of course — packed with great content. As we hoped it would be.
</p>
<p>
	It's all about data. 
</p>
<p>
	What would we do without it? And how do we actually prevent the misuse of it?
</p>
<p>
	When we're running our teams, and when we're working with them...
Sorry, when we're working on the software that they'll be running the team with.
</p>
<p>
	Oh anyway...
</p>
<p>
	So actually, I don't recall the first time that I met the next speaker.
</p>
<p>
	She's actually one of those people who you've heard of, who we've seen the name of... everywhere.
</p>
<p>
	In some articles at work, behind a commit, in some other places, or on LinkedIn! All over the place.
</p>
<p>
	And so of course, when we were thinking about data lens in culture.
</p>
<p>
	We were like, right we knew who to go to. It's Jenny.
</p>
<p>
	Her work in the last few years has been very focused on just that.
</p>
<p>
	Making sure that metrics, data, and culture intertwine in the best possible way.
</p>
<p>
	And so please welcome Jenny Sahng.
</p>
<p>
	[audience applause]
</p>
<p>
	<strong>Jenny:</strong>
</p>
<p>
	Hi my name is Jenny.
</p>
<p>
	I'm a data scientist and product lead at a kiwi startup called Multitudes.
</p>
<p>
	And I just really appreciate everyone being here. I know it's 3:30pm; it's like, peak nap time.
</p>
<p>
	So thanks for being here, and I hope it's an interesting talk.
</p>
<p>
	I know we've heard a lot about engineering metrics today: DORA, all the rest of it.
</p>
<p>
	So I'd like to expand on that a little, by talking about how we actually use these metrics to uncover insights about how our engineering teams are going, in a way that's empowering, sustainable, and — crucially — not creepy.
</p>
<p>
	I'll just share a bit about like why I'm qualified to talk about this.
</p>
<p>
	The company I work for — Multitudes — started out because our CEO (Lauren who's second from the right) was running a diversity, equity, and inclusion consultancy.
</p>
<p>
	They gave workshops to teams about... you know the ones.
</p>
<p>
	It's a really great opportunity to get everyone on the same page to skill up, so that everyone has the same language to work with.
</p>
<p>
	When they're talking about how we might make a better team culture for everyone on teams.
</p>
<p>
	So Lauren knew that workshops are just part of the solution, when an organisation is working on becoming more equitable and inclusive.
</p>
<p>
	That really drove home, when a company that they were thinking about working with... Some DEI things made national news, because it's a pretty big workplace culture scandal.
</p>
<p>
	I had to block out that thing [points at white out protest sign], in case there are legal ramifications of that.
</p>
<p>
	But yeah, I think everyone would have heard of it. It was a huge thing.
</p>
<p>
	This really drove home the fact that diversity equipment inclusion, can never be like a one and done thing.
</p>
<p>
	You need to have better feedback loops. It has to be embedded into the everyday culture.
</p>
<p>
	So after workshops after a one-off speaker comes in, how do teams themselves know that they're actually improving in these metrics, in these sort of pillars?
</p>
<p>
	So Employee Engagement surveys. They're really cool. They're interesting.
</p>
<p>
	They're very rich in qualitative information.
</p>
<p>
	But the accuracy depends on how many people actually choose to respond, and the data could be unreliable.
</p>
<p>
	Talking to people — of course — is the best but it's not very scalable
</p>
<p>
	It's quite time intensive for people to have those kinds of in-depth conversations, and also depends on how willing people are to share.
</p>
<p>
	So ultimately we wanted to give people a way to have easy and regular feedback loops on how things are going. That means individuals and teams can track their progress, have data for retros and one-on-ones that are — sort of — more informed, and just have better conversations that lead to a culture that everyone can participate in fully.
</p>
<p>
	So that's how our Multitudes was born.
</p>
<p>
	Over the past few years, we've been speaking to literally hundreds of engineering managers, CTOs, developers.
</p>
<p>
	Many of whom are in this crowd. So thank you, if you've been part of that journey, to learn what the biggest challenges are that people face in engineering teams. What's worked, and why.
</p>
<p>
	We think metrics can help with some of those challenges, when used in the right way.
</p>
<p>
	So I'd like to distill those findings for you.
</p>
<h4>What makes up a strong team culture?</h4>
<p>
	First off, let's talk about why engineering culture is important in the first place. I think after reading and watching all the slides, and watching all the talks, I'm sort of like:
</p>
<p>
	"Wow okay, this audience really knows why it's important."
</p>
<p>
	But I'm just going to keep going.
</p>
<p>
	So you might have heard the quote "culture eat strategy for breakfast"
</p>
<p>
	It's saying that "no matter how great your business strategy is, it's going to fail if you don't have a team culture to back it up, and have people on board and pulling in the same direction"
</p>
<p>
	There's a parallel for engineering teams.
</p>
<p>
	Lauren often says "code is easy people are hard".
</p>
<p>
	The biggest challenges that people often face are not technical hurdles.
</p>
<p>
	Which — while difficult — a strong team can work through them and find solutions.
</p>
<p>
	Allen mentioned in his talk that "tech systems are inherently sort of social systems".
</p>
<p>
	So often the things that cause a team to fall apart, are things like: restructures that take a while to ramp up from, personalities that haven't learned to work together yet, a lack of alignment and priorities...
</p>
<p>
	All sort of people problems.
</p>
<p>
	It's like this meme, which I think was a leak from like Xero's memes channel.
</p>
<p>
	You can like, leave Xero, but the yeah the memes don't leave you.
</p>
<p>
	[audience laughs]
</p>
<p>
	We've all been in the situation before. I'm doing a bit of product now, so I kind of... know the feels.
</p>
<p>
	We've been in this situation before because it is so easy for team culture to fall into these common traps.
</p>
<p>
	With engineering and product feeling at odds. Not being aligned on priorities. Goals and stakeholders not being clearly communicated or understood clearly.
</p>
<p>
	These are all people things, and culture is what drives that — for the better or for worse.
</p>
<p>
	So what makes up a strong team culture?
</p>
<p>
	Google has done a lot of research on this. They had a project called <a rel="external" href="https://rework.withgoogle.com/guides/understanding-team-effectiveness/steps/introduction/">Project Aristotle</a>.
</p>
<p>
	It studied hundreds of teams and found that psychological safety, was by far the most important factor or the best predictor, for a high performing team.
</p>
<p>
	So this means a sense of shared trust, that team members feels safe to take risks.
</p>
<p>
	You can imagine things like: a blameless culture when it comes to incidents, or the sense that you won't be shunned if you bring up tough issues, or throw a spanner in the works because you point out a problem in the plan, or proposing a new idea, and also knowing that you can ask questions or ask for help, without anyone thinking you're silly.
</p>
<p>
	So it's pretty easy to see why psychological safety, would be really valuable for a team's success.
</p>
<p>
	The second thing that fosters strong team dynamics is shared experience.
</p>
<p>
	There's lots of studies in <a rel="external" href="https://en.wikipedia.org/wiki/Industrial_and_organizational_psychology">org psych (Organisational Psychology)</a> over many decades, that show that teams that have worked together in the past perform better.
</p>
<p>
	That's the case for software developers, security analysts, surgeons, astronauts, basketball teams.
</p>
<p>
	There has probably been a case study for it.
</p>
<p>
	But in the world of fast-moving teams and fast-moving projects, and especially in our industry where churn is quite a bit higher than other Industries.
</p>
<p>
	Shared team experience can be a rarity.
</p>
<p>
	Also more recent research suggests that, while team familiarity can be good for really routine things, it might be less effective for tasks that require new thinking and innovation.
</p>
<p>
	For these reasons, restructures and team changes are probably unavoidable.
</p>
<p>
	But how do we manage that? And manage the negative impacts, when you have these ruptures in shared experience?
</p>
<p>
	The last thing is the environment.
</p>
<p>
	So there's been lots of studies that have found that, environments with both diverse teams and where everyone feels included, results in significantly higher business outcomes.
</p>
<p>
	80% increase in the ability to innovate.<br>
	31% increase in responsiveness to changing customer needs.
</p>
<p>
	So I mean... aside from all the other reasons why diversity and inclusion are important, even if you had only capitalist reasons for it, here they are.
</p>
<p>
	While employee engagement and satisfaction surveys can give you visibility on this, as I mentioned earlier they can get low response rates.
</p>
<p>
	They're kind of hard to interpret. It's hard to pull out the key themes without your own unconscious bias casting a lens over it.
</p>
<p>
	So yeah these things are really important, but they can be hard to measure.
</p>
<p>
	So this is where engineering metrics can come in.
</p>
<h4>
  Engineering metrics
</h4>
<p>
	They provide accompaniment to things like conversations and one-on-ones and employee engagement surveys.
</p>
<p>
	They collect data from a different source to those, in a place where your team members are working — online.
</p>
<p>
	So they've been getting a lot of airtime recently, and not all good.
</p>
<p>
	There's been some pretty big horror stories recently with CEOs laying off developers based on lines of code written, or tools that stack rank employees based on some arbitrary metric, and just quite general big brother-esque vibes that track and monitor behaviour.
</p>
<p>
	So yeah, it's just it's a bit of a wild west out there, and it's kind of hard to know.
</p>
<p>
	Everyone's saying "Oh you need DORA metrics", "You need these metrics" but it is quite hard to work through.
</p>
<p>
	Having said that, metrics can provide real value in helping us improve what matters to us.
</p>
<p>
	As long as we're thoughtful about what we choose to measure, and how.
</p>
<p>
	So here are two examples.
</p>
<p>
	Laura Tacho, a VP of engineering and a leadership coach.
</p>
<p>
	She highlights the benefits of measuring what you want to improve, but also the risks and how you should roll it out.
</p>
<p>
	Rebecca here was an engineering manager at Stripe.
</p>
<p>
	When she was rolling out developer metrics, she found it valuable in how it informed team conversations.
</p>
<p>
	So we can see that engineering metrics, like DORA and some other ones I'll touch on, can bring value.
</p>
<p>
	It can give you better visibility over team health; especially in a world where remote working is now the norm.
</p>
<p>
	I mentioned in the intro that it can help with providing fast feedback loops on not just team performance and system stability, but also aspects of team culture.
</p>
<p>
	A case that I saw at multitudes that really inspires me, and I think back to a lot, is that there was a team where a manager thought one person was doing a lot less work than others.
</p>
<p>
	The team had access to not just performance data, but also data on collaboration.
</p>
<p>
	So they saw they saw that this person was actually getting less feedback than everyone else, by quite a significant margin.
</p>
<p>
	Which is a pretty key ingredient for growth and learning.
</p>
<p>
	I mean in the case of software, you need reviews. You need co-reviews to ship things.
</p>
<p>
	Coincidentally, that person also happened to be the only woman in the team.
</p>
<p>
	There's lots of research out there that shows that women receive less feedback, and the feedback they do receive, is less specific and actionable.
</p>
<p>
	So that team was able to use the data insight to work on distributing feedback more evenly across the team.
</p>
<p>
	So yeah, you can definitely see that there are ways metrics can be used to identify issues early, measure progress, inform decisions, and bring that in — along with the human context — to make decisions.
</p>
<p>
	It can help you see past blank spots and unconscious biases, and reveal insights that you might not have picked up on your own with just your own lens on how the team's going.
</p>
<p>
	The question of what to measure is really important, but fortunately a lot of that thinking has already been done for us, in our industry.
</p>
<p>
	There are two main complementary frameworks, that are widely accepted as industry standards.
</p>
<p>
	They're the result of years of org psych.
</p>
<p>
	So it can really help you skip over all the pitfalls that you could fall down.
</p>
<p>
	Measuring reductive metrics like lines of code, or numbers of pull requests per person, and it can help you avoid those backfirings.
</p>
<p>
	So the first one is <a rel="external" href="https://dora.dev/">DORA</a> (stands for DevOps, Research, and Assessment).
</p>
<p>
	It's the result of years of research across thousands of teams, for a reliable and actionable set of metrics to understand software team performance.
</p>
<p>
	It's from the book, Accelerate, which was mentioned earlier.
</p>
<p>
	So you've got two velocity metrics and two stability metrics. I won't go over them because it's been talked about a lot, and you can look it up.
</p>
<p>
	But yeah, I think the key to understand is that, they're really good at covering a broad base of system stability, and software team performance.
</p>
<p>
	How you measure these is dependent on your stack.
</p>
<p>
	There's lots of tools out there to help you get this started.
</p>
<p>
	You can build your own dashboard.<br>
	You can try and open source, or you can pay for a tool.
</p>
<p>
	There are lots of options.
</p>
<p>
	These have kind of become a standard, because now every year they put out "State of DevOps" report.
</p>
<p>
	That means you can benchmark your teams against your industry — even your subsection of the industry — similar organisation size, and also shows trends of how their industry is evolving their practices.
</p>
<p>
	So the authors of DORA then moved on to expand it in 2021, to capture more of the human elements of engineering performance.
</p>
<p>
	Because they recognised that engineering productivity is about so much more than just activities, incidents, pull requests, and deploys.
</p>
<p>
	It expands on DORA to include well-being, collaboration, satisfaction — that sort of thing.
</p>
<p>
	So you've got satisfaction and well-being. So that's — you know — burnout efficacy.
</p>
<p>
	Does everyone have the tools that they need?
</p>
<p>
	Performance.
</p>
<p>
	So quality — including change failure rate, time to restore — but also things like "are we moving the needle on customer satisfaction?", activities or the deployment frequency, incidents, and the severity of the incidents.
</p>
<p>
	Communication and collaboration is the one that I am really interested in.
</p>
<p>
	So it's things like who's working with who? Like knowledge silos.
</p>
<p>
	Around how long does it take to onboard someone?
</p>
<p>
	Who's doing a lot of the support work? The documentation, the reviews...
</p>
<p>
	And yeah, as Aleisha mentioned in her talk. It's not just about who needs support.
</p>
<p>
	It's about getting visibility on whether you've got a culture, that allows everyone to give feedback to anyone.
</p>
<p>
	It's not just juniors getting support from seniors. It's juniors being able to have the freedom to ask questions, and then to question — guess like — infrastructure decisions or architecture decisions, that other people have made.
</p>
<p>
	I think that's a really important part of the <a rel="external" href="https://queue.acm.org/detail.cfm?id=3454124">SPACE</a>, and in an area where it really expands on door in a cool way.
</p>
<p>
	The last one is efficiency and flow. So that's lead time sort of thing, but also:
</p>
<p>
	How much focus time are people getting?<br>
	How often are people getting interrupted?<br>
  How long do people wait for reviews?
</p>
<p>
	To give an example of why incorporating well-being and collaboration is important.
</p>
<p>
	This is just a made-up example. So let's say team Yetis is shipping code faster. Which is a performance or activity metric from DORA.
</p>
<p>
	But they're also doing more out of hours work. So the well-being metric is going badly.
</p>
<p>
	This makes sure that people aren't getting higher performance at the expense of well-being,
</p>
<p>
	which would never be sustainable anyway.
</p>
<p>
	It's often an early indicator of burnout and churn.
</p>
<p>
	So this is why space is a really great way to measure, not just the performance, but everything else that leads to long-term sustainable performance.
</p>
<p>
	So that's cool, but how do you use these metrics day-to-day, and how do you do it in  a way that will empower teams?
</p>
<h4>How to use metrics day-to-day</h4>
<p>
	There are four rules of thumb that I'd like to propose today.
</p>
<p>
	The first is to remember that the data is never the full picture.
</p>
<p>
	So you could look at these development metrics to prepare for a retro, a one-on-one, or a stand-up.
</p>
<p>
	It's a good idea to use them as a conversation starter, and not hard evidence of something going absolutely wrong or right.
</p>
<p>
	We recommend presenting the data in a way that promotes discussion.
</p>
<p>
	So you could ask something like "hey it looks like deployment frequency has been dropping over the last two cycles,
</p>
<p>
	does that line up with how things are feeling on the ground in the team? Are there any ideas on what could be contributing?"
</p>
<p>
	That gives the team opportunity to bring their own context and to share, maybe they're working on some tech debt, or there's a big gnarly refactor going on, or maybe the data is being measured wrong and you need to change that.
</p>
<p>
	But the team should have an opportunity to weigh in on that.
</p>
<p>
	Much like what people have been saying about security as well.
</p>
<p>
	The team has the most context and it would be a real shame to not use that, when you're interpreting this information.
</p>
<p>
	It's just a good practice for interpreting data in general; bringing the real world context into those numbers, and not using numbers as the be-all and end-all.
</p>
<p>
	Secondly, openness.
</p>
<p>
	So it's really important to let your team know that you're trying out engineering metrics, and get buy-in from them first.
</p>
<p>
	There are some real horror stories that I've come across where, people write out the metrics framework without buy-in.
</p>
<p>
	And that really damaged the trust and the team cohesion.
</p>
<p>
	So giving your team members opportunities to weigh in on how metrics are being used.
</p>
<p>
	And then a few weeks later — maybe in a retro — checking in on how it's going, whether it's useful, and how they can change, how it's being used, if there's any feedback on what's good and what's not, and then coming up with the solution together.
</p>
<p>
	So in the same way that teams should be maintaining values, product ideas, infrastructure, and team norms that should be created and maintained together as a team.
</p>
<p>
	The same should go for the metrics that the team is holding themselves by.
</p>
<p>
	So on that note, being transparent about the data being collected is really important as well. We really recommend giving teams access to their own data if possible.
</p>
<p>
	That creates a high trust environment.
</p>
<p>
	It also lets the team members view and use their own data to set their own goals, and keep themselves accountable.
</p>
<p>
	In my view, an example of a really empowered team is when an individual in a 1-on-1, can use their own data to set their own goals, to work towards them, keep track, and then advocate for that in the next performance review. And say
</p>
<p>
"Hey I set this goal. This was what I want to get to, and I got to it"
</p>
<p>
	We really recommend that transparency of sharing data, and giving people access to their own data.
</p>
<p>
	The last one is we really recommend that you don't track, and you certainly don't rank, by individual performance metrics.
</p>
<p>
	That's things like lines of code, numbers of pull requests, how fast people are merging their PRs; shown at an individual level.
</p>
<p>
	This might seem intuitive but it's... it's a whole thing at the moment.
</p>
<p>
	Firstly, it's just not useful. Software's a team sport.
</p>
<p>
	If someone's taking ages to merge a PR, that's probably not their fault.
</p>
<p>
	They need other people to be reviewing their code, it might be really complex, maybe they're stuck with all the glue work to help other people on the team move faster.
</p>
<p>
	So it's not really about the individual at all.
</p>
<p>
	It doesn't give any bearing on the individual's contribution to the team.
</p>
<p>
	Secondly, knowing that people's performance is being measured using simplistic measures like these, means that people are incentivised to game them, rather than focusing on the team's goal. That's just the last thing you want — seriously — your engineers will be working on.
</p>
<p>
	I think recently there was a pretty well-known company that tried to roll out some individual performance metrics, then have it feed into performance reviews, and developers just ended up writing scripts to game their commits.
</p>
<p>
	That's just it's just the last thing you want people spending time on. And you can imagine what they did to the culture, and the trust in the team.
</p>
<p>
	So yeah, just don't go there basically. It's pointless and it'll be terrible.
</p>
<h4>Summary</h4>
<p>
	So — on that note — to summarise.
</p>
<p>
	Metrics are a really great way to make sure that important things aren't being missed in the conversations you're already having.
</p>
<p>
	So we know that getting culture is right can be challenging. But it is crucial to any team's success.
</p>
<p>
	When it's done right, metrics can help you progress towards a more equitable culture; as a valuable data point, alongside other data like qualitative feedback or observing your teams in person.
</p>
<p>
	There are lots of frameworks out there to get you started like DORA and SPACE.
</p>
<p>
	They can help you avoid some of the pitfalls of metrics: like making sure you're measuring the right thing, making sure you have visibility over well-being and collaboration, as well as performance.
</p>
<p>
	Then how you measure those things in a way that helps you move with the rest of the industry — if you're interested in that.
</p>
<p>
	When you implement these frameworks and use them day-to-day, we really recommend keeping the human context in the picture by using these data insights as conversation starters.
</p>
<p>
	People should ideally have access to their own data, or at least transparency of what metrics are being measured, and how they're being used.
</p>
<p>
	They should have opportunities to give feedback on how it's going.
</p>
<p>
	Then finally, it's important to remember that the mythical 10x developer is not a thing anymore.
</p>
<p>
	It's very 2010. It's counterproductive to focus on individual performance.
</p>
<p>
	Software as a team sport. So the focus should always be on the team level.
</p>
<p>
	So that's the talk. Thank you for your time and attention.
</p>
<p>
	Some things that you can check out if you're interested. And yeah, I'm happy to take questions.
</p>
<p>
	[audience applause]
</p>
<p>
	<strong>Prae:</strong>
</p>
<p>
  Well, we actually do have some time for the horrifying Q&amp;A if you're okay with that.
</p>
<p>
	Please be nice, it's the end of the day.
</p>
<p>
  Any questions for Jenny?
</p>
<p>
	<strong>Audience:</strong>
</p>
<p>
  Are there any tools that you know of, that can easily hook into a repo, and give these metrics?
</p>
<p>
	<strong>Jenny:</strong>
</p>
<p>
  Sorry, "are there any tools that..." What was the last part of the question?
</p>
<p>
	<strong>Audience:</strong>
</p>
<p>
  Hook into repos to give metrics.
</p>
<p>
	<strong>Jenny:</strong>
</p>
<p>
  Oh um... Multitudes?
</p>
<p>
  [audience laughs]
</p>
<p>
	Yeah... there are lots. Like, there are heaps out there. Um...
</p>
<p>
	Ah yeah, I don't know how to make this not salesy. [awkward laugh]
</p>
<p>
	We really care about well-being, collaboration, as well as performance?
</p>
<p>
	But yeah there are a lot out there if you Google DORA metrics or engineering metrics tool.
</p>
<p>
	<strong>Prae:</strong>
<p>
  I'm just adding to that.
</p>
<p>
  I think Multitudes and Jenny does put out a lot of blog posts and content around this sort of improvement as well.
</p>
<p>
	So even if you don't have the budget, their content is still excellent, and their meetups are still quite good as well.
</p>
<p>
  <strong>Audience:</strong>
</p>
<p>
  One of the things we've struggled with is time to recover, because an incident is a complex thing; from when a customer first experiences it, through to when a team first realises it, to when a team realises it's actually their fault, through to when the team deigns to respond to it.
</p>
<p>
	Sometimes you have... incidents that's really incidents.
</p>
<p>
	And they drag on for 3 or 4 days because nobody has priority.
</p>
<p>
	How do you deal with that sort of noisiness in the data around recovery?
</p>
<p>
	<strong>Jenny:</strong>
</p>
<p>
  So, just to make sure I got the right question. Are you asking
</p>
<p>"How do you get clean data on cases like incidents, where the start can be really tricky. Attributing it to a team can be really tricky." That sort of thing?
</p>
<p>
	Yeah Mean Time To Restore (one of the 4 DORA metrics) is quite tricky to measure, and it does rely on the team agreeing on a set of norms around how you deal with incidents.
</p>
<p>
	So once the incident is open, we're going to like — flag an Ops Genie, have this go to the Slack channel...
</p>
<p>
	I mean you can do it really lightweight. You could just do it on a Slack Channel and say
</p>
<p>
	"Hey P1 happening here. Check this link on this CloudWatch log".
</p>
<p>
	But whatever you define it as, that is how... it really depends on the team.
</p>
<p>
	So if you want to do a really light touch thing, you can do that. Then just chuck it into a spreadsheet.
</p>
<p>
	If you want to use a proprietary tool, you can have it link up to whatever IMS tool you've got.
</p>
<p>
	Then say like "incident start is when you should start measuring, incident closes is when you should stop measuring"
</p>
<p>
	And then another tool would normally calculate that for you.
</p>
<p>
	In terms of how complex want to make it, it depends on the team and the kind of processes you're after.
</p>
<p>
	<strong>Prae:</strong>
</p>
<p>
  I saw you, the person in the back on that corner.
</p>
<p>
	<strong>Audience:</strong>
</p>
<p>
  Hi. Thank you.
</p>
<p>
	How do you measure teams well-being, and define it without constant surveys that drag down their well-being.
</p>
<p>
	[audience laughs]
</p>
<p>
	<strong>Jenny:</strong>
</p>
<p>
	Yeah... it's... Oh, the question. The question's
</p>
<p>
	"How do you measure well-being in a good way, without constant surveys that dragged down the team and drag things out?"
</p>
<p>
	So... the way that we measure well-being is, we measure out of hours commits.
</p>
<p>
	So people can set the hours that you expect people to be working, and if it's outside of those hours, then it's counted.
</p>
<p>
	It can be sort of like "Oh so-and-so did a bunch of out of hours commits on a Sunday" and then they could feed into a one-on-one where you're like
</p>
<p>
	"Oh did you want some time in lieu? Or is it something we can change, to make sure that you're not crunched like that in the future?"
</p>
<p>
	That's like one way to do it.
</p>
<p>
	Obviously wellbeing is so broad, and so things around surveys...
</p>
<p>
	I mean we're sort of experimenting with very light touch ways to do surveys.
</p>
<p>
	But you can push that to Slack and make it a one-question thing, where it's just like a pulse check.
</p>
<p>
	I think these are things that teams do already. Like those <a rel="external" href="https://www.atlassian.com/team-playbook/health-monitor">Team Health Checks</a> — you know — red-yellow-green traffic lights.
</p>
<p>
	We're sort of interested in how do you collate that data, and present it in a way that's actionable.
</p>
<p>
	<strong>Prae:</strong>
</p>
<p>
  And that would be the last question, before we transition.
</p>  
<p>
	<strong>Audience:</strong>
</p>
<p>
	Thank you so much for raising awareness of this topic.
</p>
<p>
	The topic of looking at the picture holistically and the engineering experience.
</p>
<p>
	My question is around one of the first topics that you touched on which is understanding the context.
</p>
<p>
	So... what we've done in the past is, we've gotten all these metrics, which is really interesting.
</p>
<p>
	But it's hard to understand what is the cause behind them; like if you've got low satisfaction scores.
</p>
<p>
	Do you have any insights, as to how you can get a better understanding of the reasons behind the metrics?
</p>
<p>
	<strong>Jenny:</strong>
</p>
<p>
	So, the question was "How do you get the context behind the metrics?
</p>
<p>
	So you've got all these numbers... But how do you know what's causing them, and how you can change them?"
</p>
<p>
	I think this is where coaching comes in.
</p>
<p>
	This is sort of where engineering managers come in; your experience, work you do with talking to your team members, having those retros, and things like that.
</p>
<p>
	I don't think metrics should ever replace that.
</p>
<p>
	The reasons and the causes behind it will be different for each team.
</p>
<p>
	They tend to be sort of similar.
</p>
<p>
	I mean, there's a lot of research that's already been done about what impacts developer satisfaction.
</p>
<p>
	It's often things like lack of autonomy, not being able to work on something that allows you to grow, lack of growth opportunities, work-life balance...
</p>
<p>
	There are set buckets that they tend to fall into, but even then you definitely want to be having conversations with people to figure out exactly what it is, and what solution would work for that person and that team.
</p>
<p>
	So yeah, it's the same stuff. But — we think — better inform by data.
</p>
<p>
	<strong>Prae:</strong>
</p>
<p>
  Okay and that is the last of the questions for Jenny. Thank you so much.
Please give her a round of applause.
</p>
<p>
	[audience applause]
</p>
{% endlayoutblock %}
