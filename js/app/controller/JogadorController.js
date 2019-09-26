class JogadorController{
    constructor(){
        //captura os dados do form 
        let $ = document.querySelector.bind(document); 
        this._nome = $('#nome');
        this._gols = $('#gols');
        this._assistencias = $('#as'); 
        this._finalizacoes = $('#fin'); 
        this._passes = $('#passes'); 
        this._imp = $('#imp')

        
        this._listaJogador = new ListaJogador(model => this._jogadorView.update(model));

        //Seleciona a div onde será exibida a view de jogador
        this._jogadorView = new Jogadorview($('#jogadorview'));
        //Faz a primeira renderização da tabela
        this._jogadorView.update(this._listaJogador);

        this._mensagem = new Mensagem();
        this._mensagemView = new Mensagemview($('#msg'))
        this._mensagemView.update(this._mensagem);
    }

 //Faz o reset da tabela
  limparLista(){
    this._listaJogador.limparLista();
   
  } 
    
  //Dispara uma série de métodos para fazer a atualização da tabela
  inputJogador(event) {
    event.preventDefault();
    //Inclui o objeto jogador no array de objetos a serem renderizados na view de jogador
    this._listaJogador.addLista(this.createJogador());
    
    
    this._mensagem.msg = 'Jogador adicionado com sucesso';
    this._mensagemView.update(this._mensagem);

  
    document.querySelector('#form').reset();
    document.querySelector('#nome').focus();   
  }

//instancia um objeto da classe jogador
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