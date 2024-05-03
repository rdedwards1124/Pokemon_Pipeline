
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
            // Grab the name and capitalize the first letter!
            const name1 = name.charAt(0).toUpperCase() + name.slice(1);
            const imgSrc = data.sprites && data.sprites.other && data.sprites.other["official-artwork"] &&
                data.sprites.other["official-artwork"].front_default
                ? data.sprites.other["official-artwork"].front_default
                : "https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg";
            const imgSrc2 = data.sprites && data.sprites.other && data.sprites.other["official-artwork"] &&
                data.sprites.other["official-artwork"].front_shiny
                ? data.sprites.other["official-artwork"].front_shiny
                : "https://i.etsystatic.com/33357979/r/il/e1dfcd/3584257734/il_fullxfull.3584257734_bfy9.jpg";
            const type1 = data.types && data.types[0] && data.types[0].type && data.types[0].type.name;
            const type2 = data.types && data.types[1] && data.types[1].type && data.types[1].type.name || null;
            const ability1 = data.abilities && data.abilities[0] && data.abilities[0].ability && data.abilities[0].ability.name;

            // const y = x === 5 ? 20 : 9;
            // Check if ability2 is a hidden ability or not
            const ability2 = data.abilities && data.abilities[1] && data.abilities[1].is_hidden === false ? data.abilities && data.abilities[1] && data.abilities[1].ability && data.abilities[1].ability.name : null

            // Check if hidden ability is in slot 2 or slot 3
            const hiddenAbility = data.abilities && data.abilities[1] && data.abilities[1].is_hidden === false ? data.abilities && data.abilities[2] && data.abilities[2].ability && data.abilities[2].ability.name : data.abilities && data.abilities[1] && data.abilities[1].ability && data.abilities[1].ability.name

            const hp = data.stats && data.stats[0] && data.stats[0].base_stat 
            const atk = data.stats && data.stats[1] && data.stats[1].base_stat 
            const def = data.stats && data.stats[2] && data.stats[2].base_stat 
            const spa = data.stats && data.stats[3] && data.stats[3].base_stat 
            const spd = data.stats && data.stats[4] && data.stats[4].base_stat 
            const spe = data.stats && data.stats[5] && data.stats[5].base_stat 

            document.getElementById('pokeName').textContent = name1;
            document.getElementById('pokeImg').src = imgSrc;
            document.getElementById('type1').textContent = type1;
            document.getElementById('type2').textContent = type2;
            document.getElementById('ability1').textContent = ability1;
            document.getElementById('ability2').textContent = ability2;
            document.getElementById('hiddenAbility').textContent = hiddenAbility;

            //Base Stats
            document.getElementById('hp').textContent = hp;
            document.getElementById('atk').textContent = atk;
            document.getElementById('def').textContent = def;
            document.getElementById('spa').textContent = spa;
            document.getElementById('spd').textContent = spd;
            document.getElementById('spe').textContent = spe;

            // Handle More Info button click
            document.getElementById('moreInfoBtn').href = `/pokemonpage/${name}`;
        })
        .catch(error => {
            console.error('Error fetching Pokemon:', error);
        });
}