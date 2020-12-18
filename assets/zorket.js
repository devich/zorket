$('#AddToCart').hover(function(e) { 
	$('#AddToCart').css('border', e.type === 'mouseenter' ? '2px solid #4C9DA5' : '2px solid #39757b');
	$('#AddToCartText').css('color', e.type === 'mouseenter' ? '#4C9DA5' : '#39757b');
});

window.setInterval(function(){
 	$('meta[name="viewport"]').attr('content', 'width=device-width, maximum-scale=2.0, user-scalable=1');
}, 500);

//////////////////////////
/////////////////////////
jQuery(document).ready(function($){
//////////////////////

console.log('DOM ready');

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
		newt = t.replace(rem, '<strong>Product ID:&nbsp;</strong>' + prod.id);
		$('.product-single__description').html(newt);	
	}
	else {
		newt = t + '<strong>Product ID:&nbsp;</strong>' + prod.id;
		$('.product-single__description').html(newt);
	}
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

$("a[data-tab-id=reviews]").html($('.spr-summary-starrating').html());

//$('.chartwrap > img').attr('id', 'imagelightbox'); // style="border: 0;"
$('.chartwrap').attr('href', $('.chartwrap > img').attr('src'));
$('.chartwrap > img').attr('style', 'border:0');

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

$('.grid-product__wrapper').mouseover(function() {
	$(this).find( 'a.grid-product__meta' ).css( "color", "#39757b" );
});
$('.grid-product__wrapper').mouseout(function() {
	$(this).find( 'a.grid-product__meta' ).css( "color", "#777" );
});


// console.log($('#paypal-express-button').html());
// $('#paypal-express-button').html('Checkout with PayPal');
// $('#paypal-express-button').mouseover(function() {
// 	$(this).css( "background-color", "#609095 !important" );
// });
// $('#paypal-express-button').mouseout(function() {
// 	$(this).css( "background-color", "#39757b !important" );
// });




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
	   window.open('https://purcharest.myshopify.com/admin/products/'+meta['product']['id'], "_self");
   }
});

$('div.mobile-nav__has-sublist > a').each(function() {
	$(this).bind('click', function(event) {
		console.log("sublist click");
	});
});

$(document).on('click', 'div.mobile-nav__has-sublist > a', function () {
    // your function here
	console.log("sublist click");
});



























