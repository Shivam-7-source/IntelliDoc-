document.write(`

<link rel="stylesheet"
href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.0/css/all.min.css">

<div class="navbar" id="navbar">

<div class="logo">
<i class="fa-solid fa-file-pdf"></i> IntelliDocs
</div>

<div class="nav-links">

<a href="../index.html">
<i class="fa-solid fa-house"></i> Home
</a>

<a href="merge.html">
<i class="fa-solid fa-object-group"></i> Merge
</a>

<a href="split.html">
<i class="fa-solid fa-scissors"></i> Split
</a>

<a href="convert.html">
<i class="fa-solid fa-right-left"></i> Convert
</a>

<a href="compress.html">
<i class="fa-solid fa-compress"></i> Compress
</a>

<a href="rotate.html">
<i class="fa-solid fa-rotate-right"></i> Rotate
</a>

<a href="secure.html">
<i class="fa-solid fa-lock"></i> Secure
</a>

<a href="ai-generator.html">
<i class="fa-solid fa-wand-magic-sparkles"></i> AI
</a>

<a href="summarizer.html">
<i class="fa-solid fa-robot"></i> Summarize
</a>

<a href="paraphrase.html">
<i class="fa-solid fa-pen-nib"></i> Paraphrase
</a>

<a href="share.html">
<i class="fa-solid fa-share-nodes"></i> Share
</a>

<button onclick="toggleTheme()" class="theme-btn" title="Toggle Theme">
<i class="fa-solid fa-moon"></i>
</button>

</div>

</div>
`);
// Add page-specific color class to navbar
document.addEventListener('DOMContentLoaded', function() {
  const currentPage = window.location.pathname.split('/').pop() || 'index.html';
  const navbar = document.getElementById('navbar');
  
  const pageClassMap = {
    'index.html': 'home',
    'merge.html': 'merge',
    'split.html': 'split',
    'convert.html': 'convert',
    'compress.html': 'compress',
    'rotate.html': 'rotate',
    'secure.html': 'secure',
    'ai-generator.html': 'ai',
    'summarizer.html': 'summarize',
    'paraphrase.html': 'paraphrase',
    'share.html': 'share'
  };
  
  const pageClass = pageClassMap[currentPage] || 'home';
  if (navbar) navbar.classList.add(pageClass);
});