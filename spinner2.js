const spinner2 = function(spinnerArr) {
  for (let i = 0; i < spinnerArr.length; i++) {
    setTimeout(() => {
      process.stdout.write(`\r${spinnerArr[i]}   `);
    },i * 100);
  }
  setTimeout(()=>{
    process.stdout.write(`\n`);
  }, spinnerArr.length * 100);
  
};

const spinnerArr = ["|","/","-","\\","|"];
spinner2(spinnerArr);