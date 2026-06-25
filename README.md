# Sugar Gliders Philippines

The marketing and care-guide website for **Sugar Gliders Philippines** —
hand-raised sugar glider joeys, matched to the home, with full DENR paperwork
and in-person delivery.

- **Live domain:** https://sugarglidersph.com
- **Built with:** [Astro](https://astro.build) (static site, no server needed)
- **Hosted on:** GitHub Pages, with the custom domain from Namecheap
- **Primary call to action sitewide:** call or text **+63 945 995 0591**

---

## What's in here

```
src/
  pages/                     One file per URL
    index.astro              Home (/)
    available-joeys.astro    Available Joeys (/available-joeys)  ← money page
    how-reserving-works.md   How reserving works
    our-practice.md          About / our practice
    reserve.md               Reserve / contact (call-first)
    faq.md                   FAQ
    care-guide/
      index.astro            Care guide hub
      *.md                   9 care articles
    404.astro                Not-found page
  layouts/                   Page shells (head, header, footer, schema)
  components/                Header, Footer, CallCTA, logo mark
  data/
    site.js                  Brand name, phone, price — edit once, applies everywhere
    joeys.js                 The list of available joeys (edit this often)
  lib/schema.js              Builds the SEO structured-data (JSON-LD)
  styles/global.css          All styling
public/                      Files copied as-is to the site root
  CNAME                      The custom domain (sugarglidersph.com)
  robots.txt, favicon.svg, og-image.svg
.github/workflows/deploy.yml Auto-deploys to GitHub Pages on push to main
```

---

## Editing the site (common tasks)

You do not need to be a developer for the everyday edits.

### Update the available joeys

Open `src/data/joeys.js`. Each joey is a block you can copy, edit, or delete.
To mark one reserved, change its `status` to `"Reserved"`. To add a photo, drop
the image in `public/joeys/` and set `image: "/joeys/its-name.jpg"`.

### Change the phone, price, or brand name

Open `src/data/site.js`. Everything (titles, buttons, footer) reads from there.

### Edit the words on a page

The text pages are plain Markdown in `src/pages/` and
`src/pages/care-guide/`. Edit the text between the lines and save.

After any edit, commit and push to `main` and the site rebuilds and redeploys
itself within a few minutes (see Deployment below).

---

## Running it locally (optional)

Requires [Node.js](https://nodejs.org) 18+.

```bash
npm install      # once
npm run dev      # start a local preview at http://localhost:4321
npm run build    # produce the final site in dist/
npm run preview  # preview the built site
```

---

## Deployment — first-time setup

The site deploys automatically, but two one-time settings are needed.

### 1. Turn on GitHub Pages

1. In the GitHub repo, go to **Settings → Pages**.
2. Under **Build and deployment → Source**, choose **GitHub Actions**.

That's it. From then on, every push to the `main` branch runs
`.github/workflows/deploy.yml`, which builds the site and publishes it.
(While work is on the `claude/website-github-hosting-ifk0ks` branch, merge its
pull request into `main` to trigger the first deploy.)

### 2. Point the Namecheap domain at GitHub Pages

The `public/CNAME` file already tells GitHub the domain is
`sugarglidersph.com`. You just need the DNS records on Namecheap.

In Namecheap: **Domain List → Manage → Advanced DNS**, then add:

**A records** (for the apex `sugarglidersph.com`) — Host `@`, pointing to each
of GitHub's four IPs:

| Type     | Host | Value           |
| -------- | ---- | --------------- |
| A Record | @    | 185.199.108.153 |
| A Record | @    | 185.199.109.153 |
| A Record | @    | 185.199.110.153 |
| A Record | @    | 185.199.111.153 |

**CNAME record** (for `www`):

| Type        | Host | Value                      |
| ----------- | ---- | -------------------------- |
| CNAME Record | www  | <your-github-username>.github.io. |

Remove any default Namecheap "parking" / URL-redirect records for `@` and `www`
so they don't conflict.

DNS can take from a few minutes to a few hours to propagate. Once it has,
return to **Settings → Pages**, confirm the custom domain shows
`sugarglidersph.com`, and tick **Enforce HTTPS** (GitHub provisions the SSL
certificate automatically).

---

## SEO notes

Already wired in: per-page meta titles and descriptions, canonical URLs, Open
Graph / Twitter cards, an auto-generated `sitemap-index.xml`, `robots.txt`, and
JSON-LD structured data (Organization, WebSite, Article, FAQPage,
BreadcrumbList). The FAQ answers used for rich results live in each page's
frontmatter so the schema always matches the visible text.

---

## Care-content accuracy

The husbandry in the care articles reflects standard, responsible sugar glider
care. Have a supplier or exotic vet sanity-check the specifics (diet ratios,
cage sizes, lifespan, bonding) against your own protocol before relying on them,
since care advice carries real welfare weight.
