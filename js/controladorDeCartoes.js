var controladorDeCartoes = (function(){
	"use strict"

	function decideTipoCartao(conteudo){
		var quebras = conteudo.split("<br>").length;
		var totalDeLetras = conteudo.replace(/<br>/g, " ").length;

		var tamMaior = conteudo.replace(/<br>/g, " ")
		                       .split(" ")
		                       .reduce(function(anterior, palavra){
								   if(palavra.length > anterior.length) {
							   	       return palavra;
								   }
								   return anterior;
		                       }).length;

		var tipoCartao = "cartao--textoPequeno";

		if(tamMaior < 9 && quebras < 5 && totalDeLetras < 55) {
			tipoCartao = "cartao--textoGrande";
		} else if(tamMaior < 12 && quebras < 6 && totalDeLetras < 75) {
			tipoCartao = "cartao--textoMedio";
		}

		return tipoCartao
	}

	var intervaloSyncEdicao;
	function editaCartaoHandler(event){
		clearInterval(intervaloSyncEdicao);

		intervaloSyncEdicao = setTimeout(function(){
			$(document).trigger("precisaSincronizar");
		}, 1000);
	}

	var contador = 0;

	function adicionaCartao(conteudo, cor){

		contador++;

		var tipoCartao = decideTipoCartao(conteudo);

		var conteudoTag = $("<p>").addClass("cartao-conteudo")
								  .on("input",editaCartaoHandler)
		                          .append(conteudo)

		var opcoes = criaOpcoesDoCartao(contador);

		$("<div>").attr("id","cartao_" + contador)
		          .attr("tabindex", 0)
                  .addClass("cartao")
                  .addClass(tipoCartao)
                  .append(opcoes)
                  .append(conteudoTag)
                  .css("background-color", cor)
				  .prependTo(".containerCartoes");
	}

	return {
		adicionaCartao: adicionaCartao
		,idUltimoCartao: function(){
			return contador;
		}
	}

})();
