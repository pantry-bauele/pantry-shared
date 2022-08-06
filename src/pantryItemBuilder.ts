import { PantryItem } from './pantryItem';
import { Item } from './item';
import { ItemBuilder } from './itemBuilder';

export class PantryItemBuilder {
    buildItem(data: any) {
        if (typeof data === 'string') {
            let jsonObject = JSON.parse(data);
            return this.buildItemFromObject(jsonObject);
        } else {
            return this.buildItemFromObject(data);
        }
    }

    buildItemFromObject(object: any) {
        let baseItem = new Item();
        let itemBuilder = new ItemBuilder();

        if (object.item) {
            baseItem = itemBuilder.buildItem(object.item);
        }

        let pantryItem = new PantryItem(baseItem);

        // An object that is retrieved from the database will be
        // an that has the _id field set instead of id.
        if (object.id || object._id) {
            pantryItem.setId(object.id ? object.id : object._id);
        }

        if (object.expirationDate) {
            let date: Date;
            date = object.expirationDate;

            pantryItem.setExpirationDate(
                date.getFullYear(),
                date.getMonth(),
                date.getDate()
            );
        }

        if (object.availableQuantity) {
            pantryItem.setAvailableQuantity(
                object.availableQuantity.amount,
                object.availableQuantity.unit
            );
        }

        return pantryItem;
    }
}
