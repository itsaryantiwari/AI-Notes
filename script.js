const container2 = document.getElementsByClassName("container-2")[0];
const container3 = document.getElementsByClassName("container-3")[0];
const checkIcon = document.getElementById("check-icon");
const xIcon = document.getElementById("x-icon");
var i = 0;

xIcon.addEventListener("click", function () {
  typeNote();
});

checkIcon.addEventListener("click", function () {
  createNote();
});

function typeNote() {
  if (container3.style.display == "none") {
    container3.style.display = "block";
  } else {
    container3.style.display = "none";
  }
}

function createNote() {
  let noteText = document.getElementById("note-text").value;
  let note = document.createElement("div");
  let h4 = document.createElement("p");
  let x = document.createElement("span");
  h4.innerHTML = noteText;
  note.appendChild(h4);
  x.innerHTML = `<i class="fa-regular fa-circle-xmark"></i>`;
  note.setAttribute(
    "style",
    "width: 245px; color: white; height: 260px; font-size: 1rem; position: relative; padding: 0.5rem; padding-top: 1.35rem; text-align: center;  box-shadow: 5px 10px 15px gray;"
  );
  x.setAttribute(
    "style",
    "font-size: 1.2rem; position: absolute; right:5px; top: 5px;"
  );
  note.style.margin = randomMargin();
  note.style.transform = randomRotate();
  note.style.background = randomColor();
  note.style.marginInline = "1.25rem";
  // note.appendChild();
  note.appendChild(x);

  container2.insertAdjacentElement("beforeend", note);

  note.addEventListener("mouseenter", function () {
    note.style.transform = "scale(1.1)";
  });
  note.addEventListener("mouseleave", function () {
    note.style.transform = "scale(1)";
  });

  x.addEventListener("click", function () {
    note.remove();
  });
  document.getElementById("note-text").value = "";
}

function randomMargin() {
  var margin = ["-5px", "1px", "5px", "10px", "15px", "20px"];
  return margin[Math.floor(Math.random() * margin.length)];
}

function randomRotate() {
  var rotate = [
    "rotate(-3deg)",
    "rotate(1deg)",
    "rotate(-1deg)",
    "rotate(3deg)",
    "rotate(-5deg)",
    "rotate(4deg)",
  ];
  return rotate[Math.floor(Math.random() * rotate.length)];
}

function randomColor() {
  var color = ["indigo", "#3cb371", "orangered", "crimson", "maroon", "cyan"];

  if (i > color.length - 1) {
    i = 0;
  }
  return color[i++];
}
