export const locationList = (locations, title) => {
    let htmlString = `<h2 class= "location-title">${title}</h2><article class="location-list">`
    for (const location of locations) {
        htmlString += `<section class="fish_card"
            <div><img class="image_location" src="${location.image}" /></div>
            <div class="location">Location: ${location.location}</div>
            <div class="when">When: ${location.when}</div>
            <div class="whatfish">What Fish: ${location.when}</div>

        </section>
`
    }
    htmlString += `</article>`

    return htmlString
};
