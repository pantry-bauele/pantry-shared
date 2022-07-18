import { Item } from '../src/item';
import { PantryItem } from '../src/pantryItem';
import { ItemBuilder } from '../src/itemBuilder';

test('Build item with proper string with id', async () => {
    // JSON string needs to be changed to match what it would
    // actually look like
    let jsonString = `{"id": "62a9d9fb5644ae4d840373e1", 
        "name":"Bagel","brand":"Generic", "calories":"280",
        "totalQuantity":{"amount": "660", "unit": "g"},
        "servingSize":{"amount": "95", "unit": "g"},
        "vendorPrices":[{"name":"ShopA","price":"3.42"},
            {"name":"ShopC","price":"5"}]}`;

    //let pantryItemBuilder = new PantryItemBuilder();
    //let pantryItem = pantryItemBuilder.buildPantryItem(jsonString);
});
