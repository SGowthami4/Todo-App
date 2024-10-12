const tasksContainer = document.getElementById("tasks-container");
const addButton = document.getElementById("add-btn");
const inputElement = document.getElementById("input-field");
const alertMessage = document.getElementById("alert-msg");
const prioritySelection = document.getElementById("priority");
prioritySelection.addEventListener("click", priorityDisplay);
const priorityContainer = document.getElementById("priority-container");
let selectedPriority;
priorityContainer.addEventListener("click", (event) => {
  console.log(event.target);
  selectedPriority = document.getElementById(`${event.target.id}`);
  if (event.target.id === "high") {
    prioritySelection.innerHTML = ` ${selectedPriority.innerText}<i class="fa-solid fa-angle-down" style="color: #000"></i>`;
    prioritySelection.style.backgroundColor = "palevioletred";
    prioritySelection.style.color = "black";
  } else if (event.target.id === "medium") {
    prioritySelection.innerHTML = ` ${selectedPriority.innerText}<i class="fa-solid fa-angle-down" style="color: #000"></i>`;
    prioritySelection.style.backgroundColor = "orange";
    prioritySelection.style.color = "black";
  } else if (event.target.id === "low") {
    prioritySelection.innerHTML = ` ${selectedPriority.innerText}<i class="fa-solid fa-angle-down" style="color: #000"></i>`;
    prioritySelection.style.backgroundColor = "yellow";
    prioritySelection.style.color = "black";
  }
  // storeData();
  priorityContainer.style.display = "";
});

function priorityDisplay(event) {
  if (priorityContainer.style.display === "") {
    priorityContainer.style.display = "flex";
  } else {
    priorityContainer.style.display = "";
  }
}

function removeTask(event) {
  console.log(event.target.offsetParent);
  event.target.offsetParent.remove();
  // storeData();
}
function addTask() {
  if (inputElement.value === "") {
    alertMessage.innerText = "* please enter a task";
  } else if (prioritySelection.innerText === "Priority") {
    alertMessage.innerText = "";
    alertMessage.innerText = "* please select priority";
  } else {
    const task = document.createElement("li");
    task.innerText = inputElement.value;
    tasksContainer.appendChild(task);
    inputElement.value = "";
    prioritySelection.innerHTML = `${"Priority"}<i class="fa-solid fa-angle-down" style="color: #fff"></i></span>`;
    prioritySelection.style.backgroundColor = "";
    prioritySelection.style.color = "rgba(255, 255, 255, 0.8)";
    alertMessage.innerText = "";
    const trash = document.createElement("span");
    trash.className = "trash";
    trash.id = "trash-i";
    let buttonColor;
    if (selectedPriority.innerText === "High") {
      buttonColor = "palevioletred";
    } else if (selectedPriority.innerText === "Medium") {
      buttonColor = "orange";
    } else if (selectedPriority.innerText === "Low") {
      buttonColor = "yellow";
    }

    //  style = "background-color: palevioletred;";
    trash.innerHTML = `<span id="${
      selectedPriority.id
    }" style="background-color:${buttonColor};padding:${"0.5vmin 1vmin"};border-radius:${"5vmin"};font-size:${"2vmin"};color:${"rgba(0,0,0,.7)"}">${
      selectedPriority.innerText
    }</span>  <i class="fa-regular fa-trash-can" style="color: #fff;"></i>`;
    task.appendChild(trash);
    task.addEventListener("click", checkToggle);

    trash.addEventListener("click", removeTask);
    console.log(selectedPriority.id);
    // storeData();
  }
}
function checkToggle(event) {
  if (event.target.className === "checked") {
    event.target.className = "";
    // storeData();
  } else {
    event.target.className = "checked";
    // storeData();
  }
}
addButton.addEventListener("click", addTask);

// function storeData() {
//   localStorage.setItem("todoInfo", tasksContainer.innerHTML);
// }
// function retrieveInfo() {
//   tasksContainer.innerHTML = localStorage.getItem("todoInfo");
// }
// retrieveInfo();
