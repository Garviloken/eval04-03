// Import des fonctions fetchPokemon et fetchPokemonAbilities depuis leurs fichiers respectifs
import fetchPokemon from "./fetchPokemon.js";
import fetchPokemonAbilities from "./fetchPokemonAbilities.js";

/**
 * Écouteur d'événement pour détecter lorsque le DOM est complètement chargé.
 * Une fois que le DOM est chargé, invoque les fonctions pour initialiser les actions liées aux Pokémon.
 * @event window#DOMContentLoaded
 */
window.addEventListener("DOMContentLoaded", () => {
  // Sélection des éléments du DOM nécessaires
  const pokeDiv = document.getElementById("pokemon-info");
  const pokeP = document.createElement("p");
  const pokeAbilityBtn = document.getElementById("ability");

  /**
   * Fonction pour invoquer la récupération d'un Pokémon.
   * @function
   */
  const invokePokemon = () => {
    const pokeBtn = document.getElementById("pokemon");
    pokeBtn.addEventListener("click", fetchPokemon);
    pokeDiv.appendChild(pokeP);
  };

  /**
   * Fonction pour invoquer la récupération d'une capacité de Pokémon.
   * @function
   */
  const pokemonAbility = () => {
    pokeAbilityBtn.addEventListener("click", fetchPokemonAbilities);
    pokeDiv.appendChild(document.createElement("br"));
    pokeDiv.appendChild(pokeAbilityBtn);
  };

  // Fonction d'initialisation pour invoquer les actions liées aux Pokémon
  (function startAll () {
    invokePokemon();
    pokemonAbility();
  })();
});
