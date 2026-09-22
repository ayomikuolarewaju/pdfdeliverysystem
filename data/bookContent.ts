import { BookMetadata, Chapter, FAQItem, ProjectDetail, Testimonial, Testimonials } from '../types';

export const BOOK_METADATA: BookMetadata = {
  title: 'HTML, CSS & JavaScript',
  subtitle: "The Complete Beginner's Guide",
  tagline: "Build real websites from scratch, explained like you're 13 and annotated like a professional.",
  badge: 'START FROM ZERO · NO EXPERIENCE NEEDED',
  pageCount: 76,
  projectsCount: 3,
  cheatSheetsCount: 6,
  basePrice: 2500,
  currencySymbol: '₦',
  author: 'Web Dev From Zero Team',
  releaseYear: '2026 Edition',
};

export const CORE_PILLARS = [
  {
    role: 'HTML',
    metaphor: 'The Skeleton',
    subtext: 'What is on the page: headings, paragraphs, images, buttons, and semantic structure.',
    color: 'emerald',
    iconBg: 'bg-emerald-500/10 text-emerald-400 border-emerald-500/20',
    borderColor: 'border-emerald-500/30',
    textColor: 'text-emerald-400',
    highlight: 'Structure & Meaning',
  },
  {
    role: 'CSS',
    metaphor: 'The Paint & Furniture',
    subtext: 'How it looks: colours, typography, spacing, responsive Grid, Flexbox, and animations.',
    color: 'cyan',
    iconBg: 'bg-cyan-500/10 text-cyan-400 border-cyan-500/20',
    borderColor: 'border-cyan-500/30',
    textColor: 'text-cyan-400',
    highlight: 'Style & Layout',
  },
  {
    role: 'JavaScript',
    metaphor: 'The Electricity & Plumbing',
    subtext: 'What it does: clicks, event loops, dynamic data, real APIs, and localStorage.',
    color: 'amber',
    iconBg: 'bg-amber-500/10 text-amber-400 border-amber-500/20',
    borderColor: 'border-amber-500/30',
    textColor: 'text-amber-400',
    highlight: 'Behaviour & Logic',
  },
  {
    role: 'Website',
    metaphor: 'The Finished House',
    subtext: 'The complete interactive creation that users experience, admire, and interact with.',
    color: 'indigo',
    iconBg: 'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
    borderColor: 'border-indigo-500/30',
    textColor: 'text-indigo-400',
    highlight: '3 Real Capstones',
  },
];

