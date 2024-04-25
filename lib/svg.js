class SVG {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    }
    render() {
        return `<svg width="300" height="200" version="1.1">${this.shapeEl}${this.textEl}</svg>`

    }
    setText(text, color) {
        this.textEl = `<text x="133" y="100" font-family="Super Sans" fill="${color}">${text}</text>`
    }
    setShape(shape) {
        this.shapeEl = shape.render()
    }
}

module.exports = SVG