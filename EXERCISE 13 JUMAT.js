function targetTerdekat(arr) {
  var ex = 0;
  var nol = 0;
  var kali = [];
  var tampung2 = 0;
  
  if (arr.indexOf('x')===-1){
    return 0;
  } else {
  
  for (i = 0; i < arr.length ; i++){
    if (arr[i] === 'x'){
      ex = i;
      kali.push(ex);
    }else if (arr[i] === 'o'){
      nol = i;
    }
    var tampung = [];
    for (j = 0; j<kali.length ; j++){
      tampung2 = Math.abs(nol-kali[j]); 
      tampung.push(tampung2);
      tampung.sort();
    }
  }
  return tampung[0];// you can only write your code here!
}
}