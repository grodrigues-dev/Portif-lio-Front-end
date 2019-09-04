document.querySelector("#cadastrar").addEventListener('click', function(event){
    event.preventDefault();


let jogador = getForm(document.querySelector('#form'));

function getForm(form){
    let jogador = {
        nome: form.nome.value, 
        gols: form.gols.value, 
        as: form.as.value, 
        fin: form.fin.value, 
        passes: form.passes.value, 
        imp: form.imp.value, 
        pontos: CalcularPontos(this.gols.value, this.as.value, this.fin.value, this.passes.value, this.imp.value), 
    }
  
    return jogador
}

let err = ValidarJogador(jogador);
    if(err.length>0){
        showErros(err);
        return;
    }

function createTd(dado){
    let td = document.createElement('td'); 
    td.textContent = dado;
    return td; 
}

function createTR(jogador){
    let jogadorTr = document.createElement('tr'); 
    jogadorTr.appendChild(createTd(jogador.nome)); 
    jogadorTr.appendChild(createTd(jogador.gols)); 
    jogadorTr.appendChild(createTd(jogador.as)); 
    jogadorTr.appendChild(createTd(jogador.fin)); 
    jogadorTr.appendChild(createTd(jogador.passes)); 
    jogadorTr.appendChild(createTd(jogador.imp));
    jogadorTr.appendChild(createTd(jogador.pontos[0]));
    jogadorTr.appendChild(createTd(jogador.pontos[1]));
    return jogadorTr;
}


let inputJogador = createTR(jogador); 

document.querySelector('table').appendChild(inputJogador);

form.reset();

document.querySelector('#msg-erro').innerHTML='';
  
}); 


function ValidarJogador(jogador){    
    let err = []; 
    if(jogador.nome.length==0){
        err.push("O nome está vazio"); 
    }
    if(jogador.gols.length==0 || isNaN(jogador.gols) || (jogador.gols<0)){
        err.push("Quantidade de gols inválida") ;
    }
    if((jogador.as.length==0) || (jogador.as>20) || isNaN(jogador.as) || (jogador.as<0)){
        err.push("Quantidade de assistências  inválida");
    }
    if((jogador.fin.length==0) || (jogador.fin>20) || isNaN(jogador.fin) || (jogador.fin<0)){
        err.push("Quantidade de finalizações inválida");
    }
    if((jogador.passes.length==0) || (jogador.passes>20) || isNaN(jogador.passes) || (jogador.passes<0)){
        err.push("Quantidade de passes inválida");
    }
    if((jogador.imp.length==0) || (jogador.imp>20) || isNaN(jogador.imp) || (jogador.imp<0)){
        err.push("Quantidade de impedimentos inválida");
    }
    console.log(err);
    
return err;
}

function showErros(erros){
    let ul = document.querySelector('#msg-erro');
    ul.innerHTML = "";
    erros.forEach(function(erro){
        let li = document.createElement('li'); 
        li.textContent = erro;
        ul.appendChild(li);    
    });
}