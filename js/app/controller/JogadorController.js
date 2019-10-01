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
    
        //Associa model e view
        this._listaJogador =  new Bind(
          new ListaJogador(), new Jogadorview($('#jogadorview')),
          'addLista', 'limparLista');

              
        this._mensagem = new Bind(
          new Mensagem(), new Mensagemview($('#msg')), 
          'msg');        
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
  

  
    document.querySelector('#form').reset();
    document.querySelector('#nome').focus();   
  }

  importarJogadores(){
    let xhr = new XMLHttpRequest(); 
    xhr.open('GET', 'http://localhost:3001/jogadores'); 
    xhr.onreadystatechange = () => {
      if(xhr.readyState == 4){ // Codigo ajax para requisição concluiida
        if(xhr.status ==200){
          JSON.parse(xhr.responseText).map(objeto => 
            new Jogador(objeto.nome, objeto.gols, objeto.assistencias, 
              objeto.finalizacoes,objeto.impedimentos, objeto.passes))
              .forEach(jogador => this._listaJogador.addLista(jogador));                 
        } else{
          console.log("Erro ao obter os dados");
        }
      }
    }
    xhr.send(); 
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