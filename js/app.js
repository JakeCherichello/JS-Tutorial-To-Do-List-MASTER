// CODE EXPLAINED channel
// selet elements
const clear = document.querySelector(".clear")
const dateElement = document.getElementById("date")
const list = document.getElementById("list")
const input = document.getElementById("input")

// classes name
const CHECK = "fa-check-circle"
const UNCHECK = "fa-circle-thin"
const LINE_THROUGH = "lineThrough"

// show date
const options = {weekday : "long", month: "short", day:"numeric"}
const today = new Date();

dateElement.innerHTML = today.toLocaleDateString("en-us", options);

// add to do

function addToDo(toDo){

    const item = ` <li class="item">
                    <i class="fa fa-circle-thin co" job="complete" id="0"></i>
                    <p class="text"> ${toDo}</p>
                    <i class="fa fa-trash-o de" job="delete" id="0"></i>
                    </li>
                `
    const position = "beforeend";
    list.insertAdjacentHTML (position, item);
}

// add item to list user the enter key

document.addEventListener("keyup",function(even){
    if(event.keyCode == 13){
        const toDo = input.value;

        if(toDo){
            addToDo(toDo);

        }
    }
})