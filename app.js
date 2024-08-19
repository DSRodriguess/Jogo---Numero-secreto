alert('Boas vindas ao jogo do numero secreto!');
let numeroSecreto = 29;
console.log(numeroSecreto);
let chute 

while(chute != numeroSecreto){
    chute = prompt('Escolha um numero entre 0 e 30');

    if(chute == numeroSecreto){
        alert(`Parabéns, você descobriu o numero secreto! ${numeroSecreto}`);
    }
    else{
        if(chute > numeroSecreto){
        alert(`O numero secreto é maior que ${chute}`);
        } else{
            alert(`O numero secreto é menor que ${chute}`);
        }
    }
}

