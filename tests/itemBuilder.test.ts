import { Item } from '../src/item';
import { ItemBuilder } from '../src/itemBuilder';

test('Build item with proper string with id', async () => {
    let jsonString = `{"id": "62a9d9fb5644ae4d840373e1", 
        "name":"Bagel","brand":"Generic", "calories":"280",
        "totalQuantity":{"amount": "660", "unit": "g"},
        "servingSize":{"amount": "95", "unit": "g"},
        "vendorPrices":[{"name":"ShopA","price":"3.42"},
            {"name":"ShopC","price":"5"}]}`;

    let item = new Item();
    let itemBuilder = new ItemBuilder();
    item = itemBuilder.buildItem(jsonString);

    expect(item.getId()).toBe('62a9d9fb5644ae4d840373e1');
    expect(item.getName()).toBe('Bagel');
    expect(item.getBrand()).toBe('Generic');
    expect(item.getCalories()).toBe(280);
    expect(item.getVendorPrices()).toEqual([
        { name: 'ShopA', price: 3.42 },
        { name: 'ShopC', price: 5 },
    ]);
    expect(item.getTotalQuantity()).toEqual({ amount: 660, unit: 'g' });
    expect(item.getServingSize()).toEqual({ amount: 95, unit: 'g' });
});

test('Build item with proper string with _id', async () => {
    let jsonString = `{"_id": "62a9d9fb5644ae4d840373e1", 
        "name":"Bagel","brand":"Generic", "calories":"280",
        "totalQuantity":{"amount": "660", "unit": "g"},
        "servingSize":{"amount": "95", "unit": "g"},
        "vendorPrices":[{"name":"ShopA","price":"3.42"},
            {"name":"ShopC","price":"5"}]}`;

    let item = new Item();
    let itemBuilder = new ItemBuilder();
    item = itemBuilder.buildItem(jsonString);

    expect(item.getId()).toBe('62a9d9fb5644ae4d840373e1');
    expect(item.getName()).toBe('Bagel');
    expect(item.getBrand()).toBe('Generic');
    expect(item.getCalories()).toBe(280);
    expect(item.getVendorPrices()).toEqual([
        { name: 'ShopA', price: 3.42 },
        { name: 'ShopC', price: 5 },
    ]);
    expect(item.getTotalQuantity()).toEqual({ amount: 660, unit: 'g' });
    expect(item.getServingSize()).toEqual({ amount: 95, unit: 'g' });
});

test('Build item with proper object with id', async () => {
    let object = {
        id: '62a9d9fb5644ae4d840373e1',
        name: 'Bagel',
        brand: 'Generic',
        calories: 280,
        vendorPrices: [
            {
                name: 'ShopA',
                price: 3.42,
            },
            {
                name: 'ShopC',
                price: 5,
            },
        ],
        totalQuantity: {
            amount: 12,
            unit: 'lb',
        },
        servingSize: {
            amount: 1,
            unit: 'lb',
        },
    };

    let item = new Item();
    let itemBuilder = new ItemBuilder();
    item = itemBuilder.buildItem(object);

    expect(item.getId()).toBe('62a9d9fb5644ae4d840373e1');
    expect(item.getName()).toBe('Bagel');
    expect(item.getBrand()).toBe('Generic');
    expect(item.getCalories()).toBe(280);
    expect(item.getVendorPrices()).toEqual([
        { name: 'ShopA', price: 3.42 },
        { name: 'ShopC', price: 5 },
    ]);
    expect(item.getTotalQuantity()).toEqual({ amount: 12, unit: 'lb' });
    expect(item.getServingSize()).toEqual({ amount: 1, unit: 'lb' });
});

test('Build item with proper object with _id', async () => {
    let object = {
        _id: '62a9d9fb5644ae4d840373e1',
        name: 'Bagel',
        brand: 'Generic',
        calories: 280,
        vendorPrices: [
            {
                name: 'ShopA',
                price: 3.42,
            },
            {
                name: 'ShopC',
                price: 5,
            },
        ],
        totalQuantity: {
            amount: 12,
            unit: 'lb',
        },
        servingSize: {
            amount: 1,
            unit: 'lb',
        },
    };

    let item = new Item();
    let itemBuilder = new ItemBuilder();
    item = itemBuilder.buildItem(object);

    expect(item.getId()).toBe('62a9d9fb5644ae4d840373e1');
    expect(item.getName()).toBe('Bagel');
    expect(item.getBrand()).toBe('Generic');
    expect(item.getCalories()).toBe(280);
    expect(item.getVendorPrices()).toEqual([
        { name: 'ShopA', price: 3.42 },
        { name: 'ShopC', price: 5 },
    ]);
    expect(item.getTotalQuantity()).toEqual({ amount: 12, unit: 'lb' });
    expect(item.getServingSize()).toEqual({ amount: 1, unit: 'lb' });
});
