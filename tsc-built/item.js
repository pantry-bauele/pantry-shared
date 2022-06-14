"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Item = void 0;
const measurementUnits_1 = require("./measurementUnits");
class Item {
    constructor() {
        this.id = '';
        this.name = '';
        this.brand = '';
        this.calories = -1;
        this.vendorPrices = [];
        this.totalQuantity = { amount: -1, unit: '' };
        this.servingSize = { amount: -1, unit: '' };
    }
    setId(id) {
        this.id = id;
    }
    getId() {
        return this.id;
    }
    setName(name) {
        this.name = name;
    }
    getName() {
        return this.name;
    }
    setBrand(brand) {
        this.brand = brand;
    }
    getBrand() {
        return this.brand;
    }
    addVendorPrice(vendor, price) {
        if (price <= 0) {
            throw new Error('Cannot add a price with a negative or 0 value');
        }
        let vendorPrice = { name: vendor, price: price };
        this.vendorPrices.push(vendorPrice);
    }
    removeVendorPrice(vendor) {
        for (let i = 0; i < this.vendorPrices.length; i++) {
            if (this.vendorPrices[i].name == vendor) {
                this.vendorPrices.splice(i, 1);
                return true;
            }
        }
        return false;
    }
    getVendorPrices() {
        return this.vendorPrices;
    }
    setServingSize(quantity, unit) {
        if (quantity <= 0) {
            throw new Error('Cannot set quantity to a negative or 0 value');
        }
        if (!(0, measurementUnits_1.validMeasurementUnit)(unit)) {
            throw new Error('Unit is invalid');
        }
        this.servingSize = { amount: quantity, unit: unit };
    }
    getServingSize() {
        return this.servingSize;
    }
    setTotalQuantity(quantity, unit) {
        if (quantity <= 0) {
            throw new Error('Cannot set quantity to a negative or 0 value');
        }
        if (!(0, measurementUnits_1.validMeasurementUnit)(unit)) {
            throw new Error('Unit is invalid');
        }
        this.totalQuantity = { amount: quantity, unit: unit };
    }
    getTotalQuantity() {
        return this.totalQuantity;
    }
    setCalories(calories) {
        if (calories <= 0) {
            throw new Error('Cannot set calories to negative or 0 value');
        }
        this.calories = calories;
    }
    getCalories() {
        return this.calories;
    }
    //  This will return an object representing all of the values
    //  in the Item that have been set to values other than the
    //  class default.
    getSpecifiedProperties() {
        var specifiedProperties = {};
        for (const property in this) {
            let value = this[property];
            if (typeof this[property] === 'number') {
                if (value !== -1) {
                    specifiedProperties[property] = value;
                }
            }
            else if (typeof this[property] === 'string') {
                if (value !== '') {
                    specifiedProperties[property] = value;
                }
            }
            else if (Array.isArray(this[property])) {
                if (value.length !== 0) {
                    specifiedProperties[property] = value;
                }
            }
        }
        return specifiedProperties;
    }
}
exports.Item = Item;
