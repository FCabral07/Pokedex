const listPokemon = document.getElementById('listPokemon');
const loadButton = document.getElementById('loadMore');

const limit = 30;
let offset = 0;

function conversionPokemonToHTML(pokemon){
    return `
        <li class="pokemon ${pokemon.type}">
                <h4 class="number">#${pokemon.number}</h4>
                <h2 class="name">${pokemon.name}</h2>
                <div class="detail">
                    <ol class="types">
                        ${pokemon.types.map((type) => `<li class="type ${type}">${type}</li>`).join('')}
                    </ol>
                    <img src="${pokemon.photo}" alt="${pokemon.name}">
                </div>
        </li>
    `
};

function loadPokemonItens(offset, limit) {
    pokeApi.getPokemons(offset, limit).then((pokemonList = []) => {
        listPokemon.innerHTML += pokemonList.map(conversionPokemonToHTML).join('');
    })
};

function loadPokemonDetails(pokemon){
    return `
        
    `
}

loadPokemonItens(offset, limit);

loadButton.addEventListener('click', () => {
    offset += limit;
    loadPokemonItens(offset, limit);
});

listPokemon.addEventListener('click', () => {
    window.location.href = 'info.html';
});