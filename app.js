let iron = 0

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
        multiplier: 20
    }
};


function mine() {
    iron++ 
    for(let key in clickUpgrades) {
        let upgrade = clickUpgrades[key]
        iron += upgrade.quantity * upgrade.multiplier 
    }
    drawTotal()
}

function drawTotal() {
    let totalTemplate = ""
    totalTemplate += `
        <div class="bg-dark p-2 text-white text-end fs-5">Iron Count = ${iron}</div>
    `
    let totalElm = document.getElementById('iron-total')
    totalElm.innerHTML = totalTemplate
}
drawTotal()



// Miner Functions
 function drawMiners() {
    let minerTemplate = ""
    minerTemplate += `
        <div class="bg-light p-2 text-center text-dark fs-5"># of miners = ${clickUpgrades.miners.quantity}</div>
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
    drawTotal()
    drawMiners()
    drawMinerCost()
 }





// Automatic Upgrade functions
 function collectAutoUpgrades () {
    for(let key in automaticUpgrades){
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
 }

 function drawElectromagnetic() {
    let electricTemplate = ""
    electricTemplate += `
        <div class="bg-light p-2 text-center text-dark fs-5"># of volts = ${automaticUpgrades.electromagnetic.quantity}</div>
    `
    let electricElm = document.getElementById('electric')
    electricElm.innerHTML = electricTemplate
    drawTotal()
}
drawElectromagnetic()

setInterval(collectAutoUpgrades, 3000)







// Displaying Prices
function drawMinerCost() {
    let minerCostTemplate = ""
    minerCostTemplate += `
        <p class=" offset-4 col-4 bg-info p-2 fs-5">Miner costs: ${clickUpgrades.miners.price}</p>
    `
    let minerCostElm = document.getElementById('miner-cost')
    minerCostElm.innerHTML = minerCostTemplate
}
drawMinerCost()

function drawElectromagneticCost() {
    let voltageCostTemplate = ""
    voltageCostTemplate += `
        <p class=" offset-4 col-4 bg-info p-2 fs-5">voltage costs: ${automaticUpgrades.electromagnetic.price}</p>
    `
    let voltageCostElm = document.getElementById('electromagnetic-cost')
    voltageCostElm.innerHTML = voltageCostTemplate
}
drawElectromagneticCost()



