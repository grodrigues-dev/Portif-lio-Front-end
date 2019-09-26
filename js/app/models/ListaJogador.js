class ListaJogador{

    constructor(trap){
        this._jogadores =[];
        this._trap = trap;
    }

    addLista(jogador){
        this._jogadores.push(jogador);
        this._trap(this)
    }

    get jogadores(){
        return [].concat(this._jogadores);
    }

    limparLista(){
        this._jogadores = []
        this._trap(this)
    }
}