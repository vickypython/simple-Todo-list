const addTask = document.getElementById("add-task");
const taskContainer = document.getElementById("task-container");
const inputTask = document.getElementById("input-task");
addTask.addEventListener("click", function () {
  let task = document.createElement("div");
  task.classList.add("task");
  let list = document.createElement("li");
  list.innerText = `${inputTask.value}`;
  task.appendChild(list);
  let checkButton = document.createElement("button");
  checkButton.innerHTML = "<p>checked</p>";
  checkButton.classList.add("checkTask");
  task.appendChild(checkButton);
  let deleteButton = document.createElement("button");
  deleteButton.innerHTML = "<p>Delete</p>";
  deleteButton.classList.add("deleteTask");
  task.appendChild(deleteButton);
  if (inputTask.value === "") {
    alert("please Enter a task");
  } else {
    taskContainer.appendChild(task);
  }
  inputTask.value = "";

  checkButton.addEventListener("click", function () {
    checkButton.parentElement.style.textDecoration = "line-through";
  });
  deleteButton.addEventListener("click", function (e) {
    let target = e.target;
    target.parentElement.parentElement.remove();
  });
});
