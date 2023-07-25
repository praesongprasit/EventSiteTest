---
fullName: Aleisha Amohia
jobTitle: Koha Technical Lead
organisation: Catalyst IT
bio: "<p>Aleisha Amohia is a passionate young advocate for diversity and equity, sparked by her experiences as a young Māori-Asian woman in the technology industry.</p>

<p>Aleisha is the Koha Technical Lead at Catalyst IT, an open source software company, where she started out as an intern in 2014. She is also a Victoria University of Wellington graduate with a Bachelor of Science (Computer Science and Artificial Intelligence) and a Bachelor of Commerce (Management and Information Systems).</p>

<p>Aleisha is also actively involved in community organisations, with links to the National Council of Women New Zealand, Wellington Alliance Against Sexual Violence, InternetNZ, Victoria University of Wellington Women in Tech, and more.</p>"
profileUrl: [{
  "name": "Website",
  "url" : "https://aleisha.nz",
  "icon": "code"
},{
  "name": "LinkedIn",
  "url" : "https://www.linkedin.com/in/aleishaamohia/",
  "icon": "linkedin"
},{
  "name": "Twitter",
  "url" : "https://twitter.com/aleishaamohia",
  "icon": "twitter"
}]
profilePhoto: /assets/images/speakers/aleisha_amohia.jpg
profilePhotoAltText: Aleisha is pictured smiling at her university graduation parade, on the steps of Civic Square. She is wearing a korowai with blue, green, black and white detailing atop her graduation gown.
event: NZTechRally2023
talkTitle: Communities in code
talkExcerpt: Aleisha will share her experiences working in open source projects and how open source values may influence culture.
talkStartTime: 2023-07-07T11:00:00.000+12
talkEndTime: 2023-07-07T11:30:00.000+12
featuredImage: /assets/images/speakers/aleisha_amohia_og_updated.png
featuredImageAlt: "Communities in code by Aleisha Amohia, Koha Technical Lead at Catalyst IT. Join us to hear Aleisha and other speakers at NZ Tech Rally, 7th July, Wellington"
featuredImageType: image/png
featuredImageWidth: 1200
featuredImageHeight: 630
talkRecordingID: wSa_nABUypw
---

{% layoutblock 'talkAbout' %}

<p>Open source software is a powerful sector of the technology industry - code that is free to use and share, community-driven projects, and global development.</p>

<p>Aleisha Amohia is a Technical Lead at Catalyst IT, a software company based in Wellington which specialises in open source software. She will share her experiences working in open source projects and how open source values may influence culture.</p>
{% endlayoutblock %}

{% layoutblock 'bio' %}
{{ bio | safe }}
{% endlayoutblock %}

{% layoutblock 'talkReferences' %}

<ul>
  <li><a rel="external" href="https://www.rnz.co.nz/programmes/the-detail/story/2018858864/the-anatomy-of-a-pepeha">Pepeha (Māori introduction)</a></li>
  <li><a rel="external" href="https://nzosa.org.nz/">NZ Open Source Awards</a></li>
  <li><a rel="external" href="https://koha-community.org/">Koha open source library system</a></li>
  <li><a rel="external" href="https://maoridictionary.co.nz/search?&keywords=aroha">Aroha</a></li>
  <li><a rel="external" href="https://www.imsb.maori.nz/maori-wellbeing-in-tamaki-makaurau/manaakitanga/">Manaakitanga</a></li>
  <li><a rel="external" href="https://www.imsb.maori.nz/maori-wellbeing-in-tamaki-makaurau/whanaungatanga/">Whanaungatanga</a></li>
  <li><a rel="external" href="https://tereomaori.tki.org.nz/Curriculum-guidelines/Teaching-and-learning-te-reo-Maori/Aspects-of-planning/The-concept-of-a-tuakana-teina-relationship">Tuakana / Teina</a></li>
  <li><a rel="external" href="https://teara.govt.nz/en/kaitiakitanga-guardianship-and-conservation">Kaitiakitanga</a></li>
  <li><a rel="external" href="https://www.imsb.maori.nz/maori-wellbeing-in-tamaki-makaurau/rangatiratanga/">Rangatiratanga</a></li>
