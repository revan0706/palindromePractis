function isPalindrome(name) {
  let i = name.length - 1; //4
  let b = 0;
  let first = "";
  let second = "";
  let a;
  for (a = name.length / 2; a >= 1; a--) {
    first += name[i];
    second += name[b];
    b++;
    i = i - 1;
  }
  if (first == second) {
    return true;
  } else {
    return false;
  }
}

console.log(isPalindrome("anna")); // true
console.log(isPalindrome("angel")); // false
console.log(isPalindrome("level")); // true
