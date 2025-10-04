// export default function ToDo({task}){
    
//     return(
//         <li>Task: {task} </li>
//     )
// }


// export default function ToDo({task, isDone, time=0}){
//     if(isDone === true){
//         return <li>Done: {task} Duration: {time}</li>
//     }else{
//         return <li>Pending: {task} </li>
//     }

// }


// export default function ToDo({task, isDone, time=0}){
//     return isDone? <li>Done: {task}</li> : <li>Not Done: {task}</li>
// }



// export default function ToDo({task, isDone, time = 0}){
//     return isDone && <li>Done Task: {task} Time: {time}</li>
// }


export default function ToDo({task, isDone, time = 0}){
    return isDone || <li>Not Done Task: {task} Time: {time}</li>
}