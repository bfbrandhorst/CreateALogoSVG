class SVG {
    constructor() {
        this.textEl = "";
        this.shapeEl = "";
    }
    render() {
        return `<svg width="5cm" height="4cm" version="1.1">${this.shapeEl}${this.textEl}</svg>`

    }
    setText(text, color) {
        this.textEl = `<text font-family="Super Sans" fill=${color}>${text}</text>`
    }
    setShape(shape) {
        this.shapeEl = shape.render()
    }
}

module.exports = SVG