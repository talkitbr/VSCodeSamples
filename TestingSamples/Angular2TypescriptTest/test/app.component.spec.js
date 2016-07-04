"use strict";
require('reflect-metadata');
var app_component_1 = require('../app/app.component');
var chai_1 = require('chai');
describe('AppComponent', function () {
    var viewModel;
    beforeEach(function () {
        viewModel = new app_component_1.default();
    });
    it('should fail', function () {
        viewModel.calcularIMC();
        chai_1.expect(viewModel.resultadoIMC).to.be.equal("Valor de peso e altura deve ser maior que zero.");
    });
    it('should fail peso equal zero', function () {
        viewModel.peso = 0;
        viewModel.altura = 150;
        viewModel.calcularIMC();
        chai_1.expect(viewModel.resultadoIMC).to.be.equal("Valor de peso e altura deve ser maior que zero.");
    });
    it('should fail altura equal zero', function () {
        viewModel.peso = 60;
        viewModel.altura = 0;
        viewModel.calcularIMC();
        chai_1.expect(viewModel.resultadoIMC).to.be.equal("Valor de peso e altura deve ser maior que zero.");
    });
    it('should pass', function () {
        viewModel.peso = 60;
        viewModel.altura = 150;
        viewModel.calcularIMC();
        chai_1.expect(viewModel.resultadoIMC).not.to.be.equal("Valor de peso e altura deve ser maior que zero.");
    });
});
//# sourceMappingURL=app.component.spec.js.map