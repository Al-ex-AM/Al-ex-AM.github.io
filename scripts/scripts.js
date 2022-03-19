function first() {
  let html = '<button id="second" class="button" onclick="second()">Click Me</button>'
  let btn = document.getElementById("first");
  document.getElementById("invisible").innerText = "";
  document.getElementById("text").innerText = "Te amo";
  document.getElementById("btnPlace").insertAdjacentHTML("afterbegin", html);
  btn.remove();
}

function second() {
  alert("Works")
}
