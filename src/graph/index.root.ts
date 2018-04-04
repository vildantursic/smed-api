import faker from 'faker';

const developer = {
    name: () => faker.name.firstName(),
    surname: () => faker.name.lastName(),
    address: () => faker.address.city(),
};

const company = {
    name: () => faker.name.firstName(),
    developers: (args) => {
        return Array(args.size).fill(developer);
    }
};

export const root = {
    products: (args) => {
        const product = faker.commerce.productName();

        return Array(args.size).fill({
            name: product,
            sulug: product.toLowerCase()
        });
    },
    companies: (args) => {
        return Array(args.size).fill(company);
    },
};