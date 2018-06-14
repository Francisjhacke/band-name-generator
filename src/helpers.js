import nouns from './config/nouns.js';
import adjectives from './config/adjectives.js';

export function randomizer(arr) {
    return arr[Math.floor(Math.random() * arr.length)];
}

export function GenerateBandName() {
   return `${randomizer(adjectives)} ${randomizer(adjectives)} ${randomizer(nouns)}`;
}