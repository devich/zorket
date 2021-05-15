_('crypto-chekout.js loaded');

var usdprice = cartTotal / 100;
_(usdprice);
$.ajaxSettings.async = false;
// $.ajaxSettings.crossDomain = true;
isCryptoError = false;

discount = 0; //discount in %

$.getJSON('https://data.messari.io/api/v1/assets/ethereum/metrics', function (apiResponce) {
  ethPrice = apiResponce['data']['market_data']['price_usd'];
  ethTotal = usdprice / ethPrice;
  ethTotal = ethTotal - (ethTotal / 100 * discount); //discount
  $('#ethprice').text(ethTotal.toFixed(5));
})
.fail(function() { console.log( "ETH Error" ); isCryptoError = true; callCryptoError(); });

$.getJSON('https://data.messari.io/api/v1/assets/bitcoin/metrics', function (apiResponce) {
  btcPrice = apiResponce['data']['market_data']['price_usd'];
  btcTotal = usdprice / btcPrice;
  btcTotal = btcTotal - (btcTotal / 100 * discount); //discount
  $('#btcprice').text(btcTotal.toFixed(5));
})
.fail(function() { console.log( "BTC Error" ); isCryptoError = true; callCryptoError(); });

$.getJSON('https://data.messari.io/api/v1/assets/dash/metrics', function (apiResponce) {
  dashPrice = apiResponce['data']['market_data']['price_usd'];
  dashTotal = usdprice / dashPrice;
  dashTotal = dashTotal - (dashTotal / 100 * discount); //discount
  $('#dashprice').text(dashTotal.toFixed(5));
})
.fail(function() { console.log( "DASH Error" ); isCryptoError = true; callCryptoError(); });

$.getJSON('https://data.messari.io/api/v1/assets/litecoin/metrics', function (apiResponce) {
  ltcPrice = apiResponce['data']['market_data']['price_usd'];
  ltcTotal = usdprice / ltcPrice;
  ltcTotal = ltcTotal - (ltcTotal / 100 * discount); //discount
  $('#ltcprice').text(ltcTotal.toFixed(5));
})
.fail(function() { console.log( "LTC Error" ); isCryptoError = true; callCryptoError(); });

$.getJSON('https://data.messari.io/api/v1/assets/xrp/metrics', function (apiResponce) {
  xrpPrice = apiResponce['data']['market_data']['price_usd'];
  xrpTotal = usdprice / xrpPrice;
  xrpTotal = xrpTotal - (xrpTotal / 100 * discount); //discount
  $('#xrpprice').text(xrpTotal.toFixed(5));
})
.fail(function() { console.log( "XRP Error" ); isCryptoError = true; callCryptoError(); });


//show crypto selector & prices
if(isCryptoError == false) {
  $('.cr-sel-wrap').show();
  $('.crypto-prices').show();
}



$(".crypto-select-eth").click(function() {
  $(".crypto-block").hide();
  $("#crypto-block-eth").show();
  $("#crypto-shipping").show();
  $('#ethprice').text(ethTotal.toFixed(5));
  $('#ethprice2').text(ethTotal.toFixed(5));
  $('#ContactFormCryptoPrice').val('ETH ' + ethTotal + '; ' + 'ETH/USD: ' + ethPrice);
  $('.crypto-price').removeClass('cr-current');
  $('.crypto-price.eth').addClass('cr-current');
});

$(".crypto-select-btc").click(function() {
  $(".crypto-block").hide();
  $("#crypto-block-btc").show();
  $("#crypto-shipping").show();
  $('#btcprice').text(btcTotal.toFixed(5));
  $('#btcprice2').text(btcTotal.toFixed(5));
  $('#ContactFormCryptoPrice').val('BTC ' + btcTotal + '; ' + 'BTC/USD: ' + btcPrice);
  $('.crypto-price').removeClass('cr-current');
  $('.crypto-price.btc').addClass('cr-current');
});

$(".crypto-select-dash").click(function() {
  $(".crypto-block").hide();
  $("#crypto-block-dash").show();
  $("#crypto-shipping").show();
  $('#dashprice').text(dashTotal.toFixed(5));
  $('#dashprice2').text(dashTotal.toFixed(5));
  $('#ContactFormCryptoPrice').val('DASH ' + dashTotal + '; ' + 'DASH/USD: ' + dashPrice);
  $('.crypto-price').removeClass('cr-current');
  $('.crypto-price.dash').addClass('cr-current');
});

$(".crypto-select-ltc").click(function() {
  $(".crypto-block").hide();
  $("#crypto-block-ltc").show();
  $("#crypto-shipping").show();
  $('#ltcprice').text(ltcTotal.toFixed(5));
  $('#ltcprice2').text(ltcTotal.toFixed(5));
  $('#ContactFormCryptoPrice').val('LTC ' + ltcTotal + '; ' + 'LTC/USD: ' + ltcPrice);
  $('.crypto-price').removeClass('cr-current');
  $('.crypto-price.ltc').addClass('cr-current');
});

$(".crypto-select-xrp").click(function() {
  $(".crypto-block").hide();
  $("#crypto-block-xrp").show();
  $("#crypto-shipping").show();
  $('#xrpprice').text(xrpTotal.toFixed(5));
  $('#xrpprice2').text(xrpTotal.toFixed(5));
  $('#ContactFormCryptoPrice').val('XRP ' + xrpTotal + '; ' + 'XRP/USD: ' + xrpPrice);
  $('.crypto-price').removeClass('cr-current');
  $('.crypto-price.xrp').addClass('cr-current');
});


function callCryptoError() {
  $('.cr-sel-wrap').hide();
	$('.cr-sel-wrap').css("display", "none");
  $('.crypto-prices').hide();
	$('.crypto-prices').css("display", "none");
  $('.crypto-form-error').show();
}

// window.setInterval(function(){
//     //code goes here that will be run every 5 seconds
// 	$.getJSON('https://api.coinmarketcap.com/v1/ticker/ethereum/', function (data) {
// 		console.log(data[0]['price_usd']);
// 		usdprice = {{ cart.total_price }} / 100;
// 		ethPrice = data[0]['price_usd'];
// 		ethTotal = usdprice / ethPrice;
// 		console.log(usdprice);
// 		console.log(ethPrice);
// 		console.log(ethTotal);
// 		$('#eth_price').text(ethTotal.toFixed(5));
//     });
// }, 60000);