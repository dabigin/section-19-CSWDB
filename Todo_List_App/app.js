const todoList = ["Collect Chicken Eggs", "Clean Litter Box"];
let input = prompt("What would you like to do?");

while (input !== "quit" && input !== "q") {
  if (input === "list") {
    console.log("***************");
    for (let i = 0; i < todoList.length; i++) {
      console.log(`${i}: ${todoList[i]}`);
    }
    console.log("***************");
  } else if (input === "new") {
    const newTodo = prompt("Ok, what is the new todo?");
    todoList.push(newTodo);
    console.log(`${newTodo} added to the list!`);
  } else if (input === "delete") {
    const index = parseInt(prompt("Ok, enter an index to delete:"));
    if (!Number.isNaN(index)) {
      const deleted = todoList.splice(index, 1);
      console.log(`Ok, deleted ${deleted[0]}`);
    } else {
      console.log("Unknown Index");
    }
  }

  input = prompt("What would you like to do?");
}
console.log("Quit the APP!");
