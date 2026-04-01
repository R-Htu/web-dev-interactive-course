// ══════════════════════════════════════════════════════
// LESSON DATA — HTML / CSS / JavaScript Interactive Course
// ══════════════════════════════════════════════════════

const LESSONS = [

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  HTML LESSONS 1–5
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id:1, icon:"[W]", type:"html", color:"#f97316",
    title:"HTML Basics & Structure",
    desc:"Documents, elements, tags and the skeleton of the web",
    content:[
      { type:"text", heading:"What is HTML?",
        body:`<strong>HTML</strong> (HyperText Markup Language) is the foundation of every web page. It defines <em>what</em> is on a page — text, images, buttons — using <strong>elements</strong> wrapped in <code>&lt;tags&gt;</code>.<br><br>
        Think of HTML as the <strong>skeleton</strong> of a webpage. CSS adds skin and colour. JavaScript adds movement.` },
      { type:"code", heading:"The HTML Document Shell", file:"index.html",
        runnable:true,
        html:`<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8">
    <title>My Page</title>
  <\/head>
  <body>
    <h1>Hello, World!</h1>
    <p>This is my first web page.</p>
  <\/body>
<\/html>`,
        note:"Every HTML file starts with this skeleton. The &lt;head&gt; holds metadata, &lt;body&gt; holds visible content." },
      { type:"points", heading:"Essential Tags",
        points:[
          "<code>&lt;h1&gt;</code>–<code>&lt;h6&gt;</code> — Headings (h1 is biggest, h6 smallest)",
          "<code>&lt;p&gt;</code> — Paragraph of text",
          "<code>&lt;a href='...'&gt;</code> — Hyperlink to another page or site",
          "<code>&lt;img src='...' alt='...'&gt;</code> — Image (self-closing, no end tag)",
          "<code>&lt;div&gt;</code> — Generic container block",
          "<code>&lt;span&gt;</code> — Generic inline container",
        ] },
      { type:"code", heading:"Common Elements in Action", file:"elements.html",
        runnable:true,
        html:`<h1>Main Heading</h1>
<h2>Sub Heading</h2>
<p>This is a <strong>paragraph</strong> with <em>italic</em> text.</p>
<a href="https://example.com">Visit Example.com</a>
<br>
<img src="https://placehold.co/200x80/3b82f6/fff?text=IMAGE" alt="placeholder">`,
        note:"Hit [>] Run to see these elements render live!" },
    ],
    quiz:[
      { q:"What does HTML stand for?",
        choices:["HyperText Markup Language","High Text Modifier Language","HyperText Modern Layout","Hyper Transfer Markup Language"],
        correct:0, explain:"HTML = HyperText Markup Language — the standard markup language for web pages." },
      { q:"Which tag creates the largest heading?",
        choices:["<h6>","<heading>","<h1>","<big>"],
        correct:2, explain:"&lt;h1&gt; is the largest heading tag. Headings go from h1 (biggest) to h6 (smallest)." },
      { q:"Where does visible page content go?",
        choices:["<head>","<meta>","<title>","<body>"],
        correct:3, explain:"The <body> tag contains everything visible on the page." },
      { q:"Which tag creates a hyperlink?",
        choices:["<link>","<a>","<href>","<url>"],
        correct:1, explain:"The <a> (anchor) tag with an href attribute creates hyperlinks." },
      { q:"Which is a self-closing tag?",
        choices:["<p>","<div>","<img>","<h1>"],
        correct:2, explain:"<img> is self-closing — it has no separate closing tag." },
    ],
    challenge:{
      title:"Build Your First HTML Page",
      desc:"Create a simple personal introduction page.",
      task:`Build an HTML page with: a <strong>&lt;h1&gt;</strong> with your name, a <strong>&lt;p&gt;</strong> introducing yourself, a <strong>&lt;h2&gt;</strong> subheading, and a second <strong>&lt;p&gt;</strong>. Click Run to preview!`,
      panes:["html"],
      starterHtml:`<!-- Write your HTML here -->
<h1>Your Name</h1>
<p>Write your introduction here...</p>

<!-- Add a subheading and another paragraph -->`,
      starterCss:``, starterJs:``,
      hint:"Use h1, p, h2 tags. Content goes between opening and closing tags.",
      checks: code => {
        const h = code.html || "";
        const hasH1  = /<h1[^>]*>/i.test(h);
        const hasP   = (h.match(/<p[^>]*>/ig)||[]).length >= 2;
        const hasH2  = /<h2[^>]*>/i.test(h);
        if(hasH1 && hasP && hasH2) return { pass:true, title:"Page built!", feedback:"h1, two paragraphs and h2 — great HTML structure!" };
        const m=[];
        if(!hasH1) m.push("an <h1> heading");
        if(!hasH2) m.push("an <h2> subheading");
        if(!hasP)  m.push("at least 2 <p> paragraphs");
        return { pass:false, title:"Not quite", feedback:"Still need:\n"+m.map(x=>" • "+x).join("\n") };
      }
    }
  },

  {
    id:2, icon:"[=]", type:"html", color:"#f97316",
    title:"Lists & Tables",
    desc:"Ordered lists, unordered lists, and HTML tables",
    content:[
      { type:"text", heading:"Lists in HTML",
        body:`HTML gives us two main list types:<br><br>
        <strong>&lt;ul&gt;</strong> — Unordered list (bullet points)<br>
        <strong>&lt;ol&gt;</strong> — Ordered list (1, 2, 3…)<br><br>
        Both use <code>&lt;li&gt;</code> (list item) inside them.` },
      { type:"code", heading:"Lists Side by Side", file:"lists.html",
        runnable:true,
        html:`<h3>Unordered (ul)</h3>
<ul>
  <li>HTML</li>
  <li>CSS</li>
  <li>JavaScript</li>
</ul>

<h3>Ordered (ol)</h3>
<ol>
  <li>Learn HTML</li>
  <li>Learn CSS</li>
  <li>Learn JavaScript</li>
</ol>` },
      { type:"text", heading:"HTML Tables",
        body:`Tables display data in rows and columns.<br>
        <code>&lt;table&gt;</code> — wraps the table<br>
        <code>&lt;tr&gt;</code> — table row<br>
        <code>&lt;th&gt;</code> — table header cell (bold by default)<br>
        <code>&lt;td&gt;</code> — table data cell` },
      { type:"code", heading:"A Simple Table", file:"table.html",
        runnable:true,
        html:`<table border="1" cellpadding="8" style="border-collapse:collapse;font-family:sans-serif">
  <tr>
    <th>Name</th>
    <th>Language</th>
    <th>Year</th>
  </tr>
  <tr>
    <td>Alice</td>
    <td>JavaScript</td>
    <td>2023</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td>Python</td>
    <td>2022</td>
  </tr>
</table>` },
    ],
    quiz:[
      { q:"Which tag creates an unordered list?",
        choices:["<ol>","<li>","<ul>","<list>"],
        correct:2, explain:"<ul> (unordered list) creates a bulleted list. Each item goes inside <li>." },
      { q: "What does &lt;ol&gt; produce?",
        choices:["Bullet points","Numbered list","Table","Heading"],
        correct:1, explain:"<ol> creates an ordered (numbered) list." },
      { q:"Which tag defines a table row?",
        choices:["<td>","<th>","<tr>","<row>"],
        correct:2, explain:"<tr> defines a table row. Inside a row, use <td> for data or <th> for headers." },
      { q: "What is the difference between &lt;th&gt; and &lt;td&gt;?",
        choices:["No difference","<th> is header cell (bold), <td> is data cell","<td> is header","<th> is for tables only"],
        correct:1, explain:"<th> is a table header cell — usually bold. <td> is a regular data cell." },
    ],
    challenge:{
      title:"Build a Skills Table",
      desc:"Create an HTML table showing your skills.",
      task:`Make a table with at least 3 rows and 3 columns. Include a header row using <strong>&lt;th&gt;</strong>. Also add an unordered list below it.`,
      panes:["html"],
      starterHtml:`<!-- Create your table here -->
<table border="1" cellpadding="8" style="border-collapse:collapse">
  <tr>
    <th>Skill</th>
    <!-- Add more headers -->
  </tr>
  <!-- Add data rows -->
</table>

<!-- Add a ul list below -->`,
      starterCss:``, starterJs:``,
      hint:"<tr> for rows, <th> for header cells, <td> for data cells. Don't forget the <ul> with <li> items!",
      checks: code => {
        const h = code.html || "";
        const hasTable = /<table/i.test(h);
        const hasTh = /<th[^>]*>/i.test(h);
        const rows = (h.match(/<tr[^>]*>/ig)||[]).length;
        const hasUl = /<ul[^>]*>/i.test(h);
        if(hasTable && hasTh && rows>=3 && hasUl)
          return { pass:true, title:"Table built!", feedback:"Great — table with headers, 3+ rows, and a list!" };
        const m=[];
        if(!hasTable) m.push("<table> element");
        if(!hasTh)    m.push("<th> header cells");
        if(rows<3)    m.push("at least 3 rows (<tr>)");
        if(!hasUl)    m.push("<ul> list below the table");
        return { pass:false, title:"Keep going", feedback:"Missing:\n"+m.map(x=>" • "+x).join("\n") };
      }
    }
  },

  {
    id:3, icon:"[L]", type:"html", color:"#f97316",
    title:"Links, Images & Forms",
    desc:"Connecting pages, embedding images, and getting user input",
    content:[
      { type:"text", heading:"Links — The Web's Superpower",
        body:`The <code>&lt;a&gt;</code> (anchor) tag creates clickable links.<br>
        <code>href</code> sets the destination. <code>target="_blank"</code> opens in a new tab.` },
      { type:"code", heading:"Link Examples", file:"links.html",
        runnable:true,
        html:`<a href="https://example.com">External link</a>
<br>
<a href="#section2">Jump to Section 2 (same page)</a>
<br>
<a href="mailto:hello@email.com">Send Email</a>` },
      { type:"text", heading:"Images",
        body:`<code>&lt;img src="url" alt="description"&gt;</code><br><br>
        <code>src</code> — path to the image file (URL or local path)<br>
        <code>alt</code> — description for screen readers and if image fails to load<br>
        <code>width / height</code> — control size in pixels` },
      { type:"code", heading:"Image Examples", file:"images.html",
        runnable:true,
        html:`<img src="https://placehold.co/300x120/3b82f6/fff?text=Web+Course" alt="Course banner" width="300">
<br><br>
<img src="https://placehold.co/80x80/22c55e/fff?text=:)" alt="Smiley" width="80">` },
      { type:"text", heading:"Forms — Getting User Input",
        body:`Forms let users type data and submit it. Key form elements:<br>
        <code>&lt;input type="text"&gt;</code> — text field<br>
        <code>&lt;input type="email"&gt;</code> — email field with validation<br>
        <code>&lt;textarea&gt;</code> — multi-line text<br>
        <code>&lt;button&gt;</code> — clickable button<br>
        <code>&lt;label&gt;</code> — descriptive label for an input` },
      { type:"code", heading:"A Simple Form", file:"form.html",
        runnable:true,
        html:`<style>
  label { display:block; margin:8px 0 3px; font-family:sans-serif; }
  input, textarea { padding:6px; border:1px solid #ccc; border-radius:4px; font-size:14px; }
  button { margin-top:8px; padding:8px 18px; background:#3b82f6; color:white; border:none; border-radius:4px; cursor:pointer; }
</style>
<form>
  <label for="name">Your Name:</label>
  <input type="text" id="name" placeholder="Enter name...">

  <label for="email">Email:</label>
  <input type="email" id="email" placeholder="Enter email...">

  <label for="msg">Message:</label>
  <textarea id="msg" rows="3" placeholder="Type here..."></textarea>

  <button type="submit">Send</button>
</form>` },
    ],
    quiz:[
      { q:"Which attribute sets a link's destination?",
        choices:["src","link","href","url"],
        correct:2, explain:"The href attribute on <a> sets where the link points to." },
      { q:"What does target='_blank' do?",
        choices:["Opens link in same tab","Opens link in new tab","Downloads the file","Sends an email"],
        correct:1, explain:"target='_blank' makes the link open in a new browser tab." },
      { q:"Which attribute describes an image for screen readers?",
        choices:["title","src","href","alt"],
        correct:3, explain:"The alt attribute provides alternative text for images, used by screen readers and when the image fails to load." },
      { q:"Which input type has built-in email format validation?",
        choices:['type="text"','type="email"','type="url"','type="password"'],
        correct:1, explain:'type="email" makes the browser validate that the value looks like an email address.' },
    ],
    challenge:{
      title:"Build a Contact Form",
      desc:"Create a styled contact form with name, email and message fields.",
      task:`Build a form with: a <strong>name</strong> text input, an <strong>email</strong> input (type=email), a <strong>textarea</strong> for a message, and a <strong>submit button</strong>. Add basic inline CSS styling.`,
      panes:["html","css"],
      starterHtml:`<form>
  <!-- Add your form fields here -->

</form>`,
      starterCss:`form { font-family: sans-serif; max-width: 300px; }
label { display: block; margin: 8px 0 3px; }
input, textarea { width: 100%; padding: 6px; border: 1px solid #ccc; border-radius: 4px; }
button { margin-top: 10px; padding: 8px 18px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer; }`,
      starterJs:``,
      hint:"<input type='text'>, <input type='email'>, <textarea></textarea>, <button>Submit</button>",
      checks: code => {
        const h = code.html || "";
        const hasForm     = /<form/i.test(h);
        const hasEmail    = /type=["']email["']/i.test(h);
        const hasTextarea = /<textarea/i.test(h);
        const hasButton   = /<button/i.test(h);
        if(hasForm && hasEmail && hasTextarea && hasButton)
          return { pass:true, title:"Form complete!", feedback:"Name, email, textarea, and button — solid form!" };
        const m=[];
        if(!hasForm)     m.push("<form> element");
        if(!hasEmail)    m.push('<input type="email">');
        if(!hasTextarea) m.push("<textarea>");
        if(!hasButton)   m.push("<button>");
        return { pass:false, title:"Incomplete form", feedback:"Missing:\n"+m.map(x=>" • "+x).join("\n") };
      }
    }
  },

  {
    id:4, icon:"[B]", type:"html", color:"#f97316",
    title:"Semantic HTML",
    desc:"Meaningful structure with header, nav, main, section, article, footer",
    content:[
      { type:"text", heading:"What is Semantic HTML?",
        body:`Semantic HTML uses tags that <strong>mean something</strong> — not just any &lt;div&gt;. They describe the role of the content, which helps search engines, screen readers, and developers.` },
      { type:"points", heading:"Key Semantic Tags",
        points:[
          "<code>&lt;header&gt;</code> — top of page or section (logo, nav)",
          "<code>&lt;nav&gt;</code> — navigation links",
          "<code>&lt;main&gt;</code> — primary content of the page (one per page)",
          "<code>&lt;section&gt;</code> — a thematic grouping of content",
          "<code>&lt;article&gt;</code> — independent, self-contained content (blog post, card)",
          "<code>&lt;aside&gt;</code> — related but secondary content (sidebar)",
          "<code>&lt;footer&gt;</code> — bottom of page or section",
        ] },
      { type:"code", heading:"Semantic Page Layout", file:"semantic.html",
        runnable:true,
        html:`<style>
  * { box-sizing: border-box; font-family: sans-serif; margin: 0; padding: 0; }
  header { background: #3b82f6; color: white; padding: 12px 16px; }
  nav a  { color: white; margin-right: 12px; text-decoration: none; font-size: 14px; }
  main   { padding: 16px; display: grid; grid-template-columns: 1fr 220px; gap: 16px; }
  article { background: #f0f9ff; padding: 14px; border-radius: 8px; border-left: 3px solid #3b82f6; }
  aside  { background: #fef9c3; padding: 12px; border-radius: 8px; font-size: 13px; }
  footer { background: #1e293b; color: #94a3b8; padding: 10px 16px; font-size: 13px; }
</style>

<header>
  <strong>My Website</strong>
  <nav>
    <a href="#">Home</a>
    <a href="#">About</a>
    <a href="#">Contact</a>
  </nav>
</header>

<main>
  <section>
    <article>
      <h2>Blog Post Title</h2>
      <p>This is a self-contained article block.</p>
    </article>
  </section>
  <aside>
    [+] Related Links<br>
    <a href="#">Link 1</a><br>
    <a href="#">Link 2</a>
  </aside>
</main>

<footer>© 2025 My Website</footer>` },
    ],
    quiz:[
      { q:"Which tag should wrap a site's navigation links?",
        choices:["<div>","<header>","<nav>","<section>"],
        correct:2, explain:"<nav> is the semantic tag for navigation menus and links." },
      { q:"Which is the correct tag for a standalone blog post?",
        choices:["<section>","<div>","<aside>","<article>"],
        correct:3, explain:"<article> represents standalone, self-contained content like a blog post or news item." },
      { q:"How many <main> tags should a page have?",
        choices:["As many as needed","Two","One","None required"],
        correct:2, explain:"There should be only one <main> per page — it marks the primary unique content." },
      { q:"What does <aside> typically contain?",
        choices:["Main content","Navigation","Secondary/related content like sidebars","Footers"],
        correct:2, explain:"<aside> holds content related to the main content but not essential — like sidebars." },
    ],
    challenge:{
      title:"Semantic Blog Page",
      desc:"Build a blog-style page using semantic HTML.",
      task:`Create a page with: a <strong>&lt;header&gt;</strong> with site name, a <strong>&lt;nav&gt;</strong> with 3 links, a <strong>&lt;main&gt;</strong> with one <strong>&lt;article&gt;</strong> (title + paragraph), and a <strong>&lt;footer&gt;</strong>.`,
      panes:["html","css"],
      starterHtml:`<!-- Use semantic HTML tags -->
<header>
  <!-- Site name here -->
</header>

<nav>
  <!-- 3 navigation links -->
</nav>

<main>
  <article>
    <!-- Article title and content -->
  </article>
</main>

<footer>
  <!-- Footer text -->
</footer>`,
      starterCss:`* { box-sizing: border-box; margin: 0; padding: 0; font-family: sans-serif; }
header { background: #1e293b; color: white; padding: 14px 20px; }
nav    { background: #334155; padding: 8px 20px; }
nav a  { color: #94a3b8; margin-right: 14px; text-decoration: none; }
main   { padding: 20px; }
article { background: #f0f9ff; padding: 16px; border-radius: 8px; }
footer { background: #1e293b; color: #64748b; padding: 12px 20px; margin-top: 20px; }`,
      starterJs:``,
      hint:"Nest your <article> inside <main>. <nav> should have <a> tags.",
      checks: code => {
        const h = code.html || "";
        const ok = [
          /<header/i.test(h), /<nav/i.test(h),
          /<main/i.test(h), /<article/i.test(h), /<footer/i.test(h),
          (h.match(/<a\s/ig)||[]).length >= 3
        ];
        if(ok.every(Boolean)) return { pass:true, title:"Semantic layout complete!", feedback:"All semantic tags used correctly — great structure!" };
        const labels=["<header>","<nav>","<main>","<article>","<footer>","3 <a> links in nav"];
        return { pass:false, title:"Needs semantic tags", feedback:"Missing:\n"+labels.filter((_,i)=>!ok[i]).map(x=>" • "+x).join("\n") };
      }
    }
  },

  {
    id:5, icon:"[N]", type:"html", color:"#f97316",
    title:"HTML Attributes & Meta",
    desc:"IDs, classes, data attributes, and page metadata",
    content:[
      { type:"text", heading:"Attributes Give Elements Powers",
        body:`Attributes are extra information added inside the opening tag: <code>&lt;tag attribute="value"&gt;</code><br><br>
        <strong>id</strong> — unique identifier, one per page<br>
        <strong>class</strong> — reusable label, used by CSS and JS<br>
        <strong>data-*</strong> — custom data you define` },
      { type:"code", heading:"id, class and data-*", file:"attrs.html",
        runnable:true,
        html:`<style>
  .highlight { background: yellow; padding: 4px 8px; border-radius: 4px; }
  .card { border: 1px solid #ccc; padding: 12px; border-radius: 8px; margin: 8px 0; font-family: sans-serif; }
</style>

<p id="intro" class="highlight">I have an id AND a class.</p>

<div class="card" data-user-id="42" data-role="admin">
  User Card — hover devtools to see data attributes!
</div>

<div class="card" data-user-id="99" data-role="viewer">
  Another Card
</div>` },
      { type:"text", heading:"HTML Meta Tags",
        body:`Inside <code>&lt;head&gt;</code>, meta tags describe the page to browsers and search engines.<br><br>
        <code>&lt;meta charset="UTF-8"&gt;</code> — character encoding<br>
        <code>&lt;meta name="description" content="..."&gt;</code> — SEO description<br>
        <code>&lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;</code> — mobile scaling<br>
        <code>&lt;title&gt;</code> — text shown in the browser tab` },
      { type:"code", heading:"Head & Meta Setup", file:"meta.html",
        runnable:true,
        html:`<style>body { font-family: sans-serif; padding: 16px; }</style>
<p>Check the code — these meta tags live in &lt;head&gt; and control how browsers and search engines see your page.</p>
<pre style="background:#f1f5f9;padding:12px;border-radius:6px;font-size:13px">
&lt;head&gt;
  &lt;meta charset="UTF-8"&gt;
  &lt;meta name="viewport" content="width=device-width, initial-scale=1"&gt;
  &lt;meta name="description" content="A great web page"&gt;
  &lt;title&gt;My Awesome Page&lt;/title&gt;
&lt;/head&gt;
</pre>` },
    ],
    quiz:[
      { q:"Which attribute should be unique on a page?",
        choices:["class","data-*","id","href"],
        correct:2, explain:"id should be unique — only one element per page should have a given id value." },
      { q:"What is the class attribute mainly used for?",
        choices:["Making a link","Giving a unique ID","Applying CSS styles to groups of elements","Setting image size"],
        correct:2, explain:"class attributes let you target groups of elements with CSS (and JavaScript)." },
      { q:"Where do meta tags go?",
        choices:["<body>","<footer>","<head>","<div>"],
        correct:2, explain:"Meta tags go inside the <head> element, not the visible <body>." },
      { q:"Which meta tag is essential for mobile-responsive pages?",
        choices:["charset","description","keywords","viewport"],
        correct:3, explain:'The viewport meta tag tells mobile browsers to scale the page correctly.' },
    ],
    challenge:{
      title:"Attributes & Data",
      desc:"Practice using ids, classes, and data attributes.",
      task:`Create 3 <strong>&lt;div&gt;</strong> cards, each with a <strong>class="card"</strong>, a unique <strong>id</strong>, and a <strong>data-category</strong> attribute. Style the .card class with CSS.`,
      panes:["html","css"],
      starterHtml:`<!-- 3 card divs with class, id, and data-category -->
<div class="card" id="card1" data-category="">
  Card 1
</div>
`,
      starterCss:`.card {
  border: 2px solid #3b82f6;
  padding: 16px;
  border-radius: 8px;
  margin: 8px 0;
  font-family: sans-serif;
}`,
      starterJs:``,
      hint:"Each card: class='card' id='card1' data-category='something'. Don't forget 3 cards!",
      checks: code => {
        const h = code.html || "";
        const cards   = (h.match(/class=["']card["']/ig)||[]).length;
        const ids     = (h.match(/\bid=["']/ig)||[]).length;
        const dataAtt = (h.match(/data-category=/ig)||[]).length;
        if(cards>=3 && ids>=3 && dataAtt>=3) return { pass:true, title:"Cards done!", feedback:"3 cards with class, id, and data-category — perfect!" };
        const m=[];
        if(cards<3)   m.push("3 divs with class='card'");
        if(ids<3)     m.push("unique id on each card");
        if(dataAtt<3) m.push("data-category attribute on each card");
        return { pass:false, title:"Not complete", feedback:"Need:\n"+m.map(x=>" • "+x).join("\n") };
      }
    }
  },
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
// HTML LESSONS 6–10 (New Additions)
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{
  id:6, icon:"[F]", type:"html", color:"#f97316",
  title:"Forms & Inputs Advanced",
  desc:"Explore more input types, labels, and form structure",
  content:[
    { type:"text", heading:"More Input Types",
      body:`HTML supports many input types beyond text and email:<br>
        <code>type="password"</code> — secure text<br>
        <code>type="number"</code> — numeric input<br>
        <code>type="date"</code> — calendar selection<br>
        <code>type="checkbox"</code> — true/false<br>
        <code>type="radio"</code> — select one option<br>
        <code>type="file"</code> — upload files<br>
        <code>type="color"</code> — color picker<br>
        <code>type="range"</code> — slider` },
    { type:"code", heading:"Form with Different Inputs", file:"advanced-form.html",
      runnable:true,
      html:`<form>
  <label>Name: <input type="text"></label>
  <label>Email: <input type="email"></label>
  <label>Password: <input type="password"></label>
  <label>Age: <input type="number" min="1" max="100"></label>
  <label>Birthday: <input type="date"></label>
  <label>Color: <input type="color"></label>
  <label>Upload File: <input type="file"></label>
  <label>Subscribe? <input type="checkbox"></label>
  <button type="submit">Submit</button>
</form>` },
  ],
  quiz:[
    { q:"Which input type hides entered text?",
      choices:["text","email","password","number"],
      correct:2, explain:"type='password' hides user input for security." },
    { q:"Which input allows choosing a color?",
      choices:["color","text","checkbox","range"],
      correct:0, explain:"type='color' displays a color picker." },
  ],
  challenge:{
    title:"Advanced Form Challenge",
    desc:"Create a form using at least 5 different input types.",
    task:`Use inputs like text, email, password, date, color, checkbox, number. Include labels.`,
    panes:["html","css"],
    starterHtml:`<form>
  <!-- Add inputs here -->
</form>`,
    starterCss:`form { font-family:sans-serif; } label { display:block; margin:8px 0; } input { margin:2px 0; }`,
    checks: code => {
      const h = code.html || "";
      const inputCount = (h.match(/<input/i)||[]).length;
      return inputCount>=5
        ? { pass:true, title:"Great!", feedback:"You used 5+ input types correctly!" }
        : { pass:false, title:"Not enough inputs", feedback:"Add at least 5 different input types." };
    }
  }
},

{
  id:7, icon:"[C]", type:"html", color:"#f97316",
  title:"Tables Advanced",
  desc:"Table captions, colspan, rowspan, and styling",
  content:[
    { type:"text", heading:"Advanced Table Features",
      body:`You can enhance tables with:<br>
        <code>&lt;caption&gt;</code> — table title<br>
        <code>colspan</code> — span a cell across multiple columns<br>
        <code>rowspan</code> — span a cell across multiple rows<br>
        <code>&lt;thead&gt;, &lt;tbody&gt;, &lt;tfoot&gt;</code> — group table sections` },
    { type:"code", heading:"Table with colspan & rowspan", file:"table-advanced.html",
      runnable:true,
      html:`<table border="1" cellpadding="8" style="border-collapse:collapse;">
  <caption>Team Scores</caption>
  <tr>
    <th>Player</th>
    <th>Game 1</th>
    <th>Game 2</th>
    <th>Total</th>
  </tr>
  <tr>
    <td rowspan="2">Alice</td>
    <td>10</td>
    <td>15</td>
    <td rowspan="2">50</td>
  </tr>
  <tr>
    <td>25</td>
    <td>0</td>
  </tr>
  <tr>
    <td>Bob</td>
    <td colspan="2">30</td>
    <td>30</td>
  </tr>
</table>` },
  ],
  quiz:[
    { q:"Which tag gives a table a title?",
      choices:["<title>","<caption>","<th>","<thead>"],
      correct:1, explain:"<caption> provides a title for the table." },
    { q:"What does colspan do?",
      choices:["Merges rows","Merges columns","Adds a column","Adds a row"],
      correct:1, explain:"colspan allows a cell to span multiple columns." },
  ],
  challenge:{
    title:"Advanced Table Challenge",
    desc:"Make a table using caption, colspan, and rowspan.",
    task:`Build a table with at least 3 columns and 4 rows, include a caption, and use colspan or rowspan.`,
    panes:["html","css"],
    starterHtml:`<table border="1" cellpadding="8">
  <!-- Add caption, rows, colspan/rowspan -->
</table>`,
    checks: code => {
      const h = code.html || "";
      const hasTable = /<table/i.test(h);
      const hasCaption = /<caption/i.test(h);
      const hasColspan = /colspan=/i.test(h);
      const hasRowspan = /rowspan=/i.test(h);
      return hasTable && hasCaption && (hasColspan||hasRowspan)
        ? { pass:true, title:"Advanced table done!", feedback:"Table includes caption and colspan/rowspan!" }
        : { pass:false, title:"Incomplete", feedback:"Add caption and use colspan or rowspan." };
    }
  }
},

{
  id:8, icon:"[S]", type:"html", color:"#f97316",
  title:"HTML Multimedia",
  desc:"Embedding audio, video, and iframes",
  content:[
    { type:"text", heading:"Audio & Video",
      body:`HTML5 supports multimedia:<br>
        <code>&lt;audio controls&gt;</code> — embed audio<br>
        <code>&lt;video controls width='...'&gt;</code> — embed video<br>
        <code>&lt;source src='...' type='...'/&gt;</code> — media source<br>
        <code>&lt;iframe src='...'&gt;&lt;/iframe&gt;</code> — embed other webpages` },
    { type:"code", heading:"Video Example", file:"video.html",
      runnable:true,
      html:`<video controls width="320">
  <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>` },
    { type:"code", heading:"Audio Example", file:"audio.html",
      runnable:true,
      html:`<audio controls>
  <source src="https://www.w3schools.com/html/horse.mp3" type="audio/mpeg">
  Your browser does not support the audio element.
</audio>` },
  ],
  quiz:[
    { q:"Which attribute shows the media controls?",
      choices:["src","controls","autoplay","loop"],
      correct:1, explain:"The controls attribute adds play/pause buttons, volume, etc." },
    { q:"Which tag embeds another web page inside your page?",
      choices:["<embed>","<iframe>","<object>","<video>"],
      correct:1, explain:"<iframe> lets you embed an external page inside your page." },
  ],
  challenge:{
    title:"Multimedia Challenge",
    desc:"Embed an audio and a video in a page.",
    task:`Add an <audio> element with controls and a <video> element with controls to your HTML page.`,
    panes:["html"],
    starterHtml:`<!-- Audio element here -->
<!-- Video element here -->`,
    checks: code => {
      const h = code.html || "";
      const hasAudio = /<audio/i.test(h);
      const hasVideo = /<video/i.test(h);
      if(hasAudio && hasVideo)
        return { pass:true, title:"Multimedia done!", feedback:"Audio and video embedded correctly!" };
      return { pass:false, title:"Missing elements", feedback:"Include both <audio> and <video> elements." };
    }
  }
},

{
  id:9, icon:"[I]", type:"html", color:"#f97316",
  title:"HTML Comments & Entities",
  desc:"Comments, special characters, and symbols",
  content:[
    { type:"text", heading:"Comments",
      body:`HTML comments are added with <code>&lt;!-- comment here --&gt;</code> and are not visible on the page.` },
    { type:"text", heading:"HTML Entities",
      body:`Special characters like &lt;, &gt;, &amp;, &quot;, &copy; are written using HTML entities to avoid confusion with tags.` },
  ],
  quiz:[
    { q:"How do you write a comment in HTML?",
      choices:["<!-- comment -->","// comment","/* comment */","<comment>"],
      correct:0, explain:"<!-- comment --> is the correct HTML comment syntax." },
    { q:"Which entity displays the less-than sign '<'?",
      choices:["&lt;","&gt;","&amp;","&quot;"],
      correct:0, explain:"&lt; is the HTML entity for '<'." },
  ],
  challenge:{
    title:"Comments & Entities",
    desc:"Practice adding comments and entities.",
    task:`Add an HTML comment describing your page. Use at least 3 entities: &lt;, &gt;, &amp;, &quot;, &copy; somewhere in your page.`,
    panes:["html"],
    starterHtml:`<!-- Your comment here -->
<p>Use entities here: &lt;, &gt;, &amp;</p>`,
    checks: code => {
      const h = code.html || "";
      const hasComment = /<!--.*?-->/i.test(h);
      const hasEntities = /&lt;|&gt;|&amp;|&quot;|&copy;/i.test(h);
      if(hasComment && hasEntities)
        return { pass:true, title:"Entities & Comments!", feedback:"Comment and entities detected." };
      return { pass:false, title:"Incomplete", feedback:"Add a comment and at least 3 entities." };
    }
  }
},

{
  id:10, icon:"[G]", type:"html", color:"#f97316",
  title:"HTML Accessibility",
  desc:"Best practices for accessible web content",
  content:[
    { type:"text", heading:"Accessible HTML",
      body:`Accessibility ensures all users can access your content.<br>
      Use semantic tags, descriptive <code>alt</code> text for images, <code>label</code> for inputs, and proper heading order.` },
    { type:"points", heading:"Key Accessibility Tips",
      points:[
        "Use <code>&lt;alt&gt;</code> on images",
        "Use <code>&lt;label&gt;</code> for form inputs",
        "Use proper heading hierarchy (h1 → h2 → h3…) and avoid skipping levels",
        "Ensure color contrast is sufficient",
        "Provide captions for audio/video when possible"
      ] },
    { type:"code", heading:"Accessible Image & Form", file:"accessibility.html",
      runnable:true,
      html:`<img src="flower.jpg" alt="Red tulip in a garden">
<form>
  <label for="email">Email:</label>
  <input type="email" id="email">
  <button type="submit">Submit</button>
</form>` },
  ],
  quiz:[
    { q:"Which attribute improves image accessibility?",
      choices:["title","alt","src","id"],
      correct:1, explain:"alt provides descriptive text for screen readers." },
    { q:"Why use <label> with inputs?",
      choices:["No reason","Helps styling","Improves accessibility","Prevents errors"],
      correct:2, explain:"Labels link text to inputs so screen readers can describe the input." },
  ],
  challenge:{
    title:"Accessible Page",
    desc:"Make a mini page with an image (alt text) and a form (with labels).",
    task:`Add an image with descriptive alt text and a small form with labeled inputs. Ensure semantic structure and accessibility.`,
    panes:["html","css"],
    starterHtml:`<img src="example.jpg" alt="Description here">
<form>
  <label for="name">Name:</label>
  <input type="text" id="name">
</form>`,
    checks: code => {
      const h = code.html || "";
      const hasImg = /<img[^>]*alt=["'][^"']+["']/i.test(h);
      const hasLabel = /<label[^>]*for=["'][^"']+["']/i.test(h);
      if(hasImg && hasLabel) return { pass:true, title:"Accessible!", feedback:"Image with alt and labeled input found." };
      return { pass:false, title:"Incomplete", feedback:"Add an image with alt and a form label." };
    }
  }
},

  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  CSS LESSONS 11–20
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
 // ============================================================
//  ENHANCED CSS LESSONS — drop-in additions / replacements
//  Covers everything missing from your original set:
//    • Advanced Selectors & Pseudo-elements        (id 11 — replaces/extends)
//    • Box Model + border-box deep-dive            (id 12 — extends)
//    • Colors, Fonts & Text                        (id 13 — extends)
//    • Flexbox advanced properties                 (id 14 — extends)
//    • CSS Grid + Named Areas + Responsive         (id 15 — extends)
// ============================================================

  {
    id: 11,
    icon: "[C]", type: "css", color: "#3b82f6",
    title: "CSS Selectors & Pseudo-elements",
    desc: "Targeting elements with selectors, combinators, and pseudo-elements",
    content: [
      {
        type: "text", heading: "What is CSS?",
        body: `<strong>CSS</strong> (Cascading Style Sheets) controls the <em>visual appearance</em> of HTML — colours, fonts, spacing, layout. Without CSS, pages would look like plain text documents. CSS works by <strong>selecting</strong> an element and then applying <strong>declarations</strong> (property: value pairs) to it.`
      },
      {
        type: "code", heading: "Basic Selector Types", file: "selectors.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 12px; }

  /* 1. Element selector — targets every <p> */
  p { color: #374151; }

  /* 2. Class selector — targets class="highlight" */
  .highlight { background: #fef3c7; padding: 4px 8px; border-radius: 4px; }

  /* 3. ID selector — targets id="special" */
  #special { color: #ef4444; font-weight: bold; }

  /* 4. Universal selector — every element */
  * { box-sizing: border-box; }

  /* 5. Attribute selector — any input with type="text" */
  input[type="text"] { border: 2px solid #3b82f6; padding: 4px 8px; border-radius: 4px; }
</style>

<p>Plain paragraph (element selector)</p>
<p class="highlight">I have class="highlight"</p>
<p id="special">I have id="special"</p>
<input type="text" placeholder="Attribute selector targets me" />`
      },
      {
        type: "points", heading: "Combinator Selectors",
        points: [
          "<code>div p { }</code> — <strong>Descendant</strong>: any &lt;p&gt; inside a &lt;div&gt;, at any depth",
          "<code>div > p { }</code> — <strong>Child</strong>: only direct &lt;p&gt; children of &lt;div&gt;",
          "<code>h2 + p { }</code> — <strong>Adjacent sibling</strong>: the first &lt;p&gt; immediately after &lt;h2&gt;",
          "<code>h2 ~ p { }</code> — <strong>General sibling</strong>: all &lt;p&gt; siblings after &lt;h2&gt;",
        ]
      },
      {
        type: "code", heading: "Combinators in Practice", file: "combinators.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 12px; }

  /* Direct child only */
  .box > p { color: #3b82f6; font-weight: bold; }

  /* Adjacent sibling */
  h3 + p { background: #fef3c7; padding: 4px 8px; border-radius: 4px; }

  /* All siblings after h3 */
  h3 ~ span { color: #ef4444; display: block; margin-top: 4px; }
</style>

<div class="box">
  <p>Direct child → blue (div > p)</p>
  <section><p>Grandchild → NOT styled by div > p</p></section>
</div>

<h3>Heading</h3>
<p>Adjacent sibling → yellow bg (h3 + p)</p>
<span>General sibling span 1 (h3 ~ span)</span>
<span>General sibling span 2 (h3 ~ span)</span>`
      },
      {
        type: "text", heading: "Pseudo-classes vs Pseudo-elements",
        body: `<strong>Pseudo-classes</strong> (single colon <code>:</code>) — target an element in a certain <em>state</em>:<br>
        <code>:hover</code> &nbsp;·&nbsp; <code>:focus</code> &nbsp;·&nbsp; <code>:first-child</code> &nbsp;·&nbsp; <code>:nth-child(n)</code> &nbsp;·&nbsp; <code>:not(selector)</code><br><br>
        <strong>Pseudo-elements</strong> (double colon <code>::</code>) — style a <em>virtual part</em> of an element:<br>
        <code>::before</code> &nbsp;·&nbsp; <code>::after</code> &nbsp;·&nbsp; <code>::first-line</code> &nbsp;·&nbsp; <code>::placeholder</code>`
      },
      {
        type: "code", heading: "Pseudo-classes Demo", file: "pseudo-classes.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 12px; }
  ul { list-style: none; padding: 0; }
  li { padding: 8px 12px; border-radius: 6px; margin: 4px 0; background: #f1f5f9; }

  /* State pseudo-classes */
  li:hover        { background: #3b82f6; color: white; cursor: pointer; }
  li:first-child  { background: #dcfce7; font-weight: bold; }
  li:last-child   { background: #fee2e2; }
  li:nth-child(2) { border-left: 4px solid #f59e0b; }

  input:focus     { outline: 3px solid #3b82f6; border-radius: 4px; }
  input:not([type="submit"]) { padding: 6px 10px; border: 1px solid #cbd5e1; border-radius: 4px; margin: 4px; }
</style>

<ul>
  <li>First child (green)</li>
  <li>Second child (orange border)</li>
  <li>Third child</li>
  <li>Last child (red)</li>
</ul>
<input type="text" placeholder="Focus me — blue outline" />
<input type="submit" value="Submit (excluded by :not)" />`
      },
      {
        type: "code", heading: "::before & ::after Pseudo-elements", file: "pseudo-elements.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 16px; background: #0f172a; color: #f0f9ff; }

  /* ::before adds content BEFORE the element */
  .badge::before {
    content: "★ ";
    color: #f59e0b;
  }

  /* ::after adds content AFTER — great for decorative lines */
  h2 { position: relative; display: inline-block; }
  h2::after {
    content: "";
    display: block;
    height: 3px;
    background: #3b82f6;
    border-radius: 2px;
    margin-top: 4px;
  }

  /* ::placeholder styles input placeholder text */
  input::placeholder { color: #64748b; font-style: italic; }
  input { background: #1e293b; border: 1px solid #334155; color: white;
          padding: 8px 12px; border-radius: 6px; width: 260px; }

  p { margin: 8px 0; }
</style>

<h2>Underline via ::after</h2>
<p class="badge">Featured Item</p>
<p class="badge">Another Badge</p>
<input type="text" placeholder="Styled placeholder text..." />`
      },
      {
        type: "points", heading: "Specificity — Who Wins?",
        points: [
          "<strong>Inline styles</strong> win over everything (specificity: 1000)",
          "<strong>ID selectors</strong> — specificity: 100",
          "<strong>Class / pseudo-class / attribute</strong> — specificity: 10",
          "<strong>Element / pseudo-element</strong> — specificity: 1",
          "When equal, the <strong>later</strong> rule in the file wins (cascade)",
          "<code>!important</code> overrides all — use sparingly, it breaks the cascade",
        ]
      }
    ],
    quiz: [
      {
        q: "Which selector targets only direct children (not grandchildren)?",
        choices: ["div p", "div > p", "div + p", "div ~ p"],
        correct: 1,
        explain: "The > combinator selects only direct children. 'div p' would match any descendant."
      },
      {
        q: "What is the correct syntax for a pseudo-element?",
        choices: [":after", "::after", "#after", ".after"],
        correct: 1,
        explain: "Pseudo-elements use double colons (::). Single colon (:) is for pseudo-classes."
      },
      {
        q: "Which pseudo-class targets an element when the user's mouse is over it?",
        choices: [":active", ":focus", ":hover", ":visited"],
        correct: 2,
        explain: ":hover applies styles when the cursor is positioned over an element."
      },
      {
        q: "li:nth-child(2) targets which list item?",
        choices: ["Every second item", "Only the 2nd item in the list", "The last 2 items", "Items after the 2nd"],
        correct: 1,
        explain: ":nth-child(2) selects the element that is the 2nd child of its parent."
      },
      {
        q: "What does the content property work with?",
        choices: ["::before and ::after only", "All elements", "Only images", ":hover"],
        correct: 0,
        explain: "The content property is only valid on ::before and ::after pseudo-elements — it inserts generated content."
      },
    ],
    challenge: {
      title: "Pseudo-element Decorations",
      desc: "Use ::before, ::after, and pseudo-classes to style a list.",
      task: `Style a navigation list using: <strong>::before</strong> to add an arrow icon before each link, <strong>:hover</strong> to change link color, <strong>:first-child</strong> to highlight the first item, and <strong>::after</strong> on the heading to add a decorative underline.`,
      panes: ["html", "css"],
      starterHtml: `<h2>Navigation</h2>
<ul class="nav">
  <li><a href="#">Home</a></li>
  <li><a href="#">About</a></li>
  <li><a href="#">Projects</a></li>
  <li><a href="#">Contact</a></li>
</ul>`,
      starterCss: `body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }

h2 {
  position: relative;
  display: inline-block;
  /* Style the heading */
}

h2::after {
  content: "";
  display: block;
  /* Add height, background color, margin-top */
}

.nav { list-style: none; padding: 0; }
.nav li { margin: 8px 0; }

.nav a {
  text-decoration: none;
  /* Add color */
}

.nav a::before {
  content: "";
  /* Change to an arrow like "→ " */
}

.nav a:hover {
  /* Change color on hover */
}

.nav li:first-child a {
  /* Highlight first link */
}`,
      starterJs: ``,
      hint: `a::before { content: "→ "; } and h2::after { height: 3px; background: #3b82f6; }`,
      checks: code => {
        const c = code.css || "";
        const hasAfter   = /::after\s*\{[^}]+content/i.test(c) || /h2::after\s*\{[^}]+\}/i.test(c);
        const hasBefore  = /::before\s*\{[^}]*content\s*:/i.test(c);
        const hasHover   = /:hover\s*\{[^}]+\}/i.test(c);
        const hasFirst   = /:first-child/i.test(c);
        if (hasAfter && hasBefore && hasHover && hasFirst)
          return { pass: true, title: "Pseudo-mastery unlocked!", feedback: "::before, ::after, :hover and :first-child all used — perfect!" };
        const m = [];
        if (!hasBefore) m.push("::before with content property");
        if (!hasAfter)  m.push("::after with content property");
        if (!hasHover)  m.push(":hover pseudo-class");
        if (!hasFirst)  m.push(":first-child pseudo-class");
        return { pass: false, title: "Keep going!", feedback: "Missing:\n" + m.map(x => " • " + x).join("\n") };
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 12,
    icon: "[S]", type: "css", color: "#3b82f6",
    title: "Box Model & Spacing",
    desc: "Margin, padding, border, border-box, and how elements take up space",
    content: [
      {
        type: "text", heading: "The CSS Box Model",
        body: `Every HTML element is a rectangular box with <strong>4 layers</strong>:<br><br>
        <strong>Content</strong> — the actual text or image<br>
        <strong>Padding</strong> — space <em>inside</em> the border, between content and border<br>
        <strong>Border</strong> — the visible edge around padding<br>
        <strong>Margin</strong> — transparent space <em>outside</em> the border, pushing other elements away<br><br>
        Understanding these layers is the key to controlling spacing in every layout.`
      },
      {
        type: "code", heading: "Box Model Visual Demo", file: "box-model.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; background: #f8fafc; padding: 20px; }
  .margin-box  { background: #fef9c3; padding: 24px; border: 2px dashed #ca8a04; border-radius: 8px; }
  .border-box  { background: #fee2e2; padding: 20px; border: 6px solid #ef4444; border-radius: 6px; margin: 0 auto; width: fit-content; }
  .padding-box { background: #dbeafe; padding: 20px; border-radius: 4px; }
  .content-box { background: #3b82f6; color: white; padding: 10px 20px; border-radius: 4px; text-align: center; font-weight: bold; }
  small { display: block; color: #64748b; font-size: 12px; margin-top: 4px; text-align: center; }
</style>
<div class="margin-box">
  <small>MARGIN (yellow dashed area)</small>
  <div class="border-box">
    <small>BORDER (red, 6px)</small>
    <div class="padding-box">
      <small>PADDING (blue area, 20px)</small>
      <div class="content-box">CONTENT</div>
    </div>
  </div>
</div>`
      },
      {
        type: "points", heading: "Shorthand Spacing Rules",
        points: [
          "<code>padding: 10px</code> — all 4 sides equal",
          "<code>padding: 10px 20px</code> — top/bottom 10px · left/right 20px",
          "<code>padding: 5px 10px 15px 20px</code> — top · right · bottom · left (clockwise)",
          "<code>margin: 0 auto</code> — horizontally centers a block element (must have a set width)",
          "<code>margin-top: -8px</code> — negative margins are valid and useful",
          "Margins between siblings <strong>collapse</strong> — two 16px margins touching become 16px, not 32px",
        ]
      },
      {
        type: "code", heading: "content-box vs border-box", file: "border-box.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 16px; }
  p { font-size: 13px; color: #475569; margin-bottom: 8px; }

  .content-box-demo {
    /* DEFAULT — padding/border added ON TOP of width */
    box-sizing: content-box;
    width: 200px; padding: 20px; border: 4px solid #ef4444;
    background: #fee2e2; margin-bottom: 8px;
  }
  .border-box-demo {
    /* BETTER — padding/border INCLUDED in width */
    box-sizing: border-box;
    width: 200px; padding: 20px; border: 4px solid #22c55e;
    background: #dcfce7;
  }
</style>
<p><strong>content-box (default)</strong>: width=200px + 40px padding + 8px border = <strong>248px total</strong></p>
<div class="content-box-demo">width: 200px stated<br><small>actual = 248px 😬</small></div>

<p><strong>border-box (recommended)</strong>: padding & border counted inside the 200px</p>
<div class="border-box-demo">width: 200px stated<br><small>actual = 200px ✓</small></div>`
      },
      {
        type: "code", heading: "The Universal border-box Reset", file: "reset.html",
        runnable: true,
        html: `<style>
  /* Modern CSS reset — always add this to your projects */
  *, *::before, *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  body { font-family: sans-serif; padding: 16px; background: #f1f5f9; }

  .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
  .card {
    width: 100%;        /* with border-box, padding won't overflow */
    padding: 20px;
    border: 2px solid #3b82f6;
    border-radius: 8px;
    background: white;
  }
</style>
<div class="grid">
  <div class="card">Card A — 100% width with padding included ✓</div>
  <div class="card">Card B — no overflow surprises ✓</div>
</div>`
      },
      {
        type: "points", heading: "display: block vs inline vs inline-block",
        points: [
          "<code>block</code> — takes full width, starts on new line. e.g. &lt;div&gt;, &lt;p&gt;, &lt;h1&gt;",
          "<code>inline</code> — flows with text, ignores width/height. e.g. &lt;span&gt;, &lt;a&gt;, &lt;strong&gt;",
          "<code>inline-block</code> — flows with text BUT respects width/height/padding",
          "<code>none</code> — removes element from the page entirely (hidden + no space)",
        ]
      }
    ],
    quiz: [
      {
        q: "What does padding do?",
        choices: ["Adds space outside the border", "Adds space inside between content and border", "Sets the border thickness", "Removes margin"],
        correct: 1,
        explain: "Padding is the space inside an element, between the content and the border."
      },
      {
        q: "With box-sizing: border-box and width: 300px, padding: 20px — what is the total rendered width?",
        choices: ["340px", "300px", "260px", "320px"],
        correct: 1,
        explain: "border-box includes padding inside the stated width — so the element stays at 300px total."
      },
      {
        q: "What happens when two vertical margins meet (margin collapse)?",
        choices: ["They add up to double", "The larger margin wins (they collapse into one)", "Both disappear", "The smaller wins"],
        correct: 1,
        explain: "Adjacent vertical margins collapse — two 16px margins touching = 16px gap, not 32px."
      },
      {
        q: "How do you horizontally center a block element?",
        choices: ["padding: auto", "border: 0 auto", "margin: 0 auto", "align: center"],
        correct: 2,
        explain: "margin: 0 auto distributes equal left/right margin. The element must have a set width."
      },
      {
        q: "Which display value lets an element sit inline but still respect width and height?",
        choices: ["block", "flex", "inline", "inline-block"],
        correct: 3,
        explain: "inline-block flows with text like inline but respects width, height, and all margin/padding."
      }
    ],
    challenge: {
      title: "Box Model Cards",
      desc: "Create polished cards using every layer of the box model.",
      task: `Build 3 cards using <strong>.card</strong>. Apply <strong>padding</strong>, <strong>margin</strong>, <strong>border</strong>, and <strong>border-radius</strong>. Include <code>* { box-sizing: border-box; }</code>. Add a <strong>::before</strong> pseudo-element on .card to add a coloured top accent bar.`,
      panes: ["html", "css"],
      starterHtml: `<div class="card">
  <h3>Card One</h3>
  <p>Padding creates breathing room inside</p>
</div>
<div class="card">
  <h3>Card Two</h3>
  <p>Border adds visible definition</p>
</div>
<div class="card">
  <h3>Card Three</h3>
  <p>Margin separates cards from each other</p>
</div>`,
      starterCss: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; padding: 20px; background: #f1f5f9; }

.card {
  position: relative;
  overflow: hidden;
  /* Add: background, padding, margin-bottom, border, border-radius */
}

.card::before {
  content: "";
  position: absolute;
  top: 0; left: 0; right: 0;
  /* Add: height, background color for accent bar */
}

.card h3 {
  /* margin-top to clear the accent bar */
}`,
      starterJs: ``,
      hint: ".card::before { height: 4px; background: #3b82f6; } and add padding-top to .card",
      checks: code => {
        const c = code.css || "";
        const hasCard    = /\.card\s*\{[^}]+\}/i.test(c);
        const hasPad     = /padding\s*:/i.test(c);
        const hasMargin  = /margin/i.test(c);
        const hasBorder  = /border\s*:/i.test(c);
        const hasBRadius = /border-radius\s*:/i.test(c);
        const hasBBox    = /box-sizing\s*:\s*border-box/i.test(c);
        const hasBefore  = /::before\s*\{[^}]+\}/i.test(c);
        if (hasCard && hasPad && hasMargin && hasBorder && hasBRadius && hasBBox && hasBefore)
          return { pass: true, title: "Box model mastered!", feedback: "padding, margin, border, border-radius, border-box and ::before — flawless!" };
        const m = [];
        if (!hasCard)    m.push(".card selector with styles");
        if (!hasPad)     m.push("padding property");
        if (!hasMargin)  m.push("margin property");
        if (!hasBorder)  m.push("border property");
        if (!hasBRadius) m.push("border-radius property");
        if (!hasBBox)    m.push("* { box-sizing: border-box }");
        if (!hasBefore)  m.push(".card::before pseudo-element");
        return { pass: false, title: "Box model needs work", feedback: "Missing:\n" + m.map(x => " • " + x).join("\n") };
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 13,
    icon: "[P]", type: "css", color: "#3b82f6",
    title: "Colors, Fonts & Text",
    desc: "Color formats, Google Fonts, typography, and CSS custom properties",
    content: [
      {
        type: "text", heading: "CSS Color Formats",
        body: `CSS supports five color formats — each with different use-cases:<br><br>
        <code>color: red</code> — 140 named colors (quick but limited)<br>
        <code>color: #3b82f6</code> — hex (6-digit, most common)<br>
        <code>color: #3b82f680</code> — hex with alpha (last 2 digits = opacity)<br>
        <code>color: rgb(59, 130, 246)</code> — Red Green Blue (0–255)<br>
        <code>color: rgba(59, 130, 246, 0.5)</code> — RGB + alpha transparency<br>
        <code>color: hsl(217, 91%, 60%)</code> — Hue Saturation Lightness (great for theming)`
      },
      {
        type: "code", heading: "Color Formats in Action", file: "colors.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 16px; background: #0f172a; }
  .row { display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 12px; }
  .swatch { width: 90px; height: 70px; border-radius: 8px; display: flex; align-items: flex-end;
            padding: 6px; font-size: 11px; color: white; font-family: monospace; }
</style>
<div class="row">
  <div class="swatch" style="background:#3b82f6">#3b82f6</div>
  <div class="swatch" style="background:#3b82f680">#3b82f680<br>(50% alpha)</div>
  <div class="swatch" style="background:rgb(239,68,68)">rgb(239,68,68)</div>
  <div class="swatch" style="background:rgba(34,197,94,0.6)">rgba + 0.6</div>
  <div class="swatch" style="background:hsl(280,80%,60%)">hsl(280,80%,60%)</div>
  <div class="swatch" style="background:hsl(217,91%,60%)">hsl(217,91%,60%)</div>
</div>`
      },
      {
        type: "text", heading: "CSS Custom Properties (Variables)",
        body: `Define colors once, reuse everywhere. Changing a theme is a one-line edit:<br><br>
        <code>:root { --primary: #3b82f6; }</code><br>
        <code>button { background: var(--primary); }</code><br><br>
        Variables cascade — you can override them on a specific element too.`
      },
      {
        type: "code", heading: "CSS Variables for Theming", file: "variables.html",
        runnable: true,
        html: `<style>
  :root {
    --primary:    #3b82f6;
    --primary-dk: #1d4ed8;
    --accent:     #f59e0b;
    --bg:         #0f172a;
    --surface:    #1e293b;
    --text:       #f0f9ff;
    --muted:      #94a3b8;
    --radius:     8px;
  }
  body   { background: var(--bg); color: var(--text); font-family: sans-serif; padding: 20px; }
  .card  { background: var(--surface); padding: 20px; border-radius: var(--radius);
           border-left: 4px solid var(--primary); margin-bottom: 12px; }
  button { background: var(--primary); color: white; border: none; padding: 10px 20px;
           border-radius: var(--radius); cursor: pointer; font-size: 14px; }
  button:hover { background: var(--primary-dk); }
  .tag   { background: var(--accent); color: #1c1917; padding: 2px 8px; border-radius: 4px; font-size: 12px; font-weight: bold; }
</style>
<div class="card">
  <span class="tag">CSS Variables</span>
  <p style="margin-top:10px; color: var(--muted)">Change --primary in :root and every blue element updates at once.</p>
</div>
<button>Primary Button</button>`
      },
      {
        type: "points", heading: "Typography Properties",
        points: [
          "<code>font-family</code> — typeface. Always provide a fallback: <code>'Syne', sans-serif</code>",
          "<code>font-size</code> — prefer <code>rem</code> (relative to root). 1rem = 16px by default",
          "<code>font-weight</code> — 100 thin · 400 normal · 700 bold · 900 black",
          "<code>line-height</code> — unitless values preferred: <code>1.6</code> (not 1.6px)",
          "<code>letter-spacing</code> — use negative values for headlines (<code>-1px</code>)",
          "<code>text-align</code> — left | center | right | justify",
          "<code>text-transform</code> — uppercase | lowercase | capitalize",
          "<code>text-decoration</code> — none | underline | line-through",
          "<code>clamp(min, preferred, max)</code> — fluid font size that scales with viewport",
        ]
      },
      {
        type: "code", heading: "Typography Showcase", file: "typography.html",
        runnable: true,
        html: `<style>
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&family=JetBrains+Mono&display=swap');

  :root { --heading: 'Syne', sans-serif; --mono: 'JetBrains Mono', monospace; }

  body  { background: #0f172a; padding: 24px; }
  h1    { font-family: var(--heading); font-size: clamp(2rem, 5vw, 3.5rem);
          font-weight: 800; color: #f0f9ff; letter-spacing: -2px; margin: 0; }
  .sub  { font-family: var(--heading); font-size: 1.1rem; color: #94a3b8;
          line-height: 1.8; max-width: 480px; margin: 12px 0 20px; }
  .tag  { font-family: var(--heading); font-size: 0.7rem; text-transform: uppercase;
          letter-spacing: 3px; color: #3b82f6; font-weight: 700; }
  pre   { font-family: var(--mono); font-size: 0.85rem; color: #06b6d4;
          background: #1e293b; padding: 16px; border-radius: 8px; }
</style>
<p class="tag">CSS Typography</p>
<h1>Beautiful<br>Type Scale</h1>
<p class="sub">Good typography has rhythm. Use <code>clamp()</code> for fluid sizing that adapts between mobile and desktop without media queries.</p>
<pre>const scale = "Works on every screen";</pre>`
      }
    ],
    quiz: [
      {
        q: "What does rgba(0, 0, 0, 0.5) produce?",
        choices: ["Solid black", "50% transparent black", "White", "Invisible element"],
        correct: 1,
        explain: "The 4th value in rgba is alpha (opacity). 0 = invisible, 1 = fully opaque. 0.5 = 50% transparent."
      },
      {
        q: "Which color format is best for theming because you can control hue, saturation, and lightness separately?",
        choices: ["Named colors", "Hex #rrggbb", "hsl()", "rgb()"],
        correct: 2,
        explain: "hsl() makes it easy to create color variations — change just the lightness to make tints and shades."
      },
      {
        q: "What does line-height: 1.6 mean (no unit)?",
        choices: ["1.6 pixels", "1.6em relative to font-size", "160% of root font", "6 lines"],
        correct: 1,
        explain: "A unitless line-height multiplies by the element's own font-size — this is the recommended approach."
      },
      {
        q: "How do you define and use a CSS custom property?",
        choices: [
          "var(--name) to define, :root { --name } to use",
          ":root { --name: value } to define, var(--name) to use",
          "$name: value; everywhere",
          "@define --name: value"
        ],
        correct: 1,
        explain: "Define in :root (or any selector) with --name: value, then use with var(--name)."
      },
      {
        q: "What does clamp(1rem, 4vw, 3rem) do?",
        choices: [
          "Sets exactly 4vw forever",
          "Font is min 1rem, scales with viewport, max 3rem",
          "Clamps the element's width",
          "Applies to padding only"
        ],
        correct: 1,
        explain: "clamp(min, preferred, max) creates fluid values that scale between a min and max — perfect for responsive typography."
      }
    ],
    challenge: {
      title: "Themed Typography Card",
      desc: "Build a styled card using CSS variables and full typography control.",
      task: `Create a dark-themed card using <strong>CSS custom properties</strong> (at least 3 variables in :root). Style a heading with <code>letter-spacing</code> and <code>font-weight</code>, a paragraph with <code>line-height</code>, and a code tag with a <code>monospace</code> font. Add a <code>text-transform: uppercase</code> label.`,
      panes: ["html", "css"],
      starterHtml: `<div class="card">
  <span class="label">Tutorial</span>
  <h2>CSS Variables</h2>
  <p>Define once, use everywhere. Variables make theming a one-line change across your entire project.</p>
  <code>:root { --primary: #3b82f6; }</code>
</div>`,
      starterCss: `@import url('https://fonts.googleapis.com/css2?family=Syne:wght@700;800&display=swap');

:root {
  /* Define at least 3 CSS variables here */
}

body { background: #0f172a; padding: 24px; font-family: 'Syne', sans-serif; }

.card {
  /* Use var() for colors, border-radius, etc. */
}

.label {
  /* text-transform uppercase, letter-spacing, small font */
}

h2 {
  /* font-size, font-weight, letter-spacing, color var */
}

p {
  /* line-height, color var, max-width */
}

code {
  /* monospace font, background, padding, color */
}`,
      starterJs: ``,
      hint: ":root { --bg: #1e293b; --text: #f0f9ff; --accent: #3b82f6; } then use var(--accent) in rules",
      checks: code => {
        const c = code.css || "";
        const hasVars     = /--[a-z]/i.test(c);
        const hasVarUse   = /var\(--/i.test(c);
        const hasH2       = /h2\s*\{[^}]+\}/i.test(c);
        const hasP        = /p\s*\{[^}]*(line-height|color)[^}]*\}/i.test(c);
        const hasCode     = /code\s*\{[^}]+\}/i.test(c);
        const hasLabel    = /\.label\s*\{[^}]+\}/i.test(c) || /text-transform/i.test(c);
        if (hasVars && hasVarUse && hasH2 && hasP && hasCode && hasLabel)
          return { pass: true, title: "Typography themed!", feedback: "CSS variables, h2, paragraph, code, and label all styled — excellent!" };
        const m = [];
        if (!hasVars)   m.push("CSS custom properties (--variable: value in :root)");
        if (!hasVarUse) m.push("Using variables with var(--name)");
        if (!hasH2)     m.push("h2 styled with font/letter-spacing");
        if (!hasP)      m.push("p with line-height or color");
        if (!hasCode)   m.push("code with monospace font");
        if (!hasLabel)  m.push(".label with text-transform: uppercase");
        return { pass: false, title: "Typography needs more", feedback: "Missing:\n" + m.map(x => " • " + x).join("\n") };
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 14,
    icon: "[F]", type: "css", color: "#3b82f6",
    title: "Flexbox Layout",
    desc: "One-dimensional layouts — all properties including advanced ones",
    content: [
      {
        type: "text", heading: "What is Flexbox?",
        body: `<strong>Flexbox</strong> (Flexible Box) is a one-dimensional layout system — it works along either a <em>row</em> or a <em>column</em>.<br><br>
        Apply <code>display: flex</code> to a <strong>container</strong> and it controls the layout of all direct <strong>children</strong> (flex items).<br><br>
        Flexbox solves the hardest classic problems: centering, equal-height columns, distributing space, and reordering without touching HTML.`
      },
      {
        type: "code", heading: "Container Properties Demo", file: "flex-container.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 12px; }
  .box { background: #3b82f6; color: white; padding: 12px 16px; border-radius: 6px; text-align: center; min-width: 60px; }
  .demo { margin-bottom: 16px; }
  .label { font-size: 12px; color: #64748b; font-family: monospace; margin-bottom: 4px; }
  .flex  { display: flex; gap: 8px; background: #f1f5f9; padding: 8px; border-radius: 6px; }
</style>

<div class="demo">
  <div class="label">justify-content: flex-start (default)</div>
  <div class="flex" style="justify-content:flex-start"><div class="box">A</div><div class="box">B</div><div class="box">C</div></div>
</div>
<div class="demo">
  <div class="label">justify-content: center</div>
  <div class="flex" style="justify-content:center"><div class="box">A</div><div class="box">B</div><div class="box">C</div></div>
</div>
<div class="demo">
  <div class="label">justify-content: space-between</div>
  <div class="flex" style="justify-content:space-between"><div class="box">A</div><div class="box">B</div><div class="box">C</div></div>
</div>
<div class="demo">
  <div class="label">justify-content: space-around</div>
  <div class="flex" style="justify-content:space-around"><div class="box">A</div><div class="box">B</div><div class="box">C</div></div>
</div>
<div class="demo">
  <div class="label">flex-direction: column + align-items: center</div>
  <div class="flex" style="flex-direction:column;align-items:center"><div class="box">A</div><div class="box">B</div><div class="box">C</div></div>
</div>`
      },
      {
        type: "code", heading: "Perfect Centering (the classic problem)", file: "center.html",
        runnable: true,
        html: `<style>
  .container {
    display: flex;
    justify-content: center;   /* horizontal */
    align-items: center;       /* vertical */
    height: 200px;
    background: #0f172a;
    border-radius: 8px;
    gap: 12px;
  }
  .box { background: #3b82f6; color: white; padding: 20px 28px;
         border-radius: 8px; font-family: sans-serif; font-weight: bold; }
  .box.accent { background: #f59e0b; color: #1c1917; }
</style>
<div class="container">
  <div class="box">Perfectly</div>
  <div class="box accent">Centered</div>
</div>`
      },
      {
        type: "points", heading: "Advanced Flex Item Properties",
        points: [
          "<code>flex: 1</code> — shorthand for <code>flex-grow: 1; flex-shrink: 1; flex-basis: 0</code>. Item grows to fill space.",
          "<code>flex-grow: 2</code> — this item gets twice the extra space compared to flex-grow: 1 siblings",
          "<code>flex-shrink: 0</code> — item will NOT shrink, even if container is too small",
          "<code>flex-basis: 200px</code> — ideal starting size before grow/shrink kicks in",
          "<code>align-self: flex-end</code> — overrides align-items for just this one item",
          "<code>order: -1</code> — moves item to beginning visually without changing HTML order",
        ]
      },
      {
        type: "code", heading: "flex-grow, flex-shrink, flex-basis", file: "flex-items.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 12px; }
  .label { font-size: 12px; color: #64748b; font-family: monospace; margin: 12px 0 4px; }
  .flex { display: flex; gap: 8px; background: #f1f5f9; padding: 8px; border-radius: 6px; }
  .box { background: #3b82f6; color: white; padding: 12px; border-radius: 6px; text-align: center; font-size: 12px; }
</style>

<div class="label">flex: 1 — all grow equally</div>
<div class="flex">
  <div class="box" style="flex:1">flex: 1</div>
  <div class="box" style="flex:1">flex: 1</div>
  <div class="box" style="flex:1">flex: 1</div>
</div>

<div class="label">flex: 2 vs flex: 1 — one gets twice the extra space</div>
<div class="flex">
  <div class="box" style="flex:2; background:#1d4ed8">flex: 2 (double)</div>
  <div class="box" style="flex:1">flex: 1</div>
  <div class="box" style="flex:1">flex: 1</div>
</div>

<div class="label">flex-shrink: 0 — won't shrink below flex-basis</div>
<div class="flex" style="width:300px">
  <div class="box" style="flex-shrink:0;flex-basis:200px;background:#7c3aed">shrink: 0 (200px)</div>
  <div class="box" style="flex:1">shrinks</div>
</div>

<div class="label">align-self — individual vertical alignment</div>
<div class="flex" style="align-items:flex-start; height:80px">
  <div class="box" style="align-self:flex-start">start</div>
  <div class="box" style="align-self:center">center</div>
  <div class="box" style="align-self:flex-end">end</div>
</div>`
      },
      {
        type: "code", heading: "Real-world: Sidebar Layout", file: "sidebar.html",
        runnable: true,
        html: `<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
  body { font-family: sans-serif; height: 300px; display: flex; flex-direction: column; }

  header { background: #1e293b; color: white; padding: 12px 20px; font-weight: bold; }

  .main  { display: flex; flex: 1; overflow: hidden; }

  nav    { flex-shrink: 0; flex-basis: 180px; background: #0f172a; color: #94a3b8;
           padding: 16px; display: flex; flex-direction: column; gap: 8px; }
  nav a  { color: #94a3b8; text-decoration: none; padding: 6px 10px; border-radius: 4px; }
  nav a:hover { background: #1e293b; color: white; }

  .content { flex: 1; padding: 20px; background: #f8fafc; overflow: auto; }

  footer { background: #1e293b; color: #64748b; padding: 8px 20px; font-size: 13px; text-align: center; }
</style>
<header>App Header</header>
<div class="main">
  <nav>
    <a href="#">Dashboard</a>
    <a href="#">Projects</a>
    <a href="#">Settings</a>
  </nav>
  <div class="content">
    <h2 style="margin-bottom:8px">Main Content</h2>
    <p>flex: 1 makes this grow. Sidebar uses flex-shrink: 0 to stay at 180px.</p>
  </div>
</div>
<footer>Footer</footer>`
      }
    ],
    quiz: [
      {
        q: "Which property activates Flexbox on a container?",
        choices: ["flex: 1", "display: flex", "flex-direction: row", "justify: flex"],
        correct: 1,
        explain: "display: flex on a container activates Flexbox. flex: 1 is an item property, not an activator."
      },
      {
        q: "What does flex: 1 mean on a flex item?",
        choices: [
          "The item is 1px wide",
          "The item grows to fill available space equally",
          "There is only 1 flex item",
          "The item won't shrink"
        ],
        correct: 1,
        explain: "flex: 1 is shorthand for grow:1, shrink:1, basis:0 — items share remaining space equally."
      },
      {
        q: "How do you prevent a sidebar from shrinking when the container is too small?",
        choices: ["flex-grow: 0", "flex-shrink: 0", "flex-basis: auto", "display: block"],
        correct: 1,
        explain: "flex-shrink: 0 tells the item never to shrink below its flex-basis/natural size."
      },
      {
        q: "align-items controls alignment on which axis?",
        choices: ["Main axis (row direction)", "Cross axis (perpendicular to main)", "Both axes", "The z-axis"],
        correct: 1,
        explain: "align-items aligns on the cross axis — vertical when flex-direction is row (the default)."
      },
      {
        q: "Which property lets one specific flex item override align-items for itself?",
        choices: ["align-content", "align-self", "justify-self", "flex-align"],
        correct: 1,
        explain: "align-self overrides the container's align-items for a single flex item."
      }
    ],
    challenge: {
      title: "Dashboard Layout",
      desc: "Build a full-page dashboard using only Flexbox.",
      task: `Create a page layout with: a <strong>header</strong>, a middle area with a fixed-width <strong>sidebar</strong> (use <code>flex-shrink: 0</code>) and a growing <strong>main</strong> area (use <code>flex: 1</code>), and a <strong>footer</strong>. Use <code>flex-direction: column</code> on the body wrapper.`,
      panes: ["html", "css"],
      starterHtml: `<div class="app">
  <header class="header">My Dashboard</header>
  <div class="body">
    <nav class="sidebar">
      <a href="#">Home</a>
      <a href="#">Stats</a>
      <a href="#">Settings</a>
    </nav>
    <main class="main">
      <h2>Welcome back!</h2>
      <p>This main area grows to fill all available space.</p>
    </main>
  </div>
  <footer class="footer">© 2025</footer>
</div>`,
      starterCss: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; }

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.header {
  /* style the header bar */
}

.body {
  display: flex;
  flex: 1;
  /* this row contains sidebar + main */
}

.sidebar {
  /* use flex-shrink: 0 and set a width */
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.sidebar a {
  text-decoration: none;
  /* style links */
}

.main {
  /* use flex: 1 so it fills remaining space */
  padding: 24px;
}

.footer {
  /* style the footer */
}`,
      starterJs: ``,
      hint: ".sidebar { flex-shrink: 0; flex-basis: 200px; } and .main { flex: 1; }",
      checks: code => {
        const c = code.css || "";
        const hasFlexCol   = /flex-direction\s*:\s*column/i.test(c);
        const hasFlex1     = /flex\s*:\s*1/i.test(c);
        const hasShrink0   = /flex-shrink\s*:\s*0/i.test(c);
        const hasBodyFlex  = /\.body\s*\{[^}]*display\s*:\s*flex/i.test(c);
        const hasMinH      = /min-height\s*:\s*100vh/i.test(c);
        if (hasFlexCol && hasFlex1 && hasShrink0 && hasBodyFlex)
          return { pass: true, title: "Dashboard flexed!", feedback: "flex-direction: column, flex: 1, flex-shrink: 0, and .body display: flex — full layout done!" };
        const m = [];
        if (!hasFlexCol)  m.push("flex-direction: column on .app");
        if (!hasBodyFlex) m.push("display: flex on .body");
        if (!hasFlex1)    m.push("flex: 1 on .main");
        if (!hasShrink0)  m.push("flex-shrink: 0 on .sidebar");
        return { pass: false, title: "Layout incomplete", feedback: "Missing:\n" + m.map(x => " • " + x).join("\n") };
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 15,
    icon: "[R]", type: "css", color: "#3b82f6",
    title: "CSS Grid + Responsive + Named Areas",
    desc: "Two-dimensional layouts, named template areas, and media queries",
    content: [
      {
        type: "text", heading: "CSS Grid — 2D Layouts",
        body: `<strong>CSS Grid</strong> is a two-dimensional system — rows <em>and</em> columns at the same time. This makes it ideal for page-level layouts.<br><br>
        Flexbox = one direction at a time (row or column).<br>
        Grid = rows AND columns simultaneously.<br><br>
        Use <strong>Flexbox</strong> for components, use <strong>Grid</strong> for page layouts — though both can handle many cases.`
      },
      {
        type: "code", heading: "Grid Fundamentals", file: "grid.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 12px; }
  .cell { background: #3b82f6; color: white; padding: 18px; border-radius: 6px; text-align: center; font-weight: bold; }
  .demo { margin-bottom: 20px; }
  .label { font-size: 12px; font-family: monospace; color: #64748b; margin-bottom: 6px; }

  .g1 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px; }
  .g2 { display: grid; grid-template-columns: 1fr 2fr 1fr; gap: 8px; }
  .g3 { display: grid; grid-template-columns: 200px 1fr; gap: 8px; }
  .g4 { display: grid; grid-template-columns: repeat(4, 1fr);
        grid-template-rows: 80px 80px; gap: 8px; }
</style>

<div class="demo">
  <div class="label">repeat(3, 1fr) — 3 equal columns</div>
  <div class="g1"><div class="cell">1</div><div class="cell">2</div><div class="cell">3</div></div>
</div>
<div class="demo">
  <div class="label">1fr 2fr 1fr — middle column is double width</div>
  <div class="g2"><div class="cell">1fr</div><div class="cell">2fr</div><div class="cell">1fr</div></div>
</div>
<div class="demo">
  <div class="label">200px 1fr — fixed sidebar + fluid main</div>
  <div class="g3"><div class="cell">200px</div><div class="cell">1fr grows</div></div>
</div>
<div class="demo">
  <div class="label">4-col × 2-row explicit grid</div>
  <div class="g4">
    <div class="cell">A</div><div class="cell">B</div><div class="cell">C</div><div class="cell">D</div>
    <div class="cell">E</div><div class="cell">F</div><div class="cell">G</div><div class="cell">H</div>
  </div>
</div>`
      },
      {
        type: "code", heading: "Spanning Columns & Rows", file: "grid-span.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 12px; }
  .grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: 100px 100px 60px;
    gap: 8px;
  }
  .cell { background: #3b82f6; color: white; border-radius: 6px;
          display: flex; align-items: center; justify-content: center; font-weight: bold; }
  .hero    { grid-column: 1 / 3; background: #1d4ed8; }       /* span 2 cols */
  .tall    { grid-row: 1 / 3; background: #7c3aed; }          /* span 2 rows */
  .wide    { grid-column: 1 / -1; background: #0f172a; }      /* span ALL columns */
</style>
<div class="grid">
  <div class="cell hero">col 1→3 (span 2)</div>
  <div class="cell tall">row 1→3 (span 2)</div>
  <div class="cell">normal</div>
  <div class="cell">normal</div>
  <div class="cell wide">grid-column: 1 / -1 (full width)</div>
</div>`
      },
      {
        type: "text", heading: "Named Template Areas",
        body: `<code>grid-template-areas</code> lets you draw your layout visually in CSS — each string is a row, each word is a cell name:<br><br>
        <pre style="background:#1e293b;color:#06b6d4;padding:12px;border-radius:6px;font-size:13px">"header header header"
"sidebar main  main  "
"footer footer footer"</pre><br>
        Then assign items with: <code>grid-area: sidebar;</code>`
      },
      {
        type: "code", heading: "Named Areas in Practice", file: "named-areas.html",
        runnable: true,
        html: `<style>
  *, *::before, *::after { box-sizing: border-box; margin: 0; }
  body { font-family: sans-serif; padding: 12px; }

  .layout {
    display: grid;
    grid-template-columns: 160px 1fr;
    grid-template-rows: 50px 1fr 40px;
    grid-template-areas:
      "header  header"
      "sidebar main  "
      "footer  footer";
    gap: 8px;
    height: 320px;
  }

  .layout > * { border-radius: 6px; display: flex; align-items: center;
                justify-content: center; font-weight: bold; color: white; }

  .header  { grid-area: header;  background: #1e293b; }
  .sidebar { grid-area: sidebar; background: #7c3aed; }
  .main    { grid-area: main;    background: #3b82f6; }
  .footer  { grid-area: footer;  background: #0f172a; }
</style>
<div class="layout">
  <div class="header">Header</div>
  <div class="sidebar">Sidebar</div>
  <div class="main">Main Content</div>
  <div class="footer">Footer</div>
</div>`
      },
      {
        type: "code", heading: "Responsive Grid with Media Queries", file: "responsive.html",
        runnable: true,
        html: `<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { font-family: sans-serif; padding: 12px; background: #f1f5f9; }

  .layout {
    display: grid;
    grid-template-columns: 200px 1fr;
    grid-template-areas:
      "sidebar main";
    gap: 12px;
  }

  /* Stack on small screens */
  @media (max-width: 600px) {
    .layout {
      grid-template-columns: 1fr;
      grid-template-areas:
        "main"
        "sidebar";
    }
  }

  .sidebar { grid-area: sidebar; background: #1e293b; color: white; padding: 16px; border-radius: 8px; }
  .main    { grid-area: main;    background: white;   padding: 16px; border-radius: 8px; }

  .card-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(120px, 1fr)); gap: 8px; margin-top: 12px; }
  .card { background: #3b82f6; color: white; padding: 16px; border-radius: 6px; text-align: center; }
</style>
<div class="layout">
  <aside class="sidebar"><strong>Sidebar</strong><p style="font-size:13px;margin-top:8px;color:#94a3b8">Moves below on mobile</p></aside>
  <section class="main">
    <strong>auto-fill + minmax cards:</strong>
    <div class="card-grid">
      <div class="card">A</div><div class="card">B</div><div class="card">C</div>
      <div class="card">D</div><div class="card">E</div>
    </div>
  </section>
</div>`
      },
      {
        type: "points", heading: "auto-fill vs auto-fit + minmax",
        points: [
          "<code>repeat(auto-fill, minmax(200px, 1fr))</code> — fills row with as many 200px+ columns as fit",
          "<code>auto-fit</code> — same but collapses empty tracks (items stretch to fill)",
          "<code>minmax(200px, 1fr)</code> — column is at least 200px, grows to 1fr if space allows",
          "This creates a <strong>fully responsive grid with zero media queries</strong>",
        ]
      }
    ],
    quiz: [
      {
        q: "What does grid-template-columns: repeat(3, 1fr) create?",
        choices: ["3 rows of equal height", "3 equal-width columns", "A 3px border", "3 divs automatically"],
        correct: 1,
        explain: "repeat(3, 1fr) creates 3 columns each taking one equal fraction of available space."
      },
      {
        q: "What does grid-column: 1 / -1 mean?",
        choices: [
          "The first column only",
          "The item spans from column 1 to the last column (full width)",
          "Negative columns go backwards",
          "Column 1 minus 1 = column 0"
        ],
        correct: 1,
        explain: "-1 refers to the last grid line, so 1 / -1 spans all columns from start to end."
      },
      {
        q: "How do you assign an element to a named grid area?",
        choices: [
          "grid-name: sidebar",
          "grid-area: sidebar",
          "area: sidebar",
          "grid-template: sidebar"
        ],
        correct: 1,
        explain: "grid-area: sidebar assigns the element to the area named 'sidebar' in grid-template-areas."
      },
      {
        q: "What does repeat(auto-fill, minmax(200px, 1fr)) do?",
        choices: [
          "Creates exactly 200 columns",
          "Fills the row with as many 200px+ columns as fit — responsive without media queries",
          "Makes columns auto-hide below 200px",
          "Fills with rows not columns"
        ],
        correct: 1,
        explain: "auto-fill + minmax creates a self-responsive grid — columns wrap automatically as the viewport shrinks."
      },
      {
        q: "Which property adds space between grid rows and columns?",
        choices: ["spacing", "margin", "padding", "gap"],
        correct: 3,
        explain: "gap (or row-gap / column-gap) sets space between grid tracks. It's cleaner than using margins on items."
      }
    ],
    challenge: {
      title: "Named Area Page Layout",
      desc: "Build a complete page layout using grid-template-areas.",
      task: `Create a page with <strong>header</strong>, <strong>sidebar</strong>, <strong>main</strong>, and <strong>footer</strong> using <code>grid-template-areas</code>. Make it <strong>responsive</strong> — on mobile (<code>max-width: 600px</code>) stack sidebar below main using a new template area string. Add a card grid inside main using <code>auto-fill</code> + <code>minmax</code>.`,
      panes: ["html", "css"],
      starterHtml: `<div class="page">
  <header class="header">Site Header</header>
  <aside class="sidebar">
    <h3>Sidebar</h3>
    <p>Navigation links</p>
  </aside>
  <main class="main">
    <h2>Main Content</h2>
    <div class="cards">
      <div class="card">Card 1</div>
      <div class="card">Card 2</div>
      <div class="card">Card 3</div>
      <div class="card">Card 4</div>
    </div>
  </main>
  <footer class="footer">Site Footer</footer>
</div>`,
      starterCss: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; background: #f1f5f9; padding: 12px; }

.page {
  display: grid;
  grid-template-columns: 180px 1fr;
  grid-template-rows: auto 1fr auto;
  grid-template-areas:
    "header  header"
    "sidebar main  "
    "footer  footer";
  gap: 10px;
  min-height: 100vh;
}

.header  { grid-area: header;  /* style */ }
.sidebar { grid-area: sidebar; /* style */ }
.main    { grid-area: main;    /* style */ }
.footer  { grid-area: footer;  /* style */ }

.cards {
  display: grid;
  /* use auto-fill and minmax */
  gap: 8px;
  margin-top: 12px;
}

.card { /* style */ }

@media (max-width: 600px) {
  .page {
    grid-template-columns: 1fr;
    grid-template-areas:
      /* rewrite for mobile — sidebar below main */
  }
}`,
      starterJs: ``,
      hint: `cards: repeat(auto-fill, minmax(120px, 1fr)). Mobile areas: "header" "main" "sidebar" "footer"`,
      checks: code => {
        const c = code.css || "";
        const hasGrid    = /display\s*:\s*grid/i.test(c);
        const hasAreas   = /grid-template-areas/i.test(c);
        const hasGArea   = /grid-area\s*:/i.test(c);
        const hasMedia   = /@media/i.test(c);
        const hasAutoFill = /auto-fill|auto-fit/i.test(c);
        const hasMinmax  = /minmax/i.test(c);
        const hasGap     = /gap\s*:/i.test(c);
        if (hasGrid && hasAreas && hasGArea && hasMedia && hasAutoFill && hasMinmax)
          return { pass: true, title: "Grid layout complete!", feedback: "Named areas, grid-area assignment, responsive media query, and auto-fill cards — excellent!" };
        const m = [];
        if (!hasGrid)     m.push("display: grid on .page");
        if (!hasAreas)    m.push("grid-template-areas");
        if (!hasGArea)    m.push("grid-area on children (.header, .sidebar etc.)");
        if (!hasMedia)    m.push("@media query for mobile layout");
        if (!hasAutoFill) m.push("auto-fill or auto-fit in .cards");
        if (!hasMinmax)   m.push("minmax() in .cards grid");
        if (!hasGap)      m.push("gap property");
        return { pass: false, title: "Grid needs work", feedback: "Missing:\n" + m.map(x => " • " + x).join("\n") };
      }
    }
  },
  // ============================================================
//  CSS LESSONS 16–20
//  16 — Transitions & Animations
//  17 — Positioning & Z-Index
//  18 — Pseudo-classes & Pseudo-elements (deep dive)
//  19 — CSS Variables & calc()
//  20 — Advanced Responsive Design
// ============================================================

  {
    id: 16,
    icon: "[A]", type: "css", color: "#3b82f6",
    title: "Transitions & Animations",
    desc: "Smooth hover effects with transition, and keyframe animations",
    content: [
      {
        type: "text", heading: "Why Animate with CSS?",
        body: `CSS animations run on the browser's compositor thread — they are <strong>smooth, performant, and require zero JavaScript</strong>. There are two tools:<br><br>
        <strong>transition</strong> — animates a property from one value to another when it changes (e.g. on hover)<br>
        <strong>@keyframes + animation</strong> — plays a sequence of states on a loop or trigger, regardless of user interaction`
      },
      {
        type: "code", heading: "transition — The Basics", file: "transition.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 20px; background: #0f172a; }

  .btn {
    display: inline-block;
    padding: 12px 28px;
    background: #3b82f6;
    color: white;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    font-size: 15px;
    margin: 8px;
    /* transition: property duration timing-function delay */
    transition: background 0.3s ease, transform 0.2s ease, box-shadow 0.3s ease;
  }
  .btn:hover {
    background: #1d4ed8;
    transform: translateY(-3px);
    box-shadow: 0 8px 24px rgba(59,130,246,0.4);
  }
  .btn:active { transform: translateY(0); box-shadow: none; }

  .card {
    background: #1e293b; color: #94a3b8;
    padding: 20px; border-radius: 10px;
    border: 1px solid #334155; margin-top: 16px;
    transition: all 0.3s ease; cursor: pointer;
  }
  .card:hover { background: #1d4ed8; color: white; border-color: #3b82f6; transform: scale(1.02); }
</style>
<button class="btn">Hover Me</button>
<button class="btn" style="background:#7c3aed">Purple Button</button>
<div class="card">Hover this card — all properties transition smoothly</div>`
      },
      {
        type: "points", heading: "transition Syntax & Timing Functions",
        points: [
          "<code>transition: property duration timing delay</code> — full syntax",
          "<code>transition: all 0.3s ease</code> — animates every changing property",
          "<code>transition: color 0.2s, transform 0.3s</code> — multiple, different speeds",
          "<strong>Timing functions:</strong> <code>ease</code> · <code>linear</code> · <code>ease-in</code> · <code>ease-out</code> · <code>ease-in-out</code>",
          "<code>cubic-bezier(0.34, 1.56, 0.64, 1)</code> — custom bounce curve",
          "Best to animate: <code>transform</code>, <code>opacity</code>, <code>color</code>, <code>background</code>, <code>box-shadow</code>",
          "Avoid animating <code>width</code>, <code>height</code>, <code>margin</code> — they trigger layout recalculation (slow)",
        ]
      },
      {
        type: "code", heading: "@keyframes — Full Animation Control", file: "keyframes.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 20px; background: #0f172a; display: flex; flex-direction: column; gap: 16px; }

  @keyframes fadeSlideIn {
    0%   { opacity: 0; transform: translateY(20px); }
    100% { opacity: 1; transform: translateY(0); }
  }
  @keyframes pulse {
    0%, 100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(59,130,246,0.4); }
    50%       { transform: scale(1.05); box-shadow: 0 0 0 12px rgba(59,130,246,0); }
  }
  @keyframes spin {
    from { transform: rotate(0deg); }
    to   { transform: rotate(360deg); }
  }
  @keyframes gradient {
    0%   { background-position: 0% 50%; }
    50%  { background-position: 100% 50%; }
    100% { background-position: 0% 50%; }
  }

  .fade-in { background: #1e293b; color: white; padding: 14px 20px; border-radius: 8px; animation: fadeSlideIn 0.6s ease-out both; }
  .pulse-btn { background: #3b82f6; color: white; padding: 12px 24px; border-radius: 8px; border: none; cursor: pointer; font-size: 15px; animation: pulse 2s ease-in-out infinite; }
  .spinner { width: 40px; height: 40px; border: 4px solid #334155; border-top-color: #3b82f6; border-radius: 50%; animation: spin 0.8s linear infinite; }
  .gradient-text { font-size: 2rem; font-weight: 800; background: linear-gradient(90deg, #3b82f6, #a855f7, #ec4899, #3b82f6); background-size: 300% 300%; -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; animation: gradient 3s ease infinite; }
</style>
<div class="fade-in">Fade + slide in on load</div>
<button class="pulse-btn">Pulsing button (infinite)</button>
<div class="spinner"></div>
<div class="gradient-text">Animated Gradient</div>`
      },
      {
        type: "points", heading: "animation Property Breakdown",
        points: [
          "<code>animation-name</code> — name of the @keyframes block",
          "<code>animation-duration</code> — how long one cycle takes (0.3s, 1.5s)",
          "<code>animation-timing-function</code> — easing curve",
          "<code>animation-delay</code> — wait before starting (great for staggered effects)",
          "<code>animation-iteration-count</code> — number of repeats or <code>infinite</code>",
          "<code>animation-direction: alternate</code> — bounces back and forth",
          "<code>animation-fill-mode: both</code> — holds start state before delay and end state after finishing",
          "Shorthand: <code>animation: name duration timing delay count direction fill-mode</code>",
        ]
      },
      {
        type: "code", heading: "Staggered Entrance Animation", file: "stagger.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 20px; background: #0f172a; }

  @keyframes slideUp {
    from { opacity: 0; transform: translateY(30px); }
    to   { opacity: 1; transform: translateY(0); }
  }

  .card {
    background: #1e293b; border: 1px solid #334155; border-radius: 10px;
    padding: 16px 20px; color: white; margin-bottom: 10px;
    animation: slideUp 0.5s ease-out both;
  }
  .card:nth-child(1) { animation-delay: 0.0s; }
  .card:nth-child(2) { animation-delay: 0.1s; }
  .card:nth-child(3) { animation-delay: 0.2s; }
  .card:nth-child(4) { animation-delay: 0.3s; }
  .card h3 { margin: 0 0 4px; font-size: 15px; }
  .card p  { margin: 0; font-size: 13px; color: #64748b; }
</style>
<div class="card"><h3>Card One</h3><p>animation-delay: 0.0s</p></div>
<div class="card"><h3>Card Two</h3><p>animation-delay: 0.1s</p></div>
<div class="card"><h3>Card Three</h3><p>animation-delay: 0.2s</p></div>
<div class="card"><h3>Card Four</h3><p>animation-delay: 0.3s</p></div>`
      }
    ],
    quiz: [
      {
        q: "What is the key difference between transition and animation?",
        choices: [
          "transition uses JavaScript; animation uses CSS",
          "transition responds to state changes (e.g. hover); animation plays a keyframe sequence automatically",
          "animation only works on hover",
          "transition is always faster"
        ],
        correct: 1,
        explain: "transition animates between two states when a property changes. animation plays a @keyframes sequence and can loop, delay, and run on page load without any trigger."
      },
      {
        q: "Which properties are safest to animate for 60fps performance?",
        choices: ["width and height", "margin and padding", "transform and opacity", "font-size and display"],
        correct: 2,
        explain: "transform and opacity are handled by the GPU compositor — they never trigger layout recalculation, making them smooth even at high frame rates."
      },
      {
        q: "What does animation-fill-mode: both do?",
        choices: [
          "Plays the animation in both directions",
          "Applies the start state before playing and keeps the end state after finishing",
          "Runs transition and animation simultaneously",
          "Fills the element background"
        ],
        correct: 1,
        explain: "fill-mode: both prevents the element from jumping — it holds the from state before any delay and keeps the to state after the animation ends."
      },
      {
        q: "How do you create a staggered animation on a list?",
        choices: [
          "Use different animation-name on each item",
          "Use increasing animation-delay on each :nth-child",
          "Use transition-delay: auto",
          "Add JavaScript setTimeout"
        ],
        correct: 1,
        explain: "Same @keyframes on all items, but increasing animation-delay on :nth-child(2), (3), (4)... cascades the entries one after another."
      },
      {
        q: "Which keyword makes an animation repeat forever?",
        choices: ["animation-iteration-count: loop", "animation-repeat: always", "animation-iteration-count: infinite", "animation-loop: true"],
        correct: 2,
        explain: "animation-iteration-count: infinite makes the animation cycle repeat indefinitely until the element is removed or the animation is paused."
      }
    ],
    challenge: {
      title: "Animated UI Components",
      desc: "Build hover effects and a loading spinner using transitions and @keyframes.",
      task: `Create: (1) a <strong>button</strong> with a smooth <code>transition</code> on hover (change color + lift with <code>translateY</code>), (2) a <strong>card</strong> that scales up on hover, (3) a <strong>loading spinner</strong> using <code>@keyframes</code> with infinite rotation, (4) stagger at least 3 list items using <code>animation-delay</code>.`,
      panes: ["html", "css"],
      starterHtml: `<div class="container">
  <button class="btn">Hover Me</button>

  <div class="card">
    <h3>Hover Card</h3>
    <p>I scale up smoothly on hover</p>
  </div>

  <div class="spinner"></div>

  <div class="list">
    <div class="item">Item One</div>
    <div class="item">Item Two</div>
    <div class="item">Item Three</div>
  </div>
</div>`,
      starterCss: `body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
.container { display: flex; flex-direction: column; gap: 16px; max-width: 400px; }

.btn {
  padding: 12px 28px; background: #3b82f6; color: white;
  border: none; border-radius: 8px; cursor: pointer; font-size: 15px;
  /* Add transition */
}
.btn:hover { /* color + translateY */ }

.card {
  background: #1e293b; padding: 20px; border-radius: 10px; border: 1px solid #334155;
  /* Add transition */
}
.card:hover { /* Add transform: scale() */ }

@keyframes spin { /* Define 0deg to 360deg rotation */ }
.spinner {
  width: 40px; height: 40px;
  border: 4px solid #334155; border-top-color: #3b82f6; border-radius: 50%;
  /* Add animation using spin keyframe, infinite */
}

@keyframes fadeUp {
  from { opacity: 0; transform: translateY(16px); }
  to   { opacity: 1; transform: translateY(0); }
}
.item { background: #1e293b; padding: 12px 16px; border-radius: 8px; /* Add animation */ }
.item:nth-child(1) { /* delay 0s */ }
.item:nth-child(2) { /* delay 0.15s */ }
.item:nth-child(3) { /* delay 0.3s */ }`,
      starterJs: ``,
      hint: ".spinner { animation: spin 0.8s linear infinite; } .btn { transition: background 0.3s ease, transform 0.2s ease; }",
      checks: code => {
        const c = code.css || "";
        const hasTransition = /transition\s*:/i.test(c);
        const hasTransform  = /transform\s*:/i.test(c);
        const hasKeyframes  = /@keyframes/i.test(c);
        const hasAnimation  = /animation\s*:/i.test(c);
        const hasInfinite   = /infinite/i.test(c);
        const hasDelay      = /animation-delay/i.test(c);
        if (hasTransition && hasTransform && hasKeyframes && hasAnimation && hasInfinite && hasDelay)
          return { pass: true, title: "Animations mastered!", feedback: "transition, transform, @keyframes, infinite spin, and staggered delays — full marks!" };
        const m = [];
        if (!hasTransition) m.push("transition on .btn or .card");
        if (!hasTransform)  m.push("transform (translateY or scale) on hover");
        if (!hasKeyframes)  m.push("@keyframes block");
        if (!hasAnimation)  m.push("animation property on .spinner or .item");
        if (!hasInfinite)   m.push("infinite on spinner animation");
        if (!hasDelay)      m.push("animation-delay on .item:nth-child()");
        return { pass: false, title: "Not quite there", feedback: "Missing:\n" + m.map(x => " • " + x).join("\n") };
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 17,
    icon: "[Z]", type: "css", color: "#3b82f6",
    title: "Positioning & Z-Index",
    desc: "static, relative, absolute, fixed, sticky — and stacking with z-index",
    content: [
      {
        type: "text", heading: "The 5 Position Values",
        body: `By default every element is <code>position: static</code> — it sits in the normal document flow. The other values offset or remove elements from flow:<br><br>
        <strong>static</strong> — default; top/left/right/bottom have no effect<br>
        <strong>relative</strong> — offset from its natural position; still occupies original space<br>
        <strong>absolute</strong> — removed from flow, positioned relative to nearest non-static ancestor<br>
        <strong>fixed</strong> — removed from flow, positioned relative to the viewport (stays on scroll)<br>
        <strong>sticky</strong> — stays in flow until it hits a scroll threshold, then acts like fixed`
      },
      {
        type: "code", heading: "relative vs absolute", file: "position-ra.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 16px; background: #f1f5f9; }

  .rel-demo { background: #dbeafe; padding: 12px; margin-bottom: 20px; border-radius: 8px; }
  .relative-box {
    position: relative; top: 10px; left: 20px;
    background: #3b82f6; color: white; padding: 8px 14px; border-radius: 6px; display: inline-block;
  }

  .abs-parent {
    position: relative;
    background: #fef3c7; height: 120px; border-radius: 8px;
    border: 2px dashed #f59e0b; margin-bottom: 12px;
  }
  .abs-corner {
    position: absolute; top: 8px; right: 8px;
    background: #ef4444; color: white; padding: 4px 10px; border-radius: 4px; font-size: 12px; font-weight: bold;
  }
  .abs-center {
    position: absolute; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background: #1e293b; color: white; padding: 8px 16px; border-radius: 6px;
  }
</style>
<div class="rel-demo">
  <p>Normal flow text</p>
  <span class="relative-box">position: relative (offset top:10 left:20)</span>
  <p>Flow continues — original space still reserved above</p>
</div>
<div class="abs-parent">
  <span style="padding:8px;color:#92400e">position: relative parent (the anchor)</span>
  <div class="abs-corner">top-right</div>
  <div class="abs-center">Absolutely centered via translate trick</div>
</div>`
      },
      {
        type: "code", heading: "fixed & sticky", file: "position-fs.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; margin: 0; }

  .fixed-badge {
    position: fixed; bottom: 16px; right: 16px;
    background: #3b82f6; color: white; padding: 8px 16px;
    border-radius: 50px; font-size: 13px; box-shadow: 0 4px 16px rgba(0,0,0,0.2); z-index: 100;
  }

  .scroll-area { height: 280px; overflow-y: scroll; border: 1px solid #e2e8f0; }
  .sticky-header {
    position: sticky; top: 0; z-index: 10;
    background: #1e293b; color: white; padding: 10px 16px; font-weight: bold;
  }
  .content-block { padding: 16px; background: #f8fafc; border-bottom: 1px solid #e2e8f0; }
</style>
<div class="scroll-area">
  <div class="sticky-header">Sticky Header — scroll me</div>
  <div class="content-block">Content block 1</div>
  <div class="content-block">Content block 2</div>
  <div class="sticky-header">Sticky Header 2 — pushes first one up</div>
  <div class="content-block">Content block 3</div>
  <div class="content-block">Content block 4</div>
  <div class="content-block">Content block 5</div>
</div>
<div class="fixed-badge">Fixed badge</div>`
      },
      {
        type: "points", heading: "z-index & Stacking Contexts",
        points: [
          "<code>z-index</code> only works on positioned elements (not <code>static</code>)",
          "Higher z-index = closer to the viewer (on top)",
          "z-index creates a <strong>stacking context</strong> — children are contained within their parent's context",
          "Common values: <code>1</code> slight lift · <code>10</code> dropdowns · <code>100</code> modals · <code>9999</code> tooltips",
          "<code>z-index: -1</code> sends an element behind its parent",
          "opacity, transform, and filter also create stacking contexts — can cause z-index surprises",
        ]
      },
      {
        type: "code", heading: "z-index Stacking + Tooltip Pattern", file: "z-index.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 20px; background: #0f172a; }
  .stack { position: relative; height: 180px; margin-bottom: 24px; }
  .layer { position: absolute; width: 160px; height: 80px; border-radius: 10px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 13px; }
  .l1 { background: #1e3a5f; top: 0;   left: 0;   z-index: 1; }
  .l2 { background: #1d4ed8; top: 30px; left: 40px; z-index: 2; }
  .l3 { background: #7c3aed; top: 60px; left: 80px; z-index: 3; }
  .l4 { background: #ef4444; top: 20px; left: 120px; z-index: 10; width: 120px; }

  .tooltip-wrap { position: relative; display: inline-block; }
  .tooltip-wrap button { background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; }
  .tooltip {
    position: absolute; bottom: calc(100% + 8px); left: 50%; transform: translateX(-50%);
    background: #1e293b; color: white; padding: 6px 12px; border-radius: 6px;
    font-size: 13px; white-space: nowrap; z-index: 9999;
    opacity: 0; pointer-events: none; transition: opacity 0.2s;
  }
  .tooltip-wrap:hover .tooltip { opacity: 1; }
</style>
<div class="stack">
  <div class="layer l1">z-index: 1</div>
  <div class="layer l2">z-index: 2</div>
  <div class="layer l3">z-index: 3</div>
  <div class="layer l4">z-index: 10</div>
</div>
<div class="tooltip-wrap">
  <button>Hover for tooltip</button>
  <div class="tooltip">z-index: 9999 — always on top</div>
</div>`
      }
    ],
    quiz: [
      {
        q: "An absolutely positioned element is placed relative to what?",
        choices: ["The body always", "The viewport", "The nearest non-static ancestor", "The previous sibling"],
        correct: 2,
        explain: "absolute positioning climbs the DOM until it finds an ancestor with position: relative, absolute, fixed, or sticky — that becomes the containing block."
      },
      {
        q: "What does position: sticky do differently from fixed?",
        choices: [
          "Sticky is always attached to the page top",
          "Sticky stays in normal flow and only sticks when scrolled to its threshold",
          "Sticky requires JavaScript to activate",
          "There is no difference"
        ],
        correct: 1,
        explain: "sticky is a hybrid — it participates in normal flow like relative but sticks to a scroll position like fixed once the threshold is reached."
      },
      {
        q: "Why doesn't z-index work on position: static elements?",
        choices: ["z-index only works with JavaScript", "z-index requires display: flex", "z-index only affects positioned (non-static) elements", "You need to set opacity first"],
        correct: 2,
        explain: "z-index is ignored on static elements. Set position to relative, absolute, fixed, or sticky to enable z-index."
      },
      {
        q: "How do you perfectly center an absolute element inside its relative parent?",
        choices: ["margin: auto", "top: 50%; left: 50%; transform: translate(-50%, -50%)", "align-items: center", "position: center"],
        correct: 1,
        explain: "top/left: 50% moves the top-left corner to center. transform: translate(-50%, -50%) shifts the element back by half its own width and height — perfect centering."
      },
      {
        q: "Which position value is best for a floating button that stays visible while scrolling?",
        choices: ["relative", "absolute", "sticky", "fixed"],
        correct: 3,
        explain: "fixed removes the element from flow and pins it to the viewport — it stays in place regardless of how far the page is scrolled."
      }
    ],
    challenge: {
      title: "Positioned UI Components",
      desc: "Build a sticky nav, absolute badges, and a fixed action button.",
      task: `Create: (1) a <strong>sticky nav bar</strong> (<code>position: sticky; top: 0</code>) with a z-index, (2) <strong>cards</strong> with <code>absolute</code> badges pinned to a corner (parent needs <code>relative</code>), (3) a <strong>fixed</strong> button pinned to the bottom-right, (4) use <code>top: 50%; left: 50%; transform: translate(-50%, -50%)</code> to center something inside a card.`,
      panes: ["html", "css"],
      starterHtml: `<nav class="nav">My Site</nav>

<main class="page">
  <div class="card">
    <div class="badge">NEW</div>
    <div class="card-body">
      <h3>Featured Product</h3>
      <p>Absolutely positioned badge in the corner</p>
      <div class="centered-label">Centered</div>
    </div>
  </div>
  <div class="card">
    <div class="badge">HOT</div>
    <div class="card-body">
      <h3>Another Item</h3>
      <p>Same badge pattern</p>
    </div>
  </div>
</main>

<button class="fab">+ Add</button>`,
      starterCss: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; background: #f1f5f9; }

.nav {
  position: sticky;
  top: 0;
  /* Add z-index, background, padding, color */
}

.page { padding: 20px; display: flex; flex-direction: column; gap: 16px; }

.card {
  position: relative;
  /* Add background, padding, border-radius */
}

.badge {
  position: absolute;
  /* Pin to corner with top/right negative values */
  /* Add background, color, padding, border-radius, font-weight */
}

.card-body { /* padding to clear badge area */ }

.centered-label {
  position: absolute;
  top: 50%;
  left: 50%;
  /* Add transform to complete centering */
  /* Style it so it's visible */
}

.fab {
  position: fixed;
  bottom: 24px;
  right: 24px;
  /* Add background, color, padding, border-radius, z-index, cursor, border:none */
}`,
      starterJs: ``,
      hint: ".badge { top: -10px; right: -10px; } .fab { z-index: 100; background: #3b82f6; border-radius: 50px; border: none; }",
      checks: code => {
        const c = code.css || "";
        const hasSticky    = /position\s*:\s*sticky/i.test(c);
        const hasAbsolute  = /position\s*:\s*absolute/i.test(c);
        const hasFixed     = /position\s*:\s*fixed/i.test(c);
        const hasRelative  = /position\s*:\s*relative/i.test(c);
        const hasZIndex    = /z-index\s*:/i.test(c);
        const hasTranslate = /translate\s*\(/i.test(c);
        if (hasSticky && hasAbsolute && hasFixed && hasRelative && hasZIndex && hasTranslate)
          return { pass: true, title: "Positioning master!", feedback: "sticky, absolute, fixed, relative, z-index, and translate centering — all nailed!" };
        const m = [];
        if (!hasSticky)    m.push("position: sticky on .nav");
        if (!hasRelative)  m.push("position: relative on .card");
        if (!hasAbsolute)  m.push("position: absolute on .badge");
        if (!hasFixed)     m.push("position: fixed on .fab");
        if (!hasZIndex)    m.push("z-index on at least one element");
        if (!hasTranslate) m.push("transform: translate(-50%, -50%) on .centered-label");
        return { pass: false, title: "Keep going!", feedback: "Missing:\n" + m.map(x => " • " + x).join("\n") };
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 18,
    icon: "[P]", type: "css", color: "#3b82f6",
    title: "Pseudo-classes & Pseudo-elements (Deep Dive)",
    desc: "Every useful pseudo-class and pseudo-element with real UI patterns",
    content: [
      {
        type: "text", heading: "Quick Recap",
        body: `<strong>Pseudo-classes</strong> (single colon <code>:</code>) — target an element in a certain <em>state</em> or <em>structural position</em><br>
        <strong>Pseudo-elements</strong> (double colon <code>::</code>) — create a <em>virtual part</em> of an element<br><br>
        This lesson goes deeper — covering every pseudo-class and pseudo-element you'll use in real projects.`
      },
      {
        type: "points", heading: "State Pseudo-classes",
        points: [
          "<code>:hover</code> — cursor over element",
          "<code>:focus</code> — element is focused (keyboard or click)",
          "<code>:focus-visible</code> — focus ring only during keyboard navigation (not on mouse click)",
          "<code>:active</code> — element is being clicked/pressed",
          "<code>:visited</code> — link has been visited",
          "<code>:disabled</code> — form element is disabled",
          "<code>:checked</code> — checkbox or radio input is checked",
          "<code>:placeholder-shown</code> — input currently shows its placeholder text",
        ]
      },
      {
        type: "code", heading: "Form State Styling", file: "form-states.html",
        runnable: true,
        html: `<style>
  *, *::before, *::after { box-sizing: border-box; }
  body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
  .field { margin-bottom: 16px; }
  label { display: block; font-size: 13px; color: #94a3b8; margin-bottom: 6px; }

  input {
    width: 100%; padding: 10px 14px; background: #1e293b;
    border: 2px solid #334155; color: white; border-radius: 8px; font-size: 15px;
    transition: border-color 0.2s, box-shadow 0.2s; outline: none;
  }
  input:focus-visible { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.3); }
  input:placeholder-shown { border-style: dashed; }
  input:disabled { opacity: 0.4; cursor: not-allowed; }

  .check-wrap { display: flex; align-items: center; gap: 10px; cursor: pointer; }
  .check-wrap input[type="checkbox"] { display: none; }
  .custom-box { width: 20px; height: 20px; border: 2px solid #334155; border-radius: 4px; background: #1e293b; display: flex; align-items: center; justify-content: center; transition: all 0.2s; }
  .check-wrap input:checked + .custom-box { background: #3b82f6; border-color: #3b82f6; }
  .check-wrap input:checked + .custom-box::after { content: "✓"; color: white; font-size: 12px; font-weight: bold; }
</style>
<div class="field"><label>Email (focus to see ring)</label><input type="email" placeholder="you@example.com" /></div>
<div class="field"><label>Disabled</label><input type="text" value="Read only" disabled /></div>
<label class="check-wrap"><input type="checkbox" /><div class="custom-box"></div>Custom checkbox</label>`
      },
      {
        type: "points", heading: "Structural Pseudo-classes",
        points: [
          "<code>:first-child</code> / <code>:last-child</code> — first or last child of its parent",
          "<code>:nth-child(n)</code> — accepts numbers, <code>even</code>, <code>odd</code>, formulas like <code>3n+1</code>",
          "<code>:nth-last-child(n)</code> — count from the end",
          "<code>:only-child</code> — element with no siblings",
          "<code>:not(selector)</code> — every element that does NOT match",
          "<code>:is(h1, h2, h3)</code> — matches any of the listed selectors",
          "<code>:where()</code> — same as :is() but contributes zero specificity",
          "<code>:has()</code> — <strong>parent selector</strong>! Selects elements that contain a match",
        ]
      },
      {
        type: "code", heading: "Structural Pseudo-classes in Action", file: "structural.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 16px; background: #f8fafc; }
  ul { list-style: none; padding: 0; margin-bottom: 20px; border-radius: 8px; overflow: hidden; }
  li { padding: 10px 14px; border-bottom: 1px solid #e2e8f0; }

  li:nth-child(even) { background: #f1f5f9; }
  li:first-child { background: #dbeafe; font-weight: bold; }
  li:last-child  { background: #fce7f3; border: none; }

  /* :not — remove border without last-child */
  .clean li:not(:last-child) { border-bottom: 1px solid #e2e8f0; }

  /* :is — target multiple heading levels at once */
  :is(h2, h3) { color: #1e3a5f; margin: 12px 0 6px; }

  /* :has — card WITH an image gets a blue highlight */
  .card { background: white; border: 2px solid #e2e8f0; border-radius: 8px; padding: 12px; margin: 8px 0; }
  .card:has(img) { border-color: #3b82f6; box-shadow: 0 0 0 3px rgba(59,130,246,0.15); }
</style>
<h2>:nth-child / :first-child / :last-child</h2>
<ul>
  <li>First (blue)</li><li>Second (zebra)</li><li>Third</li><li>Fourth (zebra)</li><li>Last (pink)</li>
</ul>
<h3>:has() — parent selector</h3>
<div class="card"><p>No image — default border</p></div>
<div class="card"><img src="https://picsum.photos/60/30" style="border-radius:4px;display:block" alt=""/><p>Has image → blue border via :has(img)</p></div>`
      },
      {
        type: "code", heading: "::before & ::after — Advanced Patterns", file: "pseudo-elements.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 20px; background: #0f172a; color: white; }

  h2 { font-size: 1.5rem; display: inline-block; position: relative; margin-bottom: 24px; }
  h2::after { content: ""; position: absolute; bottom: -6px; left: 0; width: 100%; height: 3px; background: linear-gradient(90deg, #3b82f6, #a855f7); border-radius: 2px; }

  blockquote { position: relative; background: #1e293b; padding: 20px 20px 20px 50px; border-radius: 8px; font-style: italic; color: #94a3b8; margin: 16px 0; }
 blockquote::before { 
  content: "0201C"; 
  position: absolute; 
  top: -10px; 
  left: 10px; 
  font-size: 5rem; 
  color: #3b82f6; 
  line-height: 1; 
  opacity: 0.5; 
}
  /* CSS Counter for numbered steps */
  .steps { list-style: none; padding: 0; counter-reset: step-counter; }
  .steps li { position: relative; padding: 10px 10px 10px 50px; margin-bottom: 8px; background: #1e293b; border-radius: 8px; counter-increment: step-counter; }
  .steps li::before { content: counter(step-counter); position: absolute; left: 12px; top: 50%; transform: translateY(-50%); background: #3b82f6; color: white; width: 26px; height: 26px; border-radius: 50%; display: flex; align-items: center; justify-content: center; font-size: 13px; font-weight: bold; }
</style>
<h2>Gradient Underline via ::after</h2>
<blockquote>The best code is code that looks like no code at all.</blockquote>
<h3 style="margin: 16px 0 8px; color: white;">CSS Counter via ::before</h3>
<ol class="steps">
  <li>Install dependencies</li>
  <li>Create project structure</li>
  <li>Start building</li>
</ol>`
      }
    ],
    quiz: [
      {
        q: "What is the difference between :focus and :focus-visible?",
        choices: [
          "They are identical",
          ":focus always shows a ring; :focus-visible only shows it during keyboard navigation",
          ":focus-visible works on mouse, :focus on keyboard",
          ":focus-visible is for mobile only"
        ],
        correct: 1,
        explain: ":focus fires on any focus event. :focus-visible is smarter — it only renders a visible ring when the user is navigating by keyboard, keeping the UI clean for mouse users."
      },
      {
        q: "li:nth-child(3n+1) selects which list items?",
        choices: ["Every 3rd item", "Items 1, 4, 7, 10... (every 3rd starting from 1)", "Items 3, 6, 9...", "Only item 1"],
        correct: 1,
        explain: "3n+1 means: start at 1, then add 3 each time — items 1, 4, 7, 10..."
      },
      {
        q: "What does :has() do — and why is it special?",
        choices: [
          "Shorthand for :hover and :active",
          "Selects a parent element based on what it contains — CSS's first native parent selector",
          "Checks if a CSS variable has a value",
          "Selects elements that have a class attribute"
        ],
        correct: 1,
        explain: ":has() is a relational selector. div:has(img) selects divs that contain an img. Selecting a parent based on children was previously impossible in CSS alone."
      },
      {
        q: "What are counter-reset and counter-increment used for?",
        choices: [
          "Resetting z-index values",
          "Creating auto-incrementing numbers in ::before/::after without a numbered HTML list",
          "Counting media query breakpoints",
          "Resetting CSS animations"
        ],
        correct: 1,
        explain: "CSS counters allow ::before/::after to display auto-incrementing numbers — great for custom step guides, figure captions, and nested outlines."
      },
      {
        q: "Which pseudo-class has zero specificity so it won't override other rules?",
        choices: [":is()", ":not()", ":where()", ":has()"],
        correct: 2,
        explain: ":where() behaves exactly like :is() but contributes 0 to specificity — ideal for reusable utility styles that should be easy to override."
      }
    ],
    challenge: {
      title: "Polished Form & Numbered Steps",
      desc: "Use pseudo-classes and pseudo-elements to build a styled form and step list.",
      task: `Build: (1) a <strong>form</strong> with <code>:focus-visible</code> ring, <code>:disabled</code> opacity, <code>:placeholder-shown</code> dashed border, (2) a <strong>custom checkbox</strong> using <code>:checked</code> + <code>::after</code>, (3) a <strong>numbered step list</strong> using CSS <code>counter-reset</code>, <code>counter-increment</code> and <code>::before</code>, (4) <strong>zebra striping</strong> with <code>:nth-child(even)</code>.`,
      panes: ["html", "css"],
      starterHtml: `<form class="form">
  <div class="field">
    <label>Your Name</label>
    <input type="text" placeholder="Enter name..." />
  </div>
  <div class="field">
    <label>Disabled field</label>
    <input type="text" value="Read only" disabled />
  </div>
  <label class="check-label">
    <input type="checkbox" class="check-input" />
    <span class="check-box"></span>
    I agree to the terms
  </label>
</form>

<h3>How It Works</h3>
<ol class="steps">
  <li>Fill in your details</li>
  <li>Check the checkbox to agree</li>
  <li>Click submit</li>
  <li>Receive confirmation</li>
</ol>

<ul class="zebra">
  <li>Apples</li>
  <li>Oranges</li>
  <li>Mangoes</li>
  <li>Bananas</li>
</ul>`,
      starterCss: `*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; background: #0f172a; color: white; padding: 24px; }
h3 { margin: 20px 0 10px; }
.field { margin-bottom: 14px; }
label { display: block; font-size: 13px; color: #94a3b8; margin-bottom: 6px; }

input[type="text"], input[type="email"] {
  width: 100%; padding: 10px 14px; background: #1e293b;
  border: 2px solid #334155; color: white; border-radius: 8px; font-size: 15px;
  outline: none; transition: all 0.2s;
}
input:focus-visible { /* Add focus ring */ }
input:placeholder-shown { /* Add dashed border */ }
input:disabled { /* Reduce opacity, change cursor */ }

.check-label { display: flex; align-items: center; gap: 10px; cursor: pointer; margin-top: 8px; }
.check-input { display: none; }
.check-box {
  width: 20px; height: 20px; border: 2px solid #334155;
  border-radius: 4px; background: #1e293b; transition: all 0.2s;
}
.check-input:checked + .check-box { /* Blue background */ }
.check-input:checked + .check-box::after {
  content: "✓";
  display: block;
  /* Center and style the checkmark */
}

.steps { list-style: none; padding: 0; counter-reset: step-counter; }
.steps li {
  position: relative;
  padding: 10px 10px 10px 50px;
  margin-bottom: 8px; background: #1e293b; border-radius: 8px;
  counter-increment: step-counter;
}
.steps li::before {
  content: counter(step-counter);
  position: absolute; left: 12px; top: 50%; transform: translateY(-50%);
  /* Style as a numbered circle */
}

.zebra { list-style: none; padding: 0; margin-top: 16px; }
.zebra li { padding: 10px 14px; }
.zebra li:nth-child(even) { /* Zebra stripe */ }`,
      starterJs: ``,
      hint: ".check-input:checked + .check-box { background: #3b82f6; } .steps li::before { background: #3b82f6; color: white; border-radius: 50%; width: 26px; height: 26px; }",
      checks: code => {
        const c = code.css || "";
        const hasFocusVisible = /:focus-visible/i.test(c);
        const hasDisabled     = /:disabled/i.test(c);
        const hasPlaceholder  = /:placeholder-shown/i.test(c);
        const hasChecked      = /:checked/i.test(c);
        const hasBefore       = /::before/i.test(c);
        const hasCounter      = /counter-reset|counter-increment/i.test(c);
        const hasNthChild     = /:nth-child/i.test(c);
        if (hasFocusVisible && hasDisabled && hasChecked && hasBefore && hasCounter && hasNthChild)
          return { pass: true, title: "Pseudo expert!", feedback: ":focus-visible, :disabled, :checked, ::before counter, :nth-child — all done!" };
        const m = [];
        if (!hasFocusVisible) m.push(":focus-visible on input");
        if (!hasDisabled)     m.push(":disabled on input");
        if (!hasPlaceholder)  m.push(":placeholder-shown on input");
        if (!hasChecked)      m.push(":checked on .check-input");
        if (!hasBefore)       m.push("::before on .steps li");
        if (!hasCounter)      m.push("counter-reset and counter-increment");
        if (!hasNthChild)     m.push(":nth-child(even) on .zebra li");
        return { pass: false, title: "Keep going!", feedback: "Missing:\n" + m.map(x => " • " + x).join("\n") };
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 19,
    icon: "[V]", type: "css", color: "#3b82f6",
    title: "CSS Variables & calc()",
    desc: "Custom properties, dynamic theming, calc() math, and dark mode",
    content: [
      {
        type: "text", heading: "CSS Custom Properties",
        body: `CSS variables (officially: <em>custom properties</em>) let you define a value once and reuse it everywhere. Unlike Sass variables they are <strong>live in the browser</strong> — they cascade, can be scoped to any element, and can be read and written by JavaScript.<br><br>
        <code>--name: value</code> — define (must start with <code>--</code>)<br>
        <code>var(--name)</code> — use<br>
        <code>var(--name, fallback)</code> — use with a fallback if undefined`
      },
      {
        type: "code", heading: "Defining & Using Variables", file: "variables.html",
        runnable: true,
        html: `<style>
  :root {
    --clr-primary:    #3b82f6;
    --clr-primary-dk: #1d4ed8;
    --clr-accent:     #f59e0b;
    --clr-bg:         #0f172a;
    --clr-surface:    #1e293b;
    --clr-text:       #f0f9ff;
    --clr-muted:      #94a3b8;
    --radius-sm: 4px;
    --radius-md: 8px;
    --radius-lg: 16px;
    --space-sm: 8px;
    --space-md: 16px;
    --space-lg: 24px;
  }

  body   { background: var(--clr-bg); color: var(--clr-text); font-family: sans-serif; padding: var(--space-lg); }
  .card  { background: var(--clr-surface); border-radius: var(--radius-lg); padding: var(--space-lg); border: 1px solid rgba(255,255,255,0.05); margin-bottom: var(--space-md); }
  .btn   { background: var(--clr-primary); color: var(--clr-text); border: none; padding: var(--space-sm) var(--space-md); border-radius: var(--radius-md); cursor: pointer; transition: background 0.2s; }
  .btn:hover { background: var(--clr-primary-dk); }
  .btn.accent { background: var(--clr-accent); color: #1c1917; }

  /* Scoped override — changes --clr-primary just for .danger elements */
  .danger { --clr-primary: #ef4444; --clr-primary-dk: #b91c1c; }
</style>

<div class="card">
  <p style="color: var(--clr-muted); margin-bottom: 12px">All colors, spacing, and radii use var()</p>
  <button class="btn">Primary</button>
  <button class="btn accent">Accent</button>
  <button class="btn danger">Danger (scoped)</button>
</div>
<div class="card danger">
  <p>This card has --clr-primary overridden to red via .danger</p>
  <button class="btn">Now red</button>
</div>`
      },
      {
        type: "text", heading: "calc() — Math Inside CSS",
        body: `<code>calc()</code> lets you do arithmetic with mixed units directly in CSS:<br><br>
        <code>width: calc(100% - 240px)</code> — full width minus a sidebar<br>
        <code>padding: calc(var(--space-md) * 2)</code> — multiply a variable<br>
        <code>font-size: calc(1rem + 0.5vw)</code> — fluid size without clamp()<br><br>
        Operators: <code>+</code> <code>-</code> <code>*</code> <code>/</code> — you <strong>must</strong> add spaces around <code>+</code> and <code>-</code>.`
      },
      {
        type: "code", heading: "calc() in Real Layouts", file: "calc.html",
        runnable: true,
        html: `<style>
  :root { --sidebar-w: 180px; --gap: 16px; --nav-h: 48px; }
  *, *::before, *::after { box-sizing: border-box; margin: 0; }
  body { font-family: sans-serif; background: #f1f5f9; }

  .header { height: var(--nav-h); background: #0f172a; color: white; display: flex; align-items: center; padding: 0 20px; font-weight: bold; }

  .layout { display: flex; height: calc(100vh - var(--nav-h)); }

  nav { width: var(--sidebar-w); background: #1e293b; color: white; padding: 16px; flex-shrink: 0; font-size: 14px; color: #94a3b8; }

  main { width: calc(100% - var(--sidebar-w) - var(--gap)); margin-left: var(--gap); padding: 20px; overflow-y: auto; }

  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(calc(120px + 2vw), 1fr)); gap: var(--gap); margin-top: 12px; }
  .cell { background: white; border-radius: 8px; padding: calc(var(--gap) - 4px); box-shadow: 0 1px 4px rgba(0,0,0,0.08); font-size: 13px; color: #374151; }
</style>
<div class="header">calc() Layout — height: calc(100vh - 48px)</div>
<div class="layout">
  <nav>Sidebar<br>width: var(--sidebar-w)</nav>
  <main>
    <p style="color:#64748b;font-size:13px">width: calc(100% - sidebar - gap)</p>
    <div class="grid">
      <div class="cell">calc() cell</div><div class="cell">calc() cell</div>
      <div class="cell">calc() cell</div><div class="cell">calc() cell</div>
    </div>
  </main>
</div>`
      },
      {
        type: "code", heading: "Dark/Light Theme Toggle", file: "theme.html",
        runnable: true,
        html: `<style>
  :root { --bg: #ffffff; --surface: #f1f5f9; --text: #0f172a; --muted: #64748b; --border: #e2e8f0; --primary: #3b82f6; }
  [data-theme="dark"] { --bg: #0f172a; --surface: #1e293b; --text: #f0f9ff; --muted: #94a3b8; --border: #334155; --primary: #60a5fa; }

  * { box-sizing: border-box; transition: background 0.3s, color 0.3s, border-color 0.3s; }
  body { background: var(--bg); color: var(--text); font-family: sans-serif; padding: 20px; }
  .card { background: var(--surface); border: 1px solid var(--border); border-radius: 10px; padding: 20px; margin-top: 12px; }
  p { color: var(--muted); font-size: 14px; margin-top: 8px; }
  .toggle { background: var(--primary); color: white; border: none; padding: 10px 20px; border-radius: 8px; cursor: pointer; font-size: 14px; }
</style>
<button class="toggle" onclick="
  const t = document.documentElement.getAttribute('data-theme');
  document.documentElement.setAttribute('data-theme', t === 'dark' ? 'light' : 'dark');
  this.textContent = t === 'dark' ? '🌙 Dark Mode' : '☀️ Light Mode';
">🌙 Dark Mode</button>
<div class="card">
  <strong>Theme Card</strong>
  <p>All colors are CSS variables. One attribute on &lt;html&gt; switches the entire theme — no per-element class changes needed.</p>
</div>`
      }
    ],
    quiz: [
      {
        q: "Why are CSS custom properties better than hardcoded values?",
        choices: [
          "They load faster",
          "They cascade, can be scoped, and can be updated by JavaScript — making theming a one-line change",
          "They prevent all layout bugs",
          "They only work in :root"
        ],
        correct: 1,
        explain: "CSS variables cascade like any property, can be scoped to any element, and are readable/writable by JavaScript — enabling dynamic theming impossible with static Sass variables."
      },
      {
        q: "What is correct syntax for defining and using a CSS variable?",
        choices: [
          "$primary: blue; then color: $primary",
          "--primary: blue in :root, then color: var(--primary)",
          "@primary: blue; then color: use(--primary)",
          "variable(primary, blue) then color: primary"
        ],
        correct: 1,
        explain: "CSS variables need -- prefix when defined and var() when used. The :root scope makes them global."
      },
      {
        q: "What is wrong with: width: calc(100% -240px)?",
        choices: [
          "calc() can't subtract percentages",
          "100% and px can't be mixed",
          "Spaces are required around - operator: calc(100% - 240px)",
          "Nothing is wrong"
        ],
        correct: 2,
        explain: "calc() requires whitespace around + and - operators. Without spaces the parser treats -240px as a negative value, not a subtraction from 100%."
      },
      {
        q: "How do you create a toggleable dark theme with CSS variables?",
        choices: [
          "Create two separate stylesheets and swap them with JavaScript",
          "Define color variables in :root and override them in [data-theme='dark'], then toggle the attribute on html",
          "Use @theme { dark: ... }",
          "Duplicate every rule with a .dark class prefix"
        ],
        correct: 1,
        explain: "Define light-mode defaults in :root, redefine the same variable names in [data-theme='dark']. Toggle that attribute on document.documentElement — every var() updates instantly."
      },
      {
        q: "var(--color, #3b82f6) — what does the second argument do?",
        choices: [
          "Sets a second color for hover state",
          "Provides a fallback value used when --color is not defined",
          "Multiplies the variable by that color",
          "Permanently overrides the variable"
        ],
        correct: 1,
        explain: "The second argument to var() is a fallback — the browser uses it when the variable is undefined or invalid. Useful for components that may or may not have a variable set by their context."
      }
    ],
    challenge: {
      title: "Themeable Design System",
      desc: "Build a mini design system with CSS variables, calc(), and a live theme toggle.",
      task: `Create: (1) a <strong>:root block</strong> with at least 6 custom properties (colors, spacing, radii), (2) a <strong>[data-theme="dark"]</strong> block that overrides the color variables, (3) use <strong>calc()</strong> at least twice for layout or spacing, (4) a <strong>toggle button</strong> that uses <code>setAttribute</code> in JS to switch the theme, (5) at least 3 UI components (button, card, badge) all styled using <code>var()</code>.`,
      panes: ["html", "css", "js"],
      starterHtml: `<div class="app">
  <header class="header">
    <span class="logo">DesignSys</span>
    <button class="toggle-btn" id="themeToggle">🌙 Dark</button>
  </header>

  <main class="content">
    <div class="card">
      <span class="badge">New</span>
      <h2>CSS Variables</h2>
      <p>Every color, space, and radius uses a custom property. Toggle the theme!</p>
      <button class="btn">Primary Action</button>
    </div>

    <div class="card">
      <span class="badge accent">Tip</span>
      <h2>calc() Power</h2>
      <p>Spacing and layout math done directly in CSS using calc() and variables.</p>
      <button class="btn secondary">Learn More</button>
    </div>
  </main>
</div>`,
      starterCss: `:root {
  /* Define at least 6 custom properties */
  --clr-bg:      #ffffff;
  --clr-surface: #f1f5f9;
  --clr-text:    #0f172a;
  /* Add: --clr-primary, --clr-muted, --clr-border, --radius, --space-md, --space-lg */
}

[data-theme="dark"] {
  /* Override the color variables for dark mode */
  --clr-bg:      #0f172a;
  --clr-surface: #1e293b;
  --clr-text:    #f0f9ff;
  /* Override remaining color vars */
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body {
  font-family: sans-serif;
  background: var(--clr-bg);
  color: var(--clr-text);
  transition: background 0.3s, color 0.3s;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: var(--clr-surface);
  /* Use calc() for header height or padding */
  padding: 0 var(--space-md, 20px);
  height: calc(var(--space-lg, 24px) * 2.5);
  border-bottom: 1px solid var(--clr-border, #e2e8f0);
}

.content {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: var(--space-md, 16px);
  /* Use calc() for padding */
  padding: var(--space-lg, 24px);
}

.card {
  background: var(--clr-surface);
  border-radius: var(--radius, 12px);
  /* Use var() for border, padding */
  position: relative;
  overflow: hidden;
}

.badge {
  position: absolute;
  top: 12px; right: 12px;
  /* Use var() for colors, border-radius */
  font-size: 11px; font-weight: bold; padding: 2px 8px;
}
.badge.accent { /* Different color */ }

h2 { font-size: 1.1rem; margin-bottom: 8px; }
p  { font-size: 14px; color: var(--clr-muted, #64748b); line-height: 1.6; }

.btn {
  margin-top: 12px; border: none; cursor: pointer;
  padding: var(--space-sm, 8px) var(--space-md, 16px);
  border-radius: var(--radius, 8px);
  background: var(--clr-primary, #3b82f6);
  color: white; font-size: 14px;
}
.btn.secondary {
  background: transparent;
  border: 1px solid var(--clr-primary, #3b82f6);
  color: var(--clr-primary, #3b82f6);
}
.toggle-btn {
  background: var(--clr-primary, #3b82f6);
  color: white; border: none; padding: 6px 14px;
  border-radius: var(--radius, 8px); cursor: pointer; font-size: 13px;
}`,
      starterJs: `const toggle = document.getElementById('themeToggle');
toggle.addEventListener('click', () => {
  const html = document.documentElement;
  const isDark = html.getAttribute('data-theme') === 'dark';
  html.setAttribute('data-theme', isDark ? 'light' : 'dark');
  toggle.textContent = isDark ? '🌙 Dark' : '☀️ Light';
});`,
      hint: "Use calc(var(--space-lg) * 2) for double spacing. Don't forget to define --clr-primary in both :root and [data-theme='dark'].",
      checks: code => {
        const c = code.css || "";
        const js = code.js || "";
        const hasRoot      = /:root\s*\{[^}]+--/i.test(c);
        const hasDark      = /\[data-theme/i.test(c);
        const hasVarUse    = /var\(--/i.test(c);
        const hasCalc      = /calc\s*\(/i.test(c);
        const hasCard      = /\.card\s*\{[^}]+\}/i.test(c);
        const hasBtn       = /\.btn\s*\{[^}]+\}/i.test(c);
        const hasToggle    = /setAttribute/i.test(js);
        if (hasRoot && hasDark && hasVarUse && hasCalc && hasCard && hasBtn && hasToggle)
          return { pass: true, title: "Design system complete!", feedback: ":root variables, dark override, calc(), var() usage, and JS toggle — excellent work!" };
        const m = [];
        if (!hasRoot)   m.push(":root { } with CSS variables");
        if (!hasDark)   m.push("[data-theme='dark'] override block");
        if (!hasVarUse) m.push("var(--name) on elements");
        if (!hasCalc)   m.push("calc() at least once");
        if (!hasCard)   m.push(".card with var() styles");
        if (!hasBtn)    m.push(".btn with var() styles");
        if (!hasToggle) m.push("setAttribute in JS to toggle theme");
        return { pass: false, title: "Not complete yet", feedback: "Missing:\n" + m.map(x => " • " + x).join("\n") };
      }
    }
  },

  // ─────────────────────────────────────────────────────────────────────────
  {
    id: 20,
    icon: "[W]", type: "css", color: "#3b82f6",
    title: "Advanced Responsive Design",
    desc: "clamp(), min(), max(), fluid typography, container queries, and motion preferences",
    content: [
      {
        type: "text", heading: "Beyond Media Queries",
        body: `Traditional responsive design uses fixed <code>@media</code> breakpoints — but modern CSS gives us <em>mathematical functions</em> that make layouts fluid by default, adapting continuously rather than snapping:<br><br>
        <code>clamp(min, preferred, max)</code> — value stays between a floor and ceiling<br>
        <code>min(a, b)</code> — picks the <em>smaller</em> of two values<br>
        <code>max(a, b)</code> — picks the <em>larger</em> of two values<br><br>
        These combine with each other and with <code>calc()</code> to replace most breakpoints.`
      },
      {
        type: "code", heading: "clamp() — Fluid Everything", file: "clamp.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; padding: 20px; background: #0f172a; color: white; }

  h1 { font-size: clamp(1.2rem, 5vw, 3rem); font-weight: 800; letter-spacing: -1px; margin: 0; }
  p  { font-size: clamp(0.9rem, 2vw, 1.1rem); line-height: 1.7; color: #94a3b8; max-width: 60ch; margin: 12px 0; }

  .container {
    width: clamp(280px, 90%, 1100px);
    margin: 0 auto; background: #1e293b; border-radius: 12px;
    padding: clamp(16px, 4vw, 48px); margin-top: 16px;
  }

  .row { display: flex; flex-wrap: wrap; gap: clamp(8px, 2vw, 24px); margin-top: 16px; }
  .box {
    flex: 1; min-width: clamp(120px, 30%, 200px);
    background: #3b82f6; border-radius: 8px;
    padding: clamp(10px, 2vw, 20px); text-align: center; font-weight: bold;
  }
</style>
<div class="container">
  <h1>Fluid Heading with clamp()</h1>
  <p>Resize the preview pane. Font, padding, and gap all scale continuously — zero breakpoints.</p>
  <div class="row">
    <div class="box">Box A</div>
    <div class="box">Box B</div>
    <div class="box">Box C</div>
  </div>
</div>`
      },
      {
        type: "points", heading: "min() and max() — Constraint Functions",
        points: [
          "<code>width: min(100%, 600px)</code> — full width on mobile, capped at 600px on desktop",
          "<code>width: max(300px, 50%)</code> — at least 300px, or 50% if larger",
          "<code>padding: max(16px, 4vw)</code> — guaranteed minimum of 16px, grows with viewport",
          "<code>font-size: min(2rem, 8vw)</code> — caps font so it never gets huge",
          "<code>width: min(65ch, 100%)</code> — perfect prose column width, never overflows",
          "<code>clamp(a, b, c)</code> is mathematically identical to <code>max(a, min(b, c))</code>",
        ]
      },
      {
        type: "code", heading: "min() and max() in Practice", file: "minmax-fns.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; background: #0f172a; color: white; padding: 20px; }
  .label { font-family: monospace; font-size: 12px; color: #64748b; margin: 16px 0 6px; }

  .min-demo {
    width: min(100%, 500px);
    background: #1e293b; border-radius: 8px; padding: 16px;
    border-left: 4px solid #3b82f6;
  }
  .max-demo {
    width: max(240px, 40%);
    background: #1e293b; border-radius: 8px; padding: 16px;
    border-left: 4px solid #7c3aed;
  }
  .fluid-pad {
    padding: max(16px, 4vw);
    background: #1e293b; border-radius: 8px;
    border-left: 4px solid #f59e0b;
  }
  .prose {
    width: min(65ch, 100%); margin: 0 auto;
    background: #1e293b; border-radius: 8px;
    padding: clamp(16px, 4vw, 40px); margin-top: 12px;
    font-size: 15px; line-height: 1.7; color: #94a3b8;
  }
</style>
<div class="label">min(100%, 500px) — full width on mobile, max 500px</div>
<div class="min-demo">Capped at 500px on wide screens</div>
<div class="label">max(240px, 40%) — never narrower than 240px</div>
<div class="max-demo">At least 240px wide</div>
<div class="label">padding: max(16px, 4vw) — grows with viewport</div>
<div class="fluid-pad">Fluid padding</div>
<div class="label">min(65ch, 100%) — ideal prose width</div>
<div class="prose">The ideal line length for body text is 50–75 characters. Using ch units tied to the character count of the font is the most readable approach.</div>`
      },
      {
        type: "code", heading: "Fluid Type Scale with CSS Variables", file: "type-scale.html",
        runnable: true,
        html: `<style>
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;700;800&display=swap');

  :root {
    --text-xs:   clamp(0.75rem,  1.5vw, 0.875rem);
    --text-sm:   clamp(0.875rem, 2vw,   1rem);
    --text-base: clamp(1rem,     2.5vw, 1.125rem);
    --text-lg:   clamp(1.125rem, 3vw,   1.5rem);
    --text-xl:   clamp(1.5rem,   4vw,   2rem);
    --text-2xl:  clamp(2rem,     5vw,   3rem);
    --text-3xl:  clamp(2.5rem,   7vw,   4.5rem);
  }

  body { background: #0f172a; color: #f0f9ff; font-family: 'Syne', sans-serif; padding: 24px; }
  .tag  { font-size: var(--text-xs); color: #3b82f6; text-transform: uppercase; letter-spacing: 2px; font-weight: 700; margin-bottom: 4px; }
  .d    { font-size: var(--text-3xl); font-weight: 800; letter-spacing: -2px; line-height: 1; }
  .h1   { font-size: var(--text-2xl); font-weight: 800; letter-spacing: -1px; }
  .h2   { font-size: var(--text-xl);  font-weight: 700; }
  .h3   { font-size: var(--text-lg);  font-weight: 700; }
  .body { font-size: var(--text-base); color: #94a3b8; line-height: 1.7; }
  .sm   { font-size: var(--text-sm);  color: #64748b; }
  .xs   { font-size: var(--text-xs);  color: #475569; }
</style>
<p class="tag">Fluid Type Scale</p>
<p class="d">Display</p>
<p class="h1">Heading 1</p>
<p class="h2">Heading 2</p>
<p class="h3">Heading 3</p>
<p class="body">Body — scales between mobile and desktop</p>
<p class="sm">Small — captions and labels</p>
<p class="xs">Extra small — footnotes</p>`
      },
      {
        type: "code", heading: "Container Queries + prefers-reduced-motion", file: "container.html",
        runnable: true,
        html: `<style>
  body { font-family: sans-serif; background: #f1f5f9; padding: 16px; }

  /* Container query setup */
  .wrapper { container-type: inline-size; container-name: card; }

  .card { background: white; border-radius: 10px; padding: 16px; box-shadow: 0 2px 8px rgba(0,0,0,0.08); }
  .card img { width: 100%; height: 100px; object-fit: cover; border-radius: 6px; background: #dbeafe; display: flex; align-items: center; justify-content: center; }
  .card h3 { margin: 10px 0 4px; }
  .card p  { font-size: 14px; color: #64748b; margin: 0; }

  /* When the CONTAINER (not viewport) is wide enough */
  @container card (min-width: 400px) {
    .card { display: flex; gap: 16px; align-items: flex-start; }
    .card-img { width: 140px; flex-shrink: 0; }
  }

  .demo { display: flex; flex-direction: column; gap: 12px; }
  .narrow { max-width: 280px; }
  .wide   { max-width: 520px; }

  /* Accessibility: respect OS motion preference */
  @media (prefers-reduced-motion: reduce) {
    *, *::before, *::after { animation-duration: 0.01ms !important; transition-duration: 0.01ms !important; }
  }
</style>
<p style="font-size:13px;color:#64748b;margin-bottom:12px"><strong>Container queries</strong> respond to the container width — not the viewport.</p>
<div class="demo">
  <div>
    <p style="font-size:11px;color:#94a3b8;margin-bottom:4px">Narrow (280px)</p>
    <div class="narrow">
      <div class="wrapper">
        <div class="card">
          <div class="card-img" style="background:#dbeafe;height:80px;border-radius:6px;margin-bottom:8px;display:flex;align-items:center;justify-content:center;color:#3b82f6;font-size:1.5rem">🖼</div>
          <div><h3>Card</h3><p>Stacked — too narrow</p></div>
        </div>
      </div>
    </div>
  </div>
  <div>
    <p style="font-size:11px;color:#94a3b8;margin-bottom:4px">Wide (520px)</p>
    <div class="wide">
      <div class="wrapper">
        <div class="card">
          <div class="card-img" style="background:#dbeafe;height:80px;border-radius:6px;margin-bottom:8px;display:flex;align-items:center;justify-content:center;color:#3b82f6;font-size:1.5rem">🖼</div>
          <div><h3>Card</h3><p>Horizontal — container is wide enough</p></div>
        </div>
      </div>
    </div>
  </div>
</div>`
      },
      {
        type: "points", heading: "Modern Responsive Checklist",
        points: [
          "Use <code>clamp()</code> for font sizes — eliminates most typography breakpoints",
          "Use <code>min(100%, Xpx)</code> for containers — automatic max-width behaviour",
          "Use <code>auto-fill + minmax()</code> in Grid — self-responsive without breakpoints",
          "<code>@media (prefers-color-scheme: dark)</code> — automatic OS-level dark mode",
          "<code>@media (prefers-reduced-motion: reduce)</code> — disable animations for accessibility",
          "<code>container-type: inline-size</code> — component-level responsive design",
          "Test at all viewport sizes AND in DevTools device emulation with throttled CPU",
        ]
      }
    ],
    quiz: [
      {
        q: "What does clamp(1rem, 4vw, 3rem) produce on a 375px mobile screen (where 4vw ≈ 15px)?",
        choices: [
          "15px (4vw wins)",
          "1rem (the min floor kicks in since 15px < 16px)",
          "3rem (the max ceiling)",
          "It throws an error on mobile"
        ],
        correct: 1,
        explain: "4vw on a 375px screen is about 15px which is less than 1rem (16px). clamp() returns the minimum (1rem) — protecting readability on small screens."
      },
      {
        q: "What is the difference between min() and clamp()?",
        choices: [
          "They are the same",
          "min() picks the smallest of two values; clamp() constrains between a floor and ceiling",
          "min() is for width only; clamp() is for font-size only",
          "clamp() requires JavaScript to work"
        ],
        correct: 1,
        explain: "min(a, b) returns whichever value is smaller. clamp(min, preferred, max) constrains the preferred value between floor and ceiling — equivalent to max(min, min(preferred, max))."
      },
      {
        q: "What does width: min(100%, 720px) achieve?",
        choices: [
          "Always 100% wide",
          "Always 720px wide",
          "Full width on small screens, capped at 720px on large — no media query needed",
          "Sets the minimum width to 720px"
        ],
        correct: 2,
        explain: "On narrow viewports 100% < 720px so min() picks 100%. On wide viewports 720px < 100% so min() picks 720px. One declaration replaces a max-width media query."
      },
      {
        q: "What is the key advantage of container queries over viewport media queries?",
        choices: [
          "Container queries load faster",
          "Container queries respond to the component's own container width — not the viewport",
          "Container queries work in all old browsers",
          "Container queries remove the need for CSS entirely"
        ],
        correct: 1,
        explain: "@media responds to the viewport. @container responds to the element's container — so a card can switch layout based on where it's placed, not the page width."
      },
      {
        q: "Which @media query should disable animations for users with motion sensitivity?",
        choices: [
          "@media (no-animation: true)",
          "@media (prefers-reduced-motion: reduce)",
          "@media (accessibility: motion-off)",
          "@media (animation: disabled)"
        ],
        correct: 1,
        explain: "@media (prefers-reduced-motion: reduce) reads the OS accessibility setting. Inside, set animation-duration: 0.01ms and transition-duration: 0.01ms on all elements."
      }
    ],
    challenge: {
      title: "Fully Fluid Responsive Page",
      desc: "Build a modern responsive layout using clamp(), min(), max(), and accessibility queries.",
      task: `Build a page with: (1) a <strong>fluid heading</strong> using <code>clamp()</code> for font-size, (2) a <strong>container</strong> using <code>min(100%, 900px)</code> + <code>margin: 0 auto</code>, (3) a <strong>card grid</strong> using <code>auto-fill + minmax(clamp(...))</code>, (4) <strong>fluid padding</strong> via <code>max(16px, 4vw)</code>, (5) a <code>@media (prefers-reduced-motion: reduce)</code> block that disables all transitions, (6) at least one standalone use of <code>min()</code> or <code>max()</code>.`,
      panes: ["html", "css"],
      starterHtml: `<div class="container">
  <header class="hero">
    <p class="eyebrow">Modern CSS</p>
    <h1>Fluid Responsive Design</h1>
    <p class="subtitle">No arbitrary breakpoints. Just mathematics.</p>
  </header>

  <div class="card-grid">
    <div class="card">
      <div class="icon">⚡</div>
      <h3>clamp()</h3>
      <p>Values that scale between a min and max based on viewport width.</p>
    </div>
    <div class="card">
      <div class="icon">📐</div>
      <h3>min() & max()</h3>
      <p>Constraint functions that choose the smaller or larger of two values.</p>
    </div>
    <div class="card">
      <div class="icon">📦</div>
      <h3>Container Queries</h3>
      <p>Components that respond to their container, not the viewport.</p>
    </div>
    <div class="card">
      <div class="icon">♿</div>
      <h3>Accessibility</h3>
      <p>prefers-reduced-motion disables animations for users who need it.</p>
    </div>
  </div>
</div>`,
      starterCss: `:root {
  --primary:  #3b82f6;
  --bg:       #0f172a;
  --surface:  #1e293b;
  --text:     #f0f9ff;
  --muted:    #94a3b8;
  --border:   #334155;
}

*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: sans-serif; background: var(--bg); color: var(--text); }

/* 1. Container — use min() */
.container {
  width: min(100%, 900px);
  margin: 0 auto;
  /* Use max() for fluid padding */
}

/* 2. Hero */
.hero { text-align: center; padding: clamp(32px, 8vw, 80px) 0; }

.eyebrow {
  font-size: clamp(0.7rem, 1.5vw, 0.85rem);
  text-transform: uppercase; letter-spacing: 3px;
  color: var(--primary); margin-bottom: 12px;
}

h1 {
  /* Fluid font-size using clamp() */
  font-weight: 800; letter-spacing: -2px; line-height: 1.1;
}

.subtitle {
  color: var(--muted);
  max-width: min(60ch, 100%);
  margin: 16px auto 0; line-height: 1.7;
  /* Fluid font-size */
}

/* 3. Card grid — auto-fill + minmax with clamp inside */
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(clamp(200px, 28%, 280px), 1fr));
  gap: clamp(12px, 3vw, 24px);
  margin-top: clamp(24px, 5vw, 48px);
}

/* 4. Cards */
.card {
  background: var(--surface);
  border: 1px solid var(--border);
  border-radius: 12px;
  /* Use clamp() or max() for padding */
  transition: transform 0.25s, border-color 0.25s;
}
.card:hover { transform: translateY(-4px); border-color: var(--primary); }

.icon { font-size: clamp(1.5rem, 4vw, 2rem); margin-bottom: 10px; }
h3    { font-size: clamp(1rem, 2vw, 1.15rem); margin-bottom: 6px; }
p     { font-size: clamp(0.85rem, 1.5vw, 0.95rem); color: var(--muted); line-height: 1.6; }

/* 5. Accessibility — disable all motion */
@media (prefers-reduced-motion: reduce) {
  /* Your rules here */
}`,
      starterJs: ``,
      hint: "h1 { font-size: clamp(2rem, 7vw, 4.5rem); } and @media (prefers-reduced-motion) { *, *::before, *::after { transition: none !important; animation: none !important; } }",
      checks: code => {
        const c = code.css || "";
        const hasClamp     = /clamp\s*\(/i.test(c);
        const hasMin       = /\bmin\s*\(/i.test(c);
        const hasMax       = /\bmax\s*\(/i.test(c);
        const hasAutoFill  = /auto-fill|auto-fit/i.test(c);
        const hasMinmax    = /minmax\s*\(/i.test(c);
        const hasMotion    = /prefers-reduced-motion/i.test(c);
        if (hasClamp && hasMin && hasMax && hasAutoFill && hasMinmax && hasMotion)
          return { pass: true, title: "Fluid design complete!", feedback: "clamp(), min(), max(), auto-fill + minmax(), and prefers-reduced-motion — perfectly done!" };
        const m = [];
        if (!hasClamp)    m.push("clamp() for fluid font-size or spacing");
        if (!hasMin)      m.push("min() for container width");
        if (!hasMax)      m.push("max() for minimum padding");
        if (!hasAutoFill) m.push("auto-fill or auto-fit in grid");
        if (!hasMinmax)   m.push("minmax() in grid-template-columns");
        if (!hasMotion)   m.push("@media (prefers-reduced-motion: reduce) block");
        return { pass: false, title: "Almost there!", feedback: "Missing:\n" + m.map(x => " • " + x).join("\n") };
      }
    }
  },
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  //  JS LESSONS 21–25
  // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
  {
    id:21, icon:"[!]", type:"js", color:"#eab308",
    title:"JavaScript Fundamentals",
    desc:"Variables, data types, operators, and console.log",
    content:[
      { type:"text", heading:"What is JavaScript?",
        body:`<strong>JavaScript</strong> makes web pages <em>interactive</em>. It runs in the browser and can change HTML, react to user events, fetch data from servers, and much more.<br><br>
        While HTML is <em>what</em> and CSS is <em>how it looks</em>, JavaScript is <em>what it does</em>.` },
      { type:"code", heading:"Variables: let, const, var", file:"variables.js",
        runnable:true,
        html:`<style>body{font-family:sans-serif;padding:16px;background:#0f172a;color:#e2e8f0;} pre{background:#1e293b;padding:12px;border-radius:8px;font-size:14px;color:#22d3ee;} h3{color:#f0f9ff;margin:12px 0 4px;}</style>`,
        js:`const name = "Alice";
const age = 25;
let score = 0;
score = 100;
const greeting = \`Hello, \${name}! You are \${age} years old.\`;
document.body.innerHTML += \`<h3>Variables</h3><pre>\${greeting}</pre>\`;
document.body.innerHTML += \`<pre>score = \${score}</pre>\`;
document.body.innerHTML += \`<pre>typeof name: \${typeof name}</pre>\`;
document.body.innerHTML += \`<pre>typeof age: \${typeof age}</pre>\`;` },
      { type:"points", heading:"JavaScript Data Types",
        points:[
          "<code>string</code> — 'hello' or \"world\" or `template`",
          "<code>number</code> — 42, 3.14, -7",
          "<code>boolean</code> — true or false",
          "<code>null</code> — intentionally empty value",
          "<code>undefined</code> — variable declared but not assigned",
          "<code>array</code> — [1, 2, 3] — ordered list",
          "<code>object</code> — { key: 'value' } — key-value pairs",
        ] },
      { type:"code", heading:"Arrays & Objects", file:"types.js",
        runnable:true,
        html:`<style>body{font-family:sans-serif;padding:16px;background:#0f172a;color:#e2e8f0;}pre{background:#1e293b;padding:12px;border-radius:8px;font-size:13px;color:#4ade80;}h3{color:#f0f9ff;margin:12px 0 4px;}</style>`,
        js:`const fruits = ["Apple", "Banana", "Mango"];
document.body.innerHTML += "<h3>Array</h3>";
document.body.innerHTML += "<pre>" + fruits.join(", ") + "</pre>";
document.body.innerHTML += "<pre>Length: " + fruits.length + "</pre>";
document.body.innerHTML += "<pre>First: " + fruits[0] + "</pre>";
const person = { name: "Alice", age: 25, isStudent: true };
document.body.innerHTML += "<h3>Object</h3>";
document.body.innerHTML += "<pre>Name: " + person.name + "</pre>";
document.body.innerHTML += "<pre>Age: " + person.age + "</pre>";
document.body.innerHTML += "<pre>Keys: " + Object.keys(person).join(", ") + "</pre>";` },
    ],
    quiz:[
      { q:"Which keyword declares a variable that cannot be reassigned?",
        choices:["var","let","const","static"],
        correct:2, explain:"const declares a constant — it cannot be reassigned after creation." },
      { q:"What is the output of: typeof 42",
        choices:["'integer'","'float'","'number'","'int'"],
        correct:2, explain:"JavaScript has only 'number' for all numeric values (integers and decimals)." },
      { q:"What are template literals delimited by?",
        choices:["Single quotes","Double quotes","Backticks","Parentheses"],
        correct:2, explain:"Template literals use backticks (`) and allow ${} for embedding expressions." },
      { q:"How do you access the first item of an array called 'items'?",
        choices:["items(0)","items[1]","items[0]","items.first"],
        correct:2, explain:"Arrays are zero-indexed — the first element is at index 0." },
    ],
    challenge:{
      title:"Build a Profile Card with JS",
      desc:"Create a user profile using JavaScript to build the HTML.",
      task:`Declare <strong>const</strong> variables for: name, age, skills (array), and isOnline (boolean). Use JavaScript to build an HTML card and set it as <strong>document.body.innerHTML</strong>. Display all the data.`,
      panes:["html","css","js"],
      starterHtml:`<!-- JavaScript will build the card -->`,
      starterCss:`body { font-family: sans-serif; padding: 20px; background: #0f172a; }
.card { background: #1e293b; border: 1px solid #334155; border-radius: 12px; padding: 20px; max-width: 300px; color: #e2e8f0; }
h2 { margin: 0 0 6px; color: #f0f9ff; }
.tag { display: inline-block; background: #3b82f6; color: white; padding: 2px 8px; border-radius: 4px; font-size: 12px; margin: 2px; }
.online { color: #22c55e; font-size: 13px; }`,
      starterJs:`const name = "Your Name";
const age = 0;
const skills = ["HTML", "CSS"];
const isOnline = true;

document.body.innerHTML = \`
  <div class="card">
    <h2>\${name}</h2>
    <!-- Display age, skills, and online status -->
  </div>
\`;`,
      hint:"Use template literals: `<p>Age: ${age}</p>` — map skills array to tag spans.",
      checks: code => {
        const j = code.js || "";
        const hasConst   = /const\s+\w+\s*=/i.test(j);
        const hasArray   = /\[.*\]/i.test(j);
        const hasInner   = /innerHTML|insertAdjacentHTML/i.test(j);
        const hasTpl     = /`[^`]*\$\{/i.test(j);
        if(hasConst && hasArray && hasInner && hasTpl)
          return { pass:true, title:"Profile card built!", feedback:"Variables, array, template literals, and DOM update — great JS!" };
        const m=[];
        if(!hasConst)  m.push("const variables declared");
        if(!hasArray)  m.push("an array for skills");
        if(!hasInner)  m.push("document.body.innerHTML or insertAdjacentHTML");
        if(!hasTpl)    m.push("template literal with ${} expressions");
        return { pass:false, title:"JS needs work", feedback:"Missing:\n"+m.map(x=>" • "+x).join("\n") };
      }
    }
  },

  {
    id:22, icon:"[>]", type:"js", color:"#eab308",
    title:"Functions & Control Flow",
    desc:"Functions, if/else, loops, and making decisions",
    content:[
      { type:"text", heading:"Functions — Reusable Code Blocks",
        body:`Functions let you write code once and reuse it. Three ways to write them:<br>
        <code>function name() {}</code> — Function declaration<br>
        <code>const name = function() {}</code> — Function expression<br>
        <code>const name = () => {}</code> — Arrow function (modern, concise)` },
      { type:"code", heading:"Functions in Action", file:"functions.js",
        runnable:true,
        html:`<style>body{font-family:sans-serif;padding:16px;background:#0f172a;color:#e2e8f0;}pre{background:#1e293b;padding:10px;border-radius:6px;color:#86efac;font-size:13px;}h3{color:#fef08a;margin:10px 0 4px;}</style>`,
        js:`function greet(name) { return \`Hello, \${name}! [~]\`; }
const add = (a, b) => a + b;
const power = (base, exp = 2) => base ** exp;
document.body.innerHTML = "";
document.body.innerHTML += "<h3>greet()</h3><pre>" + greet("Alice") + "</pre>";
document.body.innerHTML += "<h3>add(3, 7)</h3><pre>" + add(3, 7) + "</pre>";
document.body.innerHTML += "<h3>power(4)</h3><pre>" + power(4) + " (default exp=2)</pre>";
document.body.innerHTML += "<h3>power(2,8)</h3><pre>" + power(2,8) + "</pre>";` },
      { type:"code", heading:"if / else & Loops", file:"flow.js",
        runnable:true,
        html:`<style>body{font-family:sans-serif;padding:16px;background:#0f172a;color:#e2e8f0;}pre{background:#1e293b;padding:10px;border-radius:6px;color:#7dd3fc;font-size:13px;margin:4px 0;}</style>`,
        js:`const score = 78;
let grade;
if (score >= 90)      grade = "A";
else if (score >= 80) grade = "B";
else if (score >= 70) grade = "C";
else                  grade = "F";
document.body.innerHTML = \`<pre>Score: \${score} -> Grade: \${grade}</pre>\`;
let output = "";
for (let i = 1; i <= 5; i++) { output += \`<pre>* Star \${i}</pre>\`; }
document.body.innerHTML += output;
const colors = ["Red", "Green", "Blue"];
colors.forEach(color => { document.body.innerHTML += \`<pre>Color: \${color}</pre>\`; });` },
    ],
    quiz:[
      { q:"What is an arrow function?",
        choices:["A function with no return","A concise function syntax using =>","A function that runs once","A function with no parameters"],
        correct:1, explain:"Arrow functions (=>) are a shorter syntax for functions: const fn = (x) => x * 2;" },
      { q:"What does return do in a function?",
        choices:["Logs to console","Stops the script","Sends a value back to the caller","Prints to HTML"],
        correct:2, explain:"return exits the function and passes a value back to wherever the function was called." },
      { q:"What does forEach do on an array?",
        choices:["Creates a new array","Filters items","Runs a function for each item","Sorts the array"],
        correct:2, explain:"forEach runs a callback function for each element in an array." },
      { q:"How do you write an if statement with a fallback?",
        choices:["if {} catch {}","if {} else {}","try {} if {}","when {} otherwise {}"],
        correct:1, explain:"if/else: if the condition is true, the if block runs; otherwise the else block runs." },
    ],
    challenge:{
      title:"Grade Calculator",
      desc:"Build a grade calculator using functions and conditionals.",
      task:`Write a function <strong>getGrade(score)</strong> that returns "A" (≥90), "B" (≥80), "C" (≥70), "D" (≥60), or "F". Then loop through an array of 5 scores and display each with its grade.`,
      panes:["html","css","js"],
      starterHtml:`<!-- JavaScript will render the results -->`,
      starterCss:`body { font-family: sans-serif; padding: 20px; background: #0f172a; }
.result { background: #1e293b; padding: 12px; border-radius: 8px; margin: 8px 0; color: #e2e8f0; display: flex; justify-content: space-between; }
.grade { font-size: 1.4rem; font-weight: bold; }
.A { color: #22c55e; } .B { color: #3b82f6; } .C { color: #eab308; }
.D { color: #f97316; } .F { color: #ef4444; }`,
      starterJs:`function getGrade(score) {
  // Add your if/else logic here
}

const scores = [95, 83, 71, 65, 45];

document.body.innerHTML = "<h2 style='color:#f0f9ff;margin-bottom:12px'>Grade Report</h2>";
scores.forEach(score => {
  const grade = getGrade(score);
  // Build and insert HTML for each score
});`,
      hint:"if(score>=90) return 'A'; else if(score>=80) return 'B'; ... use forEach to build HTML rows",
      checks: code => {
        const j = code.js || "";
        const hasFn     = /function\s+getGrade|const\s+getGrade\s*=/i.test(j);
        const hasIf     = /if\s*\(/i.test(j);
        const hasLoop   = /forEach|for\s*\(/i.test(j);
        const hasReturn = /return\s+["'][ABCDF]["']/i.test(j);
        if(hasFn && hasIf && hasLoop && hasReturn)
          return { pass:true, title:"Grade calculator works!", feedback:"getGrade function, if/else grades, forEach loop — all correct!" };
        const m=[];
        if(!hasFn)     m.push("function getGrade(score)");
        if(!hasIf)     m.push("if/else if conditions");
        if(!hasLoop)   m.push("forEach or for loop over scores array");
        if(!hasReturn) m.push("return 'A','B','C','D', or 'F'");
        return { pass:false, title:"Not complete", feedback:"Missing:\n"+m.map(x=>" • "+x).join("\n") };
      }
    }
  },

  {
    id:23, icon:"[+]", type:"js", color:"#eab308",
    title:"DOM Manipulation",
    desc:"Selecting elements, changing content, and reacting to events",
    content:[
      { type:"text", heading:"The DOM — Document Object Model",
        body:`The DOM is how JavaScript sees your HTML — as a tree of objects. You can select any element and change its content, style, or structure.` },
      { type:"code", heading:"Selecting & Changing Elements", file:"dom.js",
        runnable:true,
        html:`<div id="target">Original text</div>
<p class="item">Item One</p>
<p class="item">Item Two</p>
<p class="item">Item Three</p>
<style>body{font-family:sans-serif;padding:16px;}#target{background:#dbeafe;padding:12px;border-radius:8px;margin-bottom:8px;font-weight:bold;} .item{margin:4px 0;}.changed{color:#ef4444;font-weight:bold;}</style>`,
        js:`const target = document.getElementById("target");
target.textContent = "Changed by JavaScript! [ok]";
target.style.background = "#dcfce7";
target.style.color = "#15803d";
const items = document.querySelectorAll(".item");
items.forEach((item, index) => {
  item.textContent = \`Item \${index + 1} — updated!\`;
  item.classList.add("changed");
});` },
      { type:"code", heading:"Event Listeners", file:"events.js",
        runnable:true,
        html:`<style>
body { font-family: sans-serif; padding: 16px; }
button { padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 6px; cursor: pointer; margin: 4px; font-size: 14px; }
button:hover { background: #2563eb; }
#counter { font-size: 3rem; font-weight: bold; color: #3b82f6; text-align: center; padding: 20px; }
input { padding: 8px; border: 1px solid #ccc; border-radius: 6px; font-size: 14px; width: 200px; }
</style>
<div id="counter">0</div>
<button id="inc">+ Add</button>
<button id="dec">− Subtract</button>
<button id="reset">Reset</button>
<br><br>
<input type="text" id="nameInput" placeholder="Type your name...">
<p id="greeting"></p>`,
        js:`let count = 0;
const counter = document.getElementById("counter");
document.getElementById("inc").addEventListener("click", () => {
  count++;
  counter.textContent = count;
  counter.style.color = count > 0 ? "#22c55e" : count < 0 ? "#ef4444" : "#3b82f6";
});
document.getElementById("dec").addEventListener("click", () => {
  count--;
  counter.textContent = count;
  counter.style.color = count > 0 ? "#22c55e" : count < 0 ? "#ef4444" : "#3b82f6";
});
document.getElementById("reset").addEventListener("click", () => {
  count = 0; counter.textContent = "0"; counter.style.color = "#3b82f6";
});
document.getElementById("nameInput").addEventListener("input", (e) => {
  const name = e.target.value;
  document.getElementById("greeting").textContent = name ? \`Hello, \${name}! [~]\` : "";
});` },
    ],
    quiz:[
      { q:"Which method selects an element by its id?",
        choices:["querySelector","getElementsByClass","getElementById","findById"],
        correct:2, explain:"document.getElementById('myId') selects the element with that specific id." },
      { q:"What does addEventListener do?",
        choices:["Adds a new HTML element","Runs a function when an event happens","Changes CSS","Creates a variable"],
        correct:1, explain:"addEventListener attaches a function (callback) that runs when a specified event (like 'click') occurs." },
      { q:"What does element.textContent = 'New' do?",
        choices:["Adds a class","Changes inner HTML","Replaces the visible text","Deletes the element"],
        correct:2, explain:"textContent replaces the text content of an element — it doesn't parse HTML tags." },
      { q:"Which method selects ALL elements matching a CSS selector?",
        choices:["getElementById","querySelector","querySelectorAll","getAll"],
        correct:2, explain:"querySelectorAll returns a NodeList of ALL matching elements." },
    ],
    challenge:{
      title:"Interactive Color Switcher",
      desc:"Build a color theme switcher using DOM events.",
      task:`Create 4 <strong>color buttons</strong>. When clicked, each changes the page's <strong>background color</strong> and updates a text label showing the active color. Use <strong>addEventListener</strong>.`,
      panes:["html","css","js"],
      starterHtml:`<div class="controls">
  <button class="color-btn" data-color="#3b82f6" data-name="Blue">Blue</button>
  <button class="color-btn" data-color="#22c55e" data-name="Green">Green</button>
  <button class="color-btn" data-color="#ef4444" data-name="Red">Red</button>
  <button class="color-btn" data-color="#a855f7" data-name="Purple">Purple</button>
</div>
<p id="status">Click a color button!</p>`,
      starterCss:`body { font-family: sans-serif; padding: 30px; transition: background 0.3s; text-align: center; }
.controls { display: flex; gap: 12px; justify-content: center; margin-bottom: 20px; }
.color-btn { padding: 12px 24px; border: none; border-radius: 8px; color: white; cursor: pointer; font-weight: bold; font-size: 14px; }
#status { font-size: 1.2rem; font-weight: bold; }`,
      starterJs:`const buttons = document.querySelectorAll(".color-btn");
const status = document.getElementById("status");
buttons.forEach(btn => {
  // Your code: change background, update status text
});`,
      hint:"Use btn.dataset.color and btn.dataset.name. Set document.body.style.background and status.textContent",
      checks: code => {
        const j = code.js || "";
        const hasQuery    = /querySelectorAll|querySelector/i.test(j);
        const hasForEach  = /forEach/i.test(j);
        const hasListener = /addEventListener\s*\(\s*["']click["']/i.test(j);
        const hasStyle    = /style\.background|style\.backgroundColor/i.test(j);
        if(hasQuery && hasForEach && hasListener && hasStyle)
          return { pass:true, title:"Color switcher works!", feedback:"querySelectorAll, forEach, click listeners, and style changes — DOM mastered!" };
        const m=[];
        if(!hasQuery)    m.push("querySelectorAll to select buttons");
        if(!hasForEach)  m.push("forEach to loop through buttons");
        if(!hasListener) m.push("addEventListener('click', ...)");
        if(!hasStyle)    m.push("style.background or style.backgroundColor change");
        return { pass:false, title:"Event handling incomplete", feedback:"Missing:\n"+m.map(x=>" • "+x).join("\n") };
      }
    }
  },

  {
    id:24, icon:"[@]", type:"js", color:"#eab308",
    title:"Arrays & Objects Deep Dive",
    desc:"map, filter, reduce, spread, destructuring, and more",
    content:[
      { type:"text", heading:"Array Methods — The Core Toolkit",
        body:`Modern JavaScript relies heavily on functional array methods. These methods create <em>new arrays</em> — they don't modify the original.` },
      { type:"code", heading:"map, filter, reduce", file:"arrays.js",
        runnable:true,
        html:`<style>body{font-family:sans-serif;padding:16px;background:#0f172a;color:#e2e8f0;}pre{background:#1e293b;padding:10px;border-radius:6px;color:#86efac;font-size:13px;margin:4px 0;}h3{color:#fef08a;}</style>`,
        js:`const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const doubled = nums.map(n => n * 2);
document.body.innerHTML += "<h3>map (×2)</h3><pre>" + doubled.join(", ") + "</pre>";
const evens = nums.filter(n => n % 2 === 0);
document.body.innerHTML += "<h3>filter (evens)</h3><pre>" + evens.join(", ") + "</pre>";
const sum = nums.reduce((acc, n) => acc + n, 0);
document.body.innerHTML += "<h3>reduce (sum)</h3><pre>" + sum + "</pre>";
const firstBig = nums.find(n => n > 7);
document.body.innerHTML += "<h3>find (>7)</h3><pre>" + firstBig + "</pre>";
document.body.innerHTML += "<h3>some >8?</h3><pre>" + nums.some(n => n > 8) + "</pre>";
document.body.innerHTML += "<h3>every >0?</h3><pre>" + nums.every(n => n > 0) + "</pre>";` },
      { type:"code", heading:"Spread, Rest & Destructuring", file:"modern-js.js",
        runnable:true,
        html:`<style>body{font-family:sans-serif;padding:16px;background:#0f172a;color:#e2e8f0;}pre{background:#1e293b;padding:10px;border-radius:6px;color:#7dd3fc;font-size:13px;margin:4px 0;}h3{color:#fef08a;}</style>`,
        js:`const [first, second, ...rest] = [10, 20, 30, 40, 50];
document.body.innerHTML = "<h3>Destructuring</h3><pre>first=" + first + " second=" + second + " rest=" + rest + "</pre>";
const { name, age, city = "Unknown" } = { name: "Alice", age: 25 };
document.body.innerHTML += "<pre>name=" + name + " age=" + age + " city=" + city + "</pre>";
const a = [1, 2, 3]; const b = [4, 5, 6];
const merged = [...a, ...b];
document.body.innerHTML += "<h3>Spread arrays</h3><pre>" + merged.join(", ") + "</pre>";
const user = { name: "Bob", role: "user" };
const admin = { ...user, role: "admin", extra: true };
document.body.innerHTML += "<h3>Spread objects</h3><pre>" + JSON.stringify(admin, null, 2) + "</pre>";` },
    ],
    quiz:[
      { q:"What does .map() return?",
        choices:["Modified original array","New array with transformed values","Nothing (undefined)","The first matching element"],
        correct:1, explain:"map creates and returns a NEW array. The original is unchanged." },
      { q:"What does .filter() do?",
        choices:["Transforms each element","Sorts the array","Returns a new array with only elements that pass a test","Adds elements"],
        correct:2, explain:"filter returns a new array containing only elements for which the callback returns true." },
      { q:"What does the spread operator (...) do?",
        choices:["Deletes array items","Expands iterable elements","Creates a new object","Loops an array"],
        correct:1, explain:"The spread operator (...) expands an array or object into individual elements." },
      { q:"What is destructuring?",
        choices:["Deleting an object","Extracting values into variables","Merging two arrays","Converting to string"],
        correct:1, explain:"Destructuring lets you unpack values from arrays/objects into separate variables in one line." },
    ],
    challenge:{
      title:"Product Filter & Search",
      desc:"Use array methods to build a product search system.",
      task:`Given a products array (with name, price, category), use <strong>.filter()</strong> to show only products under $50. Use <strong>.map()</strong> to transform them into HTML cards. Use <strong>.reduce()</strong> to calculate the total price.`,
      panes:["html","css","js"],
      starterHtml:`<div id="app"></div>`,
      starterCss:`body { font-family: sans-serif; padding: 20px; background: #0f172a; color: #e2e8f0; }
h2 { margin-bottom: 16px; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; margin: 16px 0; }
.product { background: #1e293b; padding: 14px; border-radius: 8px; border: 1px solid #334155; }
.product h3 { margin: 0 0 4px; color: #f0f9ff; font-size: 0.95rem; }
.price { color: #22c55e; font-weight: bold; }
.category { font-size: 12px; color: #64748b; }
.total { background: #1e3a5f; padding: 12px 16px; border-radius: 8px; color: #7dd3fc; }`,
      starterJs:`const products = [
  { name: "Notebook", price: 12, category: "stationery" },
  { name: "Laptop", price: 999, category: "tech" },
  { name: "Pen Set", price: 8, category: "stationery" },
  { name: "Headphones", price: 49, category: "tech" },
  { name: "Desk Lamp", price: 35, category: "home" },
  { name: "Monitor", price: 299, category: "tech" },
];
const affordable = products.filter(/* your code */);
const cards = affordable.map(p => \`
  <div class="product">
    <h3>\${p.name}</h3>
    <!-- Add price and category -->
  </div>
\`).join("");
const total = affordable.reduce(/* your code */, 0);
document.getElementById("app").innerHTML = \`
  <h2>Affordable Products (under $50)</h2>
  <div class="grid">\${cards}</div>
  <div class="total">Total: $\${total}</div>
\`;`,
      hint:"filter: p => p.price < 50 — reduce: (acc, p) => acc + p.price — map: include p.price and p.category in template",
      checks: code => {
        const j = code.js || "";
        const hasFilter = /\.filter\s*\(/i.test(j);
        const hasMap    = /\.map\s*\(/i.test(j);
        const hasReduce = /\.reduce\s*\(/i.test(j);
        const hasInner  = /innerHTML/i.test(j);
        if(hasFilter && hasMap && hasReduce && hasInner)
          return { pass:true, title:"Array methods mastered!", feedback:"filter, map, reduce, and DOM update — functional JS at its best!" };
        const m=[];
        if(!hasFilter) m.push(".filter() to find affordable products");
        if(!hasMap)    m.push(".map() to create HTML cards");
        if(!hasReduce) m.push(".reduce() to calculate total");
        if(!hasInner)  m.push("innerHTML to display results");
        return { pass:false, title:"Array methods incomplete", feedback:"Missing:\n"+m.map(x=>" • "+x).join("\n") };
      }
    }
  },

  {
    id:25, icon:"[^]", type:"js", color:"#eab308",
    title:"Async JavaScript & APIs",
    desc:"Promises, async/await, fetch, and working with real data",
    content:[
      { type:"text", heading:"Why Async?",
        body:`JavaScript is <strong>single-threaded</strong> — it runs one thing at a time. <em>Async</em> code lets time-consuming operations (like fetching data) happen in the background without freezing the page.` },
      { type:"code", heading:"Promises & async/await", file:"async.js",
        runnable:true,
        html:`<style>body{font-family:sans-serif;padding:16px;background:#0f172a;color:#e2e8f0;}pre{background:#1e293b;padding:10px;border-radius:6px;color:#86efac;font-size:13px;margin:4px 0;}h3{color:#fef08a;}p{color:#94a3b8;}</style>`,
        js:`function delay(ms) { return new Promise(resolve => setTimeout(resolve, ms)); }
async function loadData() {
  document.body.innerHTML += "<p>... Loading...</p>";
  await delay(1000);
  document.body.innerHTML += "<pre>(^_^) Data loaded after 1 second!</pre>";
  await delay(500);
  document.body.innerHTML += "<pre>(^_^) Step 2 complete</pre>";
}
document.body.innerHTML = "<h3>Async Demo</h3>";
loadData();
document.body.innerHTML += "<p>(This line runs immediately while async code runs in background)</p>";` },
      { type:"code", heading:"Fetch API — Real Data", file:"fetch.js",
        runnable:true,
        html:`<style>body{font-family:sans-serif;padding:16px;background:#0f172a;color:#e2e8f0;}pre{background:#1e293b;padding:10px;border-radius:6px;font-size:12px;color:#7dd3fc;overflow:auto;}h3{color:#fef08a;}p{color:#94a3b8;}.loading{color:#94a3b8;}</style>`,
        js:`async function fetchUser() {
  document.body.innerHTML = "<h3>Fetching from JSONPlaceholder API...</h3><p class='loading'>... Loading...</p>";
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users/1");
    const user = await response.json();
    document.body.innerHTML = \`
      <h3>(^_^) User Fetched!</h3>
      <pre>Name: \${user.name}
Email: \${user.email}
City: \${user.address.city}
Company: \${user.company.name}</pre>
    \`;
  } catch (error) {
    document.body.innerHTML = "<pre style='color:#ef4444'>(x_x) Error: " + error.message + "</pre>";
  }
}
fetchUser();` },
      { type:"points", heading:"Key Async Concepts",
        points:[
          "<code>Promise</code> — represents a value that will be available in the future",
          "<code>async function</code> — marks a function as asynchronous",
          "<code>await</code> — pauses until a promise resolves (only inside async)",
          "<code>fetch(url)</code> — built-in browser function to make HTTP requests",
          "<code>response.json()</code> — parses the response body as JSON",
          "<code>try/catch</code> — handles errors in async code",
        ] },
    ],
    quiz:[
      { q:"What does async/await do?",
        choices:["Makes code run faster","Lets you write async code that looks synchronous","Creates a new thread","Runs code in parallel"],
        correct:1, explain:"async/await is syntax sugar over Promises — it makes asynchronous code look and read like synchronous code." },
      { q:"What does fetch() return?",
        choices:["The data directly","A string","A Promise","An array"],
        correct:2, explain:"fetch() returns a Promise that resolves to a Response object." },
      { q:"What does response.json() do?",
        choices:["Converts JSON to string","Parses the response body as JSON and returns a Promise","Displays JSON on screen","Validates JSON"],
        correct:1, explain:"response.json() reads the response body and returns a Promise resolving to a JavaScript object." },
      { q:"What is try/catch used for in async code?",
        choices:["Catching click events","Handling errors in promises/await","Making code faster","Selecting DOM elements"],
        correct:1, explain:"try/catch wraps async code — if anything throws or rejects, the catch block handles the error." },
    ],
    challenge:{
      title:"Fetch & Display Posts",
      desc:"Fetch real API data and display it as styled cards.",
      task:`Use <strong>fetch</strong> with <strong>async/await</strong> to get posts from <code>https://jsonplaceholder.typicode.com/posts?_limit=6</code>. Display each post as a card. Use <strong>try/catch</strong> for error handling.`,
      panes:["html","css","js"],
      starterHtml:`<div id="app"><p>Loading posts...</p></div>`,
      starterCss:`body { font-family: sans-serif; padding: 20px; background: #0f172a; color: #e2e8f0; }
h1 { margin-bottom: 16px; color: #f0f9ff; }
.grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 12px; }
.post { background: #1e293b; padding: 16px; border-radius: 10px; border: 1px solid #334155; }
.post h3 { color: #f0f9ff; font-size: 0.88rem; margin: 0 0 8px; line-height: 1.4; }
.post p { font-size: 0.8rem; color: #64748b; line-height: 1.5; }
.post-id { font-size: 0.65rem; color: #3b82f6; margin-bottom: 8px; letter-spacing: 0.08em; }
.error { color: #ef4444; padding: 16px; background: #1e293b; border-radius: 8px; }`,
      starterJs:`async function loadPosts() {
  const app = document.getElementById("app");
  try {
    // 1. Fetch from the API

    // 2. Parse JSON

    // 3. Map to HTML cards and display

  } catch (error) {
    app.innerHTML = \`<div class="error">Error: \${error.message}</div>\`;
  }
}
loadPosts();`,
      hint:"const res = await fetch(url); const posts = await res.json(); posts.map(p => `<div class='post'>...`) .join('')",
      checks: code => {
        const j = code.js || "";
        const hasAsync = /async\s+function|async\s*\(/i.test(j);
        const hasAwait = /await\s+fetch/i.test(j);
        const hasJson  = /\.json\s*\(\)/i.test(j);
        const hasTry   = /try\s*\{/i.test(j);
        const hasMap   = /\.map\s*\(/i.test(j);
        if(hasAsync && hasAwait && hasJson && hasTry && hasMap)
          return { pass:true, title:"Async fetch complete! \\o/", feedback:"async/await, fetch, .json(), try/catch, and map — full async workflow!" };
        const m=[];
        if(!hasAsync) m.push("async function declaration");
        if(!hasAwait) m.push("await fetch(...)");
        if(!hasJson)  m.push(".json() to parse response");
        if(!hasTry)   m.push("try/catch error handling");
        if(!hasMap)   m.push(".map() to create HTML cards");
        return { pass:false, title:"Async not complete", feedback:"Missing:\n"+m.map(x=>" • "+x).join("\n") };
      }
    }
  },
  {
    id:26, icon:"[#]", type:"js", color:"#eab308",
    title:"Classes & Modules",
    desc:"Object-Oriented Programming (OOP) and organizing code with imports/exports",
    content:[
      { type:"text", heading:"What are Classes?",
        body:`A <strong>Class</strong> is a blueprint for creating objects. Instead of writing the same object structure over and over, you define a class once and create "instances" of it.<br><br>
        This is the foundation of <strong>Object-Oriented Programming (OOP)</strong>.` },
      { type:"code", heading:"Classes & Constructors", file:"classes.js",
        runnable:true,
        html:`<style>body{font-family:sans-serif;padding:16px;background:#0f172a;color:#e2e8f0;} .card{background:#1e293b;padding:12px;border-radius:8px;margin-bottom:10px;border-left:4px solid #eab308;} h3{color:#fef08a;margin:0 0 4px;font-size:16px;}</style>`,
        js:`class User {
  constructor(name, role) {
    this.name = name;
    this.role = role;
  }
  
  describe() {
    return \`<div class="card"><h3>\${this.name}</h3><p>Role: \${this.role}</p></div>\`;
  }
}

const user1 = new User("Alice", "Admin");
const user2 = new User("Bob", "Editor");

document.body.innerHTML = "<h2>Users from Class</h2>";
document.body.innerHTML += user1.describe();
document.body.innerHTML += user2.describe();` },
      { type:"text", heading:"ES6 Modules",
        body:`As projects grow, putting all code in one file becomes messy. <strong>Modules</strong> let you <code>export</code> code from one file and <code>import</code> it into another.<br><br>
        <em>Note: In HTML, you must use <code>&lt;script type="module"&gt;</code> to use these features.</em>` },
      { type:"code", heading:"Export & Import", file:"main.js",
        runnable:false, // Logic-only display for modules
        js:`// --- mathUtils.js ---
export const add = (a, b) => a + b;
export const PI = 3.14159;

// --- main.js ---
import { add, PI } from './mathUtils.js';

console.log(add(5, 5)); // 10
console.log(PI);        // 3.14159` },
    ],
    quiz:[
      { q:"What is the purpose of a constructor in a class?",
        choices:["To delete an object","To initialize object properties","To create a loop","To hide variables"],
        correct:1, explain:"The constructor runs automatically when you create a 'new' instance to set up the object's initial data." },
      { q:"Which keyword is used to create an instance of a class?",
        choices:["create","make","new","instanceof"],
        correct:2, explain:"We use 'new ClassName()' to create a new object from a class blueprint." },
      { q:"How do you share a function from one module to another?",
        choices:["Using shared{}","Using the export keyword","It happens automatically","Using save()"],
        correct:1, explain:"You must 'export' a variable, function, or class to make it available for 'import' in other files." },
    ],
    challenge:{
      title:"The RPG Hero Factory",
      desc:"Use a Class to generate heroes for a game.",
      task:`Create a class <strong>Hero</strong> with a <strong>constructor</strong> that takes (name, type, hp). Add a method <strong>render()</strong> that returns an HTML string. Create an array of 3 hero instances and display them.`,
      panes:["html","css","js"],
      starterHtml:`<div id="party"></div>`,
      starterCss:`body { font-family: 'Syne', sans-serif; background: #0b0f19; color: #fff; padding: 20px; }
.hero-card { background: #172035; border: 2px solid #3b82f6; border-radius: 12px; padding: 15px; margin: 10px; width: 200px; display: inline-block; text-align: center; }
.hp-bar { background: #ef4444; height: 8px; border-radius: 4px; margin-top: 10px; }`,
      starterJs:`class Hero {
  // 1. Add constructor here
  
  // 2. Add render method here
}

const party = [
  // 3. Create new Hero instances here
];

const container = document.getElementById("party");
// 4. Loop and append to innerHTML`,
      hint:"class Hero { constructor(n, t, h){ this.n=n... } } ... const h1 = new Hero('Cloud', 'Soldier', 100);",
      checks: code => {
        const j = code.js || "";
        const hasClass = /class\s+Hero/i.test(j);
        const hasConstructor = /constructor\s*\(/i.test(j);
        const hasNew = /new\s+Hero/i.test(j);
        const hasMethod = /render\s*\(/i.test(j);
        if(hasClass && hasConstructor && hasNew && hasMethod)
          return { pass:true, title:"Hero Factory Online!", feedback:"Perfect use of Classes, constructors, and instance methods!" };
        const m=[];
        if(!hasClass) m.push("class Hero definition");
        if(!hasConstructor) m.push("constructor inside the class");
        if(!hasNew) m.push("using 'new Hero()' to create heroes");
        if(!hasMethod) m.push("a render() method inside the class");
        return { pass:false, title:"Blueprint incomplete", feedback:"Missing:\n"+m.map(x=>" • "+x).join("\n") };
      }
    }
  },
  {
    id:27, icon:"[S]", type:"js", color:"#eab308",
    title:"Data Persistence & JSON",
    desc:"Saving data to the browser so it stays after a refresh",
    content:[
      { type:"text", heading:"What is LocalStorage?",
        body:`LocalStorage allows you to save **key-value pairs** in the browser. Unlike variables, this data **stays there** even if you close the tab or refresh the page.` },
      { type:"code", heading:"Set, Get, and Remove", file:"storage.js",
        runnable:true,
        html:`<style>body{font-family:sans-serif;padding:16px;background:#0f172a;color:#e2e8f0;} .box{background:#1e293b;padding:15px;border-radius:8px;border:1px solid #334155;} button{padding:8px 12px;cursor:pointer;background:#3b82f6;color:white;border:none;border-radius:4px;margin-right:5px;}</style>
        <div class="box">
          <p id="display">No name saved.</p>
          <button onclick="saveName()">Save Name</button>
          <button onclick="clearName()">Clear</button>
        </div>`,
        js:`window.saveName = () => {
  localStorage.setItem("username", "Sokha");
  updateUI();
};

window.clearName = () => {
  localStorage.removeItem("username");
  updateUI();
};

function updateUI() {
  const name = localStorage.getItem("username");
  document.getElementById("display").innerText = name ? "Saved: " + name : "No name saved.";
}

updateUI();` },
      { type:"text", heading:"JSON: JavaScript Object Notation",
        body:`LocalStorage only saves **strings**. To save an object or array, you must convert it to a string using <code>JSON.stringify()</code> and turn it back using <code>JSON.parse()</code>.` },
      { type:"code", heading:"Saving Complex Data", file:"json-demo.js",
        runnable:true,
        js:`const settings = { theme: "dark", notifications: true };

// Convert to string to save
localStorage.setItem("user_settings", JSON.stringify(settings));

// Get string and convert back to object
const savedData = localStorage.getItem("user_settings");
const parsed = JSON.parse(savedData);

document.body.innerHTML = "<h3>Parsed Object:</h3><pre>" + parsed.theme + "</pre>";` }
    ],
    quiz:[
      { q:"How long does data stay in LocalStorage?",
        choices:["Until the tab is closed","For 24 hours","Until it is manually cleared or deleted","Only while the script runs"],
        correct:2, explain:"LocalStorage is persistent—it stays until the user clears their cache or the code removes it." },
      { q:"Which method converts a JS object into a JSON string?",
        choices:["JSON.parse()","JSON.stringify()","Object.toString()","JSON.toLine()"],
        correct:1, explain:"JSON.stringify() turns an object/array into a string format that can be stored or sent to a server." },
    ],
    challenge:{
      title:"The Persistent Note-Taker",
      desc:"Create a simple notepad that remembers your text.",
      task:`Create a <strong>textarea</strong> and a <strong>Save</strong> button. When clicked, save the text to <strong>localStorage</strong>. When the page loads, automatically fill the textarea with the saved text.`,
      panes:["html","css","js"],
      starterHtml:`<textarea id="note" placeholder="Write something..."></textarea><br>
<button id="saveBtn">Save Note</button>`,
      starterCss:`body { background: #0f172a; padding: 20px; font-family: sans-serif; }
textarea { width: 100%; height: 100px; background: #1e293b; color: white; padding: 10px; border-radius: 8px; border: 1px solid #334155; }
button { margin-top: 10px; padding: 10px 20px; background: #22c55e; color: white; border: none; border-radius: 6px; cursor: pointer; }`,
      starterJs:`const noteArea = document.getElementById("note");
const saveBtn = document.getElementById("saveBtn");

// 1. Check localStorage on load and set noteArea.value

// 2. Add event listener to saveBtn to setItem`,
      hint:"localStorage.getItem('myNote') to load; localStorage.setItem('myNote', noteArea.value) to save.",
      checks: code => {
        const j = code.js || "";
        const hasSet = /localStorage\.setItem/i.test(j);
        const hasGet = /localStorage\.getItem/i.test(j);
        const hasListener = /addEventListener|onclick/i.test(j);
        if(hasSet && hasGet && hasListener)
          return { pass:true, title:"Data Saved!", feedback:"Your notepad now survives refreshes. That is real web app behavior!" };
        return { pass:false, title:"Still forgetting...", feedback:"Make sure you both getItem on load and setItem on click." };
      }
    }
  },
  {
  id: 28, icon: "🌿", type: "js", color: "#22c55e",
  title: " Plant Tracker",
  desc: "Combine Classes, DOM, Arrays, and LocalStorage into a complete App.",
  challenge: {
    title: "Build 'The Green Thumb' Dashboard",
    desc: "Create an app that lets you add plants to a list. Each plant should be an object created from a Class. The list must stay saved even after a page refresh!",
    task: `1. Create a **Plant class**. 
    2. Write a function to **render the list** using .map(). 
    3. Save the array to **localStorage** every time it changes. 
    4. Load the data when the app starts.`,
    panes: ["html", "css", "js"],
    starterHtml: `
      <div class="app-container">
        <h1>🌿 My Garden</h1>
        <div class="input-group">
          <input type="text" id="pName" placeholder="Plant Name (e.g. Aloe)">
          <button id="addBtn">Add Plant</button>
        </div>
        <div id="plantList" class="grid"></div>
      </div>`,
    starterCss: `
      body { background: #064e3b; font-family: sans-serif; color: white; padding: 20px; }
      .app-container { max-width: 600px; margin: 0 auto; text-align: center; }
      .input-group { margin-bottom: 20px; display: flex; gap: 10px; }
      input { flex: 1; padding: 10px; border-radius: 5px; border: none; }
      #addBtn { padding: 10px 20px; background: #10b981; color: white; border: none; cursor: pointer; border-radius: 5px; }
      .grid { display: grid; grid-template-columns: 1fr 1fr; gap: 15px; }
      .plant-card { background: #065f46; padding: 15px; border-radius: 10px; border: 1px solid #059669; }
      .delete-btn { background: #ef4444; color: white; border: none; padding: 5px 10px; border-radius: 4px; cursor: pointer; margin-top: 10px; }`,
    starterJs: `
class Plant {
  constructor(name) {
    this.id = Date.now();
    this.name = name;
  }
}

let myPlants = JSON.parse(localStorage.getItem("garden")) || [];

function render() {
  const list = document.getElementById("plantList");
  // 1. Use .map() to create HTML for each plant
  // 2. Update list.innerHTML
  // 3. Save to localStorage
}

document.getElementById("addBtn").onclick = () => {
  const nameInput = document.getElementById("pName");
  if(!nameInput.value) return;
  
  // 4. Create new Plant, push to array, and render
  nameInput.value = "";
};

// Initial render
render();`,
    hint: "Remember to use JSON.stringify(myPlants) when saving to localStorage. Use .filter() to remove a plant by its ID.",
    checks: code => {
      const j = code.js || "";
      const hasClass = /class\s+Plant/i.test(j);
      const hasMap = /\.map/i.test(j);
      const hasStorage = /localStorage\.(set|get)Item/i.test(j);
      const hasJSON = /JSON\.(stringify|parse)/i.test(j);
      
      if(hasClass && hasMap && hasStorage && hasJSON)
        return { pass: true, title: "Master Gardener!", feedback: "You've built a fully functional, persistent web application. You are now a JavaScript developer!" };
      
      return { pass: false, title: "Almost there...", feedback: "Check if you are using the Class, .map(), and JSON/LocalStorage methods together." };
    }
  }
},
{
  id: 29, icon: "💰", type: "js", color: "#eab308",
  title: "Mini Finance App",
  desc: "Master math logic, currency formatting, and dynamic totals.",
  challenge: {
    title: "Build an Expense Tracker",
    desc: "Create an app to track spending. It must calculate the total balance automatically and save your history.",
    task: `1. Create an **Expense class**. 
    2. Use **.reduce()** to calculate the total sum of all expenses. 
    3. Use **.filter()** to allow deleting an item.
    4. Format numbers to currency (e.g., $10.00).`,
    panes: ["html", "css", "js"],
    starterHtml: `
      <div class="finance-app">
        <h2>Expense Tracker</h2>
        <div class="balance-card">
          <p>Total Spent</p>
          <h1 id="totalAmount">$0.00</h1>
        </div>
        <div class="form">
          <input type="text" id="reason" placeholder="What did you buy?">
          <input type="number" id="amount" placeholder="Amount">
          <button id="addExpense">Add</button>
        </div>
        <ul id="history"></ul>
      </div>`,
    starterCss: `
      body { background: #0f172a; color: white; font-family: sans-serif; padding: 20px; }
      .balance-card { background: #1e293b; padding: 20px; border-radius: 12px; text-align: center; border: 1px solid #eab308; margin-bottom: 20px; }
      .form { display: flex; gap: 5px; margin-bottom: 20px; }
      input { padding: 10px; border-radius: 6px; border: none; flex: 1; }
      #addExpense { background: #eab308; border: none; padding: 10px; border-radius: 6px; cursor: pointer; font-weight: bold; }
      ul { list-style: none; padding: 0; }
      li { background: #1e293b; margin: 5px 0; padding: 10px; border-radius: 6px; display: flex; justify-content: space-between; }`,
    starterJs: `
class Expense {
  constructor(reason, amount) {
    this.id = Date.now();
    this.reason = reason;
    this.amount = parseFloat(amount);
  }
}

let items = JSON.parse(localStorage.getItem("expenses")) || [];

function updateApp() {
  const list = document.getElementById("history");
  const totalDisplay = document.getElementById("totalAmount");

  // 1. Calculate Total using items.reduce()
  // 2. Render list using items.map()
  // 3. Save to localStorage
}

document.getElementById("addExpense").onclick = () => {
  const res = document.getElementById("reason");
  const amt = document.getElementById("amount");
  if(!res.value || !amt.value) return;

  items.push(new Expense(res.value, amt.value));
  res.value = ""; amt.value = "";
  updateApp();
};

updateApp();`,
    hint: "Total logic: items.reduce((sum, item) => sum + item.amount, 0).toFixed(2);",
    checks: code => {
      const j = code.js || "";
      const hasReduce = /\.reduce/i.test(j);
      const hasParse = /parseFloat|Number/i.test(j);
      if(hasReduce && hasParse)
        return { pass: true, title: "Finance Pro!", feedback: "Great use of reduce and data parsing!" };
      return { pass: false, title: "Math error", feedback: "Make sure you use .reduce() to sum the expenses and convert the input string to a number." };
    }
  }
},
{
  id: 30, icon: "☁️", type: "js", color: "#3b82f6",
  title: "Real-Time Weather App",
  desc: "Fetch live data from the internet and handle loading states.",
  challenge: {
    title: "Weather Pulse",
    desc: "Connect to a real API to show the current weather in any city. You must handle the 'Loading...' state and any errors.",
    task: `1. Use **fetch()** with an async function.
    2. Use **try/catch** to prevent the app from crashing on bad city names.
    3. Update the UI only after the data arrives.`,
    panes: ["html", "css", "js"],
    starterHtml: `
      <div class="weather-box">
        <input type="text" id="cityInput" placeholder="Enter City (e.g. Kampot)">
        <button id="searchBtn">Get Weather</button>
        <div id="result">
          <p>Search for a city to see the temperature!</p>
        </div>
      </div>`,
    starterCss: `
      body { background: #1e3a8a; color: white; font-family: sans-serif; display: flex; justify-content: center; padding-top: 50px; }
      .weather-box { background: rgba(255,255,255,0.1); padding: 30px; border-radius: 20px; backdrop-filter: blur(10px); width: 300px; text-align: center; }
      input { width: 80%; padding: 10px; border-radius: 20px; border: none; margin-bottom: 10px; }
      button { background: #3b82f6; color: white; border: none; padding: 10px 20px; border-radius: 20px; cursor: pointer; }
      .temp { font-size: 3rem; font-weight: bold; margin: 10px 0; }`,
    starterJs: `
async function getWeather(city) {
  const display = document.getElementById("result");
  display.innerHTML = "<p>Loading...</p>";
  
  try {
    // We will use a mock API for practice
    const response = await fetch(\`https://api.weatherapi.com/v1/current.json?key=YOUR_KEY&q=\${city}\`);
    if(!response.ok) throw new Error("City not found");
    const data = await response.json();
    
    display.innerHTML = \`
      <h3>\${data.location.name}</h3>
      <p class="temp">\${data.current.temp_c}°C</p>
      <p>\${data.current.condition.text}</p>
    \`;
  } catch (err) {
    display.innerHTML = "<p style='color:#f87171'>Could not find that city!</p>";
  }
}

document.getElementById("searchBtn").onclick = () => {
  const city = document.getElementById("cityInput").value;
  getWeather(city);
};`,
    hint: "Use await fetch() and remember to call .json() on the response.",
    checks: code => {
      const j = code.js || "";
      const hasAsync = /async/i.test(j);
      const hasAwait = /await/i.test(j);
      const hasTry = /try|catch/i.test(j);
      if(hasAsync && hasAwait && hasTry)
        return { pass: true, title: "Cloud Architect!", feedback: "Async/Await and error handling mastered!" };
      return { pass: false, title: "Connection Lost", feedback: "Make sure you are using an async function with try/catch blocks." };
    }
  }
}

];


// ══════════════════════════════════════════════════
// WEB DEV ACADEMY
// ══════════════════════════════════════════════════

let streak  = +localStorage.getItem("wd_streak") || 0;
let points  = +localStorage.getItem("wd_points") || 0;
let progress= JSON.parse(localStorage.getItem("wd_progress")||"{}");
let activeLesson = null;
let activePhase  = "learn";
let quizState    = { idx:0, answered:false, allCorrect:true };

let runnerFiles  = { html:"", css:"", js:"" };
let runnerActive = "html";
let challengeFiles = { html:"", css:"", js:"" };

function save(){
  localStorage.setItem("wd_streak",   streak);
  localStorage.setItem("wd_points",   points);
  localStorage.setItem("wd_progress", JSON.stringify(progress));
}
function lp(id){ return progress[id] || { learn:false, quiz:false, code:false }; }
function isDone(id){ const p=lp(id); return p.learn && p.quiz && p.code; }
function isUnlocked(idx){ if(idx===0) return true; return isDone(LESSONS[idx-1].id); }
function getLastLesson(){ return +localStorage.getItem("wd_last")||1; }
function setLastLesson(id){ localStorage.setItem("wd_last",id); }

function showToast(msg, type="success"){
  const c=document.getElementById("toast-container");
  const t=document.createElement("div");
  t.className=`toast toast-${type}`;
  t.textContent=msg;
  c.appendChild(t);
  setTimeout(()=>{ t.style.animation="toast-out .25s ease forwards"; setTimeout(()=>t.remove(),250); },2600);
}

function toggleTheme(){
  const html=document.documentElement;
  const isDark=html.getAttribute("data-theme")==="dark";
  html.setAttribute("data-theme",isDark?"light":"dark");
  localStorage.setItem("wd_theme",isDark?"light":"dark");
  document.getElementById("themeBtn").textContent=isDark?"[*]":"[~]";
}

function updateStats(){
  const done=LESSONS.filter(l=>isDone(l.id)).length;
  const pct =Math.round(done/LESSONS.length*100);
  document.getElementById("stStreak").textContent=streak;
  document.getElementById("stPoints").textContent=points;
  document.getElementById("stDone").textContent=done;
  document.getElementById("progPct").textContent=pct+"%";
  document.getElementById("progFill").style.width=pct+"%";
  document.getElementById("stat-lessons").textContent=LESSONS.length;
  document.getElementById("stat-quizzes").textContent=LESSONS.reduce((a,l)=>a+(l.quiz?.length||0),0);
}
function updateContinue(){
  let s=getLastLesson();
  const doneIds=LESSONS.filter(l=>isDone(l.id)).map(l=>l.id);
  if(doneIds.length>0){ const mx=Math.max(...doneIds); s=Math.min(mx+1,LESSONS.length); }
  document.getElementById("continueNum").textContent=s;
  const btn=document.getElementById("btnStart");
  if(btn){ btn.textContent=`Start Lesson ${s} [ -> ]`; btn.onclick=()=>openLesson(s); }
}
function continueLesson(){
  const n=+document.getElementById("continueNum").textContent||1;
  openLesson(n);
}

function hideIntro(){ document.getElementById("introPanel").classList.add("hidden"); document.getElementById("introContinue").classList.add("hidden"); }
function showIntro(){ document.getElementById("introPanel").classList.remove("hidden"); document.getElementById("introContinue").classList.remove("hidden"); }
function showView(id){
  document.querySelectorAll(".view").forEach(v=>{ v.classList.add("hidden"); v.classList.remove("active"); });
  const v=document.getElementById("view-"+id);
  v.classList.remove("hidden"); v.classList.add("active");
}
function goBack(){
  activeLesson=null;
  renderGrid(); updateContinue(); showIntro(); showView("lessons");
}

const TYPE_COLOR={ html:"#f97316", css:"#3b82f6", js:"#eab308" };
const TYPE_LABEL={ html:"HTML", css:"CSS", js:"JavaScript" };

function renderGrid(){
  updateStats();
  const grid=document.getElementById("lessonGrid");
  grid.innerHTML="";
  let lastType=null;

  LESSONS.forEach((l,i)=>{
    if(l.type!==lastType){
      const sec=document.createElement("div");
      sec.className="grid-section-label";
      const dotClass=`dot-${l.type}`;
      sec.innerHTML=`<div class="dot ${dotClass}"></div>${TYPE_LABEL[l.type]} Fundamentals`;
      grid.appendChild(sec);
      lastType=l.type;
    }

    const unlocked=isUnlocked(i);
    const done=isDone(l.id);
    const p=lp(l.id);
    const col=l.color||TYPE_COLOR[l.type];

    const card=document.createElement("div");
    card.style.setProperty("--lc", col);
    card.className=`l-card ${done?"done":!unlocked?"locked":"active-now"}`;
    if(unlocked) card.onclick=()=>openLesson(l.id);
    if(!unlocked) card.title=`Complete Lesson ${l.id-1} to unlock`;

    const badgeText=done?"[ok] Done":!unlocked?"[#] Locked":"Open";
    const badgeCls=done?"done-b":!unlocked?"locked-b":"open";

    const d1=p.learn?"active":"";
    const d2=p.quiz?"quiz-done":p.learn&&unlocked?"active":"";
    const d3=p.code?"code-done":p.quiz&&unlocked?"active":"";
    const lockDot=!unlocked?"locked-dot":"";

    card.innerHTML=`
      <div class="l-card-top">
        <div class="l-icon">${l.icon}</div>
        <div class="l-badge ${badgeCls}">${badgeText}</div>
      </div>
      <div class="l-type-tag" style="color:${col}">${TYPE_LABEL[l.type]}</div>
      <div class="l-title">Lesson ${l.id} — ${l.title}</div>
      <div class="l-desc">${l.desc}</div>
      <div class="l-steps">
        <div class="step-dot ${d1||lockDot}" title="${unlocked?(p.learn?'Learn done':'Learn'):'[#] Locked'}"></div>
        <div class="step-dot ${d2||lockDot}" title="${unlocked?(p.quiz?'Quiz done':p.learn?'Quiz':'Quiz locked'):'[#] Locked'}"></div>
        <div class="step-dot ${d3||lockDot}" title="${unlocked?(p.code?'Challenge done':p.quiz?'Challenge':'Challenge locked'):'[#] Locked'}"></div>
      </div>`;
    grid.appendChild(card);
  });
}

function openLesson(id){
  activeLesson=LESSONS.find(l=>l.id===+id);
  if(!activeLesson){ showToast("Lesson not found","error"); return; }
  quizState={ idx:0, answered:false, allCorrect:true };
  activePhase="learn";
  renderLearnPhase();
  updatePhaseTabs();
  switchPhase("learn");
  setLastLesson(id);
  hideIntro();
  updateContinue();
  showView("lesson");
}

function updatePhaseTabs(){
  const p=lp(activeLesson.id);
  const tl=document.getElementById("tab-learn");
  const tq=document.getElementById("tab-quiz");
  const tc=document.getElementById("tab-code");
  tl.className="phase-tab"+(p.learn?" done-tab":"");
  tl.title=p.learn?"Learn complete":"Read the lesson first";
  tq.className="phase-tab"+(!p.learn?" locked-tab":p.quiz?" done-tab":"");
  tq.title=!p.learn?"[#] Complete the lesson to unlock quiz":p.quiz?"Quiz complete":"Take the quiz";
  tc.className="phase-tab"+(!p.quiz?" locked-tab":p.code?" done-tab":"");
  tc.title=!p.quiz?"[#] Pass the quiz to unlock challenge":p.code?"Challenge complete":"Complete the challenge";
}
function switchPhase(phase){
  const p=lp(activeLesson.id);
  if(phase==="quiz"&&!p.learn){ showToast("Complete the lesson first!","error"); return; }
  if(phase==="code"&&!p.quiz){  showToast("Pass the quiz first!","error"); return; }
  activePhase=phase;
  ["learn","quiz","code"].forEach(ph=>{
    document.getElementById("phase-"+ph).style.display=ph===phase?"block":"none";
    document.getElementById("tab-"+ph).classList.toggle("active",ph===phase);
  });
}

function renderLearnPhase(){
  const l=activeLesson;
  const col=l.color||TYPE_COLOR[l.type];
  let html=`<div class="learn-hdr">
    <div class="learn-icon" style="border-color:${col}30">${l.icon}</div>
    <div>
      <div class="learn-title" style="color:${col}">Lesson ${l.id} — ${l.title}</div>
      <div class="learn-sub">${l.desc}</div>
    </div>
  </div>`;

  l.content.forEach(block=>{
    html+=`<div class="content-block">`;
    if(block.heading) html+=`<div class="block-heading">${block.heading}</div>`;

    if(block.type==="text"){
      html+=`<div class="block-text">${block.body}</div>`;
    }
    else if(block.type==="points"){
      html+=`<div class="point-list">${block.points.map(p=>`<div class="point">${p}</div>`).join("")}</div>`;
    }
    else if(block.type==="code"){
      const id="runnable_"+Math.random().toString(36).slice(2);
      const runBtn=block.runnable
        ? `<button class="code-run-btn" onclick="openRunner('${id}')"><span class="run-icon">[>]</span> Run</button>`
        : "";
      html+=`<div class="code-wrap" id="${id}"
        data-html="${esc(block.html||"")}"
        data-css="${esc(block.css||"")}"
        data-js="${esc(block.js||"")}"
        data-title="${esc(block.heading||block.file||"Live Demo")}">
        <div class="code-top">
          <div class="code-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div>
          <span class="code-fname">${block.file||"example"}</span>
          ${runBtn}
        </div>
        <pre class="code-pre">${buildCodePreview(block)}</pre>
      </div>`;
      if(block.note) html+=`<div class="demo-box"><div class="demo-label">// note</div>${block.note}</div>`;
    }
    html+=`</div>`;
  });
  document.getElementById("learnContent").innerHTML=html;
}

function buildCodePreview(block){
  const parts=[];
  if(block.html&&block.html.trim()) parts.push(escHtml(block.html.trim()));
  if(block.css&&block.css.trim())   parts.push("/* CSS */\n"+escHtml(block.css.trim()));
  if(block.js&&block.js.trim())     parts.push("// JS\n"+escHtml(block.js.trim()));
  return parts.join("\n\n");
}

function finishLearn(){
  const id=activeLesson.id;
  progress[id]={ ...lp(id), learn:true };
  save(); updateStats(); updatePhaseTabs();
  quizState={ idx:0, answered:false, allCorrect:true };
  renderQuizPhase();
  switchPhase("quiz");
}

// ══════════════════════════════════════════════════
// LIVE RUNNER MODAL
// ══════════════════════════════════════════════════
function openRunner(blockId){
  const el=document.getElementById(blockId);
  if(!el) return;
  runnerFiles.html=unesc(el.dataset.html||"");
  runnerFiles.css =unesc(el.dataset.css ||"");
  runnerFiles.js  =unesc(el.dataset.js  ||"");
  document.getElementById("runnerTitle").textContent=unesc(el.dataset.title||"Live Preview");

  const tabs=document.getElementById("runnerTabs");
  tabs.innerHTML="";
  const hasCss =runnerFiles.css.trim().length>0;
  const hasJs  =runnerFiles.js.trim().length>0;

  const show=[];
  if(runnerFiles.html.trim()) show.push("html");
  if(hasCss)  show.push("css");
  if(hasJs)   show.push("js");
  if(!show.length) show.push("html");

  runnerActive = hasJs?"js": hasCss?"css":"html";

  show.forEach(lang=>{
    const tab=document.createElement("div");
    tab.className=`runner-tab ${lang}-t${lang===runnerActive?" active":""}`;
    tab.textContent=lang.toUpperCase();
    tab.onclick=()=>switchRunnerTab(lang);
    tabs.appendChild(tab);
  });

  document.getElementById("runnerEditor").value=runnerFiles[runnerActive];
  document.getElementById("runnerOverlay").classList.add("open");
  runCode();
}

function switchRunnerTab(lang){
  runnerFiles[runnerActive]=document.getElementById("runnerEditor").value;
  runnerActive=lang;
  document.getElementById("runnerEditor").value=runnerFiles[lang];
  document.querySelectorAll(".runner-tab").forEach(t=>{
    t.classList.toggle("active",t.textContent.toLowerCase()===lang);
  });
}

function runCode(){
  runnerFiles[runnerActive]=document.getElementById("runnerEditor").value;
  const frame=document.getElementById("runnerFrame");
  writeFrame(frame, runnerFiles.html, runnerFiles.css, runnerFiles.js);
}

function buildDoc(html,css,js){
  return '<!DOCTYPE html><html><head><meta charset="UTF-8">'
    + '<style>' + (css||'') + '<\/style><\/head>'
    + '<body>' + (html||'')
    + '<script>' + (js||'') + '<\/script><\/body><\/html>';
}

function writeFrame(frame, html, css, js){
  const doc = buildDoc(html, css, js);
  frame.src = 'about:blank';
  frame.onload = function(){
    frame.onload = null;
    try {
      const fd = frame.contentDocument || frame.contentWindow.document;
      fd.open();
      fd.write(doc);
      fd.close();
    } catch(e) {
      frame.srcdoc = doc;
    }
  };
}

function closeRunnerDirect(){
  document.getElementById("runnerOverlay").classList.remove("open");
}
function closeRunner(e){
  if(e.target===document.getElementById("runnerOverlay")) closeRunnerDirect();
}
document.addEventListener("keydown",e=>{ if(e.key==="Escape") closeRunnerDirect(); });

// ══════════════════════════════════════════════════
// QUIZ PHASE
// ══════════════════════════════════════════════════
function renderQuizPhase(){ renderQuestion(); }

function renderQuestion(){
  const q=activeLesson.quiz[quizState.idx];
  const tot=activeLesson.quiz.length;
  const pct=Math.round(quizState.idx/tot*100);
  let html=`<div class="quiz-hdr">
    <div class="quiz-q-num">Question ${quizState.idx+1} of ${tot}</div>
    <div class="prog-track" style="margin-bottom:14px"><div class="prog-fill" style="width:${pct}%"></div></div>
    <div class="quiz-q-text">${q.q}</div>
  </div>`;
  if(q.code) html+=`<div class="code-wrap" style="margin-bottom:12px"><div class="code-top"><div class="code-dots"><span class="r"></span><span class="y"></span><span class="g"></span></div></div><pre class="code-pre">${escHtml(q.code)}</pre></div>`;
  html+=`<div class="choices" id="choicesWrap">`;
  q.choices.forEach((c,i)=>{ html+=`<div class="choice" onclick="selectAnswer(${i},this)"><div class="choice-letter">${String.fromCharCode(65+i)}</div><div class="choice-text">${escHtml(c)}</div></div>`; });
  html+=`</div><div class="feedback-box" id="quizFeedback"></div>`;
  document.getElementById("quizContent").innerHTML=html;
}

function selectAnswer(idx, el){
  if(quizState.answered) return;
  quizState.answered=true;
  const q=activeLesson.quiz[quizState.idx];

  const qc = document.getElementById("quizContent");
  const wrap = qc ? qc.querySelector("#choicesWrap") : null;
  const choices = wrap ? Array.from(wrap.querySelectorAll(".choice")) : [];
  let fb = qc ? qc.querySelector("#quizFeedback") : null;

  if(!fb && qc){
    fb = document.createElement("div");
    fb.id = "quizFeedback";
    qc.appendChild(fb);
  }

  if(choices[q.correct]) choices[q.correct].classList.add("correct");
  if(idx !== q.correct){
    if(choices[idx]) choices[idx].classList.add("wrong");
    quizState.allCorrect = false;
  }
  choices.forEach((c,i)=>{ if(i!==idx && i!==q.correct) c.classList.add("dim"); });

  const ok = idx===q.correct;
  if(ok){ points+=10; save(); updateStats(); }

  if(!fb) return;
  fb.className="feedback-box show";
  fb.innerHTML=`<div class="fb-icon">${ok?"(^_^)":"(x_x)"}</div><div>
    <div class="fb-title ${ok?"ok":"bad"}">${ok?"Correct!":"Not quite!"}</div>
    <div class="fb-msg">${q.explain}</div>
    <div class="btn-row" style="margin-top:12px">
      <button class="btn btn-primary" onclick="nextQuestion()">${quizState.idx+1<activeLesson.quiz.length?"Next Question [ -> ]":"Finish Quiz [ -> ]"}</button>
    </div></div>`;
}

function nextQuestion(){
  quizState.idx++; quizState.answered=false;
  if(quizState.idx>=activeLesson.quiz.length) finishQuiz();
  else renderQuestion();
}

function finishQuiz(){
  const id=activeLesson.id;
  progress[id]={ ...lp(id), quiz:true };
  if(quizState.allCorrect){ streak++; points+=20; }
  save(); updateStats(); updatePhaseTabs();
  renderChallengePhase();
  switchPhase("code");
}

// ══════════════════════════════════════════════════
// CHALLENGE PHASE
// ══════════════════════════════════════════════════
function renderChallengePhase(){
  const ch=activeLesson.challenge;
  const done=lp(activeLesson.id).code;
  const panes=ch.panes||["html"];
  const hasHtml=panes.includes("html");
  const hasCss =panes.includes("css");
  const hasJs  =panes.includes("js");

  challengeFiles.html=ch.starterHtml||"";
  challengeFiles.css =ch.starterCss||"";
  challengeFiles.js  =ch.starterJs||"";

  const triClass=panes.length>=3?"tri":"";
  let editorsHtml="";

  if(hasHtml) editorsHtml+=`<div class="editor-pane">
    <div class="editor-label html-lbl">HTML</div>
    <textarea class="code-editor" id="chalHtml" spellcheck="false" oninput="onChallengeEdit('html',this.value)" rows="12">${escHtml(challengeFiles.html)}</textarea>
  </div>`;
  if(hasCss) editorsHtml+=`<div class="editor-pane">
    <div class="editor-label css-lbl">CSS</div>
    <textarea class="code-editor" id="chalCss" spellcheck="false" oninput="onChallengeEdit('css',this.value)" rows="12">${escHtml(challengeFiles.css)}</textarea>
  </div>`;
  if(hasJs) editorsHtml+=`<div class="editor-pane">
    <div class="editor-label js-lbl">JavaScript</div>
    <textarea class="code-editor" id="chalJs" spellcheck="false" oninput="onChallengeEdit('js',this.value)" rows="12">${escHtml(challengeFiles.js)}</textarea>
  </div>`;

  let html=`<div class="challenge-hdr">
    <div class="challenge-title">[K] ${ch.title}</div>
    <div class="challenge-desc">${ch.desc}</div>
  </div>
  <div class="challenge-task">
    <div class="challenge-task-label">Your Task</div>
    <div class="challenge-task-text">${ch.task}</div>
  </div>
  <div class="challenge-panes ${triClass}">${editorsHtml}</div>
  <div class="challenge-preview-wrap">
    <div class="challenge-preview-label"><div class="live-dot"></div> Live Preview</div>
    <iframe class="challenge-frame" id="chalFrame"></iframe>
  </div>
  <div class="btn-row">
    <button class="btn btn-ghost" onclick="resetChallenge()">Reset</button>
    <button class="btn run-challenge-btn" onclick="runChallenge()">[>] Run Preview</button>
    <button class="btn btn-primary" onclick="checkChallenge()">Check My Code [ok]</button>
  </div>
  <div class="thinking" id="chalThinking"><span>Checking</span><span class="think-dots"><span>.</span><span>.</span><span>.</span></span></div>
  <div class="ai-result" id="chalResult"></div>
  <div class="hint-box" id="chalHint">[!] ${ch.hint}</div>
  <div class="btn-row" style="margin-top:0">
    <button class="btn btn-ghost" onclick="toggleHint()">Show Hint</button>
  </div>`;

  if(done) html+=`<div style="margin-top:16px"><button class="btn btn-primary btn-full" onclick="completionScreen()">Lesson Complete — Continue [ -> ]</button></div>`;

  document.getElementById("codeContent").innerHTML=html;
  setTimeout(()=>runChallenge(),100);
}

function onChallengeEdit(lang, value){ challengeFiles[lang]=value; }

function runChallenge(){
  const frame=document.getElementById("chalFrame");
  if(!frame) return;
  const htmlEl=document.getElementById("chalHtml");
  const cssEl =document.getElementById("chalCss");
  const jsEl  =document.getElementById("chalJs");
  if(htmlEl) challengeFiles.html=htmlEl.value;
  if(cssEl)  challengeFiles.css=cssEl.value;
  if(jsEl)   challengeFiles.js=jsEl.value;
  writeFrame(frame, challengeFiles.html, challengeFiles.css, challengeFiles.js);
}

function resetChallenge(){
  const ch=activeLesson.challenge;
  challengeFiles.html=ch.starterHtml||"";
  challengeFiles.css =ch.starterCss||"";
  challengeFiles.js  =ch.starterJs||"";
  const htmlEl=document.getElementById("chalHtml");
  const cssEl =document.getElementById("chalCss");
  const jsEl  =document.getElementById("chalJs");
  if(htmlEl) htmlEl.value=challengeFiles.html;
  if(cssEl)  cssEl.value=challengeFiles.css;
  if(jsEl)   jsEl.value=challengeFiles.js;
  const r=document.getElementById("chalResult");
  r.className="ai-result"; r.innerHTML="";
  runChallenge();
}

function toggleHint(){
  const h=document.getElementById("chalHint");
  h.style.display=h.style.display==="none"||!h.style.display?"block":"none";
}

function checkChallenge(){
  const htmlEl=document.getElementById("chalHtml");
  const cssEl =document.getElementById("chalCss");
  const jsEl  =document.getElementById("chalJs");
  if(htmlEl) challengeFiles.html=htmlEl.value;
  if(cssEl)  challengeFiles.css=cssEl.value;
  if(jsEl)   challengeFiles.js=jsEl.value;

  const thinking=document.getElementById("chalThinking");
  const resultEl=document.getElementById("chalResult");
  thinking.classList.add("show");
  resultEl.className="ai-result"; resultEl.innerHTML="";

  setTimeout(()=>{
    thinking.classList.remove("show");
    const checker=activeLesson.challenge.checks;
    const result=checker ? checker(challengeFiles) : { pass:true, title:"Looks good!", feedback:"Challenge accepted!" };

    if(result.pass){
      const id=activeLesson.id;
      const wasAlready=lp(id).code;
      progress[id]={ ...lp(id), code:true };
      if(!wasAlready){ points+=30; streak++; }
      save(); updateStats(); updatePhaseTabs();
      resultEl.className="ai-result pass show";
      resultEl.innerHTML=`<div class="ai-result-hdr"><div class="ai-result-icon">\\o/</div><div class="ai-result-title">${escHtml(result.title)}</div></div>
        <div class="ai-result-body">${escHtml(result.feedback)}</div>
        <div class="btn-row" style="margin-top:14px"><button class="btn btn-primary" onclick="completionScreen()">Complete Lesson [ -> ]</button></div>`;
    } else {
      resultEl.className="ai-result fail show";
      resultEl.innerHTML=`<div class="ai-result-hdr"><div class="ai-result-icon">(??)</div><div class="ai-result-title">${escHtml(result.title)}</div></div>
        <div class="ai-result-body">${escHtml(result.feedback)}</div>
        <div class="btn-row" style="margin-top:14px"><button class="btn btn-ghost" onclick="checkChallenge()">Try Again [ -> ]</button></div>`;
    }
  }, 900);
}

// ══════════════════════════════════════════════════
// COMPLETION SCREEN
// ══════════════════════════════════════════════════
function completionScreen(){
  const l=activeLesson;
  const nextIdx=LESSONS.findIndex(x=>x.id===l.id)+1;
  const hasNext=nextIdx<LESSONS.length;
  const done=LESSONS.filter(x=>isDone(x.id)).length;
  document.getElementById("completeContent").innerHTML=`
    <div class="complete-ascii">\\o/</div>
    <div class="complete-title">Lesson ${l.id} Complete!</div>
    <div class="complete-sub">Learn -> Quiz -> Challenge — all done!</div>
    <div class="complete-rewards">
      <div class="reward-card"><div class="reward-val" style="color:var(--yellow)">${points}</div><div class="reward-label">Total Points</div></div>
      <div class="reward-card"><div class="reward-val" style="color:var(--orange)">${streak}</div><div class="reward-label">Streak</div></div>
      <div class="reward-card"><div class="reward-val" style="color:var(--cyan)">${done}/${LESSONS.length}</div><div class="reward-label">Lessons Done</div></div>
    </div>
    <div class="btn-row" style="justify-content:center">
      ${hasNext
        ?`<button class="btn btn-primary" onclick="openLesson(${LESSONS[nextIdx].id})">Next: ${LESSONS[nextIdx].title} [ -> ]</button>`
        :`<div style="color:var(--green);font-size:1rem">[*] All ${LESSONS.length} lessons complete!</div>`}
      <button class="btn btn-ghost" onclick="goBack()">All Lessons</button>
    </div>`;
  showView("complete");
}

// ── UTILS ──────────────────────────────────────────
function escHtml(s){ return String(s).replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;"); }
function esc(s)    { return String(s).replace(/"/g,"&quot;").replace(/'/g,"&#39;"); }
function unesc(s)  { return s.replace(/&quot;/g,'"').replace(/&#39;/g,"'").replace(/&amp;/g,"&").replace(/&lt;/g,"<").replace(/&gt;/g,">"); }

// ── INIT ────────────────────────────────────────────
(function init(){
  const t=localStorage.getItem("wd_theme")||"dark";
  document.documentElement.setAttribute("data-theme",t);
  document.getElementById("themeBtn").textContent=t==="light"?"[*]":"[~]";
  updateStats();
  renderGrid();
  updateContinue();
  showView("lessons");
})();