</ul>
{% endlayoutblock %}

{% layoutblock 'talkTranscript' %}

<p>
  <strong>Prae:</strong>
</p>
<p>
  Our next speaker.
</p>
<p>
  When I approached this person, we were like... this person is so versatile.
</p>
<p>
  She knows and been involved in so many aspects of software culture and diversity initiatives that really, she could speak on anything along that spectrum.
</p>
<p>
  So it actually took us a whole week and a half to two weeks, to get back to her to confirm which thing we really wanted to hear her speak about.
</p>
<p>
  We've decided you know what?
</p>
<p>
  Open source is something that we use all the time. Whether we contribute back or not... eh... we try.
</p>
<p>
  We wanted to hear Aleisha's take on it because she has worked and spent so much time making sure that this is a great community.
</p>
<p>
  Making sure that the spirit of open source remains alive and well and supportive.
</p>
<p>
  So please welcome Aleisha Amohia of Kota... see there we go, a Koha Technical Lead at CatalystIT. Thank you.
</p>
<p>
  <strong>Aleisha:</strong>
</p>
<p>
  Ah... I te tuatahi ngā mihi ki ngā tāngata whenua o te rohe nei.<br>
  Na ratau te mana, na ratau te whenua,<br>
  na ratau te tino rangatiratanga mo ake tonu.<br>
  I te tuarua,<br>
  Ko Ruapehu te maungal<br>
  Ko Whanganui te awal<br>
  Ko Aotea te waka.<br>
  Ko Te Āti Haunui-a-Pāpārangi te iwi.<br>
  Nō Taumarunui me Cambodia me India au.<br>
  Kei te noho au ki Te Whanganui-a-Tara.<br>
  Ko Aleisha Amohia tōku ingoa.<br>
  Tēnā koutou, tēnā koutou, tēnā tātou katoa.
</p>
<p>
  Hello everyone. My name is Aleisha Amohia.
</p>
<p>
  I've just introduced myself with a <a rel="external" href="https://www.rnz.co.nz/programmes/the-detail/story/2018858864/the-anatomy-of-a-pepeha">Pepeha</a>, which is telling you where I come from.
</p>
<p>
  I also acknowledged the Mana Whenua, the local iwi of this area, who never ceded sovereignty.
</p>
<p>
  So... let's get into it
</p>
<p>
  First off ko wai au (who am I).
</p>
<p>
  I was born and raised here in windy Wellington, but I whakapapa to Taumarunui,and India on my dad’s side, and Cambodia on my mum’s side.
</p>
<p>
  In my day job, I'm a software developer and Technical Lead at Catalyst.
</p>
<p>
  I've been at Catalyst since 2014.
</p>
<p>
  What started as a summer internship, turned into my whole career.
</p>
<p>
  Catalyst kept me on part-time while I studied here at Te Herenga Waka or Victoria University of Wellington.
</p>
<p>
  I did a Bachelor of Science, majoring in Computer Science, specialising in Artificial Intelligence, and a Bachelor of Commerce, majoring in Management, minoring Information Systems.
</p>
<p>
  It's a lot of words.
</p>
<p>
  It's just a fancy way of saying I've got two certificates really.
</p>
<p>
  I became full-time at Catalyst when I graduated from Vic in 2020.
</p>
<p>
  So I had one of those lockdown graduations.
</p>
<p>
  On the side, I also volunteer with a bunch of organisations and initiatives.
</p>
<p>
  Most of them revolve around gender equity, and in general just trying to make society better.
</p>
<p>
  Anyways enough about me. I'm here to talk to you today about open source software and culture.
