let iron = 1000000


let generateQuote = [
    'People say nothing is impossible, but I do nothing every day.', 'You can not have everything. Where would you put it?', 'If you think you are too small to make a difference, try sleeping with a mosquito.', 'Think like a proton. Always positive.', 'Be happy ... it drives people crazy.',
];

function quote(generateQuote)
{return generateQuote[Math.floor(Math.random() * generateQuote.length)];
}
console.log(quote(generateQuote));


let clickUpgrades = {
    miners: {
        price: 10,
        quantity: 0,
        multiplier: 1
    }
};

let automaticUpgrades = {
    electromagnetic: {
        price: 20,
        quantity: 0,
        multiplier: 20,
        level: 0
    }
};

let thunder = {
    bolts: {
        price: 1000,
        quantity: 0,
    }
}

let click = {
    quotes: {
        quantity: 0,
        price: 5000,
    }
}


function mine() {
    iron++
    for (let key in clickUpgrades) {
        let upgrade = clickUpgrades[key]
        iron += upgrade.quantity * upgrade.multiplier
    }
    drawTotal()
}

function drawTotal() {
    let totalTemplate = ""
    totalTemplate += `
        <h1 class="bg-dark p-2 bg-orange-brown text-center text-white fs-1">Iron = ${iron}</h1>
    `
    let totalElm = document.getElementById('iron-total')
    totalElm.innerHTML = totalTemplate
}
drawTotal()



// Miner Functions
function drawMiners() {
    let minerTemplate = ""
    minerTemplate += `
        <p class=" col-7 rounded mdi mdi-magnet text-center bg-strong-brown text-white p-2 text-center fs-3"><span class="ps-4">Magnets: ${clickUpgrades.miners.quantity}</span></p>
    `
    let minerElm = document.getElementById('miners')
    minerElm.innerHTML = minerTemplate
}
drawMiners()

function buyMiners() {
    if (iron >= 10
    ) {
        iron -= 10
        clickUpgrades.miners.quantity += 1
        clickUpgrades.miners.price += 1
    }

    drawMiners()
    drawMinerCost()
    drawIronPerClick()
    drawTotal()
}





// Automatic Upgrade functions
function collectAutoUpgrades() {
    for (let key in automaticUpgrades) {
        let automatic = automaticUpgrades[key]
        iron += automatic.quantity * automatic.multiplier
    }
    drawElectromagnetic()
}

function buyElectromagnetic() {
    if (iron >= 20
    ) {
        iron -= 20
        automaticUpgrades.electromagnetic.quantity += 1
        automaticUpgrades.electromagnetic.price += 1
    }
    drawTotal()
    drawElectromagnetic()
    drawElectromagneticCost()
    drawAutoIronPer3Sec()
}

function drawElectromagnetic() {
    let electricTemplate = ""
    electricTemplate += `
        <p class=" col-7 rounded bg-strong-brown text-white p-2 text-center fs-3 mdi mdi-lightning-bolt"><span class="ps-4">Volts : ${automaticUpgrades.electromagnetic.quantity}</span></p>
    `
    let electricElm = document.getElementById('electric')
    electricElm.innerHTML = electricTemplate
    drawTotal()
}
drawElectromagnetic()

setInterval(collectAutoUpgrades, 3000)

function buyThunderBolt() {
    let double = 2
    let ten = 10
    if (iron >= thunder.bolts.price
    ) {
        iron *= double,
            iron -= thunder.bolts.price,
            thunder.bolts.quantity += 1,
            thunder.bolts.price *= ten
    }
    drawTotal()
    drawThunderBoltCost()
    drawThunderBolts()
}

function drawThunderBolts() {
    let thunderBoltTemplate = ""
    thunderBoltTemplate += `
        <p class="offset-5 col-7 rounded bg-strong-brown text-white p-2 text-center fs-3 "><span> ⚡Thunder Bolts⚡: ${thunder.bolts.quantity}</span></p>
        `
    let thunderBoltElm = document.getElementById('thunder-bolt')
    thunderBoltElm.innerHTML = thunderBoltTemplate
}
drawThunderBolts()

function drawThunderBoltCost() {
    let thunderBoltCostTemplate = ""
    thunderBoltCostTemplate += `
        <p class="offset-7 col-5 rounded text-center text-white p-2 bg-light-brown fs-5">Cost: ${thunder.bolts.price}</p>
        `
    let thunderBoltCostElm = document.getElementById('thunder-bolt-cost')
    thunderBoltCostElm.innerHTML = thunderBoltCostTemplate
}
drawThunderBoltCost()

function buyClickQuotes() {
    if (iron >= click.quotes.price
    ) {
        iron -= click.quotes.price,
        click.quotes.price *= 5
        click.quotes.quantity += 1
        alert(quote(generateQuote))
        
    }
    drawTotal()
    drawClickQuotesPrice()
    drawClickQuotes()
    
}


function drawClickQuotes() {
    let drawClickQuotesTemplate = ""
    drawClickQuotesTemplate += `
    <p class=" offset-5 col-7 rounded bg-strong-brown text-white p-2 text-center fs-3 "><span> Click Quotes: ${click.quotes.quantity}</span></p>
    `
    let drawClickQuotesElm = document.getElementById('click-quotes')
    drawClickQuotesElm.innerHTML = drawClickQuotesTemplate
}
drawClickQuotes()

function drawClickQuotesPrice() {
    let drawClickQuotesPriceTemplate = ""
    drawClickQuotesPriceTemplate += `
        <p class="offset-7 col-5 rounded text-center text-white p-2 bg-light-brown fs-5">Cost: ${click.quotes.price}</p>
    `
    let drawClickQuotesPriceElm = document.getElementById('click-quotes-price')
    drawClickQuotesPriceElm.innerHTML = drawClickQuotesPriceTemplate
}
drawClickQuotesPrice()





// Displaying Items
function drawMinerCost() {
    let minerCostTemplate = ""
    minerCostTemplate += `
        <p class=" col-5 bg-light-brown text-white text-center rounded p-2 fs-5">Cost: ${clickUpgrades.miners.price}</p>
    `
    let minerCostElm = document.getElementById('miner-cost')
    minerCostElm.innerHTML = minerCostTemplate
}
drawMinerCost()

function drawElectromagneticCost() {
    let voltageCostTemplate = ""
    voltageCostTemplate += `
        <p class=" col-5 rounded text-center bg-light-brown text-white p-2 fs-5">Cost: ${automaticUpgrades.electromagnetic.price}</p>
    `
    let voltageCostElm = document.getElementById('electromagnetic-cost')
    voltageCostElm.innerHTML = voltageCostTemplate
}
drawElectromagneticCost()

function drawIronPerClick() {
    let ironPerClickTemplate = ""
    ironPerClickTemplate += `
        <p class=" offset-4 col-6 bg-orange-brown rounded text-center text-white p-2 fs-5">Iron Per Click: ${clickUpgrades.miners.quantity + 1}</p>    
        `
    let ironPerClick = document.getElementById('iron-per-click')
    ironPerClick.innerHTML = ironPerClickTemplate
}
drawIronPerClick()

function drawAutoIronPer3Sec() {
    let autoIronPer3SecTemplate = ""
    autoIronPer3SecTemplate += `
        <p class=" offset-4 col-6 bg-orange-brown rounded text-white text-center p-2 fs-5">Per 3 Seconds: ${automaticUpgrades.electromagnetic.quantity * automaticUpgrades.electromagnetic.multiplier}</p>    
        `
    let autoIronPer3Sec = document.getElementById('auto-iron-per-3-sec')
    autoIronPer3Sec.innerHTML = autoIronPer3SecTemplate
}
drawAutoIronPer3Sec()



