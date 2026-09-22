/**
 * Everything that changes from one PDF landing page to the next lives here.
 * To sell another PDF: copy this file and the page folder, then edit the text.
 */
export const product = {
  slug: "html-css-javascript-guide",
  title: "HTML, CSS & JavaScript",
  subtitle: "The Complete Beginner's Guide",
  headline: "Learn HTML, CSS & JavaScript from zero",
  tagline:
    "Build real websites from scratch. Every idea is explained with an everyday picture first, then annotated code you can type and run in minutes.",

  // Keep this in step with the amount on your Paystack Payment Page
  price: 2000,



  // Paste your Paystack Payment Page link into .env.local (see .env.example)
  paystackUrl:
    process.env.PaystackUrl ?? "https://paystack.com/pay/your-slug",

  brand: "Verscomm",
  supportEmail: "versatilecommservice@gmail.com",

  stats: [
    { value: "76", label: "pages" },
    { value: "49", label: "step-by-step lessons" },
    { value: "3", label: "real projects" },
    { value: "6", label: "cheat sheets and appendices" },
  ],

  images: {
    cover: "/html-css-javascript-guide/cover.webp",
    previews: [
      { src: "/html-css-javascript-guide/preview-semantic-html.webp", caption: "Semantic HTML, with a page-layout diagram" },
      { src: "/html-css-javascript-guide/preview-box-model.webp", caption: "The CSS box model, drawn out" },
      { src: "/html-css-javascript-guide/preview-flexbox.webp", caption: "Flexbox, with every value shown visually" },
      { src: "/html-css-javascript-guide/preview-dom-tree.webp", caption: "The DOM tree, explained like a family tree" },
      { src: "/html-css-javascript-guide/preview-todo-app.webp", caption: "A complete to-do app, line by line" },
    ],
  },

  parts: [
    { n: 1, title: "How the Web Works", lessons: 3, text: "What really happens when you open a website, what the three languages do, and how to set up your workshop." },
    { n: 2, title: "HTML: The Structure", lessons: 8, text: "Tags, text, links, images, semantic layout, forms, tables and accessibility." },
    { n: 3, title: "CSS: Style & Looks", lessons: 9, text: "Selectors, colours, fonts, the cascade, the box model, shadows and transitions." },
    { n: 4, title: "CSS: Layout", lessons: 6, text: "Positioning, Flexbox, Grid, responsive design, dark mode and tidy stylesheets." },
    { n: 5, title: "JavaScript: The Basics", lessons: 8, text: "Variables, decisions, loops, functions, arrays, objects and JSON." },
    { n: 6, title: "The DOM: Controlling the Page", lessons: 6, text: "Select and change elements, handle events and forms, and remember data with localStorage." },
    { n: 7, title: "Talking to the World", lessons: 5, text: "Timers, promises, async/await, fetching data from real APIs, modules and debugging." },
    { n: 8, title: "Build Three Real Projects", lessons: 4, text: "A profile page, a to-do app and a live weather board, plus what to learn next." },
  ],

  projects: [
    { title: "Your profile page", tags: ["HTML", "CSS", "Grid"], text: "A responsive personal page with a gradient hero, project cards and hover effects. No JavaScript needed." },
    { title: "A to-do app", tags: ["JavaScript", "DOM", "localStorage"], text: "Add, complete and delete tasks. It remembers everything after a refresh." },
    { title: "A live weather board", tags: ["fetch", "async/await", "API"], text: "Pick a city and the page loads its current weather from a free, real API." },
  ],

  faqs: [
    { q: "Do I need any experience?", a: "None at all. The guide starts from how the web works and builds up one small idea at a time." },
    { q: "What do I need to follow along?", a: "A computer, a modern browser such as Chrome, and a free code editor (the guide uses Visual Studio Code and shows you how to set it up)." },
    { q: "Is it suitable for children?", a: "Yes. It is written so that a 13-year-old can follow it. Younger learners can work through it with a parent or teacher." },
    { q: "How do I get the PDF?", a: "After your payment is confirmed, the download link is sent to the email address you used at checkout. If you do not see it, check your spam folder or write to us." },
    { q: "How do I pay?", a: "Payment is handled securely by Paystack. You will see the payment options available to you (such as card or bank transfer) on the checkout page." },
    { q: "Can I read it on my phone?", a: "Yes, the PDF opens on any phone, tablet or computer. For the coding exercises, a computer is best." },
  ],
};
