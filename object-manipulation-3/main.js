console.log('Lodash is loaded:', typeof _ !== 'undefined');

var deck = [];
var rank = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
var suit = ['♧', '♢', '♡', '♤'];

for (var i = 0; i < suit.length; i++) {
  for (var j = 0; j < rank.length; j++) {
    deck.push({ suit: suit[i], rank: rank[j] });
  }
}

var shuffledDeck = _.shuffle(deck);

function drawNewHand(players) {
  var hand = [];
  for (var i = 0; i < players.length; i++) {
    hand.push({ name: players[i], hand: [], score: 0 });
  }
  return hand;
}

function passOutCards(player, numCardsPerHand) {
  for (var k = 0; k < player.length; k++) {
    player[k].hand = shuffledDeck.splice(0, numCardsPerHand);
    var totalScore = 0;

    for (var l = 0; l < numCardsPerHand; l++) {
      if (player[k].hand[l].rank === 'A') {
        totalScore += 11;
      } else if (['J', 'Q', 'K'].includes(player[k].hand[l].rank)) {
        totalScore += 10;
      } else {
        totalScore += parseInt(player[k].hand[l].rank);
      }
    }
    player[k].score = totalScore;
  }
  return player;
}

function appendMaxScorePlayer(max, players, numCardsPerHand) {
  var winners = [];

  for (var key in players) {
    if (players[key].score > max.score) {

      max.name = players[key].name;
      max.score = players[key].score;
      winners = [];
      winners.push(max.name);

    } else if (players[key].score === max.score) {

      winners.push(max.name);
      winners.push(players[key].name);
      max.name = players[key].name;
      max.score = players[key].score;

    }
  }

  var winnersCircle = new Set(winners);

  if (winnersCircle.size > 1) {
    winners = Array.from(winnersCircle);

    if (winnersCircle.size === 2) {
      console.log('There is a tie between ' + winners[0] + ' and ' + winners[1] + ' with a value of ' + max.score);
    } else if (winnersCircle.size === 3) {
      console.log('There is a three-way tie among ' + winners[0] + ', ' + winners[1] + ', and ' + winners[2] + ' with a value of ' + max.score);
    } else {
      console.log('There is a ' + winnersCircle.size + '-way tie with a value of ' + max.score + 'among the following players:');

      for (var i = 0; i < winnersCircle.length; i++) {
        console.log(winners[i]);
      }
    }

    console.log('Tiebreaker Rematch Game');

    startGame(winners, numCardsPerHand);

  } else {
    console.log('The winner is ' + max.name + ' with a score of ' + max.score + '!');
    return max;
  }
}

function startGame(players, numCardsPerHand) {
  var hand = drawNewHand(players);
  hand = passOutCards(hand, numCardsPerHand);

  var max = { name: '', score: 0 };
  appendMaxScorePlayer(max, hand, numCardsPerHand);
}

var players = ['Lane Kim', 'Lorelai Gilmore', 'Paris Geller', 'Rory Gilmore'];
var numCardsPerHand = 2;

startGame(players, numCardsPerHand);
