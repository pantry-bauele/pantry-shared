import { Item, ItemSize } from './item';
import { validMeasurementUnit } from './measurementUnits';

export class PantryItem {
    item = new Item();

    availableQuantity: ItemSize = { amount: -1, unit: '' };
    expirationDate = new Date(0);

    constructor(item: Item) {
        this.item = item;
    }

    getBaseItem() {
        return this.item;
    }

    setAvailableQuantity(quantity: number, unit: string) {
        if (quantity <= 0) {
            throw new Error('Cannot set quantity to a negative or 0 value');
        }

        if (!validMeasurementUnit(unit)) {
            throw new Error('Unit is invalid');
        }

        this.availableQuantity = { amount: quantity, unit: unit };
    }

    getAvailableQuantity() {
        return this.availableQuantity;
    }

    //new Date(year, monthIndex, day)
    setExpirationDate(year: number, monthIndex: number, day: number) {
        this.expirationDate = new Date(year, monthIndex, day);
    }

    getExpirationDate() {
        return this.expirationDate;
    }
}
