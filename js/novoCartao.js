(function(){
	"use strict"

	$(".novoCartao").submit(function(event){

		var campoConteudo = $(".novoCartao-conteudo");
	
		var conteudo = campoConteudo.val().trim()
										  .replace(/\n/g, "<br>")
										  .replace(/\*\*([^\*][^\*]*)\*\*/g, "<b>$1</b>")
										  .replace(/\*([^\*]*)\*/g, "<em>$1</em>");

										  console.log(campoConteudo);

		if(conteudo){
			controladorDeCartoes.adicionaCartao(conteudo);
			$(document).trigger("precisaSincronizar");
		}

		campoConteudo.val("");

		event.preventDefault();

	});
})()
