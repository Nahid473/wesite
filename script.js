
//This code for banner section


let calculator = document.getElementById("calculator");
let arrybtn = [
  ["C", "%", "/", "DEL"],
  [7, 8, 9, "*"],
  [4, 5, 6, "+"],
  [1, 2, 3, "-"],
  [0, "00", ".", "="],
];
let output_display = document.getElementById("output_display");

for (let x = 0; x < arrybtn.length; x++) {
  let element = document.createElement("div");
  element.setAttribute("class", "cal_button");

  for (let y = 0; y < arrybtn[x].length; y++) {
    let input = document.createElement("input");
    input.setAttribute("value", arrybtn[x][y]);
    input.setAttribute("type", "button");
    input.setAttribute("class", "input_button");
    input.addEventListener("click", function () {
      let value = input.value;

      if (value === "=") {
        try {
          output_display.value = eval(output_display.value);
        } catch (error) {
          output_display.value = "Error";
        }
      } else if (value === "C") {
        output_display.value = "";
      } 
      else if(value==="DEL"){
        output_display.value =output_display.value.slice(0,-1)
      }
       else if (value === "%") {
         
         let currentValue = parseFloat(output_display.value);
         if (!isNaN(currentValue)) {
           output_display.value = currentValue / 100;
         }}
      else {
        output_display.value += value;
      }
    });
    element.appendChild(input);
  }
  calculator.appendChild(element);
}





let time=document.getElementById('time');
function timess(){
    let dates= new Date()
 let hours=dates.getHours();
 if(hours==12 || hours<=13){
    hours=12
 }
 else{
  hours="0"+(hours-12)
 }

 let minutes=dates.getMinutes();
 if(minutes>=0 && minutes<=9){
    minutes="0"+minutes
 }

 let seconds=dates.getSeconds()
 if(seconds>=0 && seconds<=9){
    seconds="0"+seconds;
 }
 time.innerHTML=`${hours}:${minutes}:${seconds}`
}

setInterval(timess,1000)

// 
let text_animation_demo=document.getElementById('text_animation_demo')
let textToAnimate_2=`My name is Md Nahid Hasan.I am a student of Pabna polytechnic Institute.I am interesting to learn computer programming.
i know about HTML,CSS,Javascript,React Js and Python Progamming.I write code 
in my free time`
let index=0;
function text_animateText(){
  if(index<textToAnimate_2.length){
    text_animation_demo.textContent += textToAnimate_2.charAt(index);
    index++;
  }
  else{
    index=0;
    text_animation_demo.textContent='';
  }
  setTimeout(text_animateText,100);

}
text_animateText()

