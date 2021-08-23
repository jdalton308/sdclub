
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
        id
        pokemon: pokemon_v2_pokemons_aggregate {
          nodes {
            height
            order
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
        flavor_text: pokemon_v2_pokemonspeciesflavortexts(limit: 1, where: {language_id: {_eq: 9}}) {
          flavor_text
          language_id
        }
        genus: pokemon_v2_pokemonspeciesnames(where: {language_id: {_eq: 9}}) {
          genus
          name
          language_id
        }
        generation: pokemon_v2_generation {
          name
        }
        growthrate: pokemon_v2_growthrate {
          name
          id
        }
        color: pokemon_v2_pokemoncolor {
          name
        }
        habitat: pokemon_v2_pokemonhabitat {
          name
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
