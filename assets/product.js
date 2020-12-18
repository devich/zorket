//ajax add-to-cart for two-button product page
console.log("product.js loaded")

function commaSeparateNumber(val) {
    while (/(\d+)(\d{3})/.test(val.toString())) {
      val = val.toString().replace(/(\d+)(\d{3})/, '$1'+','+'$2');
    }
    return val;
}

function enableButton() {
	$('.cart-total').show();
	$(document).on('cart.requestComplete', function(event, cart) {
		$('#AddToCartText').text("Added to cart");
		$('#AddToCartText').css('color', '#667');
		setTimeout(function() {
			$('cart-link__bubble').attr('display', 'block');
			$('cart-link__bubble').addClass('cart-link__bubble--visible');
			$('#AddToCart').removeAttr('disabled');
			$('#AddToCart').css('border', '2px solid #39757b');
			$('#AddToCartText').text("Add to cart");
			$('#AddToCartText').css('color', '#39757b');
			$('.cart-total').text('$' + commaSeparateNumber(cart.total_price/100));
		}, 2000);
	});
}


function flyToElement(flyer, flyingTo) {
    var $func = $(this);
    var divider = 15;
    var flyerClone = $(flyer).clone();
    $(flyerClone).css({position: 'absolute', top: $(flyer).offset().top + "px", left: $(flyer).offset().left + "px", opacity: 1, 'z-index': 1000});
    $('body').append($(flyerClone));
    var gotoX = $(flyingTo).offset().left + ($(flyingTo).width() / 2) - ($(flyer).width()/divider)/2;
    var gotoY = $(flyingTo).offset().top + ($(flyingTo).height() / 2) - ($(flyer).height()/divider)/2;
	 
    $(flyerClone).animate({
        opacity: 0.5,
        left: gotoX - 16,
        top: gotoY + 9,
        width: $(flyer).width()/divider,
        height: $(flyer).height()/divider
    }, 500,
    function () {
        $(flyingTo).fadeOut('fast', function () {
            $(flyingTo).fadeIn('fast', function () {
                $(flyerClone).fadeOut(100, function () {
                    $(flyerClone).remove();
                });
            });
        });
    });
	
	enableButton();
}


$('#AddToCart').click(function() {
	$('#AddToCart').css('border', '2px solid #ddd');
	$('#AddToCartText').css('color', '#ddd');
	setTimeout(function(){
		$('#AddToCart').attr('disabled', true);
	}, 50);
	var itemImg = $('.fotorama__active').find('img').eq(0);
	if($('.cart-link-mob').is(':visible'))
		flyToElement(itemImg, $('.cart-link-mob'));
	else
		flyToElement(itemImg, $('.cart-link'));
});


$('#BuyNow').click(function() {
	inCart = false;
	for(i = 0; i < CartJS.cart.items.length; i++) {
		if(prod.id == CartJS.cart.items[i].product_id) {
			inCart = true;
			break;
		}
	}
	if(inCart)
		window.location.assign('/cart');
	else {
		$('#AddToCartForm').submit();
		$(document).on('cart.requestComplete', function(event, cart) {
			window.location.assign('/cart');
		});
	}
});