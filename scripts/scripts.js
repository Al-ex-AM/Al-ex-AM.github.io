function first() {
  let html = '<button id="second" class="button" onclick="second()">Click Me Again</button>'
  let btn = document.getElementById("first");
  document.getElementById("invisible").innerText = "";
  document.getElementById("text").innerText = `Mar, I love you. I know this is a really simple present but I still wanted to give you something that I've made with my own 'hands' sometime, so here it is.

I hope you really enjoy going to the concert and hearing Morat live, you've been listening to their music since a long time and I know you really enjoy listening them, so seeing them perform could be even better.

I love you a lot, I don't even think I can put it in words. We've been dating since a long time and really enjoy being with you, it's great to have you by my side and I hope I can have you for the years to come. 

Enjoy your birthday, and also you'll be having something more, you'll see ; ) .`;

  document.getElementById("btnPlace").insertAdjacentHTML("afterbegin", html);
  btn.remove();
};

function second() {
  let html = '<button id="third" class="button" onclick="third()">If You want</button>'
  let btn = document.getElementById("second");
  document.getElementById("text").innerText = "Somos como la sal y el mar, tal para cual.";
  document.getElementById("btnPlace").insertAdjacentHTML("afterbegin", html);
  btn.remove();
};

function third() {
  let html = '<img class="heart" src="purpleheart.svg" alt="shit">';
  document.getElementById("text").innerText = "";
  document.getElementById("imgPlace").insertAdjacentHTML("afterbegin", html);
  document.getElementById("third").innerText = "More hearts"
};
