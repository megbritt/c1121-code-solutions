var $hot = document.querySelector('.hot-button');

var numTimesClicked = 0;

function handleClick(event) {
  numTimesClicked++;
  var temperature = null;

  var countOnpage = document.querySelector('.click-count');
  countOnpage.textContent = 'Clicks: ' + numTimesClicked;

  if (numTimesClicked < 4) {
    temperature = 'cold';
  } else if (numTimesClicked < 7) {
    temperature = 'cool';
  } else if (numTimesClicked < 10) {
    temperature = 'tepid';
  } else if (numTimesClicked < 13) {
    temperature = 'warm';
  } else if (numTimesClicked < 16) {
    temperature = 'hot';
  } else {
    temperature = 'nuclear';
  }

  $hot.className = 'hot-button ' + temperature;
}

var $click = document.querySelector('.hot-button');

$click.addEventListener('click', handleClick);
