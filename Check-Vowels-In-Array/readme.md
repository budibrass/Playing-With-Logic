# Check Vowels In Array

```JavaScript

function checkVowelsInArray (row, column) 
{
    const arr = createNestedArr(row, column)
    console.log(arr)
    let tmp = 0
    let vokal = 'AIUEO'
  
    // looping utk cek block di array
    for (let i = 0; i < row - 1; i++) {
        for (let j = 0; j < column - 1; j++) {
            let tmp2 = 0

            if(vokal.includes(arr[i][j])) {
                tmp2++
            }
            if(vokal.includes(arr[i][j + 1])) {
                tmp2++
            }
            if(vokal.includes(arr[i + 1][j])) {
                tmp2++
            }
            if(vokal.includes(arr[i + 1][j + 1])) {
                tmp2++
            }
            if(tmp2 === 4) {
                tmp++
            }
        }
    }
    return `Number of block filled with vowels: ${tmp}`
  }
  
  function createNestedArr (row, column) {
    let output = []
    let huruf = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    // let huruf = 'AIUEO'
  
    for (let i = 0; i < row; i++) {
      let perbaris = []
      for (let j = 0; j < column; j++) {
         // cari random huruf dari index yang diacak
         let randomHuruf = Math.ceil(Math.random() * huruf.length -1);
         perbaris.push(huruf[randomHuruf]); // convert index ke value nya
      }
      output.push(perbaris)
    }
    return output
  }
  
  console.log(checkVowelsInArray(4, 4))
```