var string="";
  function num(x){
    string=string+x;
    document.getElementById("inp").value = string; 
  }
  function clr(){
    string="";
    document.getElementById("inp").value=string;
  }
  function equate(){
    string=eval(string);
    document.getElementById("inp").value = string; 
  }
  function del(){
    string= string.slice(0,-1);
    document.getElementById("inp").value = string; 
  }