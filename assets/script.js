// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let taskEl = $('.description');
let today = dayjs();
let time = dayjs().format("H");
let container = $(".container-lg");
let taskHour = 
$('#date').text(today.format('MMM D, YYYY'));
// let entry = $('#col-8 col-md-10 description').text(taskEl);
let task = taskEl.val();
// var entry = taskEl.val();

// let printTask = function(entry){
//   // let taskEl = $('<hour-1>');
//   taskEl.addClass('col-8 col-md-10 description');
//   taskEl.appendTo(entry);
// }
entry = localStorage.getItem('save');
var todos = [];
let savedTodos = {
  "time" : taskHour,
  "task" : task
};

container.on("click", ".saveBtn", function(event){
let taskDiv = $(event.target).parent().val($(this).attr("data-time"));
  console.log("taskDiv", taskDiv);
  taskHour = parseInt(taskDiv.attr("data-time"));
  console.log("taskHour", taskHour);
  task = taskDiv.children(".description").val();
  console.log(task);
  savedTodos = {
    "time" : taskHour,
    "task" : task
  }
  // event.push("savedTasks")
  localStorage.setItem("savedTasks", JSON.stringify(savedTodos));
  storedTasks = JSON.parse(localStorage.getItem("savedTasks"));
  
});
//  push savedTodos

let storedTasks = JSON.parse(localStorage.getItem("savedTasks"));

for (var i = 0; i < task.length; i++)
  console.log(task[i]);
// renderTodos


function render(savedTasks){
  // todoList.innerHTML = "";
  $("[name=savedTasks]").val(savedTasks);
  storedTasks = JSON.parse(localStorage.getItem("savedTasks"));
  savedTasks.push(savedTasks, "savedTodos");
  }
// 
  // 
// }
function displaySchedule() { 
  let storedSchedule = JSON.parse(localStorage.getItem("schedule"));
  let scheduleBoxes = document.querySelectorAll('.description');
  for (i = 0; i < storedSchedule.length; i++) {
  scheduleBoxes[i].textContent = storedSchedule[i].task
  }};
  
// init ();
$(function () {
});

let handleFormSubmit = function (event) {
  event.preventDefault(); 
  
  // event.push(savedTasks, "savedTodos");
  // render savedTasks
//   var unicorn = localStorage.getItem("uinicorn-0")
//   if(unicorn){
//     unicorn = JSON.parse(unicorn);
//     $container("[name=unicorn-name]").val(unicorn.unicornName);
//     console.log(unicorn);
  // todoList.innerHTML = "";
  // todoCountSpan.textContent = todos.length;
  // event.push(savedTasks, "savedTodos");
}
// // The following function renders items in a todo list as <li> elements
// function renderTodos() {
  // Clear todoList element and update todoCountSpan
//   // Render a new li for each todo
//   for (var i = 0; i < todos.length; i++) {
//     var todo = todos[i];
//     var li = document.createElement("li");
//     li.textContent = todo;
//     li.setAttribute("data-index", i);
//     var button = document.createElement("button");
//     button.textContent = "Complete ✔️";

//     li.appendChild(button);
//     todoList.appendChild(li);
//   }
// }

  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //

