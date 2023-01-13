input = + prompt("Ведите значение");

console.log(input);
if(typeof input == "number"){
  if( isNaN(input)){
    console.log("Упс, кажется, вы ошиблись");
  }
  else{
    if( input % 2 === 0){
      console.log("Четное");
    }
    else {console.log("Нечетное");}
    }
}


