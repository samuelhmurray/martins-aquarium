export const tipsList = (tips, title) => {
    let htmlString = `<h2 class= "tips-title">${title}</h2><article class="tipList">`
    for (const tip of tips) {
        htmlString += `<section class="fish_card"
            <div><img  class="image_tip" src="${tip.image}" /></div>
            <div class="tip">Tip: ${tip.tip}</div>
            <div class="trick">Trick: ${tip.trick}</div>
        </section>
`
    }
    htmlString += `</article>`

    return htmlString
};
