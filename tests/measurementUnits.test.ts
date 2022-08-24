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
