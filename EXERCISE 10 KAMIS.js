function angkaPalindrome(num){
  num = num + 1;
  var reverse = '';
  while(true) {
    var barisAngka = String(num);
    reverse = barisAngka.split('').reverse().join('');
    if(num === Number(reverse)){
      return num;
    }
    num++;
  }
}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001