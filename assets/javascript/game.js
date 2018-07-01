var wins = 0;
var losses = 0;
var userTotal = 0;
var blue = Math.floor(Math.random() * 12) + 1;
var red = Math.floor(Math.random() * 12) + 1;
var purple = Math.floor(Math.random() * 12) + 1;
var green = Math.floor(Math.random() * 12) + 1;
var random = Math.floor(Math.random() * 120) + 19;

function winning() {
  wins++;
  $('#win-lose').html('<h2>Winner!</h2>');
  $('#wins').html('<h3> Wins:' + wins + '</h3>');
}

function losing() {
  losses++;
  $('#win-lose').html('<h2>Better luck next time!</h2>');
  $('#losses').html('<h3> Losses:' + losses + '</h3>');
}

function updateRandom() {
  random = Math.floor(Math.random() * 120) + 19;
  $('#random').text(random);
}

function reset() {
  userTotal = 0;
  $('#display').text(userTotal);
  blue = Math.floor(Math.random() * 12) + 1;
  red = Math.floor(Math.random() * 12) + 1;
  purple = Math.floor(Math.random() * 12) + 1;
  green = Math.floor(Math.random() * 12) + 1;
  updateRandom();
}

reset();

$(document).ready(function() {
  $('#random').text(random);

  $('#blue').on('click', function() {
    userTotal = userTotal + blue;
    $('#display').text(userTotal);
    if (userTotal === random) {
      winning();
      reset();
    } else if (userTotal > random) {
      losing();
      reset();
    }
  });

  $('#red').on('click', function() {
    userTotal = userTotal + red;
    $('#display').text(userTotal);
    if (userTotal === random) {
      winning();
      reset();
    } else if (userTotal > random) {
      losing();
      reset();
    }
  });

  $('#purple').on('click', function() {
    userTotal = userTotal + purple;
    $('#display').text(userTotal);
    if (userTotal === random) {
      winning();
      reset();
    } else if (userTotal > random) {
      losing();
      reset();
    }
  });

  $('#green').on('click', function() {
    userTotal = userTotal + green;
    $('#display').text(userTotal);
    if (userTotal === random) {
      winning();
      reset();
    } else if (userTotal > random) {
      losing();
      reset();
    }
  });
});
