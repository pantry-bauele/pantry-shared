import { Item } from '../src/item';
import { PantryItem } from '../src/pantryItem';
import { ItemBuilder } from '../src/itemBuilder';
import { PantryItemBuilder } from '../src/pantryItemBuilder';

test('Build item with proper string', async () => {
    // JSON string needs to be changed to match what it would
    // actually look like
    let jsonString = `{"item":{"id":"62d56443b8909af778004eb6","name":"Bagel","brand":"Generic","calories":360,"vendorPrices":[{"name":"ShopA","price":3}],"totalQuantity":{"amount":12,"unit":"g"},"servingSize":{"amount":3,"unit":"g"}},"availableQuantity":{"amount":-1,"unit":""},"expirationDate":"1970-01-01T00:00:00.000Z"}`;

    let pantryItemBuilder = new PantryItemBuilder();
    let pantryItem = pantryItemBuilder.buildItem(jsonString);
    let item = pantryItem.getBaseItem();

    expect(item.getId()).toBe('62d56443b8909af778004eb6');
    expect(item.getName()).toBe('Bagel');
    expect(item.getBrand()).toBe('Generic');
    expect(item.getCalories()).toBe(360);
    expect(item.getVendorPrices()).toEqual([{ name: 'ShopA', price: 3 }]);
    expect(item.getTotalQuantity()).toEqual({ amount: 12, unit: 'g' });
    expect(item.getServingSize()).toEqual({ amount: 3, unit: 'g' });

    expect(pantryItem.getAvailableQuantity()).toEqual({ amount: -1, unit: '' });

    let date = new Date('1970-01-01T00:00:00.000Z');
    expect(pantryItem.getExpirationDate()).toEqual(date);
});

test('Build item with proper string 2', async () => {
    // JSON string needs to be changed to match what it would
    // actually look like
    let jsonString = `{"item":{"id":"62d56443b8909af778004eb6","name":"Bagel","brand":"Generic","calories":360,"vendorPrices":[{"name":"ShopA","price":3}],"totalQuantity":{"amount":12,"unit":"g"},"servingSize":{"amount":3,"unit":"g"}},"availableQuantity":{"amount":1234,"unit":"lb"},"expirationDate":"1970-01-01T00:00:00.000Z"}`;

    let pantryItemBuilder = new PantryItemBuilder();
    let pantryItem = pantryItemBuilder.buildItem(jsonString);
    let item = pantryItem.getBaseItem();

    expect(item.getId()).toBe('62d56443b8909af778004eb6');
    expect(item.getName()).toBe('Bagel');
    expect(item.getBrand()).toBe('Generic');
    expect(item.getCalories()).toBe(360);
    expect(item.getVendorPrices()).toEqual([{ name: 'ShopA', price: 3 }]);
    expect(item.getTotalQuantity()).toEqual({ amount: 12, unit: 'g' });
    expect(item.getServingSize()).toEqual({ amount: 3, unit: 'g' });

    expect(pantryItem.getAvailableQuantity()).toEqual({
        amount: 1234,
        unit: 'lb',
    });

    let date = new Date('1970-01-01T00:00:00.000Z');
    expect(pantryItem.getExpirationDate()).toEqual(date);
});

test('Build item with proper string 3', async () => {
    // JSON string needs to be changed to match what it would
    // actually look like
    let jsonString = `{"item":{"id":"62d56443b8909af778004eb6","name":"Bagel","brand":"Generic","calories":360,"vendorPrices":[{"name":"ShopA","price":3}],"totalQuantity":{"amount":12,"unit":"g"},"servingSize":{"amount":3,"unit":"g"}},"availableQuantity":{"amount":1234,"unit":"lb"},"expirationDate":"1970-01-01T00:00:00.000Z"}`;

    let pantryItemBuilder = new PantryItemBuilder();
    let pantryItem = pantryItemBuilder.buildItem(jsonString);
    let item = pantryItem.getBaseItem();

    expect(item.getId()).toBe('62d56443b8909af778004eb6');
    expect(item.getName()).toBe('Bagel');
    expect(item.getBrand()).toBe('Generic');
    expect(item.getCalories()).toBe(360);
    expect(item.getVendorPrices()).toEqual([{ name: 'ShopA', price: 3 }]);
    expect(item.getTotalQuantity()).toEqual({ amount: 12, unit: 'g' });
    expect(item.getServingSize()).toEqual({ amount: 3, unit: 'g' });

    expect(pantryItem.getAvailableQuantity()).toEqual({
        amount: 1234,
        unit: 'lb',
    });

    let date = new Date('1970-01-01T00:00:00.000Z');
    expect(pantryItem.getExpirationDate()).toEqual(date);
});

test('Build item with proper string 4', async () => {
    // JSON string needs to be changed to match what it would
    // actually look like
    let jsonString = `{"id":"","item":{"id":"62ee78f18a0cc15ac6145233","name":"Bagel","brand":"Generic","calories":234,"vendorPrices":[{"name":"sHOPa","price":34},{"name":"SHOPB","price":3431}],"totalQuantity":{"amount":3,"unit":"oz"},"servingSize":{"amount":3,"unit":"lb"}},"availableQuantity":{"amount":3,"unit":"oz"},"expirationDate":"2022-08-18T04:00:00.000Z"}`;
    let pantryItemBuilder = new PantryItemBuilder();
    let pantryItem = pantryItemBuilder.buildItem(jsonString);
    let item = pantryItem.getBaseItem();

    expect(item.getId()).toBe('62ee78f18a0cc15ac6145233');
    expect(item.getName()).toBe('Bagel');
    expect(item.getBrand()).toBe('Generic');
    expect(item.getCalories()).toBe(234);
    expect(item.getVendorPrices()).toEqual([
        { name: 'sHOPa', price: 34 },
        { name: 'SHOPB', price: 3431 },
    ]);
    expect(item.getTotalQuantity()).toEqual({ amount: 3, unit: 'oz' });
    expect(item.getServingSize()).toEqual({ amount: 3, unit: 'lb' });

    expect(pantryItem.getAvailableQuantity()).toEqual({
        amount: 3,
        unit: 'oz',
    });

    let date = new Date();
    date.setFullYear(2022);
    date.setMonth(7);
    date.setDate(18);

    expect(pantryItem.getExpirationDate().getFullYear()).toEqual(
        date.getFullYear()
    );
    expect(pantryItem.getExpirationDate().getMonth()).toEqual(date.getMonth());
    expect(pantryItem.getExpirationDate().getDate()).toEqual(date.getDate());
});
