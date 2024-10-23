
const url = "https://rickandmortyapi.com/api/character"

fetch(url).then((response) => {
    //console.log(response)
    if (response.ok){
        response.json().then((apiJsonData) => {
           //console.log(apiJsonData)
            
            apiJsonData.results.map((character, index) => {
               // console.log(character)
                // console.log(character.name)
                // console.log(character.origin.name)
                // console.log(character.location.name)
                console.log(`${character.name} es de ${character.origin.name} y vive en ${character.location.name}`)
            })
             
        })
    }
    else {
      alert("TODO MAL")
    }
})