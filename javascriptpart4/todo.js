let todo=[];
let req=prompt("Enter your choice 1.list,2.add,3.delete,4.quit");
while(true){
    if(req=="list"){
        console.log("Showing the task");
        for(task of todo){
            console.log(task);
        }
    }
    else if(req=="add"){
        let task=prompt("Enter the task you want to add");
        todo.push(task);
        console.log("Task added succerssfully");
    }
    else if(req=="delete"){
        let idx=parseInt("please enter the index numbe");
        todo.splice(idx,1);

    }
    else if(req=="quit"){
        console.log("Quitting");
        break;
    }
    else{
        console.log("Invalid choice");

    }
    req=prompt("Enter again");
}