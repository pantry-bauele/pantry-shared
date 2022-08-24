let measurementUnits = [
    { label: 'g', type: 'weight', toGrams: 1 },
    { label: 'kg', type: 'weight', toGrams: 1000 },

    { label: 'lb', type: 'weight', toGrams: 453.592 },
    { label: 'oz', type: 'weight', toGrams: 28.3495 },

    { label: 'ml', type: 'volume', toMilliliters: 1 },
    { label: 'l', type: 'volume', toMilliliters: 1000 },

    { label: 'us gal', type: 'volume', toMilliliters: 3785.41 },
    { label: 'us qt', type: 'volume', toMilliliters: 946.353 },
    { label: 'us pt', type: 'volume', toMilliliters: 473.176 },

    {
        label: 'us cup',
        type: 'volume-weight',
        toMilliliters: 240,
        toGrams: 250,
    },
    {
        label: 'us oz',
        type: 'volume-weight',
        toMilliliters: 29.5735,
        toGrams: 28.349,
    },
    {
        label: 'us tbsp',
        type: 'volume-weight',
        toMilliliters: 14.7868,
        toGrams: 14.78676,
    },
    {
        label: 'us tsp',
        type: 'volume-weight',
        toMilliliters: 4.9289317406874,
        toGrams: 4.92892,
    },

    { label: 'serving(s)', type: 'custom' },

    /*
    { label: 'imp gal', type: 'volume', toMilliliters: 4546.09 },
    { label: 'imp qt', type: 'volume', toMilliliters: 1136.52 },
    { label: 'imp pt', type: 'volume', toMilliliters: 568.261 },
    { label: 'imp cup', type: 'volume', toMilliliters: 284.131 },
    { label: 'imp oz', type: 'volume', toMilliliters: 28.4131 },
    { label: 'imp tbsp', type: 'volume', toMilliliters: 17.7582 },
    { label: 'imp tsp', type: 'volume', toMilliliters: 5.91939 },
    */
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
        return Number.parseFloat((quantity * unit.toGrams).toFixed(0));
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
