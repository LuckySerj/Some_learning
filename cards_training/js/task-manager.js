import Element from './element.js'
import RemoveButton from './remove-button.js'
import { updateTodo, deleteTodo } from './api/todos.js'

class Task extends Element {
    constructor({ title, completed, id }) {
        super()
        this.id = id
        this.title = title
        this.completed = completed
    }
    attachListeners() {
        this.el.addEventListener('click', () => {
            this.toggleCompleted()
            updateTodo(this.id, { completed: this.completed })
        })
    }
    toggleCompleted() {
        this.completed = !this.completed
        this.el.classList.toggle("task-list--item-completed")
    }
    render() {
        this.el = this.createElement("li", ["list-group-item", "task-list--item", "list-group-item-action"], this.title);
        if (this.completed) {
            this.el.classList.add("task-list--item-completed")
        }
        this.removeBtn = new RemoveButton({
            onClick: event => {
                console.log('from task');
                event.stopPropagation()
                const isOk = confirm('Are you sure you want to delete the task?')
                if (isOk) {
                    this.el.remove()
                    deleteTodo(this.id)
                }
            }
        })
        this.el.append(this.removeBtn.render())
        this.attachListeners()
        return this.el
    }
}

class TaskManager extends Element {
    constructor(todos, containerEl) {
        super()
        this.todos = todos;
        this.containerEl = containerEl;
        this.tasksContainer = this.createElement("ul", ["list-group", "task-list"]);
        this.containerEl.append(this.tasksContainer)
    }

    render() {
        const slicedTodos = this.todos.slice(0, 4);
        this.addTasksToContainer(slicedTodos);

        if (this.todos.length > 4) {
            const button = this.createElement('button', ['btn', 'btn-primary', 'mt-3'], 'Show more')
            button.addEventListener("click", () => {
                const restTodos = this.todos.slice(4)
                this.addTasksToContainer(restTodos)
                button.remove()
            })
            this.containerEl.append(button);
        }
    }

    addTasksToContainer(todos) {
        todos.forEach((todo) => {
            const task = new Task(todo)
            this.tasksContainer.append(task.render())
        })
    }

}

export default TaskManager