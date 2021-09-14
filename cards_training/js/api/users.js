export const deleteUser = id => fetch(`https://ajax.test-danit.com/api/json/users/${id}`, {
    method: 'DELETE'
})
