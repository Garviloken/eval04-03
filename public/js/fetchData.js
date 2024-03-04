/**
 * Écouteur d'événement pour détecter lorsque le DOM est complètement chargé.
 * Une fois que le DOM est chargé, invoque la fonction pour initialiser les actions liées aux Pokémon.
 * @event window#DOMContentLoaded
 */
window.addEventListener('DOMContentLoaded', () => {
  // Sélection des éléments du DOM nécessaires
  const pokeP = document.getElementById('pokeInfo');
  const pokeDiv = document.getElementById('pokemon-info');
  const pokeAbilityBtn = document.getElementById('ability');

  /**
   * Fonction asynchrone pour récupérer des informations sur un Pokémon aléatoire.
   * @async
   * @function
   */
  const fetchPokemon = async () => {
    // Générer un numéro de Pokédex aléatoire
    const pokedexNum = Math.floor(Math.random() * 897);
    let foundPokemon = '';
    let jsonPokemon = '';
    const pokeInfo = {};

    try {
      // Récupérer les données du Pokémon depuis l'API Pokémon
      foundPokemon = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokedexNum}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
      console.error(error.message);
    }

    if (foundPokemon) {
      try {
        // Convertir les données en format JSON
        jsonPokemon = await foundPokemon.json();
        // Extraire le nom du Pokémon et le formater correctement
        pokeInfo.name = `${String(jsonPokemon.species.name).slice(0, 1).toUpperCase()}${String(jsonPokemon.species.name).slice(1).toLowerCase()}`;
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonPokemon = 'No Pokémon found...';
    }

    // Afficher le nom du Pokémon récupéré
    if (pokeP.innerText !== '') { pokeP.innerText = ''; }
    pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
    pokeAbilityBtn.removeAttribute('disabled');
  };

  /**
   * Fonction asynchrone pour récupérer des informations sur une capacité de Pokémon aléatoire.
   * @async
   * @function
   */
  const fetchPokemonAbilities = async () => {
    // Générer un numéro de Pokédex aléatoire
    const pokedexNum = Math.floor(Math.random() * 266);
    let foundAbilities = '';
    const pokeAbility = document.getElementById('pokeAbility');
    let jsonAbilities = {};
    let abilityToDisplay = '';

    try {
      // Récupérer les données de la capacité de Pokémon depuis l'API Pokémon
      foundAbilities = await fetch(`https://pokeapi.co/api/v2/ability/${pokedexNum}`, { method: 'GET', headers: { 'Content-Type': 'application/json' } });
    } catch (error) {
      console.error(error.message);
    }

    if (foundAbilities) {
      try {
        // Convertir les données en format JSON
        jsonAbilities = await foundAbilities.json();
        // Extraire le nom de la capacité et le formater correctement
        if ('' !== jsonAbilities.name && undefined !== jsonAbilities.name) {
          abilityToDisplay = `${String(jsonAbilities.name).slice(0, 1).toUpperCase()}${String(jsonAbilities.name).slice(1).toLowerCase()}`;
        } else {
          abilityToDisplay = 'Tackle';
        }
      } catch (error) {
        console.error(error.message);
      }
    } else {
      jsonAbilities = 'No ability found...';
    }

    // Afficher le nom de la capacité récupérée
    if (pokeAbility.innerText !== '') { pokeAbility.innerText = ''; }
    pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
  };

  /**
   * Fonction pour invoquer la récupération d'un Pokémon.
   * @function
   */
  const invokePokemon = () => {
    const pokeBtn = document.getElementById('pokemon');
    pokeBtn.addEventListener('click', fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };

  /**
   * Fonction pour invoquer la récupération d'une capacité de Pokémon.
   * @function
   */
  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener('click', fetchPokemonAbilities);
    pokeDiv.appendChild(document.createElement('br'));
    pokeDiv.appendChild(pokeAbilityBtn);
  };

  // Fonction d'initialisation pour invoquer les actions liées aux Pokémon
  (function startAll() {
    invokePokemon();
    pokemonAbility();
  })();
});