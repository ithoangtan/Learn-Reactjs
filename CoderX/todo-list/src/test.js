let todoItems = [
  { title: "go to market", isComplete: false },
  { title: "go to sss", isComplete: true },
  { title: "go to s", isComplete: false },
  { title: "learn UI/UX" },
  { title: "go to markest", isComplete: true }
];
let item = { title: "go to market", isComplete: false };
let index = todoItems.indexOf(item);
let isComplete = item.isComplete;
todoItems = [
  ...todoItems.slice(0, index), 
  {    ...item,    isComplete: !isComplete  },
  ...todoItems.slice(index + 1)
];
console.log(todoItems);
