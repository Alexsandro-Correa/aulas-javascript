// Projeto: Luta

// Personagem - Knight / Sorcerer
// Inimigo - LittleMonster / BigMonster

let log = new Log(document.querySelector('.log'));

let char = new Knight ('Estarossa');
let monster = new BigMonster();

const stage = new Stage(
    char,
    monster,
    document.querySelector('#char'),
    document.querySelector('#monster'),
    log
);

stage.start();
