import React, { useState } from 'react';
import { X, ChevronLeft, ChevronRight, BookOpen, ShoppingBag, Eye, ExternalLink } from 'lucide-react';

interface PdfReaderModalProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenCheckout: () => void;
}

export const PdfReaderModal: React.FC<PdfReaderModalProps> = ({
  isOpen,
  onClose,
  onOpenCheckout,
}) => {
  const [currentPageIndex, setCurrentPageIndex] = useState(0);

  if (!isOpen) return null;

  const samplePages = [
    {
      pageNumber: 1,
      title: 'Cover & The Three Languages',
      badge: 'START FROM ZERO · NO EXPERIENCE NEEDED',
      content: (
        <div className="space-y-6">
          <div className="text-center space-y-3">
            <span className="inline-block px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-gradient-to-r from-amber-500 to-orange-500 text-slate-950">
              START FROM ZERO · NO EXPERIENCE NEEDED
            </span>
            <h2 className="text-3xl font-black text-white">HTML, CSS & JavaScript</h2>
            <h3 className="text-xl font-bold text-amber-300">The Complete Beginner's Guide</h3>
            <p className="text-sm text-slate-300 max-w-md mx-auto">
              Build real websites from scratch, explained like you're 13 and annotated like a professional.
            </p>
          </div>

          {/* Page 1 Code Box */}
          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-slate-300 space-y-2">
            <div className="text-slate-500">// one button, three languages</div>
            <div>&lt;style&gt; button &#123; background: tomato; color: white; &#125; &lt;/style&gt;</div>
            <div className="text-cyan-300">&lt;button id="hello"&gt;Click me&lt;/button&gt;</div>
            <div className="text-amber-300">
              &lt;script&gt; document.querySelector("#hello").onclick = () =&gt; alert("It works!"); &lt;/script&gt;
            </div>
          </div>

          {/* 4 Pillars */}
          <div className="grid grid-cols-4 gap-2 text-center text-xs">
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <div className="font-bold text-white">HTML</div>
              <div className="text-[11px] text-cyan-400">the skeleton</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <div className="font-bold text-white">CSS</div>
              <div className="text-[11px] text-indigo-400">the paint</div>
            </div>
            <div className="p-2.5 rounded-lg bg-slate-900 border border-slate-800">
              <div className="font-bold text-white">JavaScript</div>
              <div className="text-[11px] text-amber-400">the electricity</div>
            </div>
            <div className="p-2.5 rounded-lg bg-indigo-950/40 border border-indigo-500/40">
              <div className="font-bold text-white">Website</div>
              <div className="text-[11px] text-emerald-400">the house</div>
            </div>
          </div>
        </div>
      ),
    },
    {
      pageNumber: 2,
      title: 'Welcome, Future Web Developer',
      badge: 'PAGE 02 · CORE PHILOSOPHY',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300">
          <h3 className="text-xl font-bold text-white">Welcome, future web developer</h3>
          <p>
            Every website you have ever used is built from just three languages: <strong>HTML, CSS, and JavaScript</strong>. This guide teaches all three from absolute zero, one small idea at a time, and ends with three real projects you build yourself.
          </p>

          <div className="p-4 rounded-xl bg-emerald-950/20 border-l-4 border-emerald-500 text-emerald-200 space-y-1">
            <div className="font-mono font-bold uppercase tracking-wider text-xs">◆ THINK OF IT LIKE THIS</div>
            <p>
              A website is a house. HTML is the skeleton: walls, doors, rooms. CSS is the paint, furniture and floor plan: how it all looks and where things sit. JavaScript is the electricity and plumbing: the lights switch on, the doorbell rings, things happen.
            </p>
          </div>

          <p className="text-slate-400 text-xs">
            You do not need any experience. You do not need to install anything fancy: a computer, a browser and a free code editor are enough. Every idea arrives as an everyday picture first, then as code you can type and run in minutes.
          </p>

          <div className="pt-2 border-t border-slate-800 grid grid-cols-2 gap-2 text-xs">
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-indigo-300">
              ★ KEY IDEA: Big rules to remember
            </div>
            <div className="p-2 rounded bg-slate-900 border border-slate-800 text-rose-300">
              ⚠ WATCH OUT: Common traps
            </div>
          </div>
        </div>
      ),
    },
    {
      pageNumber: 6,
      title: 'Part 01: What happens when you open a website',
      badge: 'PAGE 06 · HOW THE WEB WORKS',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono text-cyan-400 uppercase">Part 01 · How The Web Works</span>
          </div>
          <h3 className="text-xl font-bold text-white">1. What happens when you open a website</h3>
          <p>
            When you type an address like <code className="text-cyan-300">www.example.com</code> and press Enter, a quick conversation happens between two computers:
          </p>

          <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2.5 font-mono text-xs">
            <div className="flex items-center gap-2 text-cyan-300">
              <span className="w-5 h-5 rounded-full bg-cyan-900 text-cyan-200 flex items-center justify-center font-bold">1</span>
              <span>YOU type a web address (a URL)</span>
            </div>
            <div className="flex items-center gap-2 text-indigo-300">
              <span className="w-5 h-5 rounded-full bg-indigo-900 text-indigo-200 flex items-center justify-center font-bold">2</span>
              <span>BROWSER asks the server: "please send me that page"</span>
            </div>
            <div className="flex items-center gap-2 text-amber-300">
              <span className="w-5 h-5 rounded-full bg-amber-900 text-amber-200 flex items-center justify-center font-bold">3</span>
              <span>SERVER answers with an HTML file</span>
            </div>
            <div className="flex items-center gap-2 text-emerald-300">
              <span className="w-5 h-5 rounded-full bg-emerald-900 text-emerald-200 flex items-center justify-center font-bold">4</span>
              <span>BROWSER reads HTML and requests style.css, script.js, images</span>
            </div>
            <div className="flex items-center gap-2 text-purple-300">
              <span className="w-5 h-5 rounded-full bg-purple-900 text-purple-200 flex items-center justify-center font-bold">5</span>
              <span>BROWSER puts it all together and paints the screen</span>
            </div>
          </div>

          <div className="p-3.5 rounded-xl bg-emerald-950/20 border-l-4 border-emerald-500 text-xs text-emerald-200">
            <strong>◆ THINK OF IT LIKE THIS:</strong> Ordering from a library. You hand a slip (request) to the librarian (server), and they bring back the book (response). Your browser is the reading desk!
          </div>
        </div>
      ),
    },
    {
      pageNumber: 9,
      title: 'Part 02: Your First HTML Page',
      badge: 'PAGE 09 · HTML SKELETON',
      content: (
        <div className="space-y-4 text-xs sm:text-sm text-slate-300">
          <h3 className="text-xl font-bold text-white">4. Your First HTML Page</h3>
          <p>
            Every HTML page starts from the same skeleton. Type this into <code className="text-cyan-300">index.html</code>:
          </p>

          <pre className="p-4 rounded-xl bg-[#080d17] border border-slate-800 font-mono text-xs text-cyan-300 overflow-x-auto leading-relaxed">
{`<!DOCTYPE html>
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
</html>`}
          </pre>

          <div className="space-y-1.5 text-xs text-slate-400">
            <div><strong className="text-white">1. &lt;!DOCTYPE html&gt;</strong> tells the browser "this is modern HTML".</div>
            <div><strong className="text-white">4. UTF-8</strong> ensures characters like emojis display correctly.</div>
            <div><strong className="text-white">5. Viewport meta</strong> makes the page fit phone screens properly.</div>
            <div><strong className="text-white">9. script defer</strong> means "wait until the page is read first".</div>
          </div>
        </div>
      ),
    },
  ];

  const currentPage = samplePages[currentPageIndex];

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md animate-in fade-in">
      <div className="relative w-full max-w-2xl rounded-3xl bg-[#0f172a] border border-slate-800 shadow-2xl overflow-hidden flex flex-col max-h-[90vh]">
        
        {/* Header */}
        <div className="px-6 py-4 bg-slate-900 border-b border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-cyan-400" />
            <div>
              <h3 className="text-sm font-bold text-white">Free Sample Reader</h3>
              <p className="text-[11px] text-slate-400 font-mono">
                Showing sample page {currentPage.pageNumber} of 76
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={onOpenCheckout}
              className="px-3 py-1.5 rounded-lg text-xs font-bold text-white bg-indigo-600 hover:bg-indigo-500 transition-colors flex items-center gap-1.5"
            >
              <ShoppingBag className="w-3.5 h-3.5" />
              <span>Get Full 76 Pages (2,500)</span>
            </button>
            <button
              onClick={onClose}
              className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-slate-800 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Page Content Body */}
        <div className="p-6 sm:p-8 overflow-y-auto flex-1 bg-gradient-to-b from-[#0f172a] to-[#0c121e]">
          {currentPage.content}
        </div>

        {/* Footer pagination */}
        <div className="px-6 py-4 bg-slate-900/90 border-t border-slate-800 flex items-center justify-between">
          <button
            disabled={currentPageIndex === 0}
            onClick={() => setCurrentPageIndex(currentPageIndex - 1)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            <ChevronLeft className="w-4 h-4" /> Previous
          </button>

          <span className="text-xs font-mono text-slate-400">
            Sample {currentPageIndex + 1} / {samplePages.length}
          </span>

          <button
            disabled={currentPageIndex === samplePages.length - 1}
            onClick={() => setCurrentPageIndex(currentPageIndex + 1)}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg text-xs font-semibold text-slate-300 hover:text-white bg-slate-800 disabled:opacity-40 disabled:pointer-events-none transition-colors"
          >
            Next <ChevronRight className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};
