# Problem Solving

```JavaScript
// SET tglBuka to 7
// SET tmp to 7
// FOR i = 7 to 31
//      IF tglBuka = i THEN
//          DISPLAY `Tanggal ${i} : Tono Anton Budi`
//      ELSE IF tglBuka % 5 = 0
//          DISPLAY `Tanggal ${i} : Tempat fitnes tutup`
//      ELSE
//          SET output to any value
//          IF tmp % 2 = 0
//              DISPLAY add = 'TONO'
//          IF tmp % 4 = 0
//              DISPLAY add = 'ANTON'
//          IF tmp % 5 = 0
//              DISPLAY add = 'BUDI'
//          console.log(`Tanggal ${i} : ${output}`)
//          INCREAMETN tmp
//      END IF

let tglBuka = 7;
let tmp = 0;

for(let i = 7; i <= 31; i++) {
    if(tglBuka === i) {
        console.log(`Tanggal ${i} : Tono Anton Budi`)
    } else if (i % 5 === 0) {
        console.log(`Tanggal ${i} : Tempat fitnes tutup`)
    } else {
        let output = ''

        if(tmp % 2 === 0) {
            output += 'Tono '
        } if(tmp % 4 === 0) {
            output += 'Anton '
        } if(tmp % 5 === 0) {
            output += 'Budi'
        }

        console.log(`Tanggal ${i} : ${output}`)   
    }
    tmp++;
};
```