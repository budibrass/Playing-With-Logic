function selectionSort(arr) 
{
    let hasil = []
    while (arr.length !== 0) 
    {
        let posisi = 0
        let min = arr[0]
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] < min) {
                min = arr[i]
                posisi = i
            }
        }
        hasil.push(min)
        arr.splice(posisi,1)
    }
    return hasil
}

console.log(selectionSort([33, 2, 52, 106, 73]));
// [ 2, 33, 52, 73, 106 ]

console.log(selectionSort([13, 5, 22, 99, 11]));
// [ 5, 11, 13, 22, 99 ]

// abaikan code dibawah
module.exports = selectionSort;
