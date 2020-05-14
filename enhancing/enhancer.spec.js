const enhancer = require('./enhancer.js');
// test away!

const defaultItem = {
    name: 'test',
    enhancement: 10,
    durability: 100
};

describe('enhancer unit tests', () => {
    it('succeed', () => {
        expect(enhancer.succeed(defaultItem)).toEqual({ ...defaultItem, enhancement: 11 });
        expect(enhancer.succeed({ ...defaultItem, enhancement: 20 })).toEqual({ ...defaultItem, enhancement: 20 });
    });

    it('fail', () => {
        expect(enhancer.fail(defaultItem)).toEqual({ ...defaultItem, durability: 95 });
        expect(enhancer.fail({ name: 'test', enhancement: 17, durability: 100 })).toEqual({ name: 'test', enhancement: 16, durability: 90 });
        expect(enhancer.fail({ name: 'test', enhancement: 16, durability: 100 })).toEqual({ name: 'test', enhancement: 16, durability: 90 });
        expect(enhancer.fail({ name: 'test', enhancement: 15, durability: 100 })).toEqual({ name: 'test', enhancement: 15, durability: 90 });
        expect(enhancer.fail({ name: 'test', enhancement: 5, durability: 3 })).toEqual({ name: 'test', enhancement: 5, durability: 0 });
    });
});