export const BOOK_CHAPTERS: Chapter[] = [
  // Part 1
  {
    id: 1,
    partNumber: 1,
    partTitle: 'How the Web Works',
    number: 1,
    title: 'What happens when you open a website',
    page: 6,
    description: 'The 5-step conversation between your browser and the server across the internet roads.',
    keyTakeaway: 'The library analogy: browser is the desk, librarian is the server, URL is the slip.',
    tag: 'General',
    sampleCallout: {
      type: 'THINK OF IT LIKE THIS',
      text: 'It is like ordering from a library. You hand a slip (request) to the librarian (server), and they bring back the book (response). Your browser is the reading desk.',
    },
  },
  {
    id: 2,
    partNumber: 1,
    partTitle: 'How the Web Works',
    number: 2,
    title: 'Three languages, one website',
    page: 7,
    description: 'One button, three languages: HTML creates it, CSS paints it, JavaScript makes it do something.',
    keyTakeaway: 'HTML = nouns (things). CSS = adjectives (looks). JavaScript = verbs (actions).',
    tag: 'General',
    sampleCallout: {
      type: 'KEY IDEA',
      text: 'HTML = nouns. CSS = adjectives. JavaScript = verbs. Learn them in this order because each builds on the one before.',
    },
  },
  {
    id: 3,
    partNumber: 1,
    partTitle: 'How the Web Works',
    number: 3,
    title: 'Set up your workshop',
    page: 8,
    description: 'Setting up VS Code, Live Server, folder structure (index.html, style.css, script.js), and browser DevTools.',
    keyTakeaway: 'Press F12 to inspect any live website on the internet.',
    tag: 'General',
  },

  // Part 2
  {
    id: 4,
    partNumber: 2,
    partTitle: 'HTML: The Structure',
    number: 4,
    title: 'Your first HTML page',
    page: 9,
    description: 'Annotated skeleton: <!DOCTYPE html>, lang="en", UTF-8 charset, responsive viewport, and script defer.',
    keyTakeaway: 'Always include the viewport meta tag so mobile phones do not show tiny desktop zooms.',
    tag: 'HTML',
    codeSnippet: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <title>My First Page</title>
    <link rel="stylesheet" href="style.css" />
  </head>
  <body>
    <h1>Hello, world!</h1>
    <script src="script.js" defer></script>
  </body>
</html>`,
  },
  {
    id: 5,
    partNumber: 2,
    partTitle: 'HTML: The Structure',
    number: 5,
    title: 'Elements, tags and attributes',
    page: 10,
    description: 'Opening tags, attributes (href, class, id), content, closing tags, and void elements.',
    keyTakeaway: 'Elements nest like boxes inside boxes. Outer box is parent, inner are children.',
    tag: 'HTML',
    sampleCallout: {
      type: 'THINK OF IT LIKE THIS',
      text: 'Elements nest like boxes inside boxes. A <ul> box contains <li> boxes. Indent children by two spaces so you can see the family tree.',
    },
  },
  {
    id: 6,
    partNumber: 2,
    partTitle: 'HTML: The Structure',
    number: 6,
    title: 'Text: headings, paragraphs and lists',
    page: 11,
    description: 'h1 through h6 hierarchy, paragraphs, bold/emphasis, blockquotes, code, and ordered vs unordered lists.',
    keyTakeaway: 'One <h1> per page. Never pick a heading because of visual size; headings describe document structure.',
    tag: 'HTML',
    sampleCallout: {
      type: 'WATCH OUT',
      text: 'Do not pick a heading because of its size ("h3 looks about right"). Headings describe structure. You can change how big they look with CSS later.',
    },
  },
  {
    id: 7,
    partNumber: 2,
    partTitle: 'HTML: The Structure',
    number: 7,
    title: 'Links and images',
    page: 12,
    description: 'Absolute vs relative links, anchor jumps (#contact), tel:/mailto:, responsive images, lazy loading, and alt text.',
    keyTakeaway: 'alt is required: describes picture for accessibility and displays if image file fails to load.',
    tag: 'HTML',
  },
  {
    id: 8,
    partNumber: 2,
    partTitle: 'HTML: The Structure',
    number: 8,
    title: 'Semantic HTML: elements with meaning',
    page: 13,
    description: 'header, nav, main, article, section, aside, footer. Escaping "div soup" for superior SEO and accessibility.',
    keyTakeaway: 'Use <div> and <span> only when nothing more meaningful exists.',
    tag: 'HTML',
  },
  {
    id: 9,
    partNumber: 2,
    partTitle: 'HTML: The Structure',
    number: 9,
    title: 'Forms: collecting information',
    page: 15,
    description: 'Inputs, labels with matching "for", select dropdowns, radio, checkboxes, textareas, and submit buttons.',
    keyTakeaway: 'Every input needs a label and a name. No label means screen readers get lost.',
    tag: 'HTML',
  },
  {
    id: 10,
    partNumber: 2,
    partTitle: 'HTML: The Structure',
    number: 10,
    title: 'Tables, media and interactive bits',
    page: 16,
    description: 'Data tables with captions and scopes, native <video> & <audio>, <details>/<summary>, and native <dialog>.',
    keyTakeaway: '<details> creates a zero-JS accordion widget built right into the browser.',
    tag: 'HTML',
  },

  // Part 3
  {
    id: 11,
    partNumber: 3,
    partTitle: 'CSS: Style & Looks',
    number: 13,
    title: 'The anatomy of a CSS rule',
    page: 19,
    description: 'Selectors, declarations, property-value pairs, semicolons, and comment conventions.',
    keyTakeaway: 'The three most common CSS mistakes: missing semicolon, missing closing brace, or property typo.',
    tag: 'CSS',
  },
  {
    id: 12,
    partNumber: 3,
    partTitle: 'CSS: Style & Looks',
    number: 14,
    title: 'Selectors: choosing what to style',
    page: 19,
    description: 'Elements, classes, IDs, descendants, direct children (>), pseudo-classes (:hover), and modern :has().',
    keyTakeaway: ':has() is the parent selector CSS never had, fully supported in modern browsers.',
    tag: 'CSS',
  },
  {
    id: 13,
    partNumber: 3,
    partTitle: 'CSS: Style & Looks',
    number: 17,
    title: 'The cascade, specificity and inheritance',
    page: 22,
    description: 'Point scoring system: Inline (1000) > ID (100) > Class (10) > Element (1). School rank metaphor.',
    keyTakeaway: 'Element is a student, class is a prefect, ID is a head teacher. The head teacher instruction wins.',
    tag: 'CSS',
    sampleCallout: {
      type: 'THINK OF IT LIKE THIS',
      text: 'Specificity is like rank in a school. An element selector is a student, a class is a prefect, an ID is a head teacher. The head teacher always wins.',
    },
  },
  {
    id: 14,
    partNumber: 3,
    partTitle: 'CSS: Style & Looks',
    number: 18,
    title: 'The Box Model: everything is a box',
    page: 23,
    description: 'Content, Padding, Border, Margin. box-sizing: border-box explained once and for all.',
    keyTakeaway: 'Always start stylesheets with * { box-sizing: border-box; } so padding does not blow up widths.',
    tag: 'CSS',
  },
  {
    id: 15,
    partNumber: 3,
    partTitle: 'CSS: Style & Looks',
    number: 20,
    title: 'Hover effects, transitions and animation',
    page: 26,
    description: 'Smooth transforms, translateY micro-interactions, @keyframes bounce, and prefers-reduced-motion.',
    keyTakeaway: 'prefers-reduced-motion respects users who get motion sickness. A small line that shows real care.',
    tag: 'CSS',
  },

  // Part 4
  {
    id: 16,
    partNumber: 4,
    partTitle: 'CSS: Layout',
    number: 22,
    title: 'Flexbox: layout in one direction',
    page: 28,
    description: 'Main axis vs cross axis, justify-content (6 values), align-items: center, gap, and flex: 1.',
    keyTakeaway: 'The famous perfect-centre recipe: display: flex; justify-content: center; align-items: center.',
    tag: 'CSS',
  },
  {
    id: 17,
    partNumber: 4,
    partTitle: 'CSS: Layout',
    number: 23,
    title: 'Grid: layout in two directions',
    page: 30,
    description: 'repeat(auto-fit, minmax(220px, 1fr)), named grid-template-areas, drawing layouts as plain text.',
    keyTakeaway: 'You do not choose Flexbox or Grid forever: real pages use Grid for the big picture, Flexbox for the pieces.',
    tag: 'CSS',
  },
  {
    id: 18,
    partNumber: 4,
    partTitle: 'CSS: Layout',
    number: 25,
    title: 'Modern CSS toolbox: Variables & Dark Mode',
    page: 34,
    description: 'Custom properties (--brand, --radius), :root scoping, and dark mode in 6 lines of code with prefers-color-scheme.',
    keyTakeaway: 'Store values once in CSS variables; rebranding an entire site becomes editing one line.',
    tag: 'CSS',
  },

  // Part 5
  {
    id: 19,
    partNumber: 5,
    partTitle: 'JavaScript: The Basics',
    number: 28,
    title: 'Variables and data types',
    page: 38,
    description: 'const vs let (banishing var), numbers, strings, booleans, null vs undefined, template literals.',
    keyTakeaway: 'Programming is writing precise instructions for a very fast, very literal robot.',
    tag: 'JavaScript',
    sampleCallout: {
      type: 'THINK OF IT LIKE THIS',
      text: 'Programming is writing instructions for a very fast, very literal robot. It does exactly what you say, not what you meant.',
    },
  },
  {
    id: 20,
    partNumber: 5,
    partTitle: 'JavaScript: The Basics',
    number: 29,
    title: 'Operators and decisions',
    page: 39,
    description: 'Strict equality (===), truthy vs falsy, ternary operators, and logical operators (&&, ||, ??).',
    keyTakeaway: 'Always use ===. Single = assigns, == compares loosely and creates silent bugs (0 == "" is true!).',
    tag: 'JavaScript',
  },
  {
    id: 21,
    partNumber: 5,
    partTitle: 'JavaScript: The Basics',
    number: 31,
    title: 'Functions: reusable recipes',
    page: 42,
    description: 'Function declarations, arrow functions, default arguments, return values, closures and scope.',
    keyTakeaway: 'Recipe card analogy: parameters are ingredients handed over, body is cooking, return is finished dish.',
    tag: 'JavaScript',
  },
  {
    id: 22,
    partNumber: 5,
    partTitle: 'JavaScript: The Basics',
    number: 32,
    title: 'Arrays: lists of things & 5 essential methods',
    page: 43,
    description: 'push, pop, .at(-1), and the modern toolkit: map(), filter(), find(), reduce(), and forEach().',
    keyTakeaway: 'Mastering map, filter, and reduce replaces 90% of messy manual for loops.',
    tag: 'JavaScript',
  },
  {
    id: 23,
    partNumber: 5,
    partTitle: 'JavaScript: The Basics',
    number: 33,
    title: 'Objects and JSON',
    page: 45,
    description: 'Key-value maps, object methods, optional chaining (?.), destructuring, and JSON.stringify/parse.',
    keyTakeaway: 'Real apps store arrays of objects; array methods combine effortlessly with them.',
    tag: 'JavaScript',
  },

  // Part 6
  {
    id: 24,
    partNumber: 6,
    partTitle: 'The DOM: Controlling the Page',
    number: 35,
    title: 'What is the DOM & finding elements',
    page: 48,
    description: 'The in-memory family tree. Walking elements with querySelector, querySelectorAll, and textContent.',
    keyTakeaway: 'document is the entry door to the whole tree. Always use textContent over unsafe innerHTML.',
    tag: 'JavaScript',
  },
  {
    id: 25,
    partNumber: 6,
    partTitle: 'The DOM: Controlling the Page',
    number: 38,
    title: 'Events & Event Delegation',
    page: 51,
    description: 'addEventListener, click, input, keydown, event bubbling, and using event.target.closest().',
    keyTakeaway: 'Instead of attaching 100 listeners to 100 items, attach 1 listener to parent and catch bubbles.',
    tag: 'JavaScript',
  },
  {
    id: 26,
    partNumber: 6,
    partTitle: 'The DOM: Controlling the Page',
    number: 40,
    title: 'Remembering things: localStorage',
    page: 54,
    description: 'setItem, getItem, removeItem, combining with JSON for persistent tasks and dark mode toggles.',
    keyTakeaway: 'Survives browser reloads. Local storage lives on the user device without needing a server.',
    tag: 'JavaScript',
  },

  // Part 7
  {
    id: 27,
    partNumber: 7,
    partTitle: 'Talking to the World',
    number: 41,
    title: 'Timers and the event loop',
    page: 55,
    description: 'setTimeout, setInterval, the call stack, browser helpers, task queue, and event loop.',
    keyTakeaway: 'Restaurant chef analogy: timer watches the oven while chef cooks; rings and enters queue.',
    tag: 'JavaScript',
    sampleCallout: {
      type: 'THINK OF IT LIKE THIS',
      text: 'A restaurant has one chef. When an order needs the oven for 20 minutes, the chef does not stand and stare at it. The timer watches the oven while the chef cooks other dishes.',
    },
  },
  {
    id: 28,
    partNumber: 7,
    partTitle: 'Talking to the World',
    number: 43,
    title: 'Fetching data from an API',
    page: 57,
    description: 'async/await, fetch(), handling loading spinners, checking res.ok, error boundaries, and POST requests.',
    keyTakeaway: 'fetch does not throw an error on 404 or 500 status! Always verify if (!res.ok).',
    tag: 'JavaScript',
  },
  {
    id: 29,
    partNumber: 7,
    partTitle: 'Talking to the World',
    number: 45,
    title: 'Debugging like a detective',
    page: 60,
    description: 'Console inspection (console.table), DevTools Sources breakpoints, common errors, and the rubber duck routine.',
    keyTakeaway: 'Everyone writes bugs. Professionals are just faster at finding them. Explain the problem aloud to a rubber duck.',
    tag: 'JavaScript',
  },

  // Part 8 - Projects & Appendices
  {
    id: 30,
    partNumber: 8,
    partTitle: 'Build Three Real Projects',
    number: 46,
    title: 'Project 1: Your Personal Profile Page',
    page: 61,
    description: 'Semantic HTML5, CSS variables, CSS Grid auto-fit, Flexbox centering, avatar pill, and hover effects.',
    keyTakeaway: 'Complete standalone portfolio page without writing a single line of JavaScript.',
    tag: 'Project',
  },
  {
    id: 31,
    partNumber: 8,
    partTitle: 'Build Three Real Projects',
    number: 47,
    title: 'Project 2: Interactive To-Do App with LocalStorage',
    page: 64,
    description: 'State-driven UI pattern, event delegation, array filtering, toggle completion, deletion, and persistent storage.',
    keyTakeaway: 'The pattern behind this app powers React: keep state in one place, render from it, mutate on events.',
    tag: 'Project',
  },
  {
    id: 32,
    partNumber: 8,
    partTitle: 'Build Three Real Projects',
    number: 48,
    title: 'Project 3: Live Weather Dashboard (Open-Meteo API)',
    page: 67,
    description: 'Real asynchronous API communication with free Open-Meteo endpoint, city dropdown, live temperature & wind speed.',
    keyTakeaway: 'Connects real world satellite weather data into your custom DOM in under 40 lines of clean code.',
    tag: 'Project',
  },
  {
    id: 33,
    partNumber: 8,
    partTitle: 'Cheat Sheets & Appendices',
    number: 50,
    title: 'HTML, CSS & JavaScript Quick Reference Sheets',
    page: 72,
    description: 'Appendix B: HTML tags & attributes, Appendix C: CSS properties by action, Appendix D: JS syntax lookups, Glossary.',
    keyTakeaway: 'Printable laminated-style quick reference sheets for desk lookups.',
    tag: 'CheatSheet',
  },
];

export const CAPSTONE_PROJECTS: ProjectDetail[] = [
  {
    id: 'profile',
    title: 'Project 1: Developer Profile Page',
    part: 'Part 08 · Page 61',
    page: 61,
    description: 'A responsive personal page using semantic HTML, CSS custom properties, Grid, Flexbox centering, and hover micro-interactions.',
    techStack: ['Semantic HTML5', 'CSS Variables', 'CSS Grid', 'Flexbox'],
    skillsLearned: [
      'Responsive design without media queries using repeat(auto-fit, minmax(220px, 1fr))',
      'The shortest centering trick in modern CSS: place-items: center',
      'Unified brand theming with :root custom properties',
      'Subtle interactive card lift with translateY on hover',
    ],
    codeHighlight: `.hero {
  display: grid;
  justify-items: center;
  gap: 0.5rem;
  padding: 4rem 1rem;
  background: linear-gradient(135deg, var(--brand), #06b6d4);
}`,
    interactiveDemoId: 'profile',
  },
  {
    id: 'todo',
    title: 'Project 2: Persistent To-Do App',
    part: 'Part 08 · Page 64',
    page: 64,
    description: 'A complete task manager that adds, toggles, filters, and deletes tasks, remembering them across page refreshes with localStorage.',
    techStack: ['JavaScript ES6+', 'DOM Manipulation', 'Event Delegation', 'localStorage'],
    skillsLearned: [
      'State-driven architecture: the array is the single source of truth',
      'High-performance event delegation with event.target.closest("li")',
      'JSON serialization (JSON.stringify and JSON.parse)',
      'Clean data-id attributes for element correlation',
    ],
    codeHighlight: `function render() {
  list.innerHTML = "";
  for (const todo of todos) {
    const li = document.createElement("li");
    li.dataset.id = todo.id;
    li.classList.toggle("done", todo.done);
    // ...
  }
}`,
    interactiveDemoId: 'todo',
  },
  {
    id: 'weather',
    title: 'Project 3: Live Weather Dashboard',
    part: 'Part 08 · Page 67',
    page: 67,
    description: 'Real-time client-side application talking to the Open-Meteo REST API with live temperature, wind speed, and friendly loading states.',
    techStack: ['Fetch API', 'async/await', 'Error Handling', 'Open-Meteo API'],
    skillsLearned: [
      'Asynchronous programming with async/await and try/catch',
      'Polite screen-reader accessible loading announcements via role="status"',
      'Query string parameters and JSON response parsing',
      'Zero-key API requests with full browser CORS support',
    ],
    codeHighlight: `const url = \`https://api.open-meteo.com/v1/forecast?latitude=\${lat}&longitude=\${lon}&current=temperature_2m,wind_speed_10m\`;
const res = await fetch(url);
if (!res.ok) throw new Error(res.status);
const data = await res.json();`,
    interactiveDemoId: 'weather',
  },
];

export const TESTIMONIALS: Testimonials[] = [
  {
    name: 'Adaeze Okafor',
    role: 'Computer Science Student',
    avatar: 'AO',
    quote: 'The everyday analogies in this guide finally made everything click. The explanation of the Event Loop as a restaurant chef and CSS specificity as school ranks is pure genius!',
    projectCompleted: 'Built her portfolio and landed a junior web internship',
    rating: 5,
  },
  {
    name: 'Marcus Chen',
    role: 'Career Switcher (ex-Accountant)',
    avatar: 'MC',
    quote: 'Most programming books throw hundreds of jargon words at you. This guide explained flexbox, promises, and the DOM in plain English with green annotated bubbles on every single line of code.',
    projectCompleted: 'Completed all 3 projects in 2 weeks',
    rating: 5,
  },
  {
    name: 'Ibrahim Sani',
    role: 'Self-Taught Developer',
    avatar: 'IS',
    quote: 'At 2,500 it is by far the best investment I made this year. Having the 4 cheat sheets and 76 high-resolution pages on my second monitor saves me hours every day.',
    projectCompleted: 'Shipped a weather app for local farmers',
    rating: 5,
  },
];

export const FAQS: FAQItem[] = [
  {
    question: 'What is included for 2,500?',
    answer: 'You get immediate lifetime access to the complete 76-page high-resolution PDF guide, full source code for all 3 capstone projects, printable cheat sheets for HTML, CSS, and JavaScript, the developer glossary, and all future updates.',
    category: 'pricing',
  },
  {
    question: 'Do I need any previous coding experience or paid software?',
    answer: 'Zero experience needed! As page 1 states: "START FROM ZERO · NO EXPERIENCE NEEDED". You only need a computer, a modern browser (Chrome, Firefox, or Edge), and the free VS Code editor.',
    category: 'prerequisites',
  },
  {
    question: 'How does the purchase and download work with Supabase?',
    answer: 'When you click "Get The Guide", you enter your name and email. Your order is processed and recorded into our Supabase database. You receive an instant download link for the PDF and a unique lifetime license key.',
    category: 'pricing',
  },
  {
    question: 'Why this guide instead of random YouTube tutorials?',
    answer: 'YouTube videos quickly become outdated and jump between disjointed tools. This guide teaches the core holy trinity (HTML, CSS, JavaScript) sequentially, with line-by-line annotations, everyday mental models, beginner trap warnings (WATCH OUT), and 3 real working projects.',
    category: 'content',
  },
  {
    question: 'Can I read the guide on my tablet or phone?',
    answer: 'Yes! The PDF is formatted with crisp high-contrast typography, large code blocks, and visual diagrams that look stunning on iPad, Android tablets, Kindle, laptops, and mobile phones.',
    category: 'formats',
  },
];
