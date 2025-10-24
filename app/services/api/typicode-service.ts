import axios from "axios";

export type TodoItem = {
    userId: number,
    id: number,
    title: string,
    completed: boolean
}


export async function fetchAllTodoItems(){
   let response = await axios.get("https://jsonplaceholder.typicode.com/todos")
   
   if(response.status === 200){

    return response.data as TodoItem[]
   }
}

export async function fetchTodoItem(id:number){
    let response = await axios.get(`https://jsonplaceholder.typicode.com/todos/${id}`)
    
    if(response.status === 200){

        return response.data as TodoItem
    }
}