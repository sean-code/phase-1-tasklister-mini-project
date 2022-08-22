document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const input = document.getElementById("new-task-description");
  const formElement = document.querySelector("form");
  formElement.addEventListener('submit', (event) => {
    let newtask = input.value
    event.preventDefault();

    if (newtask.length === 0){
      alert('Prompt field can\'t be empty')
      }else{
        handleToDo(newtask);
      }
      formElement.reset();
  });
});


function handleToDo (newtask) {
  let listingItem = document.createElement("li");
  let btn = document.createElement('button')
}

btn.addEventListener('click', handleDelete);

btn.textContent='Remove X'
listingItem.innerText = `${newtask}`;
listingItem.appendChild(btn)
document.querySelector("#tasks").appendChild(listingItem);

function handleDelete(event){
  event.target.parentNode.remove()
  }