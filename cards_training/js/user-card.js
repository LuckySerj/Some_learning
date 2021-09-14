import TaskManager from './task-manager.js'
import Element from './element.js'
import RemoveButton from './remove-button.js'
import { deleteUser } from './api/users.js'
class UserCard extends Element {
    constructor(id, name, username, email, company) {
        super()
        this.id = id;
        this.name = name;
        this.username = username;
        this.email = email;
        this.company = company;
    }
    renderHeader() {
        const header = this.createElement("div", ["card-header"])
        const removeBtn = new RemoveButton({
            onClick: event => {
                const isOk = confirm('Are you sure you want to remove the user?')
                if (isOk) {
                    this.userCard.remove()
                    deleteUser(this.id)
                }
            }
        })
        header.append(removeBtn.render())
        header.insertAdjacentHTML("afterbegin", `<a href="mailto:${this.email}">${this.name}</a><br><span>(@${this.username})</span>`);
        return header
    }
    renderBody() {
        this.body = this.createElement("div", ["card-body"]);
        return this.body
    }
    renderTasks(todos) {
        const taskManager = new TaskManager(todos, this.body)
        taskManager.render()
    }

    renderFooter() {
        const footer = this.createElement("div", ["card-footer"]);
        footer.insertAdjacentHTML("afterbegin", `<small class="text-muted">${this.company}</small>`)
        return footer
    }
    render() {
        this.userCard = this.createElement("div", ["card", "user-card"])
        this.userCard.append(this.renderHeader(), this.renderBody(), this.renderFooter());
        return this.userCard
    }
}

export default UserCard
