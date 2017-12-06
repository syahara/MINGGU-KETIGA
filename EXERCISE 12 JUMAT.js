function tentukanDeretGeometri(arr) {
  var angka = [];
  var tampung;
  for(i=0; i<arr.length -1; i++){
    angka.push(arr[i+1]/arr[i]);
  }
  for(j=0; j<angka.length -1; j++){
    tampung = angka[j+1] === angka[j];
  }
  return tampung; // you can only write your code here!
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false