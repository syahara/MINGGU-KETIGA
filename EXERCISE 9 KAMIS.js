function pasanganTerbesar(num) {
  var stringNum = String(num);
  var tampung = 0, biggerNum = 0;
  
  for (var i = 0; i < stringNum.length; i++){
    
    tampung = Number(stringNum[i] + stringNum[i+1]);
    if(tampung > biggerNum){
      biggerNum = tampung;
    }
  }
  return biggerNum;
}
  
  

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99