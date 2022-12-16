/***********************************************************************
Write a recursive function reverse(string) that takes in a string and returns
it reversed.

Examples:

reverse("house"); // "esuoh"
reverse("dog"); // "god"
reverse("atom"); // "mota"
reverse("q"); // "q"
reverse("id"); // "di"
reverse(""); // ""
***********************************************************************/

// your code here
function reverse(string) {
  //base case of 0 string length
  if (string.length === 0) {
    return "";
  }
  //put end of string at beginning, make recursival call with string without last character and concat result 
  return string.substring(string.length - 1) + reverse(string.substring(0, string.length - 1));
}
/**************DO NOT MODIFY ANYTHING UNDER THIS LINE*****************/
try {
  module.exports = reverse;
} catch (e) {
  module.exports = null;
}
