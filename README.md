# Frontend Mentor - REST Countries API with color theme switcher solution

This is a solution to the [REST Countries API with color theme switcher challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5c13e26573f9101d2c60143a).

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
- [Author](#author)

---

## Overview

### The challenge

Users should be able to:

- See all countries from the API / JSON file on the homepage
- Search for a country using an `input` field
- Filter countries by region
- Click on a country to see more detailed information on a separate page
- Click through to the border countries on the detail page
- Toggle the color scheme between light and dark mode
- View the optimal layout for the interface depending on their device's screen size
- Navigate the app fully using keyboard & screen readers (A11y friendly)

### Screenshot

![](./public/design/desktop-preview.jpg)
_Add your own screenshot here by placing an image in the `public` folder_

### Links

- **Solution URL:** [Frontend Mentor Solution](https://www.frontendmentor.io/solutions/countries-app-SEqwSfHESB)
- **Live Site URL:** [https://baby4dm.github.io/countries-app/](https://baby4dm.github.io/countries-app/)

---

## My process

### Built with

- **Framework:** [Next.js 15+](https://nextjs.org/) (App Router)
- **Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/)
- **Deployment:** GitHub Pages (Static Export with `output: 'export'`)
- **Icons & Accessibility:** ARIA roles, semantic HTML5, SVG icons

---

### What I learned

1. **Static Exporting & Dynamic Routing in Next.js:**
   Configuring Next.js for GitHub Pages required mastering `generateStaticParams()` to pre-render dynamic routes (`/country/[code]`) at build time:

   ```jsx
   export async function generateStaticParams() {
     return data.map((country) => ({
       code: country.alpha3Code.toLowerCase(),
     }));
   }
   ```
