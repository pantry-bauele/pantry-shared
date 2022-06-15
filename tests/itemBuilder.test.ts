import { Item } from '../src/item';
import { ItemBuilder } from '../src/itemBuilder';

test('Build item with proper string', async () => {
    let jsonString = `{"name":"Bagel","brand":"Generic",
        "calories":"280",
        "totalQuantity":{"amount": "660", "unit": "g"},
        "servingSize":{"amount": "95", "unit": "g"},
        "vendorPrices":[{"name":"ShopA","price":"3.42"},
            {"name":"ShopC","price":"5"}]}`;

    let item = new Item();
    let itemBuilder = new ItemBuilder();
    item = itemBuilder.buildItem(jsonString);

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

test('Build item with proper object', async () => {
    let object = {
        _id: '62a9d9fb5644ae4d840373e1',
        accountId: '6228ed6564ca692b08cd6085',
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
