
const botaoDoEvento = document.getElementById("btn");
const inputValidacao = document.querySelectorAll(".item");

botaoDoEvento.addEventListener("click", function () {
        inputValidacao.forEach( function(item){

                if(item.value === ""){
                        item.classList.add('erro');
                        item.nextElementSibling.innerHTML = "*campo obrigatorio"
                }else{
                        item.classList.add("preenchido");
                        item.nextElementSibling.innerHTML = "";
                }

        });
});









































