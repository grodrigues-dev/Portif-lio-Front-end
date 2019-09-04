document.querySelector('#calc').addEventListener('click', Calc);

function Calc(){
    let jogador = document.querySelectorAll(".jogador"); 
    for (let i = 0; i < jogador.length; i++) {
    let pontos = CalcularPontos(
        jogador[i].querySelector('.gols').textContent, jogador[i].querySelector('.as').textContent, 
        jogador[i].querySelector('.fin').textContent, jogador[i].querySelector('.passes').textContent,
        jogador[i].querySelector('.imp').textContent);
    jogador[i].querySelector('.pontos').textContent = pontos[0].toFixed(2);   
    jogador[i].querySelector('.class').textContent = pontos[1];   
    }       
}

function CalcularPontos(g, a, f, p, i){
    let pontos = new Array (2);
    pontos[0] = (g*8)+ (a*5)+(f*2.5)-(p*0.3)+ (i*0.5);
    if(pontos[0]<=3){
        pontos[1] = "Jogador Muito Ruim"
        } else if(pontos[0]<=6){
            pontos[1] = "Jogador Ruim"
        } else if(pontos[0]<=12){
            pontos[1] = "Jogador Normal"
        } else if(pontos[0]<=19){
            pontos[1] = "Jogador Bom"
        }   else {
            pontos[1] = "Jogador excepcional"
        } 
    return pontos;
}
