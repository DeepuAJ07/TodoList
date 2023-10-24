let input = document.querySelector('.input')
let add = document.querySelector('.add')
let list = document.querySelector('.list')
//local storage
let todo = [];
window.onload=()=>{
   todo = JSON.parse(localStorage.getItem('todo')) || []
   todo.forEach(todos=>addTodo(todos)
    
   );
}
add.addEventListener('click',()=>{
  todo.push(input.value)
 
  addTodo(input.value)
  input.value=''
 
})

function addTodo(todos){
    let para = document.createElement('p')
    para.innerText = todos;
    
    list.appendChild(para)
    localStorage.setItem('todo',JSON.stringify(todo))
    para.addEventListener('click',()=>{
        para.style.textDecoration='line-through'
        remove(todos)
    })
    para.addEventListener('dblclick',()=>{
       list.removeChild(para)
        remove(todos)
    })
}

function remove(todos){
    let index = todo.indexOf(todos)
    if(index>-1){
        todo.splice(index,1)
    }
    localStorage.setItem('todo',JSON.stringify(todo))
}



