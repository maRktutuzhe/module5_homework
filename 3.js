let str = "Hello, world!";
let strnew = "";
num = str.length;
for(let i = num; i > 0; i--){
  strnew += str.slice(i-1, i );
}
console.log(strnew);