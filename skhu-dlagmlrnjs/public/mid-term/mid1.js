let a = []; 

 for (let i = 0; i < 100; ++i) { 
     a[i] = Math.floor(Math.random() * 100 + 1); 
} 
let a2 =a.filter((e)=> e%10<5 || e%10>9);
console.log(a2);