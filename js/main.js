// Carousel
const owl = $('.owl-carousel');

owl.owlCarousel({
	center: true,
	loop: true,
	margin: 20,
	startPosition: 0,
	items: 1,
	responsive: {
		540: {
			items: 1,
			startPosition: 1,
		},
		1200: {
			items: 3,
			margin: 30,
		},
	},
});

$(".slider__btn--next").click(function () {
  owl.trigger("next.owl.carousel");
});
$(".slider__btn--prev").click(function () {
  owl.trigger("prev.owl.carousel");
});

// Nav-icon

const navBtn = document.querySelector(".nav__toogle");
const menuIcon = document.querySelector(".menu-icon");
const nav = document.querySelector(".nav");

navBtn.onclick = function(){
  menuIcon.classList.toggle('menu-icon-active');
  nav.classList.toggle('nav__mobile')
  document.body.classList.toggle('no__sckroll')
}
