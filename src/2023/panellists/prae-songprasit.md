---
firstName: Prae
lastName: Songprasit
pronouns: She/Her
jobTitle: Coder
organisation: Clarified
bio: "<p>BIO_TEXT</p>"
profileUrl:
  [
    { "name": "Website", "url": "https://praesongprasit.com/", "icon": "code" },
    {
      "name": "LinkedIn",
      "url": "https://www.linkedin.com/in/praesongprasit/",
      "icon": "linkedin",
    },
  ]
profilePhoto: /assets/images/speakers/prae_songprasit.jpg
profilePhotoAltText: PROFILE_ALT_TEXT
talkTitle: TALK_TITLE
talkExcerpt: TALK_EXCERPT
talkStartTime: 2023-07-07T14:00:00.000+12
talkEndTime: 2023-07-07T14:30:00.000+12
featuredImage: /assets/images/speakers/prae_songprasit.png
featuredImageAlt: "FEATURED_IMAGE_ALT"
featuredImageType: image/png
featuredImageWidth: 1200
featuredImageHeight: 630
talkRecordingID: LsVqWJz31Ds
---

{% layoutblock 'talkAbout' %}

<p>TALK_ABOUT</p>
{% endlayoutblock %}

{% layoutblock 'bio' %}
{{ bio | safe }}
{% endlayoutblock %}

{% layoutblock 'talkReferences' %}

<ul>
    <li><a rel="external" href="https://google.com/">Google</a></li>
  </ul>
  
{% endlayoutblock %}

{% layoutblock 'talkTranscript' %}

<p>
  <strong>Prae:</strong>
</p>

<p>TRANSCRIPT_TEXT</p>

{% endlayoutblock %}
