export const updateTodo = (id, body) => fetch(`https://ajax.test-danit.com/api/json/todos/${id}`, {
    method: 'PUT',
    body: JSON.stringify(body)
})
    .then(response => response.json())


export const deleteTodo = id => fetch(`https://ajax.test-danit.com/api/json/todos/${id}`, {
    method: 'DELETE'
})
