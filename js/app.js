

var taskList = document.getElementById('task-list');
var input = document.querySelector('input');
var sortable = Sortable.create(taskList,{ghostClass:'dragHighlight',animation: 150}); 

function setAttributes (element, attributes) {
    for (var key in attributes){
        element.setAttribute(key, attributes[key]);
    }
}

function addTask(item){
    
    var taskItem = document.createElement('li');
    var taskCheck = document.createElement('input');
    var taskLabel = document.createElement('label');
    
    setAttributes(taskCheck, {'type':'checkbox', 'onClick': 'deleteTask(this)', 'class':'check'});
    setAttributes(taskItem, {'class':'task-item'});
    setAttributes(taskLabel, {'for':'task','class':'task-label', 'ondblclick':'edit(this)'});
        
    taskLabel.textContent = item;
    taskItem.appendChild(taskCheck);
    taskItem.appendChild(taskLabel);
    taskList.appendChild(taskItem);

}

//input interaction: add task or inform that the you are not creating anything to do
input.addEventListener('keydown', function(e) {

  var key = e.keyCode || e.which;
  if (key === 13) {
      if (this.value == ""){
          alert("You don't want to be doing nothing!");
      }
      else{
         addTask(this.value);

      }
  this.value="";
}
});


function deleteTask(e){
    e.parentNode.style.opacity = '0';
    setTimeout(function(){e.parentNode.parentNode.removeChild(e.parentNode);},500);
    
}

function updateTodoCount(){
    var i = 0, itemCount = 0;
    while (taskList.getElementsByTagName('li')[i++]) itemCount++;
    document.getElementById('count-todo').innerHTML = itemCount + " todo item";  
}
    

// check if there are new items on the list, update count of to-dos
var observer = new MutationObserver(
  function(mutations) {   
      updateTodoCount();
}),  
    
config = {childList: true,characterData: true};

observer.observe(taskList, config);


function edit(e){
    
    var allTasks = document.querySelectorAll('.task-label');
    
    //make other list item non editable before activating selected one
    for (var i=allTasks.length; i--;){
        allTasks[i].contentEditable = false;
    }
    
    e.focus();
    e.contentEditable = true;
    e.addEventListener('keydown', function(k) {
    
        var key = k.keyCode || k.which;
        if (key === 13) {
            e.contentEditable = false;
            }
        });
    
    //make task list not editable when click elsewhere on the page.
    document.addEventListener('click', function(k) {
    k = k || window.event;
    var target = k.target || k.srcElement;
        if (target.isEqualNode(e) == false) { e.contentEditable = false;   }
   });
}

    