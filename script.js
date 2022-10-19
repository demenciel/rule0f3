var moule = document.querySelector('#moule');
var cire = document.querySelector('#cire');
var meche = document.querySelector('#meche');
var mecheNormal = document.querySelector('#meche-normal');
var huile = document.querySelector('#huile');

var result = document.querySelector('#result');

$(moule).keyup(function() {
    var moulePrice = parseFloat($(moule).val());
    $(result).text(moulePrice + '$');
});

$(cire).keyup(function() {
    var moulePrice = parseFloat($(moule).val());
    var cirePrice = parseFloat($(cire).val()) * 159.69 / 45;

    var cireResult = moulePrice + cirePrice
    var cireRounded = Math.round(cireResult * 100) / 100;
    $(result).text(cireRounded + '$');
});

$(huile).keyup(function() {
    var moulePrice = parseFloat($(moule).val());
    var cirePrice = parseFloat($(cire).val()) * 159.69 / 45;
    var huilePrice = parseFloat($(huile).val()) * 23.09 / 250;


    var huileResult = moulePrice + cirePrice + huilePrice
    var huileRounded = Math.round(huileResult * 100) / 100;
    $(result).text(huileRounded + '$');
});

$(mecheNormal).keyup(function() {
    var moulePrice = parseFloat($(moule).val());
    var cirePrice = parseFloat($(cire).val()) * 159.69 / 45;
    var huilePrice = parseFloat($(huile).val()) * 23.09 / 250;
    var mecheNormalPrice = parseFloat($(mecheNormal).val()) * 15.75 / 100;

    errorMeche();

    var mecheNormalResult = moulePrice + cirePrice + huilePrice + mecheNormal
    var mecheNormalRounded = Math.round(mecheNormalResult * 100) / 100;
    $(result).text(mecheNormalRounded + '$');
});

$(meche).keyup(function () {
    var moulePrice = parseFloat($(moule).val());
    var cirePrice = parseFloat($(cire).val()) * 159.69 / 45;
    var mechePrice = parseFloat($(meche).val()) * 80.09 / 100;
    var huilePrice = parseFloat($(huile).val()) * 23.09 / 250;

    errorMeche();

    var resultPrice = moulePrice + cirePrice + mechePrice + huilePrice;
    var resultRounded = Math.round(resultPrice * 100) / 100;
    // var resultRoundedFixed = resultRounded.toFixed(2);
    $(result).text(resultRounded + '$');
});



function errorMeche() {
    if ($(meche).val() != "" && $(mecheNormal).val() != "") {
        setTimeout(function() {
            window.location.reload();
        }, 2200);
        $('.error-message').css('display', 'flex');
        $('.input-data').css('opacity', '0.1');
        $('.result').css('opacity', '0.1');
        
    }
}







