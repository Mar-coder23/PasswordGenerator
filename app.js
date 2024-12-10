let input = document.querySelector('.input');
let btn = document.querySelector('button');

function passwordGenerate(){

adjectives = ['Courageous', 'Vibrant', 'Sincere', 'Brave', 'Creative', 'Compassionate', 'Noble',
  'Innovative', 'Charming', 'Persistent', 'Optimistic', 'Resourceful', 'Fearless', 'Humble', 'Radiant', 'Jubilant', 'Dynamic', 'Resilient', 'Elegant', 'Ambitious']
verbs = ['Create', 'Explore', 'Inspire', 'Adapt', 'Achieve', 'Imagine', 'Reflect', 'Transform', 'Develop', 'Empower', 'Innovate', 'Challenge', 'Motivate', 'Build', 'Lead',
  'Change', 'Strengthen', 'Discover', 'Conquer', 'Unite', 'Evolve']
const randomInt = Math.floor(Math.random() * 90) + 10;

let passwordOne = adjectives[Math.floor(Math.random() * adjectives.length)] + ' ' + verbs[Math.floor(Math.random() * verbs.length)] + ' ' + randomInt;
input.innerHTML = passwordOne;
}



