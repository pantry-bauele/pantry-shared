import { getMeasurementUnits } from '../src/measurementUnits';

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

/*
test('compatible units', () => {
    // Weight - weight
    expect(compatibleUnits('oz', 'oz')).toBeTruthy();

    // Weight - weight
    expect(compatibleUnits('oz', 'g')).toBeTruthy();

    // Weight - weight-volume
    expect(compatibleUnits('oz', 'us tbsp')).toBeTruthy();

    // Weight - weight-volume
    expect(compatibleUnits('g', 'us tbsp')).toBeTruthy();

    // Weight-volume - weight-volume
    expect(compatibleUnits('us tbsp', 'us cup')).toBeTruthy();

    // Volume - volume
    expect(compatibleUnits('l', 'us gal')).toBeTruthy();

    // Volume - volume
    expect(compatibleUnits('ml', 'ml')).toBeTruthy();

    // Volume - weight-volume
    expect(compatibleUnits('ml', 'us cup')).toBeTruthy();

    // Volume - weight-volume
    expect(compatibleUnits('us qt', 'us tsp')).toBeTruthy();

    // Weight - volume
    expect(compatibleUnits('kg', 'ml')).toBeFalsy();

    // Weight - volume
    expect(compatibleUnits('g', 'us pt')).toBeFalsy();

    // Serving - serving
    expect(compatibleUnits('serving(s)', 'serving(s)')).toBeTruthy();

    // Serving - weight
    expect(compatibleUnits('serving(s)', 'g')).toBeFalsy();

    // Volume - serving
    expect(compatibleUnits('us gal', 'serving')).toBeFalsy();
});

test('', () => {
    expect(combineMeasurements(1, 'g', 1, 'g')).toBe(2);
    expect(combineMeasurements(100, 'g', 1, 'oz')).toBe(128.3495);
});
*/
