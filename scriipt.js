// Start dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'/index.html\'">start</button>');
/* document.writeln('<div class="dropdown-content">');
document.writeln('<a href="https://yahoo.de">yahoo</a>');
document.writeln('</div>'); */
document.writeln('</div>');

// About me dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'/whoiam.html\'">about me</button>');
/*document.writeln('<div class="dropdown-content">');
document.writeln('<a href="https://google.de">google</a>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="https://yahoo.de">yahoo</a>');

document.writeln('</div>');
document.writeln('</div>');*/
document.writeln('</div>');

// med dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'/med/medicinestart.html\'">medicine</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="/med/sibo.html">sibo</a>');
document.writeln('<a href="/med/sibo-hit.html">hit</a>');

document.writeln('<a href="/med/stressandcortisol.html">stress</a>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="hypo.html">hypothyroidism</a>');
document.writeln('<div class="dropdown-content">');

document.writeln('<div class="dropdown-content">');
//document.writeln('<div class="dropdown-content">');
//document.writeln('<a href="microbiome.html">microbiome</a>');
//document.writeln('<div class="dropdown-content">');
//document.writeln('<a href="-">-</a>');
//document.writeln('<a href="greene.html">kirsten greene nd</a>');

//document.writeln('</div>');
//document.writeln('</div>');
document.writeln('</div>');
document.writeln('</div>');
document.writeln('</div>');

document.writeln('</div>');
document.writeln('</div>');

// Music dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'/music.html\'">music</button>');
/* document.writeln('<div class="dropdown-content">');
document.writeln('<a href="">freiburg</a>');
document.writeln('</div>'); */
document.writeln('</div>');

// sm dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'/mysocialmedia.html\'">my social media</button>');
document.writeln('<div class="dropdown-content">');
/* document.writeln('<a href="">none</a>');*/
document.writeln('</div>'); 
document.writeln('</div>');

// personal links dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'/personallinks.html\'">personal links</button>');
/*document.writeln('<div class="dropdown-content">');
document.writeln('<a href="">-</a>');
document.writeln('</div>');*/
document.writeln('</div>');

// baking dropdown
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'/kulinarik/einfuehrung.html\'">Brot backen</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="/kulinarik/brotbacken.html">Do´s & Dont´s</a>');
document.writeln('<a href="/kulinarik/brotbacku.html">brotbackzubehör</a>');
document.writeln('<a href="/kulinarik/brotrezepte1.html">Rezepte</a>');
document.writeln('<a href="/kulinarik/sweetbaking.html">Sweet baking</a>');
document.writeln('<a href="/xxxxx.html">magie des brotbackens</a>');
// document.writeln('(on baking bread...)');
document.writeln('</div>');
document.writeln('</div>');
// 
// log
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'/log.html\'">log</button>');
document.writeln('<div class="dropdown-content">');
document.writeln('<a href="aboutlog.html">about log</a>');
document.writeln('</div>');
document.writeln('</div>');

// grammatik
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'/sprache/grammatik.html\'">grammatik</button>');
/* document.writeln('<div class="dropdown-content">');
document.writeln('<a href="-">-</a>');
document.writeln('</div>'); */
document.writeln('</div>');

//blog
document.writeln('<div class="dropdown">');

document.writeln('<button class="dropbtn" onclick="location.href=\'/blogreal.html\'">blog</button>');
document.writeln('</div>');

//contact
document.writeln('<div class="dropdown">');
document.writeln('<button class="dropbtn" onclick="location.href=\'/contact.html\'">contact</button>');
document.writeln('</div>');


// Add this to a JS file or a <script> tag
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('commentForm');
  const input = document.getElementById('commentInput');
  const commentsDiv = document.getElementById('comments');

   // Load comments from localStorage
  let comments = JSON.parse(localStorage.getItem('comments')) || [];
  comments.forEach(function(comment) {
    const p = document.createElement('p');
    p.textContent = comment;
    commentsDiv.appendChild(p);
  });

  form.addEventListener('submit', function(e) {
    e.preventDefault();
    const comment = input.value.trim();
    if (comment) {
      comments.push(comment);
      localStorage.setItem('comments', JSON.stringify(comments));
      const p = document.createElement('p');
      p.textContent = comment;
      commentsDiv.appendChild(p);
      input.value = '';
    }
  });
});
