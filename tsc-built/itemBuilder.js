"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ItemBuilder = void 0;
const item_1 = require("./item");
class ItemBuilder {
    buildItem(jsonString) {
        let item = new item_1.Item();
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
            jsonObject.vendorPrices.forEach((jsonVendorPrice) => {
                item.addVendorPrice(jsonVendorPrice.name, Number.parseFloat(jsonVendorPrice.price));
            });
        }
        if (jsonObject.totalQuantity) {
            try {
                item.setTotalQuantity(Number.parseInt(jsonObject.totalQuantity.amount), jsonObject.totalQuantity.unit);
            }
            catch (error) {
                console.log('Attempted to set invalid quantity');
            }
        }
        if (jsonObject.servingSize) {
            try {
                item.setServingSize(Number.parseInt(jsonObject.servingSize.amount), jsonObject.servingSize.unit);
            }
            catch (error) {
                console.log('Attempted to set invalid quantity');
            }
        }
        return item;
    }
}
exports.ItemBuilder = ItemBuilder;
