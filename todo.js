// Function to add a new todo
function addTodo() {
    const todoInput = document.getElementById("todo-input");
    const todoList = document.getElementById("todo-list");
    
    if (todoInput.value.trim() === "") {
      alert("Please Enter a Task!");
      return;
    }
  
    const listItem = document.createElement("li");
    listItem.textContent = todoInput.value;
  
    // Complete task on click
    listItem.addEventListener("click", () => {
      listItem.classList.toggle("completed");
    });
  
    // Delete button for each task
    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.onclick = () => {
      todoList.removeChild(listItem);
    };
    listItem.appendChild(deleteButton);
  
    todoList.appendChild(listItem);
  
    // Clear input
    todoInput.value = "";
  }
  
