let notesContainer = document.querySelector(".notes-container");
let createNote = document.querySelector(".btn");
let notes = document.querySelector(".input-box");

function showNotes() {
  notesContainer.innerHTML = localStorage.getItem("notes");
}

function updateStorages() {
  localStorage.setItem("notes", notesContainer.innerHTML);
}

createNote.addEventListener("click", () => {
  let inputBox = document.createElement("p");
  let img = document.createElement("img");
  inputBox.className = "input-box";
  inputBox.setAttribute("contenteditable", "true");
  img.src = ".././assets/delete.png";
  notesContainer.appendChild(inputBox).appendChild(img);
});

notesContainer.addEventListener("click", (e) => {
  if (e.target.tagName === "IMG") {
    e.target.parentElement.remove();
    updateStorages();
  } else if (e.target.tagName === "P") {
    notes = document.querySelectorAll(".input-box");
    notes.forEach((nt) => {
      nt.onkeyup = () => {
        updateStorages();
      };
    });
  }
});

document.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    document.execCommand("insertLineBreak");
    event.preventDefault();
  }
})
showNotes();
