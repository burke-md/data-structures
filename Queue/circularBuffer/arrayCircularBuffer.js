// Define ring buffer (circular buffer)

const ringBuff = new Array();
const maxSize = 4;

const addElement = (el) => {
    if(ringBuff.length == maxSize) ringBuff.pop();
    ringBuff.unshift(el);
};

// Populate buffer w/ data and display.

addElement(1);
addElement(2);
addElement(3);
addElement(4);

console.log(`Ring buffer data: ${ringBuff}`);

// Test buffer overflow condition

addElement(5);

console.log(`Ring buffer data: ${ringBuff}`);

