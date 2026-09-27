// The Setup Zone
const taskinput = document.querySelector(".input-group input");
const addbtn = document.getElementById("addtask");
const tasklist = document.getElementById("tasklist")
let savedtasks = JSON.parse(localStorage.getItem("tasks")) || [];
const clearbtn = document.getElementById("clear");

// The "Add New Task" Zone
addbtn.addEventListener("click",()=>{
    console.log("clicked");
    task = taskinput.value;
    if(task === ""){
        alert("Please type a task");
    }else{
        let listitem = document.createElement('li')
        listitem.textContent = task
        let deletebtn = document.createElement("button");
        deletebtn.textContent = "Delete";
        deletebtn.classList.add("delete-btn");
        deletebtn.addEventListener("click",()=>{
            listitem.remove();
        });
        listitem.appendChild(deletebtn);
        tasklist.appendChild(listitem);
        savedtasks.push(taskinput.value);
        localStorage.setItem("tasks",JSON.stringify(savedtasks));
        taskinput.value = "";
    }
});

// The Startup Loop Zone
savedtasks.forEach((savedtasktext) => {
    let listitem = document.createElement("li");
    listitem.textContent = savedtasktext;

    let deletebtn = document.createElement("button");
    deletebtn.textContent = "Delete";
    deletebtn.classList.add("delete-btn");
    deletebtn.addEventListener("click",()=>{
        listitem.remove();
        let index = savedtasks.indexOf(savedtasktext);
        console.log(savedtasktext)
        savedtasks.splice(index,1);
        localStorage.setItem("tasks",JSON.stringify(savedtasks));
    });
    listitem.appendChild(deletebtn);
    tasklist.appendChild(listitem);
});

// clear all button
clearbtn.addEventListener("click",()=>{
    tasklist.innerHTML = "";
    savedtasks = [];
    localStorage.setItem("tasks",JSON.stringify(savedtasks));
});