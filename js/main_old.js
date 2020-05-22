var oParameters = {
    'CostReward': {
        '20': { 'cost': 30, 'reward': 18 },
        '30': { 'cost': 65, 'reward': 23 },
        '65': { 'cost': 150, 'reward': 38 },
        '150': { 'cost': 240, 'reward': 48 },
        '240': { 'cost': 330, 'reward': 58 },
        '330': { 'cost': 500, 'reward': 88 },
        '500': { 'cost': 660, 'reward': 228 },
        '660': { 'cost': 0, 'reward': 0 }
    },
    'Percentual': { 'min': 20, 'max': 40 },
    'Message': { 'noGems': 'Não possui gemas suficientes', 'maxAllowed': 'Já rodou o máximo permitido' }
};

function runCat() {
    var oCost = document.getElementById("ipCost"),
        oMaxReward = document.getElementById("ipMaxReward"),
        oReward = document.getElementById("ipReward"),
        oGems = document.getElementById("ipGems");

    var vCost = parseInt(oCost.value),
        vMaxReward = parseInt(oMaxReward.value),
        vGems = parseInt(oGems.value);

    if(vGems >= vCost && vCost > 0) {
        var vMin = Math.floor(vMaxReward * (oParameters['Percentual']['min'] / 100)),
            vMaxRnd = Math.ceil(vMaxReward * (oParameters['Percentual']['max'] / 100));

        oReward.value = Math.floor(Math.random() * (vMaxRnd - vMin + 1)) + vMin;

        oGems.value = vGems + parseInt(oReward.value);

        oCost.value = oParameters['CostReward'][vCost].cost;
        oMaxReward.value = oParameters['CostReward'][vCost].reward;
    } else {
        if(vCost > 0) {
            window.alert(oParameters['Message']['noGems']);
        } else {
            window.alert(oParameters['Message']['maxAllowed']);
        }
    }
}