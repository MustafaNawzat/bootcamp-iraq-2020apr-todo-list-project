window.onload = function () {
    const todaysDate = new Date();
    const year = todaysDate.getFullYear();
    const month = ("0" + (todaysDate.getMonth() + 1)).slice(-2);
    const today = ("0" + todaysDate.getDate()).slice(-2);
  
    const taskTextInput = document.getElementById("taskTextInput");
    const deadTimeInput = document.getElementById("deadTimeInput");
    const priorityInput = document.getElementById("priorityInput");
    const submitBtn = document.getElementById("submitBtn");
  
    const tasksStatus = document.getElementById("yourTask");
  
    const tasksList = document.getElementById("tasksList");
  
    function todaysTime(date) {
      date = `Today's date is ${year} - ${month} - ${today}`;
      document.getElementById("todaysTime").textContent = date;
    }
    todaysTime();
  
    // min attribute = today's date
    const minDate = year + "-" + month + "-" + today;
    deadTimeInput.setAttribute("min", minDate);
    deadTimeInput.setAttribute("value", minDate);
  
    let arrOfObj = [];
    let id = 0;
    let newMyObject
    function addToArr(){
      id += 1;
      const toDoArr = {
        id: id,
        taskTextInput: taskTextInput.value,
        deadTimeInput: deadTimeInput.value,
        priorityInput: priorityInput.value,
      };
      arrOfObj.push(toDoArr);
  
      const myObjectJson = JSON.stringify(toDoArr)
      localStorage.setItem("list", myObjectJson);
  
      const newMyObjectJSON = localStorage.getItem("list");    
      newMyObject = JSON.parse(newMyObjectJSON);
      console.log(newMyObject);
      
    }
  
  
    function addLi() {
      addToArr()
      console.log(newMyObject);
      
      for (let i = 0; i < newMyObject; i++) {
        if (newMyObject[i].id == id) {
          tasksList.insertAdjacentHTML("beforeend",
            `<li><p class="taskText">${newMyObject[i].taskTextInput}</p> 
              <p>${newMyObject[i].deadTimeInput}</p>
              <p>${newMyObject[i].priorityInput}</p>
              <div id="icon"><i class="iconSign">✔</i></div></li>`);
        }
      }
  
      // const taskText = document.querySelector(".taskText");
      // const iconSign = document.querySelector(".iconSign");
  
      // document.getElementById("icon").addEventListener("click", function () {
      //   taskText.classList.toggle("taskDone");
      //   iconSign.classList.toggle("opacity");
      // });
      //document.getElementById("theForm").reset();
    }
  
   
  
    submitBtn.addEventListener("click", function (e) {
  
      e.preventDefault();
  
      if (
        !taskTextInput.value.match(/^\s*$/) &&
        !deadTimeInput.value.match(/^\s*$/)
      ) {
        addLi();
        tasksStatus.innerText = "Your tasks";
      } else {
        alert("please fill all the inputs");
      }
    });
  };
  
  // apply re-oredering
  // select box for re order the item.
  //
  