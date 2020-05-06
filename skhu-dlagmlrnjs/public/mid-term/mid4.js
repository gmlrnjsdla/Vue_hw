let arr = []; 

 for (let i = 0; i < 100; ++i) { 
     a[i] = Math.floor(Math.random() * 100 + 1); 
} 
let sum = arr.reduce((a,b) => a+b)
console.log(sum);