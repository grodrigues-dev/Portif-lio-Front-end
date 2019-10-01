class ListaJogador{

    constructor(){
        this._jogadores =[];
     
    }

    addLista(jogador){
        this._jogadores.push(jogador);
       
    }

    get jogadores(){
        return [].concat(this._jogadores);
    }

    limparLista(){
        this._jogadores = []
        
    }
}