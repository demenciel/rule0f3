 var moule = document.querySelector('#moule');
 var cire = document.querySelector('#cire');
 var meche = document.querySelector('#meche');
 var huile = document.querySelector('#huile');

var result = document.querySelector('#result');


$(huile).keyup(function()  {
    var moulePrice = parseFloat($(moule).val());
    var cirePrice = parseFloat($(cire).val()) * 150 / 45;
    var mechePrice = parseFloat($(meche).val()) * 7.40 / 100;
    var huilePrice = parseFloat($(huile).val());

    var resultPrice = moulePrice + cirePrice + mechePrice + huilePrice;
    var resultRounded = Math.round(resultPrice * 100) / 100;
    // var resultRoundedFixed = resultRounded.toFixed(2);
    $(result).text(resultRounded + '$');
});





