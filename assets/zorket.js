$('#AddToCart').hover(function(e) { 
	$('#AddToCart').css('border', e.type === 'mouseenter' ? '2px solid #4C9DA5' : '2px solid #39757b');
	$('#AddToCartText').css('color', e.type === 'mouseenter' ? '#4C9DA5' : '#39757b');
});

window.setInterval(function(){
 	$('meta[name="viewport"]').attr('content', 'width=device-width, maximum-scale=2.0, user-scalable=1');
}, 500);



$('.grid-product__wrapper').mouseover(function() {
	$(this).find('.grid-product__title').css('color', '#39757b');
});
$('.grid-product__wrapper').mouseout(function() {
	$(this).find('.grid-product__title').css('color', '#777');
});


//////////////////////////
/////////////////////////
jQuery(document).ready(function($){
//////////////////////
	
	
	

console.log('DOM ready');

$('.home-color-tooltip').tooltipster({
   animation: 'grow',
   delay: 0
});

//For mobile menu
$('.mobile-nav__has-sublist:first').css('border-top', 'none');

//Remove Women's from the begining of the title
$( ".grid-product__title" ).each(function() {
  var newText = $(this).text().replace("Women's ", '');
	$(this).text(newText);
});

//Featured Collections flip
$('.collection-collage__item').flip();

setInterval(function() {
	let min = 0;
	let max = $('.collection-collage__item').length;
	rand = Math.floor(Math.random() * (max - min)) + min;
	$('.collection-collage__item').eq(rand).flip('toggle');
}, 5000);


waitForEl('fieldset[name~="Size"]', function() {
	$('.size-name-span').insertBefore($('fieldset[name~="Size"]').last());
	$('.guide-link').insertBefore($('fieldset[name~="Size"]').last());
	$('.guide-link').css('display', 'block');
});

// console.log($('.guide-link'));
// console.log($('single-option-radio__label'));

fotorama.onmouseenter=function() {
	$('.fotorama__fullscreen-icon').show();
	$('.fotorama__arr').show();
};

$( "select option:selected" ).each(function() {
     console.log('SELECT');
	 $( this ).css( "border-color", "#39757b" );
	 console.log($(this));
});

$('.product-single__description ').find('img').each(function() {
	$(this).appendTo('.chartwrap');
});

$('.product-single__description').find("span[style='color: #ff0000;']").each(function() {
	$(this).css('color', '#555');
	$(this).prepend('<br>');
	$(this).appendTo('#sizenote');
});

//$('.spr-header-title').hide();


// setTimeout(function() {
// 	$('.in_wl').appendTo('.wishlist-pro-container > ul');
// 	$('.wishlist-pro-container > ul > li').not('.in_wl').hide();
// }, 1000);

$('.product-single__description *').removeAttr('style');

var s1, s2;

if($('.product-single__description').html()) {
	t = $('.product-single__description').html();
	s1 = t.match(">(.*)SKU");
	s2 = t.match("SKU(.*)<");
	if(s1 && s2) {
		rem = s1[1] + 'SKU' + s2[1];
		//newt = t.replace(rem, '<strong>Product ID:&nbsp;</strong>' + prod.id);
		newt = t.replace(rem, '');
		$('.product-single__description').html(newt);	
	}
	else {
		newt = t + '<strong>Item&nbsp;#:&nbsp;</strong>' + prod.id;
		//$('.product-single__description').html(newt);
	}
	$('.id-top').html('<strong>Item&nbsp;#&nbsp;</strong><span class="prod-id-top">' + prod.id + '</span>');
}

$('.product-single__description').find("p").each(function() {
    var $this = $(this);
	//$this.removeAttr('style');
    if($this.html().replace(/\s|&nbsp;/g, '').length == 0)
        $this.remove();
});
$('.product-single__description').appendTo('.descrwrap');
$('.product-single__description').show();

$('#shopify-product-reviews').appendTo('.reviewswrap');
$('#shopify-product-reviews').show();
$('.chartwrap').show();
$('.sizenote').show();
$('#product-buttons').show();
$('.site-footer').css('display', 'block');
$('.site-footer').show();


$(".stars-top").html($('.spr-summary-starrating').html());
var reviewsCount = $('.spr-summary-starrating > meta[itemprop="reviewCount"]').attr('content');
if (reviewsCount) {
	if (reviewsCount > 1)
		htmlToAppend = '<span class="reviews-count">' + reviewsCount + '&nbsp;reviews</span>';
	else
		htmlToAppend = '<span class="reviews-count">' + reviewsCount + '&nbsp;review</span>';
	$(".stars-top").append(htmlToAppend);
	$("a[data-tab-id=reviews]").append(' (' + reviewsCount + ')');
}

_('OLD TYPE REVIEWS: ' + reviewsCount);

if(!reviewsCount) {
	waitForEl('script[type="application/ld+json"]', function() {
		_('NEW REVIEWS TYPE: YES');
		let jsonld = JSON.parse(document.querySelector('script[type="application/ld+json"]').innerText);
		let rwCount = jsonld.reviewCount;
		_('REVIEWS: ' + rwCount);
		if (rwCount) {
			if (rwCount > 1)
				rwToAppend = '<span class="reviews-count">' + rwCount + '&nbsp;reviews</span>';
			else
				rwToAppend = '<span class="reviews-count">' + rwCount + '&nbsp;review</span>';
			$(".stars-top").append(rwToAppend);
			$("a[data-tab-id=reviews]").append(' (' + rwCount + ')');
		}
	});
}


//$('.chartwrap > img').attr('id', 'imagelightbox'); // style="border: 0;"
var imgsrc = $('.chartwrap > img').attr('src');
$.ajax({
    url: imgsrc,
    type:'HEAD',
    error: function(){
            console.log('Image does not exist !!'); //do something depressing
    },
    success: function(){
            console.log('Image exists !!'); //do something cheerful :)
						$('.chartwrap').attr('href', $('.chartwrap > img').attr('src'));
						$('.chartwrap > img').attr('style', 'border:0');
    }
});


if($(document).width() <= 590) {
	$('.chartwrap').click( function(event) { event.preventDefault(); } );
	$('.chartwrap').css('cursor', 'default');
}
else {
	$('.chartwrap').magnificPopup({
		type: 'image',
		closeOnContentClick: true,
		closeBtnInside: false,
		image: {
			verticalFit: false
		}
	});
}


//Product description make-up
var originalDescription = $('.product-single__description').html();
var niceDescription = nicifyDescription(originalDescription);
$('.descrwrap').html(
	'<div class="product-single__description rte" itemprop="description" style="display: block;">' +
	niceDescription +
	'</div>');


$('.home-featured').find('a').each(function() {
	$(this).attr('href', '/collections/featured' + $(this).attr('href'));
});


//////////////////////end ready()
});//////////////////////////////


