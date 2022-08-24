import { getMeasurementUnits } from '../src/measurementUnits';

test('measurementUnits get weight units', () => {
    expect(getMeasurementUnits('weight')?.length === 8);
});

test('measurementUnits get volume units', () => {
    expect(getMeasurementUnits('volume')?.length === 9);
});

test('measurementUnits get volume units', () => {
    expect(getMeasurementUnits('custom')?.length === 1);
});

test('measurementUnits get volume units', () => {
    expect(getMeasurementUnits('all')?.length === 14);
});

test('measurementUnits get volume units', () => {
    expect(getMeasurementUnits('unallowed') === null);
});
