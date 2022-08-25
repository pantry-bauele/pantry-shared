import { ItemSize } from './item';

export enum MeasurementUnitTypes {
    Weight = 'weight',
    Volume = 'volume',
    VolumeWeight = 'volume-weight',
    Custom = 'custom',
}

let measurementUnits = [
    { label: 'serving(s)', type: MeasurementUnitTypes.Custom },

    { label: 'g', type: MeasurementUnitTypes.Weight, toGrams: 1 },
    { label: 'kg', type: MeasurementUnitTypes.Weight, toGrams: 1000 },

    { label: 'lb', type: MeasurementUnitTypes.Weight, toGrams: 453.592 },
    { label: 'oz', type: MeasurementUnitTypes.Weight, toGrams: 28.3495 },

    { label: 'ml', type: MeasurementUnitTypes.Volume, toMilliliters: 1 },
    { label: 'l', type: MeasurementUnitTypes.Volume, toMilliliters: 1000 },

    {
        label: 'us gal',
        type: MeasurementUnitTypes.Volume,
        toMilliliters: 3785.41,
    },
    {
        label: 'us qt',
        type: MeasurementUnitTypes.Volume,
        toMilliliters: 946.353,
    },
    {
        label: 'us pt',
        type: MeasurementUnitTypes.Volume,
        toMilliliters: 473.176,
    },

    {
        label: 'us cup',
        type: MeasurementUnitTypes.VolumeWeight,
        toMilliliters: 240,
        toGrams: 250,
    },
    {
        label: 'us oz',
        type: MeasurementUnitTypes.VolumeWeight,
        toMilliliters: 29.5735,
        toGrams: 28.349,
    },
    {
        label: 'us tbsp',
        type: MeasurementUnitTypes.VolumeWeight,
        toMilliliters: 14.7868,
        toGrams: 14.78676,
    },
    {
        label: 'us tsp',
        type: MeasurementUnitTypes.VolumeWeight,
        toMilliliters: 4.9289317406874,
        toGrams: 4.92892,
    },
];

export function getMeasurementUnits(
    type = 'all' || 'volume' || 'weight' || 'custom'
) {
    if (type === 'all') {
        return measurementUnits;
    } else if (type === 'volume' || type === 'weight') {
        return measurementUnits.filter(
            (unit) => unit.type === type || unit.type === 'volume-weight'
        );
    } else if (type === 'custom') {
        return measurementUnits.filter((unit) => unit.type === type);
    }

    return null;
}

export function validMeasurementUnit(unit: string) {
    for (let i = 0; i < measurementUnits.length; i++) {
        if (unit === measurementUnits[i].label) {
            return true;
        }
    }
}

export function toGrams(quantity: number, label: string) {
    const unit = measurementUnits.find((element) => element.label === label);

    if (unit !== undefined && unit.toGrams) {
        //return Number.parseFloat((quantity * unit.toGrams).toFixed(0));
        return quantity * unit.toGrams;
    } else {
        return -1;
    }
}

export function toMilliliters(quantity: number, label: string) {
    const unit = measurementUnits.find((element) => element.label === label);
    if (unit !== undefined && unit.toMilliliters) {
        return Number.parseFloat((quantity * unit.toMilliliters).toFixed(0));
    } else {
        return -1;
    }
}

export function getMeasurementType(unit: string) {
    for (let i = 0; i < measurementUnits.length; i++) {
        if (unit === measurementUnits[i].label) {
            return measurementUnits[i].type;
        }
    }

    return null;
}

export function convertQuantityToBase(amount: number, unit: string) {
    let measurementType = getMeasurementType(unit);
    if (measurementType) {
        let convertedAmount;

        switch (measurementType) {
            case MeasurementUnitTypes.Weight:
                convertedAmount = toGrams(amount, unit);
                return { amount: convertedAmount, unit: 'g' };

                break;

            case MeasurementUnitTypes.Volume:
                convertedAmount = toMilliliters(amount, unit);
                return { amount: convertedAmount, unit: 'ml' };
                break;

            case MeasurementUnitTypes.VolumeWeight:
                convertedAmount = toGrams(amount, unit);
                return { amount: convertedAmount, unit: 'g' };
                break;

            case MeasurementUnitTypes.Custom:
                break;
        }
    }

    return null;
}

/*
export function compatibleUnits(unit1: string, unit2: string) {
    let unit1Type = getMeasurementType(unit1);
    let unit2Type = getMeasurementType(unit2);

    if (
        unit1Type === unit2Type ||
        (unit1Type === 'volume-weight' &&
            (unit2Type === 'weight' || 'volume')) ||
        (unit2Type === 'volume-weight' && (unit1Type === 'weight' || 'volume)'))
    ) {
        return true;
    }

    return false;
}

export function combineMeasurements(
    measurement1Quantity: number,
    measurement1Unit: string,
    measurement2Quantity: number,
    measurement2Unit: string
) {
    if (!compatibleUnits(measurement1Unit, measurement2Unit)) {
        return false;
    }

    if (measurement1Unit === measurement2Unit) {
        return measurement1Quantity + measurement2Quantity;
    }

    let measurement1UnitType = getMeasurementType(measurement1Unit);
    let measurement2UnitType = getMeasurementType(measurement2Unit);

    // If either are weights, convert both to grams
    if (
        measurement1UnitType === 'weight' ||
        measurement2UnitType === 'weight'
    ) {
        let measurement1Grams = toGrams(measurement1Quantity, measurement1Unit);
        let measurement2Grams = toGrams(measurement2Quantity, measurement2Unit);

        return measurement1Grams + measurement2Grams;
    }

    // If either are volumes, convert both to ml
    if (
        measurement1UnitType === 'volume' ||
        measurement2UnitType === 'volume'
    ) {
        let measurement1Milliliters = toMilliliters(
            measurement1Quantity,
            measurement1Unit
        );
        let measurement2Milliliters = toMilliliters(
            measurement2Quantity,
            measurement2Unit
        );

        return measurement1Milliliters + measurement2Milliliters;
    }

    // If both are weight-volumes, convert both to grams
    if (
        measurement1UnitType === 'weight-volume' &&
        measurement2UnitType === 'weight-volume'
    ) {
        let measurement1Grams = toGrams(measurement1Quantity, measurement1Unit);
        let measurement2Grams = toGrams(measurement2Quantity, measurement2Unit);

        return measurement1Grams + measurement2Grams;
    }

    // If both are custom, just combine normally
    if (
        measurement1UnitType === 'custom' &&
        measurement2UnitType === 'custom'
    ) {
        return measurement1Quantity + measurement2Quantity;
    }
}
*/
