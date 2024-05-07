const { Square, Circle, Triangle } = require('./shapes')


describe('Square', () => {
    it('should render a blue square', () => {
        const shape = new Square();
        const expectedShape = '<rect  x="40" y="10" height="200" width="200" fill="blue"/>';
        shape.setColor('blue');
        expect(shape.render()).toEqual(expectedShape)
    })
});

describe('Circle', () => {
    it('should render a blue circle', () => {
        const shape = new Circle();
        const expectedShape = '<circle cx="150" cy="100" r="100" fill="blue"/>';
        shape.setColor('blue');
        expect(shape.render()).toEqual(expectedShape)
    })
});

describe('Triangle', () => {
    it('should render a blue triangle', () => {
        const shape = new Triangle();
        const expectedShape = '<polygon points="150, 18 244, 182 56, 182" fill="blue"/>';
        shape.setColor('blue');
        expect(shape.render()).toEqual(expectedShape)
    })
});