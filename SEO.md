# SEO Setup Guide — Herkinx Events

## What's Already Done

- ✅ **Sitemap** — `sitemap.xml` lists all 9 pages with priorities
- ✅ **Robots.txt** — `robots.txt` allows all crawlers, points to sitemap
- ✅ **Meta tags** — Unique title & description on every page
- ✅ **Open Graph** — Facebook/LinkedIn previews on every page
- ✅ **Twitter Cards** — `summary_large_image` on every page
- ✅ **Canonical URLs** — Prevents duplicate content issues
- ✅ **Structured Data** — LocalBusiness, Organization, BreadcrumbList, FAQ schemas
- ✅ **Semantic HTML** — `header`, `nav`, `main`, `section`, `footer`
- ✅ **Heading hierarchy** — Single `h1` per page, proper nesting
- ✅ **Image alt text** — All images have descriptive alt attributes
- ✅ **Lazy loading** — Images use `loading="lazy"`
- ✅ **Mobile responsive** — Tailwind responsive classes
- ✅ **Fast loading** — CDN-hosted libraries, lightweight vanilla code
- ✅ **404 page** — Custom `404.html` with navigation links
- ✅ **Favicon** — Logo used as favicon on all pages

---

## 1. Google Search Console

### Steps

1. Go to https://search.google.com/search-console
2. Sign in with your Google account
3. Click **"Add property"** → choose **"Domain"** (recommended)
4. Enter your domain: `herkinevents.com`
5. Copy the **TXT record** provided
6. Add it as a DNS record in your domain provider's dashboard
7. Click **"Verify"** — Google will check the DNS record
8. Once verified, submit your sitemap:
   - Go to **Sitemaps** section
   - Enter: `https://herkinevents.com/sitemap.xml`
   - Click **Submit**

### What to Check After Submission

- **Coverage** — Shows which pages are indexed and any errors
- **Performance** — Core Web Vitals, loading speed
- **Enhancements** — Breadcrumbs, FAQ rich results, sitelinks search box

---

## 2. Bing Webmaster Tools

### Steps

1. Go to https://www.bing.com/webmasters
2. Sign in (use Microsoft or Google account)
3. Click **"Add a site"** → enter `herkinevents.com`
4. Choose verification method:
   - **Import from Google Search Console** (easiest — if already verified there)
   - Or add the **meta tag** or **CNAME** record manually
5. Submit sitemap:
   - Go to **Sitemaps** → enter `https://herkinevents.com/sitemap.xml`

---

## 3. Google Analytics (Optional)

1. Go to https://analytics.google.com
2. Create a new property → select **"Web"**
3. Enter your URL: `https://herkinevents.com`
4. Get the **Measurement ID** (G-XXXXXXXXXX)
5. Add this tag just before `</head>` in all pages:

```html
<!-- Google tag (gtag.js) -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## 4. Social Media Preview Testing

- **Facebook**: https://developers.facebook.com/tools/debug
- **LinkedIn**: https://www.linkedin.com/post-inspector
- **Twitter/X**: https://cards-dev.twitter.com/validator

Paste your URL into each to see how it renders when shared.

---

## 5. Performance & Ongoing SEO

| Task | Tool | Frequency |
|------|------|-----------|
| Check indexed pages | Google Search Console | Weekly |
| Core Web Vitals | Google Search Console → Core Web Vitals | Monthly |
| Page speed test | https://pagespeed.web.dev | After changes |
| Broken links | https://www.deadlinkchecker.com | Monthly |
| Keyword rankings | Google Search Console → Performance | Monthly |
| Competitor analysis | Search for relevant terms manually | Quarterly |

---

## 6. Keywords to Target

| Page | Primary Keywords |
|------|-----------------|
| Home | luxury event decoration, event decorator Lagos |
| About | about Herkinx Events, event decoration company Lagos |
| Services | wedding decoration Lagos, corporate event decor, birthday decoration |
| Portfolio | event decoration portfolio, wedding decor gallery |
| Testimonials | event decoration reviews, client testimonials |
| FAQ | event decoration FAQ, how to book event decorator |
| Contact | contact event decorator, event decoration inquiry |
| Booking | book event decorator, event decoration booking form |
