let a = []; 

 for (let i = 0; i < 100; ++i) { 
     a[i] = Math.floor(Math.random() * 100 + 1); 
} 
let sum = a.reduce((a,b) => a+b)
console.log(sum);