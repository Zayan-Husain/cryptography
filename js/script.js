var test;
String.prototype.isLowerCase = function() {
  var s = this.toString(), ls = s.toLowerCase()
  return s === "" ? null : ls === s;
}
String.prototype.isUpperCase = function() {
  var s = this.toString(), ls = s.toLowerCase()
  return s === "" ? null : ls !== s;
}
$(document).ready(function(){
  $('.sidenav').sidenav();
              // A B C D E F G H I J K L M N O P Q R S T U V W X Y Z ! @ # $ % ^ & * ( ) . ,
  var cipher1 = "T U V W X Y Z A B C D E F G H I J K L M N O P Q R S ! @ # $ % ^ & * ( ) . ,";
  var cipher2 = "R S T U V W X Y Z A B C D E F G H I J K L M N O P Q ! @ # $ % ^ & * ( ) . ,"
  test = new mono_alphabetic_c(
    cipher1,
    cipher2,
  );
  $(".send").on("click", function() {
    var inp = $(".input")[0];
    var out = $(".output")[0];
    var tp = $(".type")[0];
    if(inp.value === "") return;
    if(tp.value === "1") out.value = test.yencrypt(inp.value)
    if(tp.value === "2") out.value = test.ydecrypt(inp.value)
  })
  $(".copy").on("click", function() {
    $(".output").select();
    document.execCommand("copy")
  })
  $(".switch").on("click", function() {
    var inp = $(".output").val();
    $(".input").val(inp);
    $(".output").val("");
  })
});
/* var words = "@hello, world! Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  var res = test.yencrypt(words.toUpperCase());
  console.log(res);

  var dres = test.ydecrypt(res);
  console.log(dres);
  $(".output")[0].value = res;
*/