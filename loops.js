
var array = []; 

function forLoop(array){
  for (var i = 0; i < 25; i++){
    if (i === 1) {
      array[i].push() = `"I am ${i} strange loop."`;  
    } else {
      array[i] = (`"I am ${i} strange loops."`)
    }
  } 
  return array;
}

function whileLoop(number) {
  while (number > 0){
    console.log(number);
    number--;
  }
  return 'done';  
}

function doWhileLoop(array){
  
  do {
    array.pop();
  } while (array.length > 0 && maybeTrue());
  
  return array;
} 

function maybeTrue() {
  return Math.random() >= 0.5
} 