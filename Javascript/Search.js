
// JavaScript code goes here
document.getElementById('searchForm').addEventListener('submit', function(event) {
    event.preventDefault();
    const searchValue = document.getElementById('searchInput').value;
    getPokemon(searchValue);
});

function getPokemon(searchValue) {
    const url = `https://pokeapi.co/api/v2/pokemon/${searchValue}`;
    fetch(url)
        .then(response => response.json())
        .then(data => {
            const name = data.name || "Loading...";
            const imgSrc = data.sprites && data.sprites.other && data.sprites.other["official-artwork"] &&
                data.sprites.other["official-artwork"].front_default
                ? data.sprites.other["official-artwork"].front_default
                : "https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg";
            const type1 = data.types && data.types[0] && data.types[0].type && data.types[0].type.name;
            const type2 = data.types && data.types[1] && data.types[1].type && data.types[1].type.name || null;

            document.getElementById('pokeName').textContent = name;
            document.getElementById('pokeImg').src = imgSrc;
            document.getElementById('type1').textContent = type1;
            document.getElementById('type2').textContent = type2;

            // Handle More Info button click
            document.getElementById('moreInfoBtn').href = `/pokemonpage/${name}`;
        })
        .catch(error => {
            console.error('Error fetching Pokemon:', error);
        });
}