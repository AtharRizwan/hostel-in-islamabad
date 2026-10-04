# hostel-in-islamabad

A static website for Hostel in Islamabad, built with plain HTML, CSS and JavaScript (no build step).

## Structure

```
index.html            Home: hero, features, guest quotes
about.html            About us, mission and contact form
services.html         Services, pricing, reviews and the add-review form
services/             One page per service (pudding, breakfast, bike-hire, pickup, events)
assets/
  css/
    base.css          Design tokens (light and dark theme), reset, typography, layout helpers
    components.css    Header and mobile menu, page banner, buttons, cards, forms, footer
    home.css, about.css, services.css, service-detail.css   Page-specific styles
  js/
    theme.js          Applies the saved theme and heading style before the page renders
    main.js           Page Styles menu (theme and heading style) and the mobile menu
    about.js          "Show Details" toggle and contact form validation
    reviews.js        Add and remove reviews on the services page
  images/             Logo, favicon and photos
```

Every page loads `base.css` and `components.css`, then its own page stylesheet. The "Page Styles" menu switches between light and dark themes and toggles a heading style. Both choices are saved in `localStorage`.

## Running locally

Open `index.html` in a browser, or serve the folder:

```sh
python3 -m http.server 8000
```

Then visit http://localhost:8000.
