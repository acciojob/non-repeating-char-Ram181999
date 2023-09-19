function firstNonRepeatedChar(str) {
 // Write your code here
	
	
  let obj = {};
  for (let i = 0; i < str.length; i++) {
    if (obj[str[i]] !== undefined) {
      // obj["a"]
      obj[str[i]] += 1;
    } else {
      obj[str[i]] = 1;
    }
  }
  // {"a": 2, "b" : 1, "c" : 1}
console.log(obj);
  for (let j = 0; j < str.length; j++) {
    if (obj[str[j]] == 1) { // i = 1 , str[1] = "b" , obj["b"] = 1
      return str[j];
    }
  }

  return null;
	
	
	
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
