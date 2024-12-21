
console.log('hello world')

const notesContainer = document.querySelector(".notes-container");
const createBtn = document.querySelector(".btn");
let notes = document.querySelectorAll(".flex-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes"); // Use getItem
}

showNotes();

function updateStorage() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createBtn.addEventListener("click", () => {
  let flexbox = document.createElement("p");
  let img = document.createElement("img");
  flexbox.className = "flex-box";
  flexbox.setAttribute("contenteditable", "true");
  img.src = "./download (2).jpeg";
  notesContainer.appendChild(flexbox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorage();
  } else if (e.target.tagName === "P") { // Correct case for tagName
    e.target.addEventListener("keyup", updateStorage); // Add listener only once
  }
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak"); // Correct casing
    event.preventDefault();
  }
});
