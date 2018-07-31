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

function iLoveTheBeatles(num) {
  
}