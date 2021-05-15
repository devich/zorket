var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = decodeURIComponent(window.location.search.substring(1)),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : sParameterName[1];
        }
    }
};

if(getUrlParameter('msg')) {
	var value = 'Question about product #' + getUrlParameter('id') + '\n' + 'https://zorket.com/products/' + getUrlParameter('handle') + '\n' + getUrlParameter('msg') + '\n';
	$('textarea#ContactFormMessage').val(value);	
}

if(getUrlParameter('cryptoerr')) {
	var value = 'Error recieving cryptocurrency exchange rates' + '\n';
	$('textarea#ContactFormMessage').val(value);	
}