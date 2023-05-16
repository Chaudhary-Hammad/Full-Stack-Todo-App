import axios from 'axios'

const baseUrl = "http://localhost:8000"
const getAllTodo = (setToDo) => {
    axios
        .get(`${baseUrl}/get`)
        .then(({ data }) => {
            console.log('data ---> ', data);
            setToDo(data)
        })
}

const addToDO = (text, setInput, setTodo) => {

    axios.post(`${baseUrl}/create`, { name: text })
        .then((result) => {
            console.log(result);
            setInput("")
            getAllTodo(setTodo)
        })
}
const updateToDO = (toDoId, text, setTodo, setInput, setUpdate) => {
    axios.post(`${baseUrl}/update`, {_id: toDoId, name:text})
    .then((data)=>{

        setInput("")
        setUpdate(false)
        getAllTodo(setTodo)
    })
    .catch((err)=> console.log(err))
}
const deleteToDo = (_id, setTodo) => {

    axios
        .get(`${baseUrl}/del/${_id}`,)
        .then((data) => {
            console.log(data)
            getAllTodo(setTodo)
        })
        .catch((err) => console.log(err))

}
export { getAllTodo, addToDO, updateToDO, deleteToDo };