// 1.
function fozzieBear(){
    console.log(`Wocka Wocka!`);
}
fozzieBear();
// 2.
function beaker(speak){
console.log(`${speak}, ${speak}, ${speak}, ${speak}`);
}
beaker(`Meep`);
// 3.
function werewolf(a, b){
    if (a === `Muppet` && b === `Show`){
    console.log(`It's time to play the music, It's time to light the lights.`)
}
}
    werewolf(`Muppet`, `Show`)
// 4.
function kermit(){
    return `Kermit the Frog`
}
// 5.
function muppetShowSeasons(seasons){
    if (seasons === 5){
        return true;
    }
    return false;
}
console.log(muppetShowSeasons(5));
// 6a.
const muppets =[
    `Kermit The Frog`,
    `Miss Piggy`,
    `Fozzie Bear`,
    `The Great Gonzo`
];
// 6b.
function showMuppets(names){
    console.log(names[0]);
    console.log(names[1]);
    console.log(names[2]);
    console.log(names[3]);
}
showMuppets(muppets);
// 7.
const manOrMuppet = function(){
    console.log(`Am I a man or am I a Muppet?`);
}
manOrMuppet();
// 8.
rainbowConnection = () => (`Someday we'll find it. The Rainbow Connection. The lovers, the dreamers and me`);
console.log(rainbowConnection());
// 9.
// No.
// 10.
// Yes.
// 11a.
const newMuppetMovies = [
    'The Muppets',
    'Muppets Most wanted'
];
// 11b.
function toUpperMovie(movie){
    return movie.toUpperCase();
}
const upperMovies = newMuppetMovies.map(toUpperMovie);
// 12a.
const oldMuppetMovies = [
    'The Muppet Movie',
    'The Muppets Take Manhatta',
    'The Great Muppet Caper',
    'The Muppet Christmas Carol',
    'Muppet Treasure Island',
    'Muppets From Space'
];
// 12b.
const twoMovies = oldMuppetMovies.filter(title => title === 'The Great Muppet Caper' || title === 'Muppet Treasure Island');
console.log(twoMovies);