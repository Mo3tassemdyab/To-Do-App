const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");
const invalidText = document.getElementById("invalidText")

function addTask(){
    if (validInput() === true) {
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        invalidText.style.display = "none";

    

    }else{

        invalidText.style.display = "block";
     

    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);

}

function validInput(){
    let regex = /^[a-zA-Z 0-9]{3,}$/
    if(regex.test(inputBox.value) == true){
        inputBox.classList.replace("is-invalid","is-valid")
       return true
   } else {
       inputBox.classList.add("is-invalid")
       return false
   }
}

function showTask(){
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask();