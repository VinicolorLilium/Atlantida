$(document).ready(function() {
	//===================================================
	// адаптивное меню бургер
	$('.header__burger').click(function(event){
		$('.header__burger, .header__menu').toggleClass('active');
		$('body').toggleClass('block');
	});

	//===================================================
	// слайдер в блоке slogan
	$('.slider-block-01').slick({
		speed: 1000
	});
});