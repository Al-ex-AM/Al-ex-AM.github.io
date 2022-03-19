function first() {
  let html = '<button id="second" class="button" onclick="second()">Click Me</button>'
  let btn = document.getElementById("first");
  document.getElementById("invisible").innerText = "";
  document.getElementById("text").innerText = "Te amo";
  document.getElementById("btnPlace").insertAdjacentHTML("afterbegin", html);
  btn.remove();
}

function second() {
  let btn = document.getElementById("second");
  let html = '<button id="third" class="button" onclick="third()">Click Me</button>'
  document.getElementById("text").innerText = "ok";
  document.getElementById("btnPlace").insertAdjacentHTML("afterbegin", html);
  btn.remove();
}
function third() {
  let html = '<img class="heart" src="purpleheart.svg" alt="shit">';
  document.getElementById("imgPlace").insertAdjacentHTML("afterbegin", html);
}
