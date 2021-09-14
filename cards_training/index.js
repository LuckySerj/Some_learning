import UserCard from './js/user-card.js'
import Element from './js/element.js'
import { Modal, UserModal } from './js/modal.js'
class Header extends Element {
    constructor() {
        super()
    }
    render() {
        this.container = this.createElement('header', ['header', 'shadow', 'p-4', 'd-flex', 'align-items-center', 'justify-content-end'])
        const button = this.createElement('button', ['btn', 'btn-primary'], 'Create')
        this.container.append(button)
        return this.container
    }
}



const createUserModal = new UserModal('Create user')
const createTaskModal = new Modal('Create task')

const header = new Header()

document.body.insertAdjacentElement('beforeend', createUserModal.render())
document.body.insertAdjacentElement('beforeend', createTaskModal.render())

setTimeout(() => createUserModal.show(), 1500)


document.body.insertAdjacentElement('afterbegin', header.render())


async function displayUsers() {
    const response = await fetch(`https://ajax.test-danit.com/api/json/users/`)
    const users = await response.json();
    const tasksBoard = document.querySelector(".tasks-board");
    users.forEach(async user => {
        const { id, name, username, email, company: { name: companyname } } = user;
        const cardUser = new UserCard(id, name, username, email, companyname)
        tasksBoard.append(cardUser.render());

        const response = await fetch(`https://ajax.test-danit.com/api/json/users/${user.id}/todos`)
        const todos = await response.json();
        cardUser.renderTasks(todos)
    })
}

displayUsers()
