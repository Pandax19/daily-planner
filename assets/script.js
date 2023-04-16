// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
let taskEl = $('col-8 col-md-10 description');
let today = dayjs();
let time = dayjs().format("H");
let container = $(".container-lg");
let taskHour = 
$('#date').text(today.format('MMM D, YYYY'));
let entry = $('#col-8 col-md-10 description').text(taskEl);
let task = taskEl.val();
// var entry = taskEl.val();

let printTask = function(entry){
  // let taskEl = $('<hour-1>');
  taskEl.addClass('col-8 col-md-10 description');
  taskEl.appendTo(entry);
}

var todos = [];
let savedTodos = {
  "time" : taskHour,
  "task" : task
};

localStorage.setItem("savedTasks", JSON.stringify(savedTodos));



container.on("click", ".saveBtn", function(event){
let taskDiv = $(event.target).parent().val($(this).attr("data-time"));
  console.log(taskDiv);
  taskHour = parseInt(taskDiv.attr("data-time"));
  console.log(taskHour);
  task = taskDiv.children(".description").val();
  console.log(task);
});


let storedTasks = JSON.parse(localStorage.getItem("savedTasks"));




entry = localStorage.getItem('save');


$(function () {

});


// var todos = [];

// // The following function renders items in a todo list as <li> elements
// function renderTodos() {
//   // Clear todoList element and update todoCountSpan
//   todoList.innerHTML = "";
//   todoCountSpan.textContent = todos.length;

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
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.


let handleFormSubmit = function (event) {
  event.preventDefault();

}
