let mas = [2, 5, 8 ,6];
let mas2 = [2, 2, 2, 2];
let res = true;
for (let i = 1; i < mas2.length; i++){
  if (mas2[i] != mas2[i-1]){
    res = false;
  }
}
console.log(res);