class Jogador {
    constructor (nome, gols, assistencias, finalizacoes, passes, impedimentos){
        this._nome = nome; 
        this._gols = gols; 
        this._assistencias = assistencias; 
        this._finalizacoes = finalizacoes; 
        this._passes = passes; 
        this._impedimentos = impedimentos;
        this._pontos = this.calcPontos( this._gols, this._assistencias, 
            this._finalizacoes, this._passes, this._impedimentos)
        Object.freeze(this)
    }

      calcPontos(gols, assistencias, finalizacoes, passes, impedimentos){
          let pontos = new Array(2); 
          pontos[0] = ((gols *8) + (assistencias*5) + (finalizacoes*2.5) 
          - (passes*0.3) - (impedimentos*0.5)).toFixed(1);
          if(pontos[0]<=3){
              pontos[1] = "Jogador muito ruim"
          } else if(pontos[0]<=6){
              pontos[1] = "Jogador Ruim"
          } else if(pontos[0]<=12){
            pontos[1] = "Jogador Normal"
          } else if(pontos[0]<=19){
              pontos[1] = "Jogador Bom"
          } else {
              pontos[1] = "Jogador Excepicional"
          }
          return pontos 
      }

      get nome(){
          return this._nome;
      }

      get gols(){
          return this._gols;
      } 

      get assistencias(){
          return this._assistencias;
      }

      get finalizacoes(){
          return this._finalizacoes;
      }

      get passes(){
          return this._passes;
      }

      get impedimentos(){
          return this._impedimentos; 
      }

      get total_pontos(){
          return this._pontos[0];
      }

      get classificacao(){
          return this._pontos[1];
      }

}

