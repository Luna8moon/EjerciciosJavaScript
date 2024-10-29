
const writePlanetsCardInHtml = (planetInfo) => {
    const planetSection = document.getElementById("planets")
    const planetArticle = document.createElement("article")
    const planetOrigin = document.createElement("p")
    planetOrigin.innerText = "Planeta: " + planetInfo.name
    const planetResidents = document.createElement("p")
    planetResidents.innerText = "Residentes: " + planetInfo.residents.length
    const planetButton = document.createElement("button")
    planetArticle.id = planetInfo.name
    planetButton.id =planetInfo.name + "button"
    planetButton.innerHTML= "Show Residents"
    planetButton.addEventListener("click", (event) => {
        const buttonId = event.target.id;
        const planetButton = buttonId.split("button");
        console.log(planetButton[0]);
    });

    planetArticle.appendChild(planetOrigin)
    planetArticle.appendChild(planetResidents)
    planetArticle.appendChild(planetButton)
    planetSection.appendChild(planetArticle)

    
}

const getDataFromApi = async () => {

    const response = await fetch ("https://rickandmortyapi.com/api/location")
    //console.log(response)
    const dataFromApi = await response.json()
    console.log(dataFromApi)

    dataFromApi.results.forEach(planetDataFromApi => {
        console.log(planetDataFromApi)
        writePlanetsCardInHtml(planetDataFromApi)
    })

}
getDataFromApi()

