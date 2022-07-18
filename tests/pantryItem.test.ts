import { PantryItem } from '../src/pantryItem';
import { Item } from '../src/item';

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
