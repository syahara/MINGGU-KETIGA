function tentukanDeretAritmatika(arr) {
    var angka = [];
    var selisih;
    for (i = 0; i < arr.length - 1; i++) {
        angka.push(arr[i + 1] - arr[i]);
    }
    for (j = 0; j < angka.length - 1; j++) {
        selisih = angka[j + 1] === angka[j];
    }
    return selisih;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false