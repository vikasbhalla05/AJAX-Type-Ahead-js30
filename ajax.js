const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];
  
  fetch(endpoint)
  .then( blob => blob.json())
  .then( data => cities.push(...data));

  function search( wordToMatch, cities){
    return cities.filter(place => {

      // need to filter each city with city and state
      let regex = new RegExp( wordToMatch, "gi");
      // create a regex to search
      return place.city.match(regex) || place.state.match(regex);
    });
  }

  function numberWithCommas(x) {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  }

  function displaySearch(){
    
    let searchRes = search( this.value, cities );
    // console.log(searchRes)
    let html = searchRes.map(place => {

      let rg = new RegExp(this.value, 'gi');

      let cityName = place.city.replace(rg, `<span class="hl">${this.value}</span>`);
      let stateName = place.state.replace(rg, `<span class="hl">${this.value}</span>`);

      return `<li>
      <span class="name">${cityName}, ${stateName}</span>
      <span class="population">${numberWithCommas(place.population)}</span>
      </li>`;
    }).join(' ');

    suggests.innerHTML = html;
  }

  let searchkey = document.querySelector(".search");
  let suggests = document.querySelector(".suggestions")

  searchkey.addEventListener('change', displaySearch);
  searchkey.addEventListener('keyup', displaySearch);