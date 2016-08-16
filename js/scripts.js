var primes = function(number){
  var number1 = [];
for (i = 2; i <= number; i++) {
  number1.push(i);
}

alert(number);
  number1.forEach(function(number2) {
    for(i = number2 + number2; i <= number; i+=number2){
      if(number1.indexOf(i) >= 0) {
        number1.splice(number1.indexOf(i), 1);
      }
    }
  });
    return number1;
}

$(function(){
  $("form").submit(function(event){
    event.preventDefault();

    var numbers = parseInt($("#number").val());
    var fPrimes = primes(numbers);
    $(".numbers").text(numbers);
    fPrimes.forEach(function(fPrime) {
    $(".numbers").append("<li>" + fPrimes + "</li>");
    });


  });
});
