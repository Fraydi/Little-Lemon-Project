import { initializeTimes, updateTimes } from './timesFunctions';

test('initializeTimes returns the correct initial times', () => {
    const initialTimes = initializeTimes();
    expect(Array.isArray(initialTimes)).toBe(true);
    expect(initialTimes).toEqual([
        '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00',
        '21:00', '22:00', '09:00', '10:00', '23:00'
    ]);
});

test('updateTimes returns the correct updated times for a weekday', () => {
    const updatedTimes = updateTimes('2024-05-27'); // Assume it's a weekday
    expect(Array.isArray(updatedTimes)).toBe(true);
    expect(updatedTimes).toEqual(['11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00']);
});

test('updateTimes returns the correct updated times for a weekend', () => {
    const updatedTimesSaturday = updateTimes('2024-05-25'); // Assume it's a Saturday
    const updatedTimesSunday = updateTimes('2024-05-26'); // Assume it's a Sunday
    const expectedWeekendTimes = ['09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00', '19:00', '20:00', '21:00', '22:00', '23:00'];

    expect(Array.isArray(updatedTimesSaturday)).toBe(true);
    expect(updatedTimesSaturday).toEqual(expectedWeekendTimes);

    expect(Array.isArray(updatedTimesSunday)).toBe(true);
    expect(updatedTimesSunday).toEqual(expectedWeekendTimes);
});
