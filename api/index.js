const express = require('express'); 
const app = express(); 
const cors = require('cors')
app.use(cors());

let jogadoresRap = [
    { nome : 'Mano Brown', gols : 1, assistencias : 1, finalizacoes : 2, passes: 15, impedimentos: 2},
    { nome : 'Ice BLue',   gols : 0, assistencias : 2, finalizacoes : 5, passes: 9,  impedimentos: 0},
    { nome : 'Ed Rock',    gols : 1, assistencias : 0, finalizacoes : 3, passes: 8,  impedimentos: 1},
    { nome : 'Marcelo D2', gols : 2, assistencias : 0, finalizacoes : 3, passes: 11, impedimentos: 3},
    { nome : 'Pensador',   gols : 0, assistencias : 1, finalizacoes : 6, passes: 9,  impedimentos: 1},
    { nome : 'Projota',    gols : 3, assistencias : 0, finalizacoes : 3, passes: 18, impedimentos: 4},
    { nome : 'Emicida',    gols : 2, assistencias : 1, finalizacoes : 1, passes: 9,  impedimentos: 0}    
  ];


  let jogadoresAnime = [
    { nome : 'Gon',        gols : 1, assistencias : 2, finalizacoes : 3, passes: 16,  impedimentos: 5},
    { nome : 'Killua',     gols : 1, assistencias : 0, finalizacoes : 1, passes: 15,  impedimentos: 7},
    { nome : 'Shikamaru',  gols : 2, assistencias : 1, finalizacoes : 2, passes: 9,   impedimentos: 3},
    { nome : 'Yamato',     gols : 2, assistencias : 0, finalizacoes : 0, passes: 10,  impedimentos: 4},
    { nome : 'Ash',        gols : 1, assistencias : 2, finalizacoes : 0, passes: 19,  impedimentos: 1},
    { nome : 'Hantaro',    gols : 2, assistencias : 1, finalizacoes : 1, passes: 8,   impedimentos: 0},
    { nome : 'Bojack',     gols : 1, assistencias : 0, finalizacoes : 2, passes: 8,   impedimentos: 0}
  ]


  let jogadoresHeroi = [
    { nome : 'Aquaman',        gols : 1, assistencias : 0, finalizacoes : 1, passes: 1,   impedimentos: 0},
    { nome : 'Homem Sereia',   gols : 1, assistencias : 0, finalizacoes : 2, passes: 2,   impedimentos: 1},
    { nome : 'Shazam',         gols : 2, assistencias : 3, finalizacoes : 1, passes: 1,   impedimentos: 3},
    { nome : 'DeadPool',       gols : 1, assistencias : 2, finalizacoes : 3, passes: 4,   impedimentos: 1},
    { nome : 'Gavião Arqueiro',gols : 1, assistencias : 2, finalizacoes : 0, passes: 9,   impedimentos: 2},
    { nome : 'Homem Aranha',   gols : 0, assistencias : 0, finalizacoes : 0, passes: 8,   impedimentos: 0},
    { nome : 'Superman',       gols : 1, assistencias : 0, finalizacoes : 0, passes: 5,   impedimentos: 1}
  ]

app.get('/jogadoresrap', (req, res)=> res.send(jogadoresRap));


app.get('/jogadoresanime', (req, res)=> res.send(jogadoresAnime));

app.get('/jogadoresheroi', (req, res)=> res.send(jogadoresHeroi));

app.listen('3001');
