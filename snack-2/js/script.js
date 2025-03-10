// Snack2
// Creare un array di oggetti di squadre di calcio.
// Ogni squadra avrà diverse proprietà: nome, punti fatti, falli subiti.
// Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
// Generare numeri random al posto degli 0 nelle proprietà “punti” fatti e “falli subiti”. 
// Infine, creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.

const teams = [
    { name: 'Milan', points: 0, fouls: 0 },
    { name: 'Inter', points: 0, fouls: 0 },
    { name: 'Juventus', points: 0, fouls: 0 },
    { name: 'Napoli', points: 0, fouls: 0 },
    { name: 'Torino', points: 0, fouls: 0 },
    { name: 'Roma', points: 0, fouls: 0 },
];

for (let i = 0; i < teams.length; i++) {
    let currentTeam = teams[i];
    currentTeam.points = getRndInteger(0, 100);
    currentTeam.fouls = getRndInteger(0, 100);
}

const teamsFouls = [];

for (let i = 0; i < teams.length; i++) {
    let currentTeam = teams[i];
    // let obj = {};
    // obj.name = currentTeam.name;
    // obj.fouls = currentTeam.fouls;
    const newteam = {
        name: currentTeam.name,
        fouls: currentTeam.fouls
    };
    // teamsFouls.push(obj);
    teamsFouls.push(newteam);
}

console.log(teamsFouls);


function getRndInteger(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}