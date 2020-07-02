var rand=13; //number used for caesar cipher

function encrypt(){ //function to encrypt text
  console.log(rand);
  var cipher="";

  var input=document.getElementById('input');
  var ouptut=document.getElementById('output');

  for(var i = 0 ; i < input.value.length; i++){
    cipher += encrypt_change(input.value[i],rand);
  }
    output.value=cipher;



}

function decrypt(){ //function to decrypt text
  var cipher="";

  var output=document.getElementById('input');
  var input=document.getElementById('output');

  for(var i = 0 ; i < input.value.length; i++){
    cipher += encrypt_change(input.value[i],26-rand);
  }
    output.value=cipher;



}
function isAlpha(c){ //boolean is a letter
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  for(var i = 0 ; i < alphabet.length; i++){
    if(c==alphabet[i]) return true;
  }
  return false;


}
function encrypt_change(c,r){ //encrypt character
  var alphabet="abcdefghijklmnopqrstuvwxyz";
  c=c.toLowerCase();
  if (!isAlpha(c)) return c;
  var pos=0;
  for(var i = 0 ; i < alphabet.length; i++){
    if(c==alphabet[i]) pos=i;
  }
  return alphabet[(pos+r)%26];



}
function changenum(x){//change cipher number
  if(x==1){
    rand++;
    rand=rand%26;
  }
  else rand--;
  if(rand<0) rand=rand+25;
    document.getElementById('rand').innerHTML="+"+rand;
}
