let anserinput1 = document.getElementById('btn65')
anserinput1.addEventListener("click", function(){
  let inputnunber = document.getElementById('suuji').value;
  let six = "0.65"
  let anser11a = inputnunber * six
  let anser11 = Math.ceil(anser11a);
  let anser21 = inputnunber - anser11
  document.getElementById("anser1").innerText = anser11;
  document.getElementById("anser2").innerText = anser21;
})
let anserinput2 = document.getElementById('btn80')
anserinput2.addEventListener("click", function(){
  let inputnunber = document.getElementById('suuji').value;
  let eight = "0.8"
  let anser1a = inputnunber * eight
  let anser1 = Math.ceil(anser1a);
  let anser2 = inputnunber - anser1
  document.getElementById("anser1").innerText = anser1;
  document.getElementById("anser2").innerText = anser2;
})
