const express = require('express'); 
const app = express(); 
const cors = require('cors')
app.use(cors());

let jogadores = [
    { nome : 'Mano Brown', gols : 1, assistencias : 1, finalizacoes : 2, passes: 15, impedimentos: 2},
    { nome : 'Ice BLue',   gols : 0, assistencias : 2, finalizacoes : 5, passes: 9,  impedimentos: 0},
    { nome : 'Ed Rock',    gols : 1, assistencias : 0, finalizacoes : 3, passes: 8,  impedimentos: 1},
    { nome : 'Marcelo D2', gols : 2, assistencias : 0, finalizacoes : 3, passes: 11, impedimentos: 3},
    { nome : 'Pensador',   gols : 0, assistencias : 1, finalizacoes : 6, passes: 9,  impedimentos: 1},
    { nome : 'Projota',    gols : 3, assistencias : 0, finalizacoes : 3, passes: 18, impedimentos: 4},
    { nome : 'Emicida',    gols : 2, assistencias : 1, finalizacoes : 1, passes: 9,  impedimentos: 0},     
  ];


app.get('/jogadores', (req, res)=> res.send(jogadores))


app.listen('3001');
