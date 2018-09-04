var AVANCA = 39;
var RETORNA = 37;
var INTERACAO = 88;
var VOLTA = 90;
var CONFIRMA = 13;

this.pressionaTecla = function(e){
    switch (e.keyCode){
        case this.AVANCA:
        console.log("Teste");
            break;
        case this.RETORNA:
        console.log("Teste");
            break;
        case this.CIMA:
        console.log("Teste");
            break;
        case this.VOLTA:
        console.log("Teste");
            break;
        case this.CONFIRMA:
            pronto = true;
            break;
    }
}