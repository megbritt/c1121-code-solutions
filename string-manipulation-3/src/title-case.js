/* exported titleCase */

function titleCase(title) {
  var lowerCasedWord = title.toLowerCase();
  var eachWord = lowerCasedWord.split(' ');
  var correctedTitle = '';
  var index = -1; // returns -1 if index for - (dash) does not exist, so
  var correctedTitleFinal = '';

  eachWord[0] = eachWord[0].charAt(0).toUpperCase() + eachWord[0].substr(1);

  for (var i = 1; i < eachWord.length; i++) {
    if (eachWord[i] !== 'a' && eachWord[i] !== 'an' && eachWord[i] !== 'and' &&
        eachWord[i] !== 'as' && eachWord[i] !== 'at' && eachWord[i] !== 'but' &&
        eachWord[i] !== 'by' && eachWord[i] !== 'for' && eachWord[i] !== 'in' &&
        eachWord[i] !== 'nor' && eachWord[i] !== 'of' && eachWord[i] !== 'on' &&
        eachWord[i] !== 'or' && eachWord[i] !== 'per' && eachWord[i] !== 'the' &&
        eachWord[i] !== 'to' && eachWord[i] !== 'javascript' && eachWord[i] !== 'api') {

      eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].substr(1);

    }

    if (eachWord[i] === 'javascript') {
      eachWord[i] = 'JavaScript';
    }

    if (eachWord[i] === 'api') {
      eachWord[i] = 'API';
    }

    if (eachWord[i] === 'an' && eachWord[i - 1][eachWord[i - 1].length - 1] === ':') {
      eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].substr(1);
    }

    if (eachWord[i] === 'the' && eachWord[i - 1][eachWord[i - 1].length - 1] === ':') {
      eachWord[i] = eachWord[i].charAt(0).toUpperCase() + eachWord[i].substr(1);
    }
  }

  correctedTitle = eachWord.join(' ');

  correctedTitle = correctedTitle.replace('Javascript', 'JavaScript');
  correctedTitle = correctedTitle.replace('Api', 'API');

  index = correctedTitle.indexOf('-');

  if (index === -1) {
    return correctedTitle;
  }

  // else

  correctedTitleFinal = correctedTitle.substring(0, index) + correctedTitle.charAt(index + 1).toUpperCase + correctedTitle.substring(index + 2);

  return correctedTitleFinal;

}
