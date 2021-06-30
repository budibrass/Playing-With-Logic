function toRoman(num) 
{
    let romawi = [  //buat kamus untuk mendefinisikan inputan num
        [1000, 'M'],
        [900, 'CM'],
        [500, 'D'],
        [400, 'CD'],
        [100, 'C'],
        [50, 'L'],
        [40, 'XL'],
        [10, 'X'],
        [9, 'IX'],
        [5, 'V'],
        [4, 'IV'],
        [1, 'I']
    ]

    if(num === 0) {
        return '';
    }

    let tmp = ''
    for(let i = 0; i < romawi.length; i++) {
        if(num > romawi[i][0]) {
            return tmp += romawi[i][1] + toRoman(num - romawi[i][0])
        } else if(num === romawi[i][0]) {
            return tmp += romawi[i][1];
        }
    }
    // return tmp;
}

// Drive code
console.log("My totally sweet testing script for new roman\n");
console.log("input | expected | actual");
console.log("——————|——————————|———————");
console.log("4     | IV       | ", toRoman(4));
console.log("9     | IX       | ", toRoman(9));
console.log("13    | XIII     | ", toRoman(13));
console.log("1453  | MCDLIII  | ", toRoman(1453));
console.log("1646  | MDCXLVI  | ", toRoman(1646));

//abaikan code dibawah ini
module.exports = toRoman
