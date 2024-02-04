# NZ Tech Rally

[![Netlify Status](https://api.netlify.com/api/v1/badges/cb3dfa2a-b76b-4944-b73b-845697e7d3cc/deploy-status)](https://app.netlify.com/sites/nztechrally/deploys)

Website for NZ Tech Rally, built with [Eleventy](www.11ty.dev/), and auto deploy on commit via Netlify.

## Project setup

### Prerequisites

- Node v20+ (installed globally)

### Install dependencies

```shell
npm i
```

## Development

Build and start local server. Keep this running while working on the project.

```shell
npm start
```

### Adding and using an icon

[Technique by Christopher Kirk-Nielsen](https://chriskirknielsen.com/blog/manage-your-svg-files-with-eleventys-render-plugin/#updated-method)

1. Add `.svg` file to `src/_includes/svg/`

2. Add `.njk` extension to the file

3. Open the new svg file and make these edits:

   - Set any colour to `currentColor`, and uncoloured background to `transparent`
   - Ensure `<svg>` tag has these attribute settingd `class="icon {{ class }}" aria-hidden="{{ false if title else true }}"`
   - Add `{% if title %}<title>{{ title }}</title>{% endif %}` as first child of `<svg>`

4. To use in template files, include icons you've just added like this:

   ```njk
   {% svg "icon-file-name" %}
   ```

   To add custom clas name or Icon title...

   ```njk
   {% svg "icon-file-name", { class: "icon-class", title: "Icon name" } %}
   ```

   For a regular SVG file, with the isNjk property set to false

   ```njk
   {% svg "grid", { isNjk: false } %}
   ```
