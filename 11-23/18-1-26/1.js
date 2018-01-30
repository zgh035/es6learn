const buf = Buffer.from(['a', 0x34, 0x56, 0x78, 0x90, 0xab]);

// Prints: -546f87a9cbee
console.log(buf.readIntLE(0, 2).toString(16));

// Prints: 1234567890ab
console.log(buf.readIntBE(0, 2).toString(16));

// Throws an exception: RangeError: Index out of range
console.log(buf.readIntBE(1, 2).toString(16));