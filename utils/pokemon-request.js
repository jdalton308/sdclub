
// Stats to fetch
// - Abilities: list, strings
// - Types: string
// - HP: int
// - Attack: int
// - Defence: int

export default function createPokemonRequest(name) {
  const query = `
    query pokemon_details($name: String) {
      species: pokemon_v2_pokemonspecies(where: {name: {_eq: $name}}) {
        name
        pokemon: pokemon_v2_pokemons_aggregate {
          nodes {
            abilities: pokemon_v2_pokemonabilities {
              id
              ability: pokemon_v2_ability {
                name
              }
            },
            stats: pokemon_v2_pokemonstats {
              base_stat
              stat: pokemon_v2_stat {
                name
              }
            }
            types: pokemon_v2_pokemontypes {
              slot
              type: pokemon_v2_type {
                name
              }
            }
          }
        }
      }
    }
  `;

  return {
    query,
    variables: {"name": name},
    operationName: "pokemon_details"
  }
}
