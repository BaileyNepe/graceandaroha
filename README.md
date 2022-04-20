# Grace & Aroha

## Introduction

The objective of this application was to create a website for a business that provides new mums with postnatal care and support.

The application initially started out as a purely static HTML website and has since been converted into a NextJS application to provide a better developer experience when updating the website via the website owner requests. The website provides a place for users to view information about the business. The application also allows the website owner to create dynamic static blogs (more on this in features).

![Website Design](./images/homepage.png)

## Technology

- NextJs - Statically built website for SEO and application performance
- Typescript - To reduce the likelihood of bugs
- AWS S3 - To store and enable users to access PDFs
- Formspree - Handle contact form requests
- Heroku - To deploy the server
- Strapi - Headless CMS to create blog posts
- Vercel - Deploy Frontend application

---

## Features

### Dynamic Static Blog

The application is built using NextJs and at deployment build will fetch all blog posts and render them statically, which improves SEO and site performance. Uses Strapi as a CMS for the website owner to create blog posts, which, once published triggers a new Vercel build.

### PDF links

The application utilises an AWS s3 bucket to store PDF files which users are able to access via links on the website app.

### Contact form

The application handles contact form requests and utilises formspree to send the information to the website owner's email.

## List of Dependencies

- Stapi - Headless CMS for blog posts
- Bootstrap - handles some design features of the application

### Blog Management

1. Log into the Strapi admin console which is deployed on heroku
2. Create a blog post
3. Publish the page (triggering a new website build)

---

## Link

- https://graceandaroha.co.nz/ - live application
