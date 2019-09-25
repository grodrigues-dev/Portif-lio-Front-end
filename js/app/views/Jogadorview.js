class Jogadorview{

    constructor(elemento){
        this._elemento = elemento;
    }

    _template(model){
        return `
        <table>
            <thead>
        <tr>
            <th>Nome</th>
            <th>Gols</th>
            <th>Assistências</th>
            <th>Finalizações</th>
            <th>Passes errados</th>
            <th>Impedimentos</th>
            <th>Total de pontos</th>
            <th>Classificação</th>
        </tr>       
        <thead> 
        <tbody>
        </tbody>
            ${model.jogadores.map(j=>{
               return `
                <tr>
                <td>${j.nome}</td>
                <td>${j.gols}</td>
                <td>${j.assistencias}</td>
                <td>${j.finalizacoes}</td>
                <td>${j.passes}</td>
                <td>${j.impedimentos}</td>
                <td>${j.total_pontos}</td>
                <td>${j.classificacao}</td>
                </tr>
               ` 
            }).join()}
        <tfoot>
        <td colspan="7"> <strong>CLASSIFICAÇÃO GERAL</strong></td>
        <td>
            ${
                (function(){
                    let total = 0; 
                    let media ="----------"
                    let i =0;
                    model.jogadores.forEach(j => {
                        total+=Number(j.total_pontos)
                        i++;
                        if((total/i)<=3){
                            media = "Muito Ruim"
                        } else if (total/i<=6){
                            media = "Ruim"
                        } else if (total/i<=12){
                            media = "Normal"
                        } else if (total/i<=19){
                            media = "Boa"
                        } else {
                            media = "Excepcional"
                        }
                    });
                    return media
                })() 
            }
        </td>
        </tfoot>
    </table>
    `;
    }

    update(model){
        this._elemento.innerHTML = this._template(model);
    }
}