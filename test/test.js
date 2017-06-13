const expect = require('chai').expect
const weightconverter = require('..').default


describe('#weightconverter',function(){

  it(' Mass and units in kg are correctly passed by value',function(){
    const lbs = weightconverter(2000,'kg')
    expect(lbs).to.equal('4000Lb')

    const lbs1 = weightconverter(1500,'KIlos')
    expect(lbs1).to.equal('3000Lb')
  })

  it('mass and units in pounds are correctly passed by value ',function(){
    const kgs = weightconverter(4000,'lb')
    expect(kgs).to.equal('2000Kg')

    const kgs1 = weightconverter(3000,'poUNds')
    expect(kgs1).to.equal('1500Kg')
  })

  it('mass passed value is incorrect',function(){
      const wrongMassValue = weightconverter('wrongval','kg')
      expect(wrongMassValue).to.equal('No valid mass or didn´t recognize units (kg,lb)')
  })

  it('mass unit incorrect by value passed',function(){
    const wrongUnitValue = weightconverter(4000,'km')
    expect(wrongUnitValue).to.equal('No valid mass or didn´t recognize units (kg,lb)')

  })


})
