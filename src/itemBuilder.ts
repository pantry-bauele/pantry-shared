import { Item } from './item';

export class ItemBuilder {
    buildItem(data: any) {
        if (typeof data === 'string') {
            let jsonObject = JSON.parse(data);
            return this.buildItemFromObject(jsonObject);
        } else {
            return this.buildItemFromObject(data);
        }
    }

    buildItemFromObject(object: any) {
        let item = new Item();

        // An object that is retrieved from the database will be
        // an that has the _id field set instead of id.
        if (object.id || object._id) {
            item.setId(object.id ? object.id : object._id);
        }

        if (object.name) {
            item.setName(object.name);
        }

        if (object.brand) {
            item.setBrand(object.brand);
        }

        if (object.calories) {
            item.setCalories(Number.parseInt(object.calories));
        }

        if (object.vendorPrices) {
            object.vendorPrices.forEach(
                (jsonVendorPrice: { name: string; price: string }) => {
                    item.addVendorPrice(
                        jsonVendorPrice.name,
                        Number.parseFloat(jsonVendorPrice.price)
                    );
                }
            );
        }

        if (object.totalQuantity) {
            try {
                item.setTotalQuantity(
                    Number.parseInt(object.totalQuantity.amount),
                    object.totalQuantity.unit
                );
            } catch (error) {
                console.log('Attempted to set invalid quantity');
            }
        }

        if (object.servingSize) {
            try {
                item.setServingSize(
                    Number.parseInt(object.servingSize.amount),
                    object.servingSize.unit
                );
            } catch (error) {
                console.log('Attempted to set invalid quantity');
            }
        }

        return item;
    }
}
