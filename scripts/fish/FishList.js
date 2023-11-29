import { getFish } from "./database.js";

export const FishList = (fishes, title) => {
    
    let htmlString = `<h2 class= "fish-title">${title}</h2><article class="fishList">`
    for (const fish of fishes) {
        htmlString += `<section class="fish_card"
            <div><img  class="image--card" src="${fish.image}" /></div>
            <div class="fish__name">Name: ${fish.name}</div>
            <div class="fish__species">Species: ${fish.species}</div>
            <div class="fish__length">Length: ${fish.length}</div>
            <div class="fish__location">Location: ${fish.location}</div>
            <div class="fish__diet">Diet: ${fish.food}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
};

export const getHolyFish = () => {
    const holyFish = [];
    const fishes = getFish()

    for (const fish of fishes) {
        if (fish.length % 3 === 0) {
            holyFish.push(fish);
        }
    }
    return holyFish
}

export const getSolFish = () => {
    const solFish = [];
    const fishes = getFish()
    const holyFish = getHolyFish()
    for (const fish of fishes) {
        if (fish.length % 5 === 0 && fish.length % 3 != 0) {
            solFish.push(fish);
        }
    }
    return solFish
}

export const getNonHolyFish = () => {
    const nonFish = [];
    const fishes = getFish()

    for (const fish of fishes) {
        if (fish.length % 5 != 0 && fish.length % 3 != 0) {
            nonFish.push(fish);
        }
    }
    return nonFish
}
