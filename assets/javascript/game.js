var wins = 0;
var losses = 0;
var userTotal = 0;
var blue = Math.floor(Math.random() * 12) + 1;
var red = Math.floor(Math.random() * 12) + 1;
var purple = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
var random = Math.floor(Math.random() * 120) + 19;

$(document).ready(function() {
  $('#random').text(random);

  $('#blue').on('click', function() {
    userTotal = userTotal + blue;
    $('#display').text(userTotal);
  });

  $('#red').on('click', function() {
    userTotal = userTotal + red;
    $('#display').text(userTotal);
  });

  $('#purple').on('click', function() {
    userTotal = userTotal + purple;
    $('#display').text(userTotal);
  });

  $('#green').on('click', function() {
    userTotal = userTotal + green;
    $('#display').text(userTotal);
  });
});
