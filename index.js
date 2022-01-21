// Create a new task creating a task object
// Object will keep track of state of the task
// A new task will be created as incomplete
const newTask = function(title, description) {
  const task = {
    title: title,
    description: description,
    complete: false,

    logState: function() {
      console.log(`${this.title} has${this.complete ? " " : " not "}been completed`);
    },

    markCompleted: function() {
      this.complete = true;
    }
  };
  return task;
};

// DRIVER CODE BELOW

const task1 = newTask("Clean Cat Litter", 'Take all poop out of litter box'); // task 0
const task2 = newTask("Do Laundry", 'Wash, dry and fold all the dirty clothes'); // task 1
const tasks = [task1, task2];

tasks[0].logState();
tasks[0].markCompleted();
tasks[0].logState();

// logTaskState(0); // Clean Cat Litter has not been completed
// completeTask(0);
// logTaskState(0); // Clean Cat Litter has been completed
