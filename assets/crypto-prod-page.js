//Crypto prices updates for Product Page

// var discount = 10; //discount in %
// 	usdprice = {{ current_variant.price }} / 100;
// 	$.ajaxSettings.async = false;
//
// 	$.getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/', function (data) {
// 		ethPrice = data[0]['price_usd'];
// 		ethTotal = usdprice / ethPrice;
// 		ethTotal = ethTotal - (ethTotal / 100 * discount); //discount
//     });
//
// 	$.getJSON('https://api.coinmarketcap.com/v1/ticker/bitcoin/', function (data) {
// 		btcPrice = data[0]['price_usd'];
// 		btcTotal = usdprice / btcPrice;
// 		btcTotal = btcTotal - (btcTotal / 100 * discount); //discount
//     });
//
// 	$.getJSON('https://api.coinmarketcap.com/v1/ticker/dash/', function (data) {
// 		dashPrice = data[0]['price_usd'];
// 		dashTotal = usdprice / dashPrice;
// 		dashTotal = dashTotal - (dashTotal / 100 * discount); //discount
//     });
//
// 	$.getJSON('https://api.coinmarketcap.com/v1/ticker/litecoin/', function (data) {
// 		ltcPrice = data[0]['price_usd'];
// 		ltcTotal = usdprice / ltcPrice;
// 		ltcTotal = ltcTotal - (ltcTotal / 100 * discount); //discount
//     });
//
// 	$.getJSON('https://api.coinmarketcap.com/v1/ticker/ripple/', function (data) {
// 		xrpPrice = data[0]['price_usd'];
// 		xrpTotal = usdprice / xrpPrice;
// 		xrpTotal = xrpTotal - (xrpTotal / 100 * discount); //discount
//     });
//
// 	$.ajaxSettings.async = true;
//
//
// 	$('.prod-cr-price-eth').text(ethTotal.toFixed(3));
// 	$('.prod-cr-price-btc').text(btcTotal.toFixed(3));
// 	$('.prod-cr-price-dash').text(dashTotal.toFixed(3));
// 	$('.prod-cr-price-ltc').text(ltcTotal.toFixed(3));
// 	$('.prod-cr-price-xrp').text(xrpTotal.toFixed(2));