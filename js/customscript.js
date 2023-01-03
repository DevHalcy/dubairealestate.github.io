'use strict';
const cYear = new Date().getFullYear();
document.getElementById('currentYear').textContent = cYear;
const stickyOuter = document.querySelector('.stickyOuter');

/* const stickyOuter = document.getElementById('stickyContent');
const mainSticky = stickyOuter.offsetTop;
console.log(mainSticky);

function myFunction() {
  if (window.scrollY >= mainSticky) {
    stickyOuter.classList.remove('hidden');
  } else {
    stickyOuter.classList.add('hidden');
  }
} */

$(window).scroll(function () {
  if ($(this).scrollTop() > 500) {
    $('#goTop,.desk_btn').fadeIn();
  } else {
    $('#goTop,.desk_btn').fadeOut();
  }

  if ($(this).scrollTop() >= 750) {
    $(stickyOuter).fadeIn(1);
  } else {
    $(stickyOuter).fadeOut(1);
  }
});
$('#goTop').click(function () {
  $('html, body').animate(
    {
      scrollTop: 0,
    },
    300
  );
  return false;
});

// Phone Number Mask
const topShow = document.querySelector('.top__show');
const topNumber = document.querySelector('.top__number').textContent;

let topSliceNumber = topNumber.slice(-3).padStart(topNumber.length - 7, 'XX-X');
document.querySelector('.top__number').textContent = topSliceNumber;
topShow.addEventListener('click', function () {
  document.querySelector('.top__number').textContent = topNumber;
//   this.style.display = 'none';
  document.querySelector('.show__text').remove();
});
// Phone Number Mask
