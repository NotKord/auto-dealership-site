# auto-dealership-site

A full-stack fake auto dealership website built for a web development course. The platform includes public-facing vehicle listings, service scheduling, a contact form, and a staff admin backend — all tied together with PHP form processing and a shared HTML/CSS/JS component system.

**Contributor:** Kordall Hyman

---

## About

K's Autos is a simulated car dealership website designed to demonstrate full-stack web development skills. Visitors can browse inventory, view current promotions, schedule services, and contact the dealership. A separate backend portal allows staff to manage the site's content.

---

## Features

- **Homepage** — Welcome page with current promotions (financing deals, trade-in bonuses, seasonal sales) and a link to browse inventory
- **Vehicle Listings** — Public inventory browsing under the `/services/listings/` route
- **Service Scheduling** — Dedicated services section for booking appointments
- **Contact Form** — PHP-powered contact and inquiry form with form processing and a confirmation page
- **About Us** — Dealership info and location pages (includes multiple location images)
- **Staff Admin Backend** — Separate backend menu and interface for staff use
- **Shared Component System** — Reusable header (`menu.html`), footer (`bottom.html`), and their backend equivalents, loaded dynamically via JavaScript

---

## Tech Stack

| Layer | Technologies |
|---|---|
| Frontend | HTML, CSS, JavaScript |
| Backend | PHP |
| Templating | Shared HTML components loaded via JS |
| Version Control | Git |

---

## Project Structure

```
auto-dealership-site/
├── index.html              # Homepage (K's Autos landing page)
├── contact.php             # Contact form
├── confirmation.php        # Form submission confirmation
├── processforms.php        # Form processing logic
├── menu.html               # Shared navigation header
├── bottom.html             # Shared footer
├── menu.js                 # Dynamically loads shared components
├── functions.js            # General JS utilities
├── main_style.css          # Global stylesheet
├── backendmenu.html        # Staff backend navigation
├── backendbottom.html      # Staff backend footer
├── test.php                # Test/debug file
├── about-us/               # About Us section
├── services/               # Service scheduling section
├── backend/                # Staff admin backend
└── *.jpg / *.webp          # Dealership location images
```

---

## Setup

This project is designed to run on a PHP-capable web server (e.g., Apache via XAMPP, WAMP, or a university server). To run it locally:

1. **Clone the repository**
   ```bash
   git clone https://github.com/NotKord/auto-dealership-site.git
   ```

2. **Serve with a local PHP server**
   ```bash
   # Using PHP's built-in server
   cd auto-dealership-site
   php -S localhost:8000
   ```
   Or move the project into your XAMPP/WAMP `htdocs` folder and start Apache.

3. **Open in browser**
   ```
   http://localhost:8000
   ```

> **Note:** The contact and form processing pages require PHP. Opening HTML files directly in a browser (without a server) will work for most pages, but form submission will not.

---

## Pages

| Page | Description |
|---|---|
| `index.html` | Homepage with promotions and inventory link |
| `contact.php` | Customer contact and inquiry form |
| `confirmation.php` | Shown after successful form submission |
| `about-us/` | Dealership locations and about info |
| `services/` | Vehicle service scheduling |
| `backend/` | Staff-only admin portal |

---

## Notes

- This is a **course project** built for educational purposes — no real financial transactions take place.
- The inventory listing links point to a Rowan University server (`elvis.rowan.edu`), which also handles any data storage. Accessibility depends on whether that server is still active.
- The backend portal does not include authentication — given more time, implementing a proper login system would have been a great addition.

---

Happy driving! 🚗
