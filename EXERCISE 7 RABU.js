function hitungJumlahKata(kalimat) {
   kalimat = kalimat.split(' ');
   return i = kalimat.length; i>1; i++// you can only write your code here!
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5

