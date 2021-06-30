function numberToWords(number) {
    let satuan = ['nol', 'satu', 'dua', 'tiga', 'empat', 'lima', 'enam', 'tujuh', 'delapan', 'sembilan', 'sepuluh', 'sebelas']
  
    if (number < 12) {
      return satuan[number]
    } else if (number < 20) {
      return numberToWords(number - 10) + ' belas'
    } else if (number < 100) {
      return numberToWords(Math.floor(number / 10)) + ' puluh' + ((number % 10 === 0) ? '' : ' ' + numberToWords(number % 10))
    } else if (number < 200) {
      return 'seratus' + ((number % 100 === 0) ? '' : ' ' + numberToWords(number - 100))
      // console.log(number % 100 === 0)
    } else if (number < 1000) {
      return numberToWords(Math.floor(number / 100)) + ' ratus' + ((number % 100 === 0) ? '' : ' ' + numberToWords(number % 100))
    } else if (number < 2000) {
      return 'seribu' + ((number % 1000 === 0) ? '' : ' ' + numberToWords(number - 1000))
    } else if (number < 1000000) {
      return numberToWords(Math.floor(number / 1000)) + ' ribu' + ((number % 1000 === 0) ? '' : ' ' + numberToWords(number % 1000))
    } else if (number < 1000000000) {
      return numberToWords(Math.floor(number / 1000000)) + ' juta' + ((number % 1000000 === 0) ? '' : ' ' + numberToWords(number % 1000000))
    } else if (number < 1000000000000) {
      return numberToWords(Math.floor(number / 1000000000)) + ' milyar' + ((number % 1000000000 === 0) ? '' : ' ' + numberToWords(number % 1000000000))
    } else if (number < 1000000000000000) {
      return numberToWords(Math.floor(number / 1000000000000)) + ' triliun' + ((number % 1000000000000 === 0) ? '' : ' ' + numberToWords(number % 1000000000000))
    }
  }
  
  // Driver code
  console.log(numberToWords(705));
  console.log(numberToWords(1000000));
  console.log(numberToWords(2011845));
  
  //abaikan code dibawah ini
  module.exports = numberToWords;
  