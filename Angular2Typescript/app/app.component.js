System.register(['angular2/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var AppComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            AppComponent = (function () {
                function AppComponent() {
                    this.peso = 0;
                    this.altura = 0;
                    this.imc = 0;
                    this.resultadoIMC = '';
                }
                AppComponent.prototype.calcularIMC = function () {
                    if (this.altura <= 0 || this.peso <= 0) {
                        this.resultadoIMC = 'Valor de peso e altura deve ser maior que zero.';
                    }
                    else {
                        var imc = this.peso / Math.pow(this.altura, 2);
                        var resultado;
                        if (imc < 17) {
                            resultado = 'muito abaixo do peso';
                        }
                        else if (imc < 18.49) {
                            resultado = 'abaixo do peso';
                        }
                        else if (imc < 24.99) {
                            resultado = 'com peso normal';
                        }
                        else if (imc < 29.99) {
                            resultado = 'acima do peso';
                        }
                        else if (imc < 34.99) {
                            resultado = 'com obesidade grau 1';
                        }
                        else if (imc < 39.99) {
                            resultado = 'com obesidade grau 2 (severa)';
                        }
                        else {
                            resultado = 'com obesidade grau 3 (morbida)';
                        }
                        this.resultadoIMC = "Seu IMC \u00E9 " + imc + ". Voc\u00EA est\u00E1 " + resultado + "!";
                    }
                };
                AppComponent = __decorate([
                    core_1.Component({
                        selector: 'my-app',
                        templateUrl: 'pages/imc-sample.html'
                    }), 
                    __metadata('design:paramtypes', [])
                ], AppComponent);
                return AppComponent;
            }());
            exports_1("AppComponent", AppComponent);
        }
    }
});
//# sourceMappingURL=app.component.js.map