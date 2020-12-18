// _() instead of console.log()
const _ = console.log.bind(console);

// Usage:
// var obj = {a: 1, b: 2, c: 3, d: 4, jquery: 'noob'}
// alert($.keys(obj));    // a,b,c,d,jquery
$.extend({
    keys:    function(obj){
        var a = [];
        $.each(obj, function(k){ a.push(k) });
        return a;
    }
})

var getUrlParameter = function getUrlParameter(sParam) {
    var sPageURL = window.location.search.substring(1),
        sURLVariables = sPageURL.split('&'),
        sParameterName,
        i;

    for (i = 0; i < sURLVariables.length; i++) {
        sParameterName = sURLVariables[i].split('=');

        if (sParameterName[0] === sParam) {
            return sParameterName[1] === undefined ? true : decodeURIComponent(sParameterName[1]);
        }
    }
};

function updateURLParameter(url, param, paramVal)
{
    var TheAnchor = null;
    var newAdditionalURL = "";
    var tempArray = url.split("?");
    var baseURL = tempArray[0];
    var additionalURL = tempArray[1];
    var temp = "";

    if (additionalURL) 
    {
        var tmpAnchor = additionalURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor = tmpAnchor[1];
        if(TheAnchor)
            additionalURL = TheParams;

        tempArray = additionalURL.split("&");

        for (var i=0; i<tempArray.length; i++)
        {
            if(tempArray[i].split('=')[0] != param)
            {
                newAdditionalURL += temp + tempArray[i];
                temp = "&";
            }
        }        
    }
    else
    {
        var tmpAnchor = baseURL.split("#");
        var TheParams = tmpAnchor[0];
            TheAnchor  = tmpAnchor[1];

        if(TheParams)
            baseURL = TheParams;
    }

    if(TheAnchor)
        paramVal += "#" + TheAnchor;

    var rows_txt = temp + "" + param + "=" + paramVal;
    return baseURL + "?" + newAdditionalURL + rows_txt;
}


// Usage: arr.move(3,1);
Array.prototype.move = function(from,to){
  this.splice(to,0,this.splice(from,1)[0]);
  return this;
};

//Waiting for Element to appear then run callback
var waitForEl = function(selector, callback) {
  if (jQuery(selector).length) {
		//console.log(selector);
    callback();
  } else {
    setTimeout(function() {
      waitForEl(selector, callback);
    }, 100);
  }
};

var nicifyDescription = function(descrText) {
	//_(descrText);
	//remove • divider
	descrText = descrText.replace(/\&nbsp;•\&nbsp;/g, '</li>');
	//replace </li> with <br>
	descrText = descrText.replace(/<\/li>/g, '<br>');
	//remove all tags except <br> with space
	var niceText = descrText.replace(/<(?!br\s*\/?)[^>]+>/g, ' ');
	//normal commas
	niceText = niceText.replace(/,(?=[^\s])/g, ", ");
	//remove space before :
	niceText = niceText.replace(/ \:/g, ':');
	//remove &nbsp;
	niceText = niceText.replace(/\&nbsp;/g, '');
	//remove extra spaces
	niceText = niceText.replace(/\s+/g, ' ');
	//replace 'Length(cm)' with 'Length (cm)'
	niceText = niceText.replace(/Length\(cm\)/g, 'Length (cm)');
	//replace <br> with \n
	niceText = niceText.replace(/<br\s*[\/]?>/gi, '\n');
	niceText = niceText.split('\n');
	niceText = $.map(niceText, $.trim);
	niceText = niceText.filter(String);
	var descrArr = [];

	_(trimList);
	niceText.forEach(function(item, i, arr) {
		let descrKey = item.substr(0, item.indexOf(':'));
		let descrValue = item.substr(item.indexOf(':') + 1);
		let key = $.trim(descrKey);
		for (j = 0; j < trimList.length; j++) {
			if (trimList[j] && key.toLowerCase().indexOf(trimList[j].toLowerCase()) >= 0) {
				key = trimList[j];
			}
		}
		let value = $.trim(descrValue);
		let obj = {};
		obj[key] = value;
		descrArr.push(obj);
	});
	
	_(descrArr);

	var newDescrArray = [];
	var keyIsOk;
	$.each(descrArr, function(i, item) {
		let key = $.keys(item)[0];
		keyIsOk = true;
		//_(item[key]);
		for (j = 0; j < stopList.length; j++) {
			let stopWord = stopList[j];
			if (key.toLowerCase() === stopWord.toLowerCase()) {
				keyIsOk = false;
				break;
			}
		};
		// _(i + ' ' + key + ' ' + keyIsOk);
		if (keyIsOk) {
			newDescrArray.push(descrArr[i]);
		}
	});
	
	_(newDescrArray);	

	$.each(whiteList, function(i, whiteWord) {
		for (j = 0; j < newDescrArray.length; j++) {
			let key = $.keys(newDescrArray[j])[0];
			if (key.toLowerCase().indexOf(whiteWord.toLowerCase()) >= 0) {
				newDescrArray.move(j, 0);
				break;
	 		}
		}
	});
	
	var itemsCount = newDescrArray.length;
	for (let i = 0; i < itemsCount; i++) {
		var currentKey;
		var compareKey;
		var currentVal;
		var compareVal;
		for (let [key, value] of Object.entries(newDescrArray[i])) {
			currentKey = key;
			currentVal = value;
		}
		for (let j = i + 1; j < itemsCount; j++) {
			for (let [key2, value2] of Object.entries(newDescrArray[j])) {
				compareKey = key2;
				compareVal = value2;
			}
			if (currentKey.toLowerCase() === compareKey.toLowerCase()) {
				newDescrArray[i][currentKey] += (', ' + compareVal);
				newDescrArray.splice( j, 1 );
				itemsCount = newDescrArray.length;
				_(itemsCount + ' ' + i + ' ' + j + ' ' + currentKey);
				_(newDescrArray[i]);
				i = 0;
				break;
			}
		}
	}
	
	_(newDescrArray);
	
	var veryNiceText = '';
	$.each(newDescrArray, function(i, item) {
		for (let [key, value] of Object.entries(item)) {
			if (i < itemsCount - 1)
				veryNiceText += '<span><strong>' + key + ':</strong></span> <span>' + value + '</span>' + '<span style="color:white;">&nbsp;•&nbsp;</span>' + '<br>';
			else
				veryNiceText += '<span><strong>' + key + ':</strong></span> <span>' + value + '</span>';
		}
	});
	return veryNiceText;
};