function soma(a,b){return a + b};

console.log(soma(1,2));
console.log(soma("a","b"));


function soma2(a,b){ if (typeof a === "number" && typeof b === "number") return a + b};

console.log(soma2(1,2));
console.log(soma2("a","b"));