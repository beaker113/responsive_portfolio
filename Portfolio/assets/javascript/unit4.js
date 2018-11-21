$(document).ready(function () {

  var start = function () {
    randomNumber = Math.floor(Math.random() * ((120 - 19) + 1) + 19);
  }




  var score = 0;
  var wins = 0;
  var loss = 0;



  var crystalImgPaths = ["assets/images/crystal1.jpg", "assets/images/crystal2.png", "assets/images/crystal3.jpg", "assets/images/crystal4.jpg"]
  
  var handleCrystalClick = function (e) {
    score += Number($(this).data("id"));

    $("#points").text(score);

    if (score === randomNumber) {
      wins++;
      $("#wins").text(wins);
      score = 0;
      $("#crystals").empty();
      start();
      newCrystals();
      $("#rand").text(randomNumber);
    };

    if (score > randomNumber) {
      loss++;
      $("#losses").text(loss);
      score = 0;
      $("#crystals").empty();
      start();
      newCrystals();
      $("#rand").text(randomNumber);

    };
  }

  var newCrystals = function () {
    for (var i = 0; i < crystalImgPaths.length; i++) {

      var randomValue = Math.floor((Math.random() * 12) + 1);
      var crystal = $("<img>");
      crystal.attr("src", crystalImgPaths[i]);
      crystal.attr("class", 'crystals');
      crystal.attr("value", randomValue);
      crystal.attr("data-id", randomValue);
      var imgTarget = $("#crystals");
      imgTarget.append(crystal);
    }
    $(".crystals").on("click", handleCrystalClick);
  }

  newCrystals();
  start();

  $("#rand").text(randomNumber);

  // $(".crystals").on("click", handleCrystalClick);



});
