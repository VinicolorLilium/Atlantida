$(document).ready(function() {
	//===================================================
	// адаптивное меню бургер
	$('.header__burger').click(function(event){
		$('.header__burger, .header__list').toggleClass('active');
		$('body').toggleClass('block');
	});

	//===================================================
	// слайдер в блоке slogan
	$('.home-slogan__slider').slick({
		speed: 800
	});

	//===================================================
	// филтр работ в блоке portfolio
	$('.home-portfolio__grid').isotope({
		itemSelector: '.home-portfolio__item',
		percentPosition: true,
		masonry: {
		    // use element for option
		    columnWidth: '.home-portfolio__item',
		    horizontalOrder: true
		}
	});

	//===================================================
	//фильтр при нажатии кнопки
	$('.masonry-filter__btn button').click(function(){
		$('.masonry-filter__btn button').removeClass('active');
		$(this).addClass('active');
		var selector = $(this).attr("data-filter");
		$('.home-portfolio__grid').isotope({
			filter: selector
		});
		return false;
	});

	//===================================================
	// слайдер в блоке testimonials
	$('.home-testimonials__slider').slick({
		arrows: false,
		dots: true,
	});

	//===================================================
	//очистка полей input при фокусе
	$('input,textarea').focus(function(){
       $(this).data('value',$(this).attr('value'))
       $(this).attr('value','');
    });
    $('input,textarea').blur(function(){
       $(this).attr('value',$(this).data('value'));
    });
    //===================================================
    //плавная прокрутка до якоря
	$("a[href^='#']").click(function(){
		var _href = $(this).attr("href");
		$("html, body").animate({scrollTop: $(_href).offset().top+"px"});
		return false;
	});
	$('.blog-page-posts__body').isotope({
		itemSelector: '.blog-page-posts__column',
		percentPosition: true,
		masonry: {
		    // use element for option
		    columnWidth: '.blog-page-posts__column',
		    horizontalOrder: true
		}
	});
});

//===================================================
// яндекс карта
ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [55.751574, 37.573856],
            zoom: 15,
            controls: ['zoomControl'],
            behaviors: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark(myMap.getCenter(), {
            hintContent: 'Atlantida',
            balloonContent: 'Это красивая метка'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: '../img/home-map/loc-icon.png',
            // Размеры метки.
            iconImageSize: [67, 72],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-35, -72]
        });

    myMap.geoObjects
        .add(myPlacemark)
        .add(myPlacemarkWithContent);

});