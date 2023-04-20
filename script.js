date = new Date();
year = date.getFullYear();
month = date.getMonth() + 1;
day = date.getDate();
document.getElementById("current_date").innerHTML = month + "/" + day + "/" + year;

/* actual to do list stuff */

const input = document.querySelector("input[type='text']");
const ul = document.querySelector("ul");
const deleteButton = document.querySelectorAll("ul a");


const inputLength = () => input.value.length;

const removeItem = (event) => {
  event.target.parentNode.remove();

}

for (let buttons of deleteButton) {
  buttons.addEventListener("click", removeItem);
}

const newTask = () => {
  let v = input.value;
  let li = document.createElement("li");
  li.innerHTML = "<label><input type='checkbox'><i></i><span>" + v + "</span><a href='#'>x</a></label>";
  ul.appendChild(li);
  input.value = "";
  let button = document.querySelectorAll("ul a");
  let removeli = (event) => {
    event.target.parentNode.remove();
  }
  for (let one of button) {
    one.addEventListener("click", removeli);
  }

}

const addTaskEnter = (e) => {
  if (inputLength() > 0 && event.keyCode === 13) {
    newTask();
  }
}

input.addEventListener("keypress", addTaskEnter);
