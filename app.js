var list = document.getElementById("list");

function addTodo(){
    var todo_item = document.getElementById("todo-item")
   
    // create li tag with text node
    var li = document.createElement('li')
    var liText = document.createTextNode(todo_item.value)
    li.appendChild(liText)
   
    // create delete button
    var delBtn = document.createElement('button')
    var delText = document.createTextNode('Delete')
    delBtn.setAttribute("class","delbtnclass")
    delBtn.setAttribute("onclick","deleteItem(this)")
    delBtn.appendChild(delText)

    // create edit button
    var editBtn = document.createElement("button")
    var editText = document.createTextNode("Edit")
    editBtn.setAttribute("class","editbtnclass")
    editBtn.appendChild(editText)
    editBtn.setAttribute("onclick","editItem(this)")

    li.appendChild(delBtn)
    li.appendChild(editBtn)

    list.appendChild(li)
    todo_item.value = "";
    console.log(li)
}

function deleteItem(e){
    e.parentNode.remove();

}

function editItem(e){
    var val = prompt("Enter New Value", e.parentNode.firstChild.nodeValue)
    e.parentNode.firstChild.nodeValue = val; 
}

function deleteAll(){
    list.innerHTML = "";
}