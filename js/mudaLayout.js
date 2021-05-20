(function(){
	"use strict"

	document.querySelector("#mudaLayout").addEventListener("click", function(){
		var containerCartoes = document.querySelector(".containerCartoes");

		containerCartoes.classList.toggle("containerCartoesLinha");

		if(containerCartoes.classList.contains("containerCartoesLinha")){
			this.textContent = "Blocos";
		} else {
			this.textContent = "Linhas";
		}
	});
})();
