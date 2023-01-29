document.addEventListener('DOMContentLoaded', function() {
  populate_cards();
});

async function populate_cards() {
  const url = 'people.tsv';
  const personTemplate = document.getElementById('person-template');
  fetch(url)
    .then(response => response.text())
    .then(data => {
      var x = data.split('\n');
      // x.length - 1 because the last row is empty
      for (var i = 1; i < x.length - 1; i++) {
        y = x[i].split('\t');
        x[i] = y;
        ghUsername = y[0];
        // person instance
        const inst = document.importNode(personTemplate.content, true);
        inst.querySelector('.github-username').innerHTML = ghUsername;
        var ghImg = 'https://github.com/' + ghUsername + '.png';
        inst.querySelector('.imagesrc').setAttribute('src', ghImg);
        var ghUrl = 'https://github.com/' + ghUsername;
        inst.querySelector('.avatar-href').setAttribute('href', ghUrl);
        inst.querySelector('.avatar-href').setAttribute('target', '_blank');
        inst.querySelector('.github-href').setAttribute('href', ghUrl);
        inst.querySelector('.github-href').setAttribute('target', '_blank');
        // Append the person instance to the DOM
        document.getElementById('people').appendChild(inst);
      }
    });
}
