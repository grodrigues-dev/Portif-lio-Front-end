class JogadorService {

    constructor(){
      this._http = new HttpService();
    }

    importarJogadores(){
        return new Promise((resolve, reject)=> {
          this._http.get('http://localhost:3001/jogadoresrap')
          .then(jogadores => {
            resolve(jogadores.map(objeto =>  new Jogador(objeto.nome, objeto.gols, objeto.assistencias, 
              objeto.finalizacoes,objeto.impedimentos, objeto.passes)))
              console.log(jogadores);
            })
            .catch(erro => {
                console.log(erro); 
                reject("Não Foi possiovel adicionar os jogadores")

          })
    })

  }
    importarJogadoresAnime(){
        return new Promise((resolve, reject)=> {
          this._http.get('http://localhost:3001/jogadoresAnime')
          .then(jogadores => {
            resolve(jogadores.map(objeto =>  new Jogador(objeto.nome, objeto.gols, objeto.assistencias, 
              objeto.finalizacoes,objeto.impedimentos, objeto.passes)))
              console.log(jogadores);
            })
            .catch(erro => {
                console.log(erro); 
                reject("Não Foi possiovel adicionar os jogadores")

          })
    })

  }

  
    importarJogadoresHeroi(){
        return new Promise((resolve, reject)=> {
          this._http.get('http://localhost:3001/jogadoresHeroi')
          .then(jogadores => {
            resolve(jogadores.map(objeto =>  new Jogador(objeto.nome, objeto.gols, objeto.assistencias, 
              objeto.finalizacoes,objeto.impedimentos, objeto.passes)))
              console.log(jogadores);
            })
            .catch(erro => {
                console.log(erro); 
                reject("Não Foi possiovel adicionar os jogadores")

          })
    })

  }
  

}