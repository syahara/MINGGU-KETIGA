    /* Diberikan sebuah function perpangkatanDua(angka) yang menerima satu parameter berupa angka. Function akan me-return n jika angka tersebut merupakan hasil dari dua pangkat n. jika tidak, return -1. Contoh, jika angka adalah 16, dan karena 2^4 adalah 16, maka function akan me-return 4. Contoh kedua, jika angka adalah 17, karena 17 bukan merupakan hasil perpangkatan angka 2, maka function akan me-return -1. */

function perpangkatanDua(number){ 
  if (Math.log2(number) % 1 ===  0){ 
    return Math.log2(number)} 
    else { return -1 }}

// TEST CASES
console.log(perpangkatanDua(64)); // 8
console.log(perpangkatanDua(22)); // -1
console.log(perpangkatanDua(16)); // 4
console.log(perpangkatanDua(222)); // -1
console.log(perpangkatanDua(1)); // 0