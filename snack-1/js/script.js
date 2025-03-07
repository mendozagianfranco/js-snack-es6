// Snack 1
// Creare un array di oggetti:
// Ogni oggetto descriverà una bici da corsa con le seguenti proprietà: nome e peso.
// Stampare a schermo la bici con peso minore.

const bikes = [
    { name: 'Bianchi', weight: 7.8 },
    { name: 'Look', weight: 8 },
    { name: 'Canyon', weight: 7 },
    { name: 'Pinarello', weight: 7.2 },
    { name: 'Colnago', weight: 8.4 }
];

console.log(bikes[2].weight);

let bikeWeights = [];

for (let i = 0; i < bikes.length; i++) {
    let currentBike = bikes[i];
    let currentBikeWeight = currentBike.weight;
    bikeWeights.push(currentBikeWeight);
}

console.log(Math.min(...bikeWeights));
console.log(Math.min.apply(Math, bikeWeights));
