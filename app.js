
const form = document.getElementById("task-form");
const taskList = document.getElementById("task-list");
const message = document.getElementById("message");

const tasks = [];

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const title = document
    .getElementById("task-title").value.trim();

  const description = document
    .getElementById("task-description").value.trim();

  const priority = document
    .getElementById("task-priority").value;

  if (!title) {
    message.textContent = "Task title is required.";
    return;
  }

  let task;

try {
  task = window.TaskUtils.createTask({
    title,
    description,
    priority
  });
} catch (error) {
  message.textContent = error.message;
  return;
}

  tasks.push(task);
  renderTasks();

  form.reset();
  message.textContent = "Task created successfully!";
});

function renderTasks() {
  taskList.replaceChildren();

  tasks.forEach((task) => {
    const item = document.createElement("li");
    item.className = "task";

    const heading = document.createElement("h3");
    heading.textContent = task.title;

    const description = document.createElement("p");
    description.textContent = task.description;

    const details = document.createElement("small");
    details.textContent =
      `Priority: ${task.priority} | Status: ${task.status}`;

    item.append(heading, description, details);
    taskList.appendChild(item);
  });
}
