import 'reflect-metadata';

import AppComponent from '../app/app.component';
import { expect } from 'chai';

describe('AppComponent', () => {
  let viewModel: AppComponent;
  
  beforeEach(() => {
    viewModel = new AppComponent();
  });

  it('should fail', () => {
    viewModel.calcularIMC();
    expect(viewModel.resultadoIMC).to.be.equal("Valor de peso e altura deve ser maior que zero.");
  });

  it('should fail peso equal zero', () => {
    viewModel.peso = 0;
    viewModel.altura = 150;
    viewModel.calcularIMC();
    expect(viewModel.resultadoIMC).to.be.equal("Valor de peso e altura deve ser maior que zero.");
  });

  it('should fail altura equal zero', () => {
    viewModel.peso = 60;
    viewModel.altura = 0;
    viewModel.calcularIMC();
    expect(viewModel.resultadoIMC).to.be.equal("Valor de peso e altura deve ser maior que zero.");
  });
});