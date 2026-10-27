
const test = require("node:test");
const assert = require("node:assert/strict");

const {
  validateTaskTitle,
  createTask
} = require("../task-utils.js");

test("accepts a valid task title", () => {
  assert.equal(validateTaskTitle("Learn GitHub"), true);
});

test("rejects an empty title", () => {
  assert.equal(validateTaskTitle(""), false);
});

test("rejects whitespace-only titles", () => {
  assert.equal(validateTaskTitle("   "), false);
});

test("rejects titles longer than 100 characters", () => {
  assert.equal(validateTaskTitle("A".repeat(101)), false);
});

test("creates a task with Todo status", () => {
  const task = createTask({ title: "Learn GitHub" });

  assert.equal(task.title, "Learn GitHub");
  assert.equal(task.status, "Todo");
  assert.equal(task.priority, "Medium");
  assert.ok(task.id);
});

test("supports High priority", () => {
  const task = createTask({
    title: "Fix issue",
    priority: "High"
  });

  assert.equal(task.priority, "High");
});

test("rejects invalid priorities", () => {
  assert.throws(() => {
    createTask({
      title: "Test",
      priority: "Urgent"
    });
  }, /Invalid task priority/);
});
