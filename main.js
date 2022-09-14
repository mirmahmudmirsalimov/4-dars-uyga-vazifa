// const num = 4;
// // const num1 = 2;

// // // localStorage.setItem('num');
// console.log(localStorage.getItem('num'));

// // localStorage.setItem('num', num.toString());
// // localStorage.setItem('num1', num1.toString());

// console.log(localStorage.getItem('num1'));

// const LoculStroge = localStorage.setItem('num', num.toString());
// const yotItem = localStorage.getItem('num');
// console.log(yotItem);

//  JSON

// const student = {
//     name: 'Ali',
//     age: '15',
// }
// const setTuCosdStudent = localStorage.setItem('student', student.toString());
// const json = JSON.stringify('student');
// const object = JSON.parse(json);
// console.log(object);

const inputVal = document.getElementsByClassName('inputVal')[0];

const addTaskBtn = document.getElementsByClassName('btn')[0];


addTaskBtn.addEventListener('click', function (){
 
if(inputVal.value.trim()!=0){
      let localItems = JSON.parse(localStorage.getItem('localItem'))
   if(localItems === null){
        taskList = []

   }else{
       taskList = localItems;
   }
   taskList.push(inputVal.value);
   localStorage.setItem('localItem', JSON.stringify(taskList)); 
}
   inputVal.value = '';

   showItem()
})

function showItem(){
   let localItems = JSON.parse( localStorage.getItem('localItem'))
   if(localItems === null){
        taskList = []

   }else{
       taskList = localItems;
   }


let UI = '';
let itemShow = document.querySelector('.todoLists');
taskList.map((item, index)=> {
   

   UI += `
   <div class="todoList">
   <p>${item}</p>
   <button class="deleteTask" onclick="deleteItem(${index})" >-</button>
   </div>
   `
})
itemShow.innerHTML = UI;
}
showItem()

function deleteItem(index){
   taskList.splice(index, 1)
   localStorage.setItem('localItem', JSON.stringify(taskList));
   showItem()
}

function clearTask(){
   
localStorage.clear()
showItem()
}