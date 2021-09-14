import Element from './element.js'

export class Modal extends Element {
    constructor(title) {
        super()
        this.title = title
    }
    show() {
        this.container.classList.add('show')
        this.container.style.display = 'block'
        document.body.classList.add('modal-open')
    }

    hide() {
        this.container.classList.remove('show')
        this.container.style.display = 'none'
        document.body.classList.remove('modal-open')
    }

    renderBody() {
        return '...'
    }

    render() {
        this.container = this.createElement('div', ['modal', 'fade'])

        const html = `
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">${this.title}</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">X</button>
                    </div>
                    <div class="modal-body">
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                        <button type="button" class="btn btn-primary">Save changes</button>
                    </div>
                </div>
            </div>
        `
        this.container.insertAdjacentHTML('beforeend', html)
        const modalBody = this.container.querySelector('.modal-body')
        this.close = this.container.querySelector('.btn-close')

        this.close.addEventListener('click', () => this.hide())

        modalBody.append(this.renderBody())
        return this.container
    }
}

export class UserModal extends Modal {
    constructor(title) {
        super(title)
    }

    renderBody() {
        const div = this.createElement('div', [], 'It\'s create user modal')
        return div
    }
}