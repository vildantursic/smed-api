import faker from 'faker';
import * as _ from 'lodash';

const types = ['warning', 'info', 'error'];
let i = 0;
let j = 0;

const product = {
    name: () => faker.commerce.productName()
};

const image = {
    url: () => faker.image.technics()
};

const step = {
    description: () => faker.lorem.sentence(),
    order: () => i++,
    actions: (args: { size: number }) => {
        j = 0;
        return Array(args.size).fill(action);
    }
}

const action = {
    description: () => faker.lorem.sentence(),
    order: () => j++,
    image: () => image,
    type: () => _.sample(types)
};

export const root = {
    products: (args: { size: number }) => {
        console.log(product.name);
        return Array(args.size).fill(product);
    },
    steps: (args: { size: number }) => {
        i = 0;
        return Array(args.size).fill(step);
    }
};