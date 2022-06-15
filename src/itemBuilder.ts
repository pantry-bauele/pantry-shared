import { Item } from './item';

export class ItemBuilder {
    buildItem(data: any) {
        if (typeof data === 'string') {
            return this.buildItemFromJSONString(data);
        } else {
            return this.buildItemFromObject(data);
        }
    }

    buildItemFromJSONString(jsonString: string): Item {
        let item = new Item();
        let jsonObject = JSON.parse(jsonString);

        if (jsonObject.id) {
            item.setId(jsonObject.id);
        }

        if (jsonObject.name) {
            item.setName(jsonObject.name);
        }

        if (jsonObject.brand) {
            item.setBrand(jsonObject.brand);
        }

        if (jsonObject.calories) {
            item.setCalories(Number.parseInt(jsonObject.calories));
        }

        if (jsonObject.vendorPrices) {
            jsonObject.vendorPrices.forEach(
                (jsonVendorPrice: { name: string; price: string }) => {
                    item.addVendorPrice(
                        jsonVendorPrice.name,
                        Number.parseFloat(jsonVendorPrice.price)
                    );
                }
            );
        }

        if (jsonObject.totalQuantity) {
            try {
                item.setTotalQuantity(
                    Number.parseInt(jsonObject.totalQuantity.amount),
                    jsonObject.totalQuantity.unit
                );
            } catch (error) {
                console.log('Attempted to set invalid quantity');
            }
        }

        if (jsonObject.servingSize) {
            try {
                item.setServingSize(
                    Number.parseInt(jsonObject.servingSize.amount),
                    jsonObject.servingSize.unit
                );
            } catch (error) {
                console.log('Attempted to set invalid quantity');
            }
        }

        return item;
    }

    buildItemFromObject(object: any) {
        let item = new Item();

        if (object.id) {
            item.setId(object.id);
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
