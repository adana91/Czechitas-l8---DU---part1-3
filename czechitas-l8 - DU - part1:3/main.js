// tady je místo pro náš program


const justFood = (pocetLidi) => {
    return `Catering od Just Food pro ${pocetLidi} lidí za ${Math.round(pocetLidi * 100)} Kč`
}

const yourMama = (pocetLidi) => {
    return `Catering od Your Mama pro ${pocetLidi} lidí za ${Math.round(pocetLidi * 150)} Kč`
}

const flavourHaven = (pocetLidi) => {
    return `Catering od Flavour Haven pro ${pocetLidi} lidí za ${Math.round(pocetLidi * 200)} Kč`
}


const createEvent = (nazevUdalosti, pocetLidi, catering) => {
    return `Událost ${nazevUdalosti} s ${catering(pocetLidi)}`
}

