import { PantryItem } from '../src/pantryItem';
import { Item } from '../src/item';

test('PantryItem construction', async () => {
    let newItem = new Item();

    newItem.setName('Hamburger');
    newItem.setBrand('Great Value');
    newItem.addVendorPrice('ShopA', 3.45);
    newItem.addVendorPrice('ShopC', 5.3);
    newItem.setTotalQuantity(11, 'oz');
    newItem.setCalories(300);

    let newPantryItem = new PantryItem(newItem);
    newPantryItem.setExpirationDate(2022, 8, 23);

    expect(newPantryItem.getAvailableBaseQuantity()).toEqual({
        amount: 311.8445,
        unit: 'g',
    });
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
    newItem8.setTotalQuantity(100, 'us oz');

    let newItem9 = new Item();
    newItem9.setTotalQuantity(100, 'serving(s)');

    let newPantryItem1 = new PantryItem(newItem1);
    let newPantryItem2 = new PantryItem(newItem2);
    let newPantryItem3 = new PantryItem(newItem3);
    let newPantryItem4 = new PantryItem(newItem4);
    let newPantryItem5 = new PantryItem(newItem5);
    let newPantryItem6 = new PantryItem(newItem6);
    let newPantryItem7 = new PantryItem(newItem7);
    let newPantryItem8 = new PantryItem(newItem8);
    let newPantryItem9 = new PantryItem(newItem9);

    expect(newPantryItem1.getBaseQuantityType()).toBe('weight');
    expect(newPantryItem1.getAvailableBaseQuantity()).toEqual({
        amount: 100,
        unit: 'g',
    });

    expect(newPantryItem2.getBaseQuantityType()).toBe('weight');
    expect(newPantryItem2.getAvailableBaseQuantity()).toEqual({
        amount: 2834.95,
        unit: 'g',
    });

    expect(newPantryItem3.getBaseQuantityType()).toBe('weight');
    expect(newPantryItem3.getAvailableBaseQuantity()).toEqual({
        amount: 45359.2,
        unit: 'g',
    });

    expect(newPantryItem4.getBaseQuantityType()).toBe('weight');
    expect(newPantryItem4.getAvailableBaseQuantity()).toEqual({
        amount: 100000,
        unit: 'g',
    });

    expect(newPantryItem5.getBaseQuantityType()).toBe('volume');
    expect(newPantryItem5.getAvailableBaseQuantity()).toEqual({
        amount: 100,
        unit: 'ml',
    });

    expect(newPantryItem6.getBaseQuantityType()).toBe('volume');
    expect(newPantryItem6.getAvailableBaseQuantity()).toEqual({
        amount: 100000,
        unit: 'ml',
    });

    expect(newPantryItem7.getBaseQuantityType()).toBe('volume');
    expect(newPantryItem7.getAvailableBaseQuantity()).toEqual({
        amount: 378541,
        unit: 'ml',
    });

    expect(newPantryItem8.getBaseQuantityType()).toBe('volume-weight');
    expect(newPantryItem8.getAvailableBaseQuantity()).toEqual({
        amount: 2834.9,
        unit: 'g',
    });

    expect(newPantryItem9.getBaseQuantityType()).toBe('custom');
    expect(newPantryItem9.getAvailableBaseQuantity()).toEqual({
        amount: 100,
        unit: 'serving(s)',
    });
});
