function dictionarySort(dictionaries) 
{
  for (let i = 0; i < array.length; i++) 
    {
      let min = array[i];
      for (let j = i+1; j < array.length; j++) 
      {
        if (min > array[j]) 
        {
          min = array[j]
          array[j] = array[i]
          array[i] = min
        }
      }
    }
  return array
}

function bubbleSort(array) 
{
    for (let i = 0; i < array.length-1; i++) 
    {
      if (array[i+1] < array[i]) 
      {
        var temp = array[i+1]
        array[i+1] = array[i]
        array[i] = temp
      }
    }
    return array
  }
console.log(bubbleSort(['makan','duduk','tidur','terbang']));
console.log(bubbleSort(['anggi','angga','ani','adi']));

module.exports = dictionarySort
