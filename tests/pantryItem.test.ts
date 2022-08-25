import { PantryItem } from '../src/pantryItem';
import { Item } from '../src/item';

/*
test('PantryItem construction with all values set', async () => {
    let newItem = new Item();

    newItem.setName('Hamburger');
    newItem.setBrand('Great Value');
    newItem.addVendorPrice('ShopA', 3.45);
    newItem.addVendorPrice('ShopC', 5.3);
    newItem.setCalories(300);

    let newPantryItem = new PantryItem(newItem);
    newPantryItem.setAvailableQuantity(12, 'oz');
    newPantryItem.setExpirationDate(2022, 8, 23);

    expect(newPantryItem.getAvailableQuantity()).toEqual({
        amount: 12,
        unit: 'oz',
    });
    expect(newPantryItem.getExpirationDate().getFullYear()).toBe(2022);
    expect(newPantryItem.getExpirationDate().getMonth()).toBe(8);
    expect(newPantryItem.getExpirationDate().getDate()).toBe(23);

    expect(newPantryItem.getBaseItem().getCalories()).toBe(300);
    expect(newPantryItem.getBaseItem().setTotalQuantity(660, 'g'));
    expect(newPantryItem.getBaseItem().setServingSize(90, 'g'));
    expect(newPantryItem.getBaseItem().getTotalQuantity()).toEqual({
        amount: 660,
        unit: 'g',
    });
    expect(newPantryItem.getBaseItem().getServingSize()).toEqual({
        amount: 90,
        unit: 'g',
    });
});

test('PantryItem construction with minimum values set', async () => {
    let newItem = new Item();

    newItem.setName('Hamburger');
    newItem.setBrand('Great Value');
    newItem.addVendorPrice('ShopA', 3.45);
    newItem.addVendorPrice('ShopC', 5.3);
    newItem.setCalories(300);

    let newPantryItem = new PantryItem(newItem);

    expect(newPantryItem.getAvailableQuantity()).toEqual({
        amount: -1,
        unit: '',
    });
    expect(newPantryItem.getExpirationDate().getFullYear()).toBe(1969);
    expect(newPantryItem.getExpirationDate().getMonth()).toBe(11);
    expect(newPantryItem.getExpirationDate().getDate()).toBe(31);

    expect(newPantryItem.getBaseItem().getCalories()).toBe(300);
    expect(newPantryItem.getBaseItem().setTotalQuantity(660, 'g'));
    expect(newPantryItem.getBaseItem().setServingSize(90, 'g'));
    expect(newPantryItem.getBaseItem().getTotalQuantity()).toEqual({
        amount: 660,
        unit: 'g',
    });
    expect(newPantryItem.getBaseItem().getServingSize()).toEqual({
        amount: 90,
        unit: 'g',
    });
});
*/

test('PantryItem weight types', async () => {
    let newItem1 = new Item();
    newItem1.setTotalQuantity(100, 'g');

    let newItem2 = new Item();
    newItem2.setTotalQuantity(100, 'oz');

    let newItem3 = new Item();
    newItem3.setTotalQuantity(100, 'lb');

    let newItem4 = new Item();
    newItem4.setTotalQuantity(100, 'kg');

    let newItem5 = new Item();
    newItem5.setTotalQuantity(100, 'ml');

    let newItem6 = new Item();
    newItem6.setTotalQuantity(100, 'l');

    let newItem7 = new Item();
    newItem7.setTotalQuantity(100, 'us gal');

    let newItem8 = new Item();
    newItem8.setTotalQuantity(100, 'us pt');

    let newItem9 = new Item();
    newItem9.setTotalQuantity(100, 'us oz');

    let newItem10 = new Item();
    newItem10.setTotalQuantity(100, 'serving(s)');

    let newPantryItem1 = new PantryItem(newItem1);
    let newPantryItem2 = new PantryItem(newItem2);
    let newPantryItem3 = new PantryItem(newItem3);
    let newPantryItem4 = new PantryItem(newItem4);
    let newPantryItem5 = new PantryItem(newItem5);
    let newPantryItem6 = new PantryItem(newItem6);
    let newPantryItem7 = new PantryItem(newItem7);
    let newPantryItem8 = new PantryItem(newItem8);

    let newPantryItem9 = new PantryItem(newItem9);
    let newPantryItem10 = new PantryItem(newItem10);

    expect(newPantryItem1.getAvailableBaseQuantityType()).toBe('weight');
    expect(newPantryItem1.getAvailableBaseQuantity()).toEqual({
        amount: 100,
        unit: 'g',
    });

    expect(newPantryItem2.getAvailableBaseQuantityType()).toBe('weight');
    expect(newPantryItem2.getAvailableBaseQuantity()).toEqual({
        amount: 2834.95,
        unit: 'g',
    });

    expect(newPantryItem3.getAvailableBaseQuantityType()).toBe('weight');
    expect(newPantryItem3.getAvailableBaseQuantity()).toEqual({
        amount: 45359.2,
        unit: 'g',
    });

    expect(newPantryItem4.getAvailableBaseQuantityType()).toBe('weight');
    expect(newPantryItem4.getAvailableBaseQuantity()).toEqual({
        amount: 100000,
        unit: 'g',
    });

    expect(newPantryItem5.getAvailableBaseQuantityType()).toBe('volume');
    expect(newPantryItem5.getAvailableBaseQuantity()).toEqual({
        amount: 100,
        unit: 'ml',
    });

    expect(newPantryItem6.getAvailableBaseQuantityType()).toBe('volume');
    expect(newPantryItem6.getAvailableBaseQuantity()).toEqual({
        amount: 100000,
        unit: 'ml',
    });

    expect(newPantryItem7.getAvailableBaseQuantityType()).toBe('volume');
    expect(newPantryItem7.getAvailableBaseQuantity()).toEqual({
        amount: 378541,
        unit: 'ml',
    });

    expect(newPantryItem9.getAvailableBaseQuantityType()).toBe('volume-weight');
    expect(newPantryItem9.getAvailableBaseQuantity()).toEqual({
        amount: 2834.9,
        unit: 'g',
    });

    expect(newPantryItem10.getAvailableBaseQuantityType()).toBe('custom');
    expect(newPantryItem10.getAvailableBaseQuantity()).toEqual(null);
});
