import {Component} from 'angular2/core';

@Component({
    selector: 'my-app',
    templateUrl: 'pages/imc-sample.html'
})

export class AppComponent { 
    
    peso = 0;
    altura = 0;
    imc = 0;
    resultadoIMC = '';
    
    calcularIMC(){
        if (this.altura <= 0 || this.peso <= 0)
        {
            this.resultadoIMC ='Valor de peso e altura deve ser maior que zero.';    
        }
        else
        {        
            var imc = this.peso / Math.pow(this.altura, 2);
            var resultado;
            
            if (imc < 17)
            {                
                resultado ='muito abaixo do peso';       
            }
            else if (imc < 18.49)
            {
                resultado ='abaixo do peso';
            }
            else if (imc < 24.99)
            {
                resultado ='com peso normal';
            }
            else if (imc < 29.99)
            {
                resultado ='acima do peso';
            }
            else if (imc < 34.99)
            {
                resultado ='com obesidade grau 1';
            }
            else if (imc < 39.99)
            {
                resultado ='com obesidade grau 2 (severa)';
            }
            else
            {
                resultado ='com obesidade grau 3 (morbida)';
            }
            
            this.resultadoIMC =`Seu IMC é ${imc}. Você está ${resultado}!`;
        }
    }    
}