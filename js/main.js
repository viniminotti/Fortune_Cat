/*
    main.js v 1.1       Fortune Cat
    v 1.1   2020-05-22  Anderson E A Rodrigues - andersonelielrodrigues@gmail.com
                        Vinicius Minotti - viniminotti@hotmail.com
    v 1.0   2020-04-23
*/
var oParameters = {
    'ParamArray': {
        '20': { 'cost': 30,
                'reward': 18,
                'nrorange': 2,
                'range1': { 'min': 22, 'max': 25, 'prob': 90 },
                'range2': { 'min': 26, 'max': 28, 'prob': 10 },
				'range3': { 'min': 0, 'max': 0, 'prob': 0  },
                'range4': { 'min': 0, 'max': 0, 'prob': 0  }
        },
        '30': { 'cost': 65,
                'reward': 23,
                'nrorange': 2,
                'range1': { 'min': 33, 'max': 36, 'prob': 87.5 },
                'range2': { 'min': 37, 'max': 48, 'prob': 12.5 },
                'range3': { 'min': 0, 'max': 0, 'prob': 0  },
                'range4': { 'min': 0, 'max': 0, 'prob': 0  }
        },
        '65': { 'cost': 150,
                'reward': 38,
                'nrorange': 3,
                'range1': { 'min': 70, 'max': 76, 'prob': 75 },
                'range2': { 'min': 77, 'max': 83, 'prob': 20 },
                'range3': { 'min': 84, 'max': 88, 'prob': 5 },
                'range4': { 'min': 0, 'max': 0, 'prob': 0  }
        },
        '150': { 'cost': 240, 
                 'reward': 48,
                 'nrorange': 3,
                 'range1': { 'min': 158, 'max': 170, 'prob': 75 },
                 'range2': { 'min': 171, 'max': 179, 'prob': 20 },
                 'range3': { 'min': 180, 'max': 188, 'prob': 5 },
                 'range4': { 'min': 0, 'max': 0, 'prob': 0  }
        },
        '240': { 'cost': 330, 
                 'reward': 58,
                 'nrorange': 3,
                 'range1': { 'min': 250, 'max': 264, 'prob': 75 },
                 'range2': { 'min': 265, 'max': 275, 'prob': 22 },
                 'range3': { 'min': 276, 'max': 288, 'prob': 3  },
                 'range4': { 'min': 0, 'max': 0, 'prob': 0  }
        },
        '330': { 'cost': 500, 
                 'reward': 88,
                 'nrorange': 4,
                 'range1': { 'min': 348, 'max': 355, 'prob': 79 },
                 'range2': { 'min': 356, 'max': 369, 'prob': 12 },
                 'range3': { 'min': 370, 'max': 380, 'prob': 7  },
                 'range4': { 'min': 381, 'max': 388, 'prob': 2  }
        },
        '500': { 'cost': 660, 
                 'reward': 228,
                 'nrorange': 4,
                 'range1': { 'min': 520, 'max': 535, 'prob': 79 },
                 'range2': { 'min': 536, 'max': 555, 'prob': 12 },
                 'range3': { 'min': 556, 'max': 573, 'prob': 7  },
                 'range4': { 'min': 574, 'max': 588, 'prob': 2  }
        },
        '660': { 'cost': 0, 
                 'reward': 0,
                 'nrorange': 4,
                 'range1': { 'min': 688, 'max': 738, 'prob': 85 },
                 'range2': { 'min': 739, 'max': 789, 'prob': 11 },
                 'range3': { 'min': 790, 'max': 840, 'prob': 3  },
                 'range4': { 'min': 841, 'max': 888, 'prob': 1  }
        }
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
        var vNroRange = oParameters['ParamArray'][vCost].nrorange,
            vRange1Prob = oParameters['ParamArray'][vCost]['range1'].prob,
            vRange2Prob = oParameters['ParamArray'][vCost]['range2'].prob,
            vRange3Prob = oParameters['ParamArray'][vCost]['range3'].prob,
            vRange4Prob = oParameters['ParamArray'][vCost]['range4'].prob,
            vMinRange = 0,
            vMaxRange = 0,
            vRange = 'range1',
            vMin = Math.ceil(1),
            vMax = Math.floor(100),
            vgetRandom = Math.floor(Math.random() * 100) + 1;

        if (vgetRandom >  vRange1Prob) {
        if ( (vgetRandom <=  (vRange1Prob + vRange2Prob)) ){
           vRange = 'range2';
		} else {
			if ( vgetRandom <=  (vRange1Prob + vRange2Prob + vRange3Prob) ) {
				   vRange = 'range3';
			} else {
				  vRange = 'range4';
				}
			};
         }
        vMinRange = oParameters['ParamArray'][vCost][vRange].min;
        vMaxRange = oParameters['ParamArray'][vCost][vRange].max;

        oReward.value = (Math.floor(Math.random() * (vMaxRange - vMinRange + 1)) + vMinRange) - vCost;

        oGems.value = vGems + parseInt(oReward.value);

        oCost.value = oParameters['ParamArray'][vCost].cost;
        oMaxReward.value = oParameters['ParamArray'][vCost].reward;
    } else {
        if(vCost > 0) {
            window.alert(oParameters['Message']['noGems']);
        } else {
            window.alert(oParameters['Message']['maxAllowed']);
        }
    }
}