// creating variables

// to collect the user input
const inputText = document.querySelector("#input-text");

//   to add event listener when user clicks on add button
const addTask = document.querySelector("#submit");

//   here all the tasks will be added
const taskContainer = document.querySelector(".task-container");

addTask.addEventListener("click", function () {
const task = document.createElement("div");
task.classList.add("task-list");
const li = document.createElement("li");
const checkButton = document.createElement("button");
const deleteButton = document.createElement("button");

li.innerText = `${inputText.value}`;
task.appendChild(li);

checkButton.innerHTML = '<i class="fa-sharp fa-solid fa-check"></i>';
checkButton.classList.add("btn");
checkButton.classList.add("check");
task.appendChild(checkButton);

deleteButton.innerHTML = '<i class="fa-solid fa-trash"></i>';
deleteButton.classList.add("btn");
deleteButton.classList.add("del");
task.appendChild(deleteButton);

// if user tries to submit before entering anything
if (inputText.value === "") {
    alert("please enter some input");
}

// adding the task to the task container
else {
    taskContainer.appendChild(task);
}

// removing the text after submitting
inputText.value = "";

// event listener for check button
checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "underline";
});

// event listener for delete button
deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
});
});