function average(numbers) {
    

    let total = 0;
    
  
  numbers.forEach(function(item) {
      total += item;
  }
  return total/ numbers.length;
}