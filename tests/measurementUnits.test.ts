import {
    convertBaseUnitToOtherUnit,
    convertUnitToBaseUnit,
    getMeasurementUnits,
} from '../src/measurementUnits';

test('Verify weight units', () => {
    let measurementUnits = getMeasurementUnits('weight');

    expect(measurementUnits).toBeTruthy();
    expect(measurementUnits?.length).toEqual(8);
});

test('Verify volume units', () => {
    let measurementUnits = getMeasurementUnits('volume');

    expect(measurementUnits).toBeTruthy();
    expect(measurementUnits?.length).toEqual(9);
});

test('Verify custom units', () => {
    let measurementUnits = getMeasurementUnits('custom');

    expect(measurementUnits).toBeTruthy();
    expect(measurementUnits?.length).toEqual(1);
});

test('Verify all units', () => {
    let measurementUnits = getMeasurementUnits('all');

    expect(measurementUnits).toBeTruthy();
    expect(measurementUnits?.length).toEqual(14);
});

test('Verify nonexistent unit ', () => {
    let measurementUnits = getMeasurementUnits('undefined');

    expect(measurementUnits).toBeFalsy();
    expect(measurementUnits?.length).toEqual(undefined);
});

test('Convert grams to other units', () => {
    expect(convertBaseUnitToOtherUnit(454, 'oz')?.toFixed(0)).toEqual('16');
    expect(convertBaseUnitToOtherUnit(341, 'kg')?.toFixed(3)).toEqual('0.341');
    expect(convertBaseUnitToOtherUnit(34123, 'lb')?.toFixed(0)).toEqual('75');

    expect(convertBaseUnitToOtherUnit(454, 'l')?.toFixed(3)).toEqual('0.454');
    expect(convertBaseUnitToOtherUnit(12344, 'us gal')?.toFixed(1)).toEqual(
        '3.3'
    );
    expect(convertBaseUnitToOtherUnit(34123, 'us cup')?.toFixed(0)).toEqual(
        '136'
    );
});

test('Convert units to base unit', () => {
    expect(convertUnitToBaseUnit(454, 'oz')?.toFixed(0)).toEqual('12871');
    expect(convertUnitToBaseUnit(341, 'kg')?.toFixed(0)).toEqual('341000');
    expect(convertUnitToBaseUnit(34123, 'lb')?.toFixed(0)).toEqual('15477920');
    expect(convertUnitToBaseUnit(454, 'l')?.toFixed(0)).toEqual('454000');
});
