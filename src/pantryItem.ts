import { Item, ItemSize } from './item';
import {
    validMeasurementUnit,
    MeasurementUnitTypes,
    getMeasurementType,
    convertQuantityToBase,
} from './measurementUnits';

export class PantryItem {
    id = '';
    item = new Item();

    //availableQuantity: ItemSize = { amount: -1, unit: '' };
    expirationDate = new Date(0);

    availableBaseQuantity: ItemSize | null;
    availableBaseUnitType: MeasurementUnitTypes | null;

    constructor(item: Item) {
        this.item = item;

        this.availableBaseQuantity = null;
        this.availableBaseUnitType = null;

        if (item.getTotalQuantity()?.unit) {
            let itemUnit = item.getTotalQuantity()?.unit;
            if (itemUnit) {
                let itemUnitType = getMeasurementType(itemUnit);

                if (itemUnitType) {
                    this.availableBaseUnitType = itemUnitType;

                    let itemQuantityAmount = item.getTotalQuantity()?.amount;
                    let itemQuantityUnit = item.getTotalQuantity()?.unit;

                    if (itemQuantityAmount && itemQuantityUnit) {
                        this.availableBaseQuantity = convertQuantityToBase(
                            itemQuantityAmount,
                            itemQuantityUnit
                        );
                    }
                }
            }
        }
    }

    getAvailableBaseQuantity() {
        return this.availableBaseQuantity;
    }

    getAvailableBaseQuantityType() {
        return this.availableBaseUnitType;
    }

    getBaseItem() {
        return this.item;
    }

    setId(id: string) {
        this.id = id;
    }

    getId() {
        return this.id;
    }

    /*
    setAvailableQuantity(quantity: number, unit: string) {
        // If unit is unset, then just set the object's
        // serving size to the default value and skip
        // over the error checking.
        if (unit === '') {
            this.availableQuantity = { amount: -1, unit: '' };
            return;
        }

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
    */

    //new Date(year, monthIndex, day)
    setExpirationDate(year: number, monthIndex: number, day: number) {
        this.expirationDate = new Date(year, monthIndex, day);
    }

    getExpirationDate() {
        return this.expirationDate;
    }
}
