var botao_tutorial = document.getElementById('Btutorial');
var paragrafo_principal = document.getElementById('principal');
var i = 0
var velocidade = 10;  //Define a velocidade da animação do texto
var input_personagem = document.getElementById('personagem')
function recarregar(){
    window.location.reload()
}

function tutorial(){

    document.getElementById('Ttutorial').innerHTML = "Tutorial do jogo";//Titulo do Tutorial.

    var texto_tutorial = document.getElementById("tutorial").innerText;//pega o texto da tag com id tutorial que está escondida
    if(i < texto_tutorial.length){ //Cria a animação do texto
        paragrafo_principal.innerHTML += texto_tutorial.charAt(i);
        i++;
        setTimeout(tutorial, velocidade);
    }
    botao_tutorial.remove(); //Remove o botão de tutorial após ser pressionado.
}
input_personagem.addEventListener("keypress", function(event){
    if(event.key === "Enter"){
        event.preventDefault();
        definir()
    }
});
function definir(){
    var nome_ = document.getElementById('personagem').value;//Nome do personagem digitado pelo usuário
    var nome = nome_.charAt(0).toUpperCase() + nome_.slice(1) //Deixa a primeira letra do nome em maíusculo.
    var texto1 = nome + document.getElementById('texto1').innerText + nome + document.getElementById('texto1.1').innerText; //texto oculto do HTML.


    if(nome == ''){
        alert("Digite um nome!")

        return
    }

    paragrafo_principal.innerHTML = texto1

    document.getElementById('Ttutorial').innerHTML = "";

    var definir = document.getElementById('personagem');
    var botao_definir = document.getElementById('defb');
    var corpo = document.getElementById('corpo');




    botao_tutorial.remove()
    definir.remove()
    botao_definir.remove()
    corpo.remove()

    var escolha = document.createElement("button");
    escolha.innerHTML = "Ligar para o governo";
    escolha.id = "escolha1"
    escolha.className = "botao_escolha"
    escolha.onclick = function escolha1(){
        paragrafo_principal.innerHTML = nome+" liga para o governo, ninguém atende.";

        escolha.remove()


        escolha2.innerHTML = "Ligar Novamente"

        escolha2.onclick = function(){
            paragrafo_principal.innerHTML = "Parece que ligar para o governo não adianta muita coisa. Quer tentar mais uma vez?"
            escolha2.innerHTML = "Ligar mais uma vez";
            escolha2.onclick = function maisuma(){
                paragrafo_principal.innerHTML = "Após muitas tentativas falhas de ligar para o governo, as sirenes tocam, as bombas caem e "+nome+" acaba sem salvação, não ligue para o governo, "+nome+"<center>FIM</center>"
                escolha2.innerHTML = "Jogar novamente"
                escolha3.remove()
                escolha2.onclick = function recarregar(){
                    window.location.reload()
            }


            }

            escolha3.style.visibility = "visible"
            escolha3.innerHTML = "Cometer suicidio"
            escolha3.onclick = function suicide(){
                paragrafo_principal.innerHTML = nome + " comete suicidio e evita uma trágica morte por bomba nuclear."+nome+", tinha maneiras pra se salvar, mas infelizmente não o fez. Esse definitivamente não é o final bom. <br> <center>FIM</center>"
                escolha3.remove()
                escolha2.remove()

                var escolha4 = document.createElement("button");
                escolha4.innerHTML = "Jogar novamente";
                escolha4.id = "escolha4"
                escolha4.className = "botao_escolha"
                escolha4.onclick = function recarregar(){
                    window.location.reload()
                }
                document.body.appendChild(escolha4);

            }
            escolha.style.visibility = "hidden"

        }
        escolha3.style.visibility = "hidden"


    }
    document.body.appendChild(escolha);

    var escolha2 = document.createElement("button");
    escolha2.innerHTML = "Sair para fora";
    escolha2.id = "escolha2";
    escolha2.className = "botao_escolha"
    escolha2.onclick = function escolha21(){
        escolha2.remove()
        paragrafo_principal.innerHTML = nome + ", sai para fora. Do lado de fora o sol acabava de nascer, seria uma manhã tranquila, não fosse o iminente risco das explosões nucleares. "+ nome +", acaba encontrando um grupo de pessoas fazendo fila perto da floresta."
        escolha.innerHTML = "Investigar"
        escolha.onclick = function escolha22(){
            
            paragrafo_principal.innerHTML = "Ao investigar o grupo de pessoas, "+nome+" descobre que era uma passagem para um bunker, somente para pessoas autorizadas pelo governo. A entrada tinha cercas de arame."
            
            escolha.remove()
            escolha3.remove()

            var escolha5 = document.createElement("button");
            escolha5.innerHTML = "Tentar invadir";
            escolha5.id = "escolha5";
            escolha5.className = "botao_escolha"
            escolha5.onclick = function escolha23(){
                escolha6.remove()
                paragrafo_principal.innerHTML = nome + " ao pular uma cerca de arame que limitava as pessoas de entrarem. "+nome+", aproveitou que as pessoas estavam desesperadas demais para prestar atenção em algo e se misturou na fila para entrar no abrigo nuclear. Conseguiu entrar, no fundo havia um barulho ensurdecedor. Era o barulho das sirenes. "+nome+" consegue entrar no abrigo e fica salvo enquanto o mundo se destrói. Esse é o final bom ☺"+"<br/> <center>FIM</center>"
                escolha5.innerHTML = "Jogar novamente"
                escolha5.onclick = function recarregar(){
                    window.location.reload()
                }
            }
            document.body.appendChild(escolha5)

            var escolha6 = document.createElement("button")
            escolha6.innerHTML = "Não invadir";
            escolha6.id = "escolha6"
            escolha6.className = "botao_escolha"
            escolha6.onclick = function nInvadir(){
                escolha5.remove()
                paragrafo_principal.innerHTML = nome + " decide não invadir e fica do lado de fora da cerca, as sirenes apocalípticas tocam, infelizmente "+ nome+" não consegue sua salvação. <br/> <center>FIM</center>"
                escolha6.innerHTML = "Jogar novamente"
                escolha6.onclick = function recarregar(){
                    window.location.reload()
                }
            }
            document.body.appendChild(escolha6)
        }
    }
    document.body.appendChild(escolha2);

    var escolha3 = document.createElement("button");
    escolha3.innerHTML = "Não fazer nada";
    escolha3.id = "escolha3";
    escolha3.className = "botao_escolha";
    escolha3.onclick = function escolha31(){
        paragrafo_principal.innerHTML = nome + " decide não fazer nada e assistir o fim do mundo. A desesperadora sirene começa a tocar. Alguns minutos depois, o grande cogumelo radioativo aperece e você sente o calor da explosão. " + nome + " está morto. Parabéns, "+nome+". Obviamente esse final não é o bom"+"<center>FIM</center>"
        escolha.remove()
        escolha2.remove()
        escolha3.remove()

        var escolha7 = document.createElement("button");
        escolha7.innerHTML = "Jogar Novamente";
        escolha7.id = "escolha7";
        escolha7.className = "botao_escolha";
        escolha7.onclick = function escolha32(){
            recarregar()
        };
        document.body.appendChild(escolha7)

    }
    document.body.appendChild(escolha3)



}
