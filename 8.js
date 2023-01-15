let map = new Map();
map.set(1, "hello");
map.set(true, 5);
map.set("first", false);
for(let name of map.keys()){
  console.log(`ключ - ${name}, значение - ${map.get(name)}`);
}