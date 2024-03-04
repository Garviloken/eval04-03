/**
 * Fonction asynchrone pour récupérer des informations sur une capacité de Pokémon aléatoire.
 * @async
 * @function fetchPokemonAbilities
 */
const fetchPokemonAbilities = async () => {
  // Générer un numéro de Pokédex aléatoire
  const pokedexNum = Math.floor(Math.random() * 266);
  let foundAbilities = "";
  const pokeAbility = document.getElementById("pokeAbility");
  let jsonAbilities = {};
  let abilityToDisplay = "";

  try {
    // Récupérer les données de la capacité de Pokémon depuis l'API Pokémon
    foundAbilities = await fetch(
      `https://pokeapi.co/api/v2/ability/${pokedexNum}`,
      { method: "GET", headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error(error.message);
  }

  if (foundAbilities) {
    try {
      // Convertir les données en format JSON
      jsonAbilities = await foundAbilities.json();
      // Extraire le nom de la capacité et le formater correctement
      if (jsonAbilities.name !== "" && undefined !== jsonAbilities.name) {
        abilityToDisplay = `${String(jsonAbilities.name)
          .slice(0, 1)
          .toUpperCase()}${String(jsonAbilities.name).slice(1).toLowerCase()}`;
      } else {
        abilityToDisplay = "Tackle";
      }
    } catch (error) {
      console.error(error.message);
    }
  } else {
    jsonAbilities = "No ability found...";
  }

  // Afficher le nom de la capacité récupérée
  if (pokeAbility.innerText !== "") {
    pokeAbility.innerText = "";
  }
  pokeAbility.innerText = `It now knows the move ${abilityToDisplay}!`;
};

// Export par défaut de la fonction fetchPokemonAbilities
export default fetchPokemonAbilities;
