
function validateTaskTitle(title) {
  return typeof title === "string" &&
    title.trim().length > 0 &&
    title.trim().length <= 100;
}

function createTask({ title, description = "", priority = "Medium" }) {
  if (!validateTaskTitle(title)) {
    throw new Error("Task title must be between 1 and 100 characters.");
  }

  if (!["Low", "Medium", "High"].includes(priority)) {
    throw new Error("Invalid task priority.");
  }

  return {
    id: crypto.randomUUID(),
    title: title.trim(),
    description: description.trim(),
    priority,
    status: "Todo"
  };
}

if (typeof module !== "undefined") {
  module.exports = { validateTaskTitle, createTask };
}

if (typeof window !== "undefined") {
  window.TaskUtils = { validateTaskTitle, createTask };
}