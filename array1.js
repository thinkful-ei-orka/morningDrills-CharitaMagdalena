// eslint-disable-next-line no-unused-vars
function average(numbers) {
    

    let total = 0;
    numbers = [1,5,7,9] 
  
  numbers.forEach(function(item) {
      total += item;
  })
  return total/ numbers.length;
}