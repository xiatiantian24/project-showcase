import { imageConfig } from "astro:assets";

document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.nav-links').classList.toggle('expanded');
  }); //Example

// from codepen
  const img = document.querySelector('#follow') ;

  const height = img.offsetHeight;
  const width = img.offsetWidth;

$(document).mousemove(function(e) {
$("#follow").css({
  
  left: `${e.clientX - width/2}px`,
  top: `${e.clientY - height/2}px`
});
});
