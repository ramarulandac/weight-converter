'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.default = weightconverter;

// Weight converter, detects mass unit and converts the other unit KG<->LB
// params: mass: mass meassurement , i.e. 1000, Not lower o equal 0
//          unit : mass units   :'Kg','kilo', no case sensitive
//                              :'lb','Pound', no case sensitive
//

function weightconverter(mass, unit) {

    if ((unit.slice(0, 4).toUpperCase() === 'KILO' || unit.slice(0, 2).toUpperCase() === 'KG') && mass > 0) return mass * 2 + 'Lb';else if ((unit.slice(0, 5).toUpperCase() === 'POUND' || unit.slice(0, 2).toUpperCase() === 'LB') && mass > 0) return mass / 2 + 'Kg';
    return 'No valid mass or didn´t recognize units (kg,lb)';
}