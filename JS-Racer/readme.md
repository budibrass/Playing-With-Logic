# JS Racer

```JavaScript
"use strict"

function playerGenerator (numOfPlayers) {
  const Huruf = [
    'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
    'U', 'V', 'W', 'X', 'Y', 'Z'
  ];
  
  let players = [];
  for (let i = 0; i < numOfPlayers; i++) {
    let player = {};
    player['name'] = Huruf[i];
    player['pos'] = 0;
    players.push(player);
  }
  return players;
}

function diceRoll () {
  // me random dadu 1 - 6
  return Math.ceil(Math.random() * 6);
}

function sleep (milliseconds){
  var start = new Date().getTime();
  for (var i = 0; i < 1e7; i++) {
    if ((new Date().getTime() - start) > milliseconds) {
      break;
    }
  }
}

function printBoard (numOfPlayer, trackLength) {
  var players = playerGenerator(numOfPlayer);
  while (finished(players, trackLength) === false){
    advance(players);
    sleep(1000);
    clearScreen();
  }
  console.log(winner(players))
}

function printLine (playerName, pos, trackLength) 
{
  var track = [];

  for (let i = 0; i < trackLength; i++) {
    if (i === pos) {
      track.push(playerName);
    } else {
      track.push(' ');
    }
  }
  console.log(track.join('|'));
}

function advance (playersObj) {
  for (let i in playersObj){
    printLine(playersObj[i].name, playersObj[i].pos, trackLength);
    playersObj[i].pos += diceRoll();
  }
}

function finished (playersObj, trackLength) {
  for (let i in playersObj){
    if (playersObj[i].pos >= trackLength){
      return true;
    }
  }
  return false;
}

function winner (playersObj) {
  for (let i in playersObj){
    if (playersObj[i].pos >= trackLength){
      return `Race ended; the winner is: ${playersObj[i].name}`;
    }
  }
}

function clearScreen () {
  // Un-comment this line if you have trouble with console.clear();
  // return process.stdout.write('\033c');
  console.clear();
}

let argv = process.argv;
let numOfPlayer = + argv[2];
let trackLength = + argv[3];

printBoard(numOfPlayer, trackLength)

```