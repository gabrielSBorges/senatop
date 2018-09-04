(function(){
    this.pronto;

    window.addEventListener("keydown", function(e){
	    pressionaTecla(e);
    }, false);
    
    if (this.pronto == true){
        cenaExploracao();
    }
    

    function loop(){
	    window.requestAnimationFrame(loop, cnv);
	}
})();