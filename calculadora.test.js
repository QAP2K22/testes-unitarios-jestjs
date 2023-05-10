const calculo = require("./calculadora")

describe("funções matemáticas",() =>{
    test("soma de dois números", ()=> {
        expect(calculo.soma(20,10)).toBe(30)
    })
})