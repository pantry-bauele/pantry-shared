import { Item } from '../src/item';

test('Proper item construction', async () => {
    let newItem = new Item();

    newItem.setName('Hamburger');
    newItem.setBrand('MyBrand');
    newItem.addVendorPrice('ShopA', 3.45);
    newItem.addVendorPrice('ShopC', 5.3);
    newItem.setCalories(300);

    expect(newItem.getName()).toBe('Hamburger');
    expect(newItem.getBrand()).toBe('MyBrand');
    expect(newItem.getVendorPrices()).toEqual([
        { name: 'ShopA', price: 3.45 },
        { name: 'ShopC', price: 5.3 },
    ]);
    expect(newItem.getCalories()).toBe(300);
    expect(newItem.setTotalQuantity(660, 'g'));
    expect(newItem.setServingSize(90, 'g'));
    expect(newItem.getTotalQuantity()).toEqual({ amount: 660, unit: 'g' });
    expect(newItem.getServingSize()).toEqual({ amount: 90, unit: 'g' });
});

test('Removing vendor price from item', async () => {
    let newItem = new Item();
    newItem.setName('Lettuce');
    newItem.addVendorPrice('ShopA', 3.45);
    newItem.addVendorPrice('ShopC', 5.3);

    expect(newItem.getVendorPrices()).toEqual([
        { name: 'ShopA', price: 3.45 },
        { name: 'ShopC', price: 5.3 },
    ]);
    expect(newItem.removeVendorPrice('ShopA')).toBeTruthy();
    expect(newItem.getVendorPrices()).toEqual([{ name: 'ShopC', price: 5.3 }]);
});

test('Removing invalid vendor price from item', async () => {
    let newItem = new Item();
    newItem.setName('Pasta');
    newItem.addVendorPrice('ShopB', 1.45);
    newItem.addVendorPrice('ShopC', 1.3);

    expect(newItem.getVendorPrices()).toEqual([
        { name: 'ShopB', price: 1.45 },
        { name: 'ShopC', price: 1.3 },
    ]);
    expect(newItem.removeVendorPrice('ShopA')).toBeFalsy();
    expect(newItem.getVendorPrices()).toEqual([
        { name: 'ShopB', price: 1.45 },
        { name: 'ShopC', price: 1.3 },
    ]);
});

test('Set invalid measurement unit', async () => {
    let newItem = new Item();
    newItem.setName('Yogurt');

    expect(() => {
        expect(newItem.setServingSize(100, 'bl'));
    }).toThrow('Unit is invalid');

    expect(() => {
        expect(newItem.setTotalQuantity(200, 'qe'));
    }).toThrow('Unit is invalid');
});

test('Adding vendor prices to item', () => {
    let newItem = new Item();

    expect(() => {
        newItem.addVendorPrice('ShopA', -2);
    }).toThrow('Cannot add a price with a negative or 0 value');

    newItem.addVendorPrice('ShopA', 3.45);
    expect(newItem.getVendorPrices()).toEqual([{ name: 'ShopA', price: 3.45 }]);
    newItem.addVendorPrice('ShopB', 123.43);
    expect(newItem.getVendorPrices()).toEqual([
        { name: 'ShopA', price: 3.45 },
        { name: 'ShopB', price: 123.43 },
    ]);

    expect(() => {
        newItem.addVendorPrice('ShopA', 0);
    }).toThrow('Cannot add a price with a negative or 0 value');
    expect(newItem.getVendorPrices()).toEqual([
        { name: 'ShopA', price: 3.45 },
        { name: 'ShopB', price: 123.43 },
    ]);
});

test('Setting calories to item', () => {
    let newItem = new Item();

    expect(() => {
        newItem.setCalories(-200);
    }).toThrow('Cannot set calories to negative value');

    newItem.setCalories(300);
    expect(newItem.getCalories()).toBe(300);
    newItem.setCalories(700);
    expect(newItem.getCalories()).toBe(700);
    newItem.setCalories(0);
    expect(newItem.getCalories()).toBe(0);
});

test('Setting serving size to item', () => {
    let newItem = new Item();

    expect(() => {
        newItem.setServingSize(0, 'g');
    }).toThrow('Cannot set quantity to a negative or 0 value');

    expect(() => {
        newItem.setServingSize(-1, 'g');
    }).toThrow('Cannot set quantity to a negative or 0 value');

    newItem.setServingSize(1, 'g');
    expect(newItem.getServingSize()).toEqual({ amount: 1, unit: 'g' });

    expect(() => {
        newItem.setServingSize(12, '');
    }).toThrow('Unit is invalid');
});

test('Setting total quantity to item', () => {
    let newItem = new Item();

    expect(() => {
        newItem.setTotalQuantity(0, 'g');
    }).toThrow('Cannot set quantity to a negative or 0 value');

    expect(() => {
        newItem.setTotalQuantity(-1, 'g');
    }).toThrow('Cannot set quantity to a negative or 0 value');

    newItem.setTotalQuantity(1, 'g');
    expect(newItem.getTotalQuantity()).toEqual({ amount: 1, unit: 'g' });

    expect(() => {
        newItem.setTotalQuantity(12, '');
    }).toThrow('Unit is invalid');
});

test('Testing defaults on Item', () => {
    let newItem = new Item();

    expect(newItem.getCalories()).toBe(null);
    expect(newItem.getTotalQuantity()).toBe(null);
    expect(newItem.getServingSize()).toBe(null);
});