</p>
<p>
  I'm an open source software developer.<br>
  Catalyst is an open source software company.
</p>
<p>
  I'm hoping that by the end of this, you'd all have heard the words "open source" so much that'll be in your dreams. And you're going to email me, and ask me what projects you can get involved in.
</p>
<p>
  I'm also going to be using a bit of Te Reo Māori in this talk because this is Aotearoa (New Zealand).
</p>
<p>
  We can't have a conference about culture, and not hear a little bit of Māori today.
</p>
<p>
  So if you don't understand any of the kupu, or the words that I use feel free to talk to me after.
</p>
<p>
  But yeah that's what this is all about, is bringing those words into this context. So... sweet as.
</p>
<p>
  What is open source you may ask?
</p>
<p>
  Open source software projects make their source code available to view to use and to share.
</p>
<p>
  Anyone can come along and read the code. They can copy it. They can turn it into something else, and in some cases they can build upon it and modify it.
</p>
<p>
  Open source software projects usually attracts a community made up of a range of people, often from around the globe, who bring different experiences and perspectives, and share their knowledge, their resources, and their time.
</p>
<p>
  Catalyst — where I work — as an open source software company, we provide solutions and support for and with open source software.
</p>
<p>
  So this ranges from teams who use open source software for bespoke development solutions, to teams focused entirely on the hosting, and support of one open source product.
</p>
<p>
  Catalyst was founded over 25 years ago, and now has around 300 employees spread across Aotearoa, Australia, the UK, Europe, and Canada.
</p>
<p>
  Catalyst also provides the only NZ owned and operated cloud computing service built upon open source technology.
</p>
<p>
  We even host the <a rel="external" href="https://nzosa.org.nz/">NZ Open Source Awards</a>, which recognises and celebrate the outstanding work done with free and open source software, and the artistic scientific and social outcomes it delivers in NZ.
</p>
<p>
  I copy pasted that obviously.
</p>
<p>
  So it's fair to say that there is a market for free software.
</p>
<p>
  At Catalyst, I'm the Technical Lead of the Koha team.
</p>
<p>
  So <a rel="external" href="https://koha-community.org/">Koha</a> — if you don't know what it is — is the world's first open source library system, developed originally for Horowhenua Libraries Trust in 1999.
</p>
<p>
  So when I say library system, I really do mean the place where there are books, and you go in and check them out, and there's a nice person behind the desk that says:
</p>
<p>
  "Yes please bring it back in two weeks" or something.
</p>
<p>
  I'm going to be discussing open source culture today, from my perspective as a Koha developer.
</p>
<p>
  The Koha project has been around a really long time. Nearly 25 years, and  it uses a bunch of programming languages.
</p>
<p>
  It's been maintained by teams all around the world. So I think it's got the range and the longevity, to give you a good idea of the culture within open source projects and communities.
</p>
<p>
  So, let's start from the start.
</p>
<p>
  As I said Koha is a NZ born solution, for which development started in 1999.
</p>
<p>
  Horowhenua Libraries Trust had a proprietary library system with the Y2K bug, and they needed something different.
</p>
<p>
  They wanted it to be free. So Koha was actually created as a solution for that.
</p>
<p>
  Creating the world's first open source integrated library system took courage, took leadership.
</p>
<p>
  And that's exactly what Katipo Communications and Horowhenua Libraries Trust showed when they built Koha; maybe a little bit of arrogance too.
</p>
<p>
  At Catalyst, we're really blessed to still have one of the original Koha developers: Chris Cormack.
</p>
<p>
  Some of you might know him and he always starts the story about developing an open source library system with the famous question
</p>
<p>
  "How hard could it possibly be?"
</p>
<p>
  [audience chuckles]
</p>
<p>
  Open source software is often responding to needs of the community.
</p>
<p>
  That means that it's built and fed into by the people, and for the people who will use it.
</p>
<p>
  Which says a lot about the culture I think, within our projects.
