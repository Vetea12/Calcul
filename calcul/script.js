let input = "";

    function ShowValue(btn){  
    input += btn.value;
    
  
      console.log(input);
      document.getElementById("output").innerHTML = input;
    }

function quickMath(){
  console.log(eval(input));
       document.getElementById("output").innerHTML = eval(input);
}

function Reset(btn){
   document.getElementById("output").innerHTML = "0";
  input = "";
}

function rem1(btn){
input= input.replace(input.slice(-1), "");
    console.log(input);
 document.getElementById("output").innerHTML = input;
}