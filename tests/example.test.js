function sum(a, b) {
    return a + b
}

test('adding 1 + 2 to equals 3', () => {
    expect(sum(1, 2)).toBe(3);
    expect(1).toBe(1);
})

test('mock implementation of a basic function', () => {
    const mock = jest.fn(() => "I'm a mock function");
    expect(mock('Calling my mock function')).toBe("I'm a mock function");
    expect(mock).toHaveBeenCalledWith('Calling my mock function');
}) 