</p>
<p>
  People will choose to contribute to a project, not because it's a fast track to becoming a millionaire, or because it's going to impress people on LinkedIn.
</p>
<p>
  But because they believe in the kaupapa of the project (the purpose of it).
</p>
<p>
  They recognise the need it satisfies, and the value that it brings, and they want to be part of that When I talked to other Koha developers in France, or Germany, or the Pacific Islands. 
</p>
<p>
  They just want to know that what we're doing will solve problems for Koha users, and ideally not create problems for others, and make the product that we're putting out into the world, even more awesome.
</p>
<p>
  It's never about glory, or recognition, or massive profitability.
</p>
<p>
  For me that's a demonstration of <a rel="external" href="https://maoridictionary.co.nz/search?&keywords=aroha">aroha</a>, which easily gets lost in the fast-paced world of tech driven, by profit and innovation.
</p>
<p>
  My introduction to koha was in January of 2014 when I was 15 years old. I hate this photo [audience laughs] but I use it because it was my journey.
</p>
<p>
  Also, it's the only time in my life I have looked misleadingly tall.
</p>
<p>
  [audience laughs]
</p>
<p>
  So Catalyst was running an open source software Academy, which is a two-week holiday programme to immerse high school student in all things open source.
</p>
<p>
  The first week was all about tools and concepts we might need to learn.
</p>
<p>
  We learned about Git, the command line, user stories, design tools like Gimp and Ink Space, and a whole lot more.
</p>
<p>
  Then the second week was Project week, so we split into groups, and be guided to making our first contributions to a real-life open source project.
</p>
<p>
  Obviously I picked the koha project.
</p>
<p>
  We had a really rowdy group. We were quite disruptive; easily the class clowns of the academy.
</p>
<p>
  I'm very sorry to my mentors, who then became my colleagues, but I remember doing some really fun work.
</p>
<p>
  We upgraded bootstrap from three to four. I think I looked at unit tests. Looked at and then closed, but...
</p>
<p>
  [audience chuckles]
</p>
<p>
  look we spent barely four days inside the Koha code base, but I had so much fun using IRC, attempting to write patches, looking at a very long list of Koha bugs, and hacking away Over the course of the Academy.
</p>
<p>
  I became the 247th developer to have a patch pushed to Koha.
</p>
<p>
  This was made possible by two things.
</p>
<p>
  The first being that Koha has been maintained by a community of people who genuinely care.
</p>
<p>
  Who would stay up during our awake hours and their sleep hours, to provide support to eight kids in Wellington trying to learn to code.
</p>
<p>
  The second is that open source projects have really low barriers to entry.
</p>
<p>
  This is because they depend on people to keep them alive.
</p>
<p>
  There is a stack of Koha documentation, telling you how to set up your development environment, and what accounts you might need, because they need to make it easy for people to contribute. This is what <a rel="external" href="https://www.imsb.maori.nz/maori-wellbeing-in-tamaki-makaurau/manaakitanga/">manaakitanga</a> and <a rel="external" href="https://www.imsb.maori.nz/maori-wellbeing-in-tamaki-makaurau/whanaungatanga/">whanaungatanga</a> are like.
</p>
<p>
  As of 12 May 2023, there are 489 individual developers who have now pushed a patch to Koha.
</p>
<p>
  There are multiple initiatives every year at conferences and events, and usually at Catalyst, to facilitate new people to make their first contributions to Koha.
</p>
<p>
  People with this shared interest gather and get to know each other in an encouraging, supportive, and sharing kind of way.
</p>
<p>
  We've even done Koha bug squashing sessions with our own customers. So Koha Librarians are making contributions to the software they use every day.
</p>
<p> 
  It's really cool and also a very #OpenSource.
</p>
<p>
  It also demonstrates <a rel="external" href="https://tereomaori.tki.org.nz/Curriculum-guidelines/Teaching-and-learning-te-reo-Maori/Aspects-of-planning/The-concept-of-a-tuakana-teina-relationship">tuakana / teina</a>, where the experienced can awhi (help) the less experienced.
