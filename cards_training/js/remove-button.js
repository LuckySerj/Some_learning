import Element from "./element.js"

class RemoveButton extends Element {
    constructor({ onClick }) {
        super()
        this.onClick = onClick
    }

    render() {
        const btn = this.createElement("i", ['remove-btn', 'bi', 'bi-trash-fill'])
        if (this.onClick) {
            btn.addEventListener('click', (event) => this.onClick(event))
        }
        return btn
    }
}

export default RemoveButton
