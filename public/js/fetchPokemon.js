/**
 * Fonction asynchrone pour récupérer des informations sur un Pokémon aléatoire.
 * @async
 * @function fetchPokemon
 */

const pokeP = document.createElement("p");
const pokeAbilityBtn = document.getElementById("ability");
const fetchPokemon = async () => {
  // Générer un numéro de Pokédex aléatoire
  const pokedexNum = Math.floor(Math.random() * 897);
  let foundPokemon = "";
  let jsonPokemon = "";
  const pokeInfo = {};

  try {
    // Récupérer les données du Pokémon depuis l'API Pokémon
    foundPokemon = await fetch(
      `https://pokeapi.co/api/v2/pokemon/${pokedexNum}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error.message);
  }

  if (foundPokemon) {
    try {
      // Convertir les données en format JSON
      jsonPokemon = await foundPokemon.json();
      // Extraire le nom du Pokémon et le formater correctement
      pokeInfo.name = `${String(jsonPokemon.species.name)
        .slice(0, 1)
        .toUpperCase()}${String(jsonPokemon.species.name)
        .slice(1)
        .toLowerCase()}`;
    } catch (error) {
      console.error(error.message);
    }
  } else {
    jsonPokemon = "No Pokémon found...";
  }

  // Afficher le nom du Pokémon récupéré
  if (pokeP.innerText !== "") {
    pokeP.innerText = "";
  }
  pokeP.innerText = `Your Pokémon is ${pokeInfo.name}.`;
  pokeAbilityBtn.removeAttribute("disabled");
};

// Export par défaut de la fonction fetchPokemon
export default fetchPokemon;