</p>
<p>
  We can all learn from each other, and in an open source Community, we switch roles and share knowledge in this way all the time.
</p>
<p>
  The open source development process is quite different from proprietary systems.
</p>
<p>
  Bugs and requests for new features or enhancements are logged in our bug tracking system, then someone will write a patch or a patch set, and attach it to a bug report, then someone from a different organisation has to come along and test it.
</p>
<p>
  If we get signed off, someone who didn't write the patch and didn't do the test needs to test it for quality assurance.
</p>
<p>
  After which it can get pushed Upstream.
</p>
<p>
  If it doesn't get signed off, someone can come back and do more work on that patch set.
</p>
<p>
  The development process is iterative, collaborative, and well documented.
</p>
<p>
  It can take a village to get even the smallest and most modest of fixes in.
</p>
<p>
  Sometimes there are cons to that.
</p>
<p>
  One of the biggest features that I contributed to Koha was a recall feature, which is a type of circulation that's used heavily in academic libraries.
</p>
<p>
  We were first sponsored to develop it back in 2017, and it finally got pushed to Koha in 2022.
</p>
<p>
  After years of enhancements, fixes, reworking, feedback, failed testing... and if you can see it at the bottom, 992 comments.
</p>
<p>
  So yes our process means that sometimes things get dragged out a little bit.
</p>
<p>
  But truthfully it encourages quality.
</p>
<p>
  This is an example of <a rel="external" href="https://teara.govt.nz/en/kaitiakitanga-guardianship-and-conservation">kaitiakitanga</a>.
</p>
<p>
  This process allows us to protect the whakapapa of our project (where it came from) and make sure that we never leave things worse off of than before. Always the same or better.
</p>
<p>
  It also fosters a a culture where it's okay to ask for help, to get things wrong, to try again, to make it easy for testers to respond to your code, and to build for the edge cases for the speakers of many languages and libraries of many shapes and sizes, who might use our software and interact with the changes that I'm trying to push.
</p>
<p>
  Every month I spend working on Koha makes me a better developer.
</p>
<p>
  So I've alluded to this already, but a lot of hands go into the development of Koha.
</p>
<p>
  Nearly 500 people over almost 25 years have contributed to the code, and Catalyst is just one vendor of Koha. There are also a few organisations in Europe, the United States, Australia and some other places.
</p>
<p>
  The special thing is that there is no single organisation who owns or maintains Koha, which is something that can only be done through open source software.
</p>
<p>
  Instead Koha is owned by its users, by its community.
</p>
<p>
  
  So this is a photo of two librarians from Toi Ohomai and Chris Cormack, wearing their super librarian capes, which the librarians made for us.
</p>
<p>
  In the libraries or at least in Koha we have a super librarian user which gives them access to all of the functions of Koha. and also means that we're superheroes.
</p>
<p>
  When there is a shared ownership, and we're working towards these shared goals, that's called kotahitanga.
</p>
<p>
  It also means that there's no one company holding all the cards for the direction of Koha.
</p>
<p>
  The project is self-governing.
</p>
<p>
  The koha community has <a rel="external" href="https://www.imsb.maori.nz/maori-wellbeing-in-tamaki-makaurau/rangatiratanga/">rangatiratanga</a>.
</p>
<p>
  We're working together as one to enhance Koha.
</p>
<p>
  We're also making decisions, and creating creating customs as a group.
</p>
<p>
  So we decide our own priorities.
</p>
<p>
  Finally I thought I'd mention what it's like to work within an open source software company.
</p>
<p>
  Catalyst works really hard to make sure that the open source values are prevalent, and that the Koha community also shine through in our office.
</p>
<p>
  In the same way that open source software contributions can be an incredibly varied, the training pathways in an open source software company are not linear.
