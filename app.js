// date
const date = document.getElementById('date');
date.innerHTML = new Date().getFullYear();

// close Links
const navToggle = document.querySelector('.nav-toggle');
const linkContainer = document.querySelector('.link-container');
const links = document.querySelector('.links');

navToggle.addEventListener('click', function () {
  const containerHeight = linkContainer.getBoundingClientRect().height;
  const linkHeight = links.getBoundingClientRect().height;

  if (containerHeight === 0) {
    linkContainer.style.height = `${linkHeight}px`;
  } else {
    linkContainer.style.height = 0;
  }
});


// fixed nuv bar
const navbar = document.getElementById('nav');
const topLink = document.querySelector('.top-link');

window.addEventListener('scroll', function () {
  const scrollHeight = window.pageYOffset;
  const navHeight = navbar.getBoundingClientRect().height;
  if (scrollHeight > navHeight) {
    navbar.classList.add('fixed-nav');
  } else {
    navbar.classList.remove('fixed-nav');
  }
//toplink
  if (scrollHeight > 500) {
    topLink.classList.add('show-link');
  } else {
    topLink.classList.remove('show-link');
  }
});

// smooth scroll
const scrollLinks = document.querySelectorAll('.scroll-link');

scrollLinks.forEach(function (link){
  link.addEventListener('click', function(e){
    e.preventDefault();
    const id = e.currentTarget.getAttribute('href').slice(1);
    const element = document.getElementById(id);

// calculate the height
const navHeight = navbar.getBoundingClientRect().height;
const containerHeight = linkContainer.getBoundingClientRect().height;
const fixedNav = navbar.classList.contains("fixed-nav");    
let position = element.offsetTop - navHeight;

if(!fixedNav){
  position = position - navHeight;
}
if(navHeight > 80){
  position = position + containerHeight;
}


window.scrollTo({
    left:0,
    top:position,
  });
  linkContainer.style.height = 0;
  });
});