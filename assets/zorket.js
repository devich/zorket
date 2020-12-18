
$('#AddToCart').hover(function(e) { 
	$('#AddToCart').css('border', e.type === 'mouseenter' ? '2px solid #4C9DA5' : '2px solid #39757b');
	$('#AddToCartText').css('color', e.type === 'mouseenter' ? '#4C9DA5' : '#39757b');
});



//////////////////////////
/////////////////////////
jQuery(document).ready(function($){
//////////////////////

console.log('DOM ready');

$( "select option:selected" ).each(function() {
     console.log('SELECT');
	 $( this ).css( "border-color", "#39757b" );
	 console.log($(this));
});

$('.product-single__description ').find('img').each(function() {
	$(this).appendTo('.chartwrap');
});

//$('.spr-header-title').hide();

$('.product-single__description').appendTo('.descrwrap');
$('.product-single__description').show();

$('#shopify-product-reviews').appendTo('.reviewswrap');
$('#shopify-product-reviews').show();


$('#reviews-head').text('No Reviews Yet');
$('#reviews-head').html($('.spr-summary-starrating').html());


$(".prodacc").smk_Accordion({
	showIcon: false, // Show the expand/collapse icons.
	animation: true, // Expand/collapse sections with slide aniamtion.
	closeAble: true, // Closeable section.
	slideSpeed: 200 // the speed of slide animation.
});

$('.acc_head').mouseover(function() {
	$(this).css( "color", "#609095" );
});
$('.acc_head').mouseout(function() {
	$(this).css( "color", "#39757b" );
});

$('.grid-product__wrapper').mouseover(function() {
	$(this).find( 'a.grid-product__meta' ).css( "color", "#39757b" );
});
$('.grid-product__wrapper').mouseout(function() {
	$(this).find( 'a.grid-product__meta' ).css( "color", "#777" );
});

$('#paypal-express-button').html('Checkout with PayPal');
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


if($( window ).width() > 590) {
	$('.pr-image-wrap').imagefill();
};


if($( window ).width() > 768) {
	$('.site-header').addClass('is-light');
};


$( window ).resize(function() {
	if($( window ).width() > 590) {
		$('.pr-image-wrap').imagefill();
	};
	if($( window ).width() > 768)
		$('.site-header').addClass('is-light');
	else
		$('.site-header').removeClass('is-light');
});


$('#shipprice').bind('click', function(event){
   if(event.altKey) {
	   window.open('https://purcharest.myshopify.com/admin/products/'+meta['product']['id'], "_self");
   }
});






























