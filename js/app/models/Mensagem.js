class Mensagem{
    constructor(texto=""){
        this._msg = texto;
    }

    get msg(){
        return this._msg
    }

    set msg(msg){
        this._msg = msg;
    }
}