if($( window ).width() < 768) {
	$('.collection_title').removeAttr('style');
}

// if($( window ).width() > 590) {
// 	$('.pr-image-wrap').imagefill(250);
// };
//
// $( window ).resize(function() {
// 	if($( window ).width() > 590) {
// 		$('.pr-image-wrap').imagefill(250);
// 	};
// });


$('.freeship').bind('click', function(event){
   if(event.altKey) {
	   window.open('https://purcharest.myshopify.com/admin/products/'+meta['product']['id'], "_blank");
   }
});

var startTouchCount = 0;
var clearTouchCount = setInterval(function() {
	startTouchCount = 0;
}, 10000);

$('.freeship').bind('touchstart', function(event) {
	startTouchCount = startTouchCount + 1;
	if (startTouchCount >= 5)  {
		startTouchCount = 0;
		window.open('https://purcharest.myshopify.com/admin/products/'+meta['product']['id'], "_self");
	}
});

$('.product-bottom').bind('click', function(event){
   if(event.altKey) {
		 event.preventDefault();
		 let adminLink = $(this).find('.admin-link').attr('href');
	   //console.log(adminLink);
		 window.open(adminLink, "_blank");
   }
});


$('.hero__image').bind('click', function(event){
    if($('body').hasClass('js-drawer-open')) {
			event.preventDefault();
			event.stopImmediatePropagation();
			$('#IconHamburger').click();
    }
});

// $('div.mobile-nav__has-sublist > a').each(function() {
// 	$(this).bind('click', function(event) {
// 		console.log("sublist click");
// 	});
// });

// $(document).on('click', '.mobile-nav--expanded', function () {
// 	if( $(this).hasClass('mobile-nav--expanded') )
// 		_('HAS');
// 	//$(this).removeClass('mobile-nav--expanded')
// 	console.log("sublist click");
// });


// $('.is-moved-by-drawer').bind('click', function(event){
//    event.preventDefault();
// 	 console.log("click");
// });


