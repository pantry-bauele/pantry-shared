import { getMeasurementUnits } from '../src/measurementUnits';

test('measurementUnits get weight units', () => {
    expect(getMeasurementUnits('weight').length === 4);
});

test('measurementUnits get volume units', () => {
    expect(getMeasurementUnits('volume').length === 16);
});

test('measurementUnits get volume units', () => {
    expect(getMeasurementUnits('custom').length === 0);
});

test('measurementUnits get volume units', () => {
    expect(getMeasurementUnits('all').length === 22);
});

test('measurementUnits get volume units', () => {
    expect(getMeasurementUnits('unallowed').length === 0);
});
