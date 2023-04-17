// Functions Exercise
const a = '='.repeat(25);

// 1
function fozzieBear() {
    console.log('Wokka Wokka');
};
fozzieBear();

console.log(a);

// 2
function beaker(speak) {
    console.log(speak);
    console.log(speak);
    console.log(speak);
    console.log(speak);
};
beaker('Meep');

// 3
function muppetShow(a, b) {
    if (a === 'Muppet' && b == 'Show') {
        console.log("It's time to play the music.It's time to light the lights");
    }
};
muppetShow('Muppet', 'Show');
muppetShow('Sporka borka borka');

console.log(a);

// 4
function kermit() {
    return 'Kermit the Frog';
};
kermit();
console.log(kermit());

console.log(a);

// 5
function muppetShowSeasons(seasons) {
    if (seasons === 5) {
        return true;
    } else {
        return false;
    }
};

console.log(muppetShowSeasons(5));

console.log(a);

// 6
const man0rMuppet = function () {
    return 'Am I a man or am I Muppet';
};
man0rMuppet();
console.log(man0rMuppet());

console.log(a);

// 7
rainbowbowConnection = () => "Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me";
console.log(rainbowConnection());

// 8
// No

// 9
// Yes

// 10a
const newMuppetMovies = ['The Muppets', 'The Muppets Most Wanted'];

// 10b
const upperMovies = newMuppetMovies.map(function (movie) {
    return movie.toUpperCase();
});
console.log(upperMovies);

// Bonus
// 11a
const oldMuppetMovies = [
    "The Muppet Movie",
    "The Muppets Take Manhattan",
    "The Great Muppet Caper",
    "The Muppet Christmas Carol",
    "Muppet Treasure Island",
    "Muppets From Space"
];

// 11b
const twoMovies = oldMuppetMovies.filter(movie => movie === 'The Great Muppet Caper' || movie === 'Muppet Treasure Island');
console.log(twoMovies);

// 12a
const characters0ne = ['Statler', 'Waldorf'];

// 12b
const charactersTwo = ['The Swedish Chef', 'Animal', "Rowlf"];

// 12c
randomMuppet = (characters) => {
    console.log(characters[Math.floor(Math.random() * characters.length)]);
};

// 12d
randomMuppet(characters0ne);
randomMuppet(charactersTwo);

// 13
const caps = string => {
    let newString = '';
    for (i=0; i < string.length; i++){
        if (i % 2 === 0){
            newString += string[i].toUpperCase();
        } else if (string[i]=== '  '){
            newString += '  ';
        } else {
            newString += string[i].toLowerCase();
        }
    }
    console.log(newString);
}

caps ( 'Hello Worlddddddddddddddd ddddd ')