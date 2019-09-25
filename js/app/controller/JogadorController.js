class JogadorController{
    constructor(){
        let $ = document.querySelector.bind(document); 
        this._nome = $('#nome');
        this._gols = $('#gols');
        this._assistencias = $('#as'); 
        this._finalizacoes = $('#fin'); 
        this._passes = $('#passes'); 
        this._imp = $('#imp')
        this._listaJogador = new ListaJogador();
        this._jogadorView = new Jogadorview($('#jogadorview'));
        this._jogadorView.update(this._listaJogador);
          
    }

 
    
  inputJogador(event) {
    event.preventDefault();
    this._listaJogador.addLista(this.createJogador());
    this._jogadorView.update(this._listaJogador)
    document.querySelector('#form').reset();
    document.querySelector('#nome').focus();
    console.log(this._listaJogador);
    
  }

createJogador(){
    return new Jogador(
        this._nome.value, 
        this._gols.value,
        this._assistencias.value,
        this._finalizacoes.value, 
        this._passes.value, 
        this._imp.value, 
        )
}
  
  
}