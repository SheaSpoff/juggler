
async function getToDos(){
    const res = await fetch('/.netlify/functions/todos')
    console.log(res)          
    const data = await res.json()
    console.log( data.todos)
}

getToDos()