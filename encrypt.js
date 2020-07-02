var rand=Math.floor(Math.random() * 24) + 1;
function encrypt(){
  console.log(rand);
  var cipher="";

  var input=document.getElementById('input');
  var ouptut=document.getElementById('output');

  for(var i = 0 ; i < input.value.length; i++){
    cipher += encrypt_change(input.value[i],rand);
  }
    output.value=cipher;


}
function decrypt(){
  var cipher="";

  var output=document.getElementById('input');
  var input=document.getElementById('output');

  for(var i = 0 ; i < input.value.length; i++){
    cipher += encrypt_change(input.value[i],26-rand);
  }
    output.value=cipher;


}
function isAlpha(c){
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  for(var i = 0 ; i < alphabet.length; i++){
    if(c==alphabet[i]) return true;
  }
  return false;


}
function encrypt_change(c,r){
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  if (!isAlpha(c)) return c;
  var pos=0;
  for(var i = 0 ; i < alphabet.length; i++){
    if(c==alphabet[i]) pos=i;
  }
  return alphabet[(pos+r)%26];



}
