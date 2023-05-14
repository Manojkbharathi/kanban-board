"use strict";

const formEl = document.getElementById("form");
const inputEl = document.getElementById("input");
const ulEl = document.getElementById("todo-list");

let items = [];
let dragStartIndex;
let dragItem = null;
let index = 0;

const createItem = ({ itemName, index }) => {
  const listEl = document.createElement("li");
  listEl.classList.add("new-element");
  listEl.innerHTML = ` <p class="task" draggable="true">${itemName}</p>  
`;
  ulEl.appendChild(listEl);
  dragAndDrop();
};
formEl.addEventListener("submit", function (e) {
  e.preventDefault();
  const itemName = inputEl.value;
  if (inputEl.value === "") {
    alert("inputs are mandatory");
    return;
  }
  const item = {
    itemName: itemName,
    index: index,
  };
  // console.log(index);
  createItem(item);
  inputEl.value = null;
  index++;
});

function dragAndDrop() {
  const li = document.querySelectorAll(".content li");
  const ulElement = document.querySelectorAll(".done");

  li.forEach((ele) => {
    ele.addEventListener("dragstart", dragStart);
    ele.addEventListener("dragend", dragEnd);
  });

  ulElement.forEach((item) => {
    // console.log(item);
    item.addEventListener("dragover", dragOver);
    item.addEventListener("drop", dragDrop);
    item.addEventListener("dragenter", dragEnter);
  });
}

function dragStart() {
  // console.log("start");
  dragItem = this;
  this.style.display = "dragging";
}
function dragEnd() {
  // console.log("end");
  this.style.display = "block";
  dragItem = null;
}

function dragOver(event) {
  event.preventDefault();
}

function dragDrop() {
  // console.log("drop");
  this.append(dragItem);
  // console.log(this);
}

function dragEnter(event) {
  event.preventDefault();
}

function dragLeave(event) {
  event.preventDefault();
}
