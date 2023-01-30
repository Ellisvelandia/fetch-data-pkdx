const container = document.querySelector(".container")

function fetchPokemons() {
  fetch("https://pokeapi.co/api/v2/pokemon?offset=0&limit=151")
    .then((res) => res.json())
    .then((data) => {
      let pokemons = data.results
      let div = document.createElement("div")
      div.classList.add("containerPoke")
      container.appendChild(div)
      pokemons.map((pokemon, i) => {
        div.innerHTML += `
        <div class="card">
        <p>${pokemon.name}</p>
        <img src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/versions/generation-iii/ruby-sapphire/${i + 1}.png" loading="lazy" />
        </div> 
        `
      })
    })
}

fetchPokemons()



