import {
    convertBaseUnitToOtherUnit,
    getMeasurementUnits,
} from '../src/measurementUnits';

test('measurementUnits get weight units', () => {
    let measurementUnits = getMeasurementUnits('weight');

    expect(measurementUnits).toBeTruthy();
    expect(measurementUnits?.length).toEqual(8);
});

test('measurementUnits get volume units', () => {
    let measurementUnits = getMeasurementUnits('volume');

    expect(measurementUnits).toBeTruthy();
    expect(measurementUnits?.length).toEqual(9);
});

test('measurementUnits get volume units', () => {
    let measurementUnits = getMeasurementUnits('custom');

    expect(measurementUnits).toBeTruthy();
    expect(measurementUnits?.length).toEqual(1);
});

test('measurementUnits get volume units', () => {
    let measurementUnits = getMeasurementUnits('all');

    expect(measurementUnits).toBeTruthy();
    expect(measurementUnits?.length).toEqual(14);
});

test('measurementUnits get volume units', () => {
    let measurementUnits = getMeasurementUnits('undefined');

    expect(measurementUnits).toBeFalsy();
    expect(measurementUnits?.length).toEqual(undefined);
});

test('convert grams to unit', () => {
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
