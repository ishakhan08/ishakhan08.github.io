
//navigation


// welcome

function splitWords() {
  let quote = document.querySelector("blockquote q");
  quote.innerText.replace(/(<([^>]+)>)/ig,"");
  quotewords = quote.innerText.split(" "),
  wordCount = quotewords.length;
  quote.innerHTML = "";
  for (let i=0; i < wordCount; i++) {
    quote.innerHTML += "<span>"+quotewords[i]+"</span>";
    if (i < quotewords.length - 1) {
      quote.innerHTML += " ";
    }
  }
  quotewords = document.querySelectorAll("blockquote q span");
  fadeWords(quotewords);
}

function getRandom(min, max) {
  return Math.random() * (max - min) + min;
}

function fadeWords(quotewords) {
  Array.prototype.forEach.call(quotewords, function(word) {
    let animate = word.animate([{
      opacity: 0,
      filter: "blur("+getRandom(2,5)+"px)"
    }, {
      opacity: 1,
      filter: "blur(0px)"
    }], 
    { 
      duration: 1000,
      delay: getRandom(500,3300),
      fill: 'forwards'
    } 
   )
  })
}


splitWords();

// home
$(".hover").mouseleave(
    function() {
      $(this).removeClass("hover");
    }
  );

//   front
let mainNavLinks = document.querySelectorAll("nav ul li a");
let mainSections = document.querySelectorAll("main section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
  let fromTop = window.scrollY;

  mainNavLinks.forEach(link => {
    let section = document.querySelector(link.hash);

    if (
      section.offsetTop <= fromTop &&
      section.offsetTop + section.offsetHeight > fromTop
    ) {
      link.classList.add("current");
    } else {
      link.classList.remove("current");
    }
  });
});

// skills
$(function() {
    $('.banner').unslider({
      //  Enable keyboard arrows
      keys: true,               
            // Enable dot nav
      dots: true,
      delay: 7000
    });
});

// scroll
$(function() {
  $('a[href*=#]').on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ scrollTop: $($(this).attr('href')).offset().top}, 500, 'linear');
  });
});

// change color on scrolling of navbar

