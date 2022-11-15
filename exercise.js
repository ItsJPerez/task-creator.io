var button = document.getElementById("enter");
var input = document.getElementById("userInput");
var ul = document.querySelector('ul');


// Event Listeners for the button and keypress
button.addEventListener("click", function(){
    if (inputValue() > 0){
        addLiWithButtonClick();
    }
})

input.addEventListener('keypress', function(event){
    if (inputValue() > 0 && event.code === "Enter")
    {
        addLiButtonWithKey();
    }
})

// Functions

// This returns the value of the input
function inputValue() {
    return input.value.length;
}

// Function to add li,done,and delete button when you click on the button to enter
function addLiWithButtonClick() {
    var div = document.createElement("div"); //creates div
    var li = document.createElement('li'); //cretaed li
    var doneBtn = document.createElement('button'); //done button created
    var delButton = document.createElement('button'); //delete button created
    div.classList.add("wrapper"); //adds the wrapper class to the created div
    doneBtn.setAttribute('id', 'doneBtn') //id of doneBtn is 'doneBtn'
    delButton.setAttribute('id', 'delBtn'); //id of delBtn is 'delBtn'
    ul.appendChild(div); //the div that wrapps the li is appended to the ul
    div.append(li,doneBtn,delButton); //the created li,doneBtn, and delBtn is appended to the div
    li.appendChild(document.createTextNode(input.value)); //Allows for user input to display inside li
    input.value = ""; //Makes sure the input clears after entering something
    doneBtn.innerHTML = 'Done' // doneBtn has text of "Done"
    delButton.innerHTML = "x"; //delBtn has text of 'x'

   doneBtn.addEventListener("click", function(){
     li.classList.toggle('done');
   })
  delButton.addEventListener('click', function(){
    div.remove();
  })
}

// Function to add li,done,and delete button with keypress
function addLiButtonWithKey() {
    var div = document.createElement("div"); //creates div
    var li = document.createElement('li'); //cretaed li
    var doneBtn = document.createElement('button'); //done button created
    var delButton = document.createElement('button'); //delete button created
    div.classList.add("wrapper"); //adds the wrapper class to the created div
    doneBtn.setAttribute('id', 'doneBtn') //id of doneBtn is 'doneBtn'
    delButton.setAttribute('id', 'delBtn'); //id of delBtn is 'delBtn'
    ul.appendChild(div); //the div that wrapps the li is appended to the ul
    div.append(li,doneBtn,delButton); //the created li,doneBtn, and delBtn is appended to the div
    li.appendChild(document.createTextNode(input.value)); //Allows for user input to display inside li
    input.value = ""; //Makes sure the input clears after entering something
    doneBtn.innerHTML = 'Done' // doneBtn has text of "Done"
    delButton.innerHTML = "x"; //delBtn has text of 'x'
   doneBtn.addEventListener("click", function(){
     li.classList.toggle('done');
   })
    delButton.addEventListener('click', function(){
    div.remove();
  })
}








// Other Application Code Below Used As Guide 

// function addToDo() {
//     var Input = document.getElementById("enter").value // gets input from input box
//     var list = document.getElementById('todos'); // gets the list div from html doc
//     var entry = document.createElement('li'); // creats a new list element 
//     entry.setAttribute('id', 'ToDo') // adds id to list element 
  
//     var deleteTodo = document.createElement("button"); // creates a button
//     var doneTodo = document.createElement("button");
//     deleteTodo.setAttribute('id', 'deletetodobtn')
//     doneTodo.setAttribute('id', 'deletetodobtn')
//     deleteTodo.innerHTML = "Delete " // button text  
//     doneTodo.innerHTML = "Done"
  
//     doneTodo.onclick = function doneTodo() { // function to delete list element (todo) 
//       entry.classList.toggle('done'); // or just classList.add
//     }
  
//     deleteTodo.onclick = function deleteTodo() { // function to delete list element (todo) 
//       entry.remove()
//     }
  
//     entry.textContent = Input // adds  input text to list element 
//     list.appendChild(entry); // adds element to list 
//     entry.appendChild(deleteTodo); // appends the button 
//     entry.appendChild(doneTodo);
//     document.getElementById("enter").value = ""; // reinitialises text field with ""
//   }
  
//   document.addEventListener("keypress", function onEvent(event) { // if enter is clicked todo is added
//     if (event.key === "Enter")
//       addToDo()
//   })