</p>
<p>
  The roles I've had are not strictly defined.
</p>
<p>
  In my role as a Koha developer, I've organised events, spoken publicly, written blog posts, hosted trainings, developed both the back-end and the front-end of koha, improved translations for Koha, supported sales, spun up servers, written automation scripts, and so much more.
</p>
<p>
  And I didn't realised until Katrina's talk, that maybe it's not just an open source thing, but also a NZ thing — of doing way more than our job descriptions.
</p>
<p>
  It means that every day is different. There's always something to work on, and there's always people willing to help.
</p>
<p>
  Something about open source is that it's super widely used, even though many people don't know what it is.
</p>
<p>
  Firefox the browser is open source.
</p>
<p>
  If you've ever done audio recording or editing you've probably used Audacity which is open source.
</p>
<p>
  You might have your own opinions about cryptocurrency, but plenty of people partake and that's open source.
</p>
<p>
  Even the New Zealand COVID tracer app is open source.
</p>
<p>
  Even with these everyday examples, to be an advocate for open source software is strangely niche.
</p>
<p>
  Which means that if that's you, you really have to lean into it.
</p>
<p>
  Many of the people I work with are super passionate and opinionated about tech stuff.
</p>
<p>
  I've been in spaces over my career where people do tech jobs because they enjoy the work they do in their 9-5 and that's it.
</p>
<p>
  And that's cool.
</p>
<p>
  But that is not most of the people at Catalyst.
</p>
<p>
  Open source advocates are the types of people whose passion becomes their identity, and they'll make it known to you, and
</p>
<p>
  I was only given half an hour for this slot but I could probably talk for hours about this kind of thing, and so could they.
</p>
<p>
  I am not a developer who works in open source software.
</p>
<p>
  <strong>I am an open source software developer.</strong>
</p>
<p>
  That's important to me, because that distinction impacts the way that I approach a problem.
</p>
<p> 
  It impacts the way I collaborate with my colleagues.
</p>
<p>
  It impacts the way I write code, and that impacts the way I perceive the tech industry in general.
</p>
<p>
  Sometimes we want to separate ourselves from our work, but it's really hard to not identify with something that reflects my own values so closely, especially when I can do that for a job.
</p>
<p>
  I'm not saying that open source should be the default, and that everyone should use it...
</p>
<p>
  ...actually I am kind of saying that a little bit.
</p>
<p>
  But that's not the only message I want you to take from this.
</p>
<p>
  I really enjoy what I do and, I attribute so much of that to the cultures of the environments I work in.
</p>
<p>
  Whether that's the Koha community or the Catalyst community, culture is underpinned by values and then upheld by processes and people.
</p>
<p>
  Open source as a concept brings those values that might not come naturally to a tech business sector, but there's no reason that we can't build those values into our processes in every corner of our industry.
</p>
<p>
  There's no reason why our tech leaders and the people building our solutions can't embody those values.
</p>
<p>
  Tuakana / teina and mentorship, the removal of blame culture, the space to learn, the ability to make mistakes, opportunities to try new things, the expansion of what we think a junior is, a deep belief in the things we're building, pride in what we put out into the world, collaboration appreciation for how different people with different goals will interact with your build, accessibility measures, iterative development, and a shared investment of a product and a community.
</p>
<p>
  These are the things that I want us to learn from the successes of open source software, and apply to our tech industry here in New Zealand.
</p>
<p>
  I'm about to finish up, so before I do, I want to say thank you so much to the organisers; especially Prae, Camy, Aaron, and Tim who I've just met who's the bomb.
</p>
<p>
  Thank you so much for putting on this event, and inviting me to speak.
</p>
<p>
  I think an event that encourages tech people to think about culture and society, could not  come at a better time.
</p>
<p>
  So let's make sure that the environments we work in will foster the kinds of solutions, services and stories, that we'll be proud of for generations to come.
</p>
<p>
  Kia ora.
</p>
<p>
  [applause]
</p>
<h4>Audience questions</h4>
<p>
  <strong>Prae:</strong>
</p>
<p>
  Aleisha, that's amazing.
</p>
<p>
  You're right on the dot and gave just enough time for Q&A.
</p>
<p>
  So any questions?
</p>
<p>
  <strong>Audience:</strong>
</p>
<p>
  Right there at the end, you said — in amongst a list of things — expansion of what we think a junior is capable of. 
</p>
<p>
  I'd love to hear a little bit more about that
</p>
<p>
  <strong>Aleisha:</strong>
</p>
<p>
  So the question was "expand on what I meant by redefining what we think a junior is"
</p>
<p>
  It was kind of talking about what I said about tuakana / teina.
</p>
<p>
  In Te Reo Māori, we have tuakana / taina which is about experienced people supporting less experienced people.
</p>
<p> 
  But what's important about that concept in Te Reo Māori, is that it goes both ways.
</p>
<p>
  So the teachers can become the students really naturally, because there's always something to learn from everyone.
</p>
<p>
  And I think when we label someone as a junior and pigeonhole them like that, then we're limiting what they can learn, and also what we can learn from them.
</p>
<p>
  So redefine what a junior is, and what kind of value they can bring to our spaces. Does that answer that? Cool, thank you.
</p>
<p>
  <strong>Prae:</strong>
</p>
<p>
  I'm going to interject there and say, I agree completely.
</p>
<p>
  A lot of people who have worked with the grads at Xero knows they're probably better than us.
</p>
<p>
  [audience chuckles]
</p>
<p>
  and so yes they can totally become our teachers. Thank you.
</p>
<p>
  Next question... we have room for one more if you have any?
</p>
<p>
  <strong>Aleisha:</strong>
</p>
<p>
  Ah! I thought I'd gone away with it.
</p>
<p>
  <strong>Audience:</strong>
</p>
<p>
  Yeah I think that is a big difference to how we can run a— we could say — a common company.
</p>
<p>
  But with open source values on — for example — new features implementation or code, how do you say like share the... sorry.
</p>
<p>
  <strong>Aleisha:</strong>
</p>
<p>
  Are you trying to ask if there's a way to apply open source values?
</p>
<p>
  <strong>Audience:</strong>
</p>
<p>
  Yeah, because a common business company works very different than an open source — probably.
</p>
<p>
  Can you identify some common things that you can apply in a common company?
</p>
<p>
  <strong>Aleisha:</strong>
</p>
<p>
  Yeah, so "How can we embody open source values in companies that don't use open source?" is that kind of the question?
</p>
<p>
  So a lot of these values present in different ways in a lot of spaces
</p>
<p>
  I tried to kind of relate them to Te Reo Māori values, but it's really all the same stuff that Prae mentioned were the values for this conference.
</p>
<p>
  It was the same stuff that Katrina was talking about. It's just about creating a space where it's safe to make mistakes, where it's okay to get something wrong on the first go, give feedback and keep working on it.
</p>
<p>
  That's the kind of stuff that we do every day in open source software development.
</p>
<p>
  And what was some of the other stuff I said...Oh yeah and mentorship.
</p>
<p>
  I think it all kind of comes down to having a community. Having a shared interest and a shared goal, and working collaboratively toward that.
</p>
<p>
  I think if we boil down open source to the bare bones of it, that's what it is.
</p>
<p>
  So there's definitely ways to apply that to companies that don't use open source strictly.
</p>
<p>
  Does that answer your question?
</p>
<p>
  <strong>Audience:</strong>
</p>
<p>
  Yeah that's okay.
<p>
  <strong>Aleisha:</strong>
</p>
<p>
  Ok, thank you. Thanks everyone!
</p>
<p>
  <strong>Prae:</strong>
</p>
<p>
  Thank you Aleisha
</p>
<p>
  [applause]
</p>
{% endlayoutblock %}
