// add solution here
function theBeatlesPlay(musicians, instruments) {
  var array = [];
  
  for(let i = 0; i < musicians.length; i++) {
    array.push(`${musicians[i]} plays ${instruments[i]}`)
  }
  return array;
}

function johnLennonFacts(facts) {
  var jfacts = [];
     
     let i = 0;   
     
     while (i < facts.length) {
       jfacts.push(facts[i] + "!!!");
       i++;
     }
     
     return jfacts;
  
}

function iLoveTheBeatles(number) {
    var array = []; 
    
    do {
      return "I love the Beatles!";
    }
    
    while (number < 15) {
      return "I love the Beatles!";
    }
    
    return number;
}