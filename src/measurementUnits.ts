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

// Converts an amount specified in either grams or milliliters to some other unit.
export function convertBaseUnitToOtherUnit(amount: number, newUnit: string) {
    let newMeasurement = measurementUnits.find(
        (unit) => unit.label === newUnit
    );

    let newAmount;
    if (newMeasurement?.toGrams) {
        newAmount = amount / newMeasurement.toGrams;
    } else if (newMeasurement?.toMilliliters) {
        newAmount = amount / newMeasurement.toMilliliters;
    }

    return newAmount;
}

export function convertUnitToBaseUnit(amount: number, currentUnit: string) {
    let newMeasurement = measurementUnits.find(
        (unit) => unit.label === currentUnit
    );

    let newAmount;
    if (newMeasurement?.toGrams) {
        newAmount = amount * newMeasurement.toGrams;
    } else if (newMeasurement?.toMilliliters) {
        newAmount = amount * newMeasurement.toMilliliters;
    }

    return newAmount;
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
