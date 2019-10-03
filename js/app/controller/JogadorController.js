class JogadorController {
  constructor() {
    //captura os dados do form 
    let $ = document.querySelector.bind(document);
    this._nome = $('#nome');
    this._gols = $('#gols');
    this._assistencias = $('#as');
    this._finalizacoes = $('#fin');
    this._passes = $('#passes');
    this._imp = $('#imp')

    //Associa model e view
    this._listaJogador = new Bind(
      new ListaJogador(), new Jogadorview($('#jogadorview')),
      'addLista', 'limparLista');


    this._mensagem = new Bind(
      new Mensagem(), new Mensagemview($('#msg')),
      'msg');
  }

    importarJogadores() {
      let service = new JogadorService();
      Promise.all([
          service.importarJogadores(),
          service.importarJogadoresAnime(), 
          service.importarJogadoresHeroi()]).then(
            jogadores => {
             jogadores. 
             reduce((array1, array2)=> array1.concat(array2), [])
             .forEach(jogador => this._listaJogador.addLista(jogador)); 
            this._mensagem.msg = "Jogadores Adicionados"
          })
          .catch(error =>this._mensagem.msg = error);
  }

  


  //Faz o reset da tabela
  limparLista() {
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

  //instancia um objeto da classe jogador
  createJogador() {
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