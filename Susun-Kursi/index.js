"use strict";

function generateSeats(row) {
  let seats = [];
  for (let i = 0; i < row; i++) {
    seats.push([]);
  }
  return seats;
}

function managePerson(arr, rowSeats) {
  let seats = generateSeats(rowSeats);
  let row = 0;

  for (let i = 0; i < arr.length; i++) {
    seats[row].push(arr[i]);
    if (row < 2) {
      row++;
    } else {
      row = 0;
    }
  }
  printSeats(seats);
}

function printSeats(seats) {
  for (let i = 0; i < seats.length; i++) {
    console.log(`Baris ${i} : `, seats[i]);
  }
}

managePerson(["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"], 3);