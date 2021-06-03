const notes = [];
let input = document.querySelector('input');
let div = document.querySelector('#notes');
let submitBtn = document.querySelector("#submit");
// localStorage.setItem("test", "Iyke");

submitBtn.addEventListener('click', () =>{
    if(input.value === ""){
        alert("Please add a task")
            input.value = ""
            return 
    }
    if(notes.includes(input.value)){
        alert ("This todo has already been added")
    }else{
        
        notes.push(input.value)
        getData()
        input.value = ""
    }

    console.log(notes);
});

function getData(){
    let data = "" ;
    for (let index = 0; index < notes.length; index++) {
        data +=  `<li>  ${notes[index]} <button onclick='deleteData(${index})' class="mybtn">Delete</button></li>`      
    }
    document.getElementById("notes").innerHTML = data;
}

function deleteData(index){
    notes.shift(index)
    getData()
}