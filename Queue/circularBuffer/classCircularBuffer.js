// Define ring buffer and node classes

class BufferNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class RingBuffer {
    constructor(size) {
        this.head = null;
        this.tail = null;
        this.maxSize = size;
        this.currentSize = null;
        this.isFull = false;
    }

    write(value) {
        let node = new BufferNode(value);

        if (this.isFull) {
            this.head = this.head.next;
        }

        if (!this.head) {
            this.head = node; 
            this.tail = node;
        }

        this.tail.next = node;
        this.tail = node;
        this.currentSize ++;
        
        if (this.currentSize == this.maxSize) this.isFull = true;

    }

    remove() {
        const node = this.head;
        this.head = this.head.next;
        return node;
    }

    displayAll() {
        let current = this.head;
        while (current != null) {
            console.log(`${current.value}`);
            current = current.next;
        }
    }
}

// Populate buffer w/data and display

const ringBuff = new RingBuffer(4);

ringBuff.write(1);
ringBuff.write(2);
ringBuff.write(3);
ringBuff.write(4);

console.log(`Ring buffer data:`);
ringBuff.displayAll();

// Test buffer overflow condition

console.log(`Ring buffer overflow data:`); 
ringBuff.write(5); 
ringBuff.displayAll();

// Remove element from buffer

console.log(`Removed data: ${ringBuff.remove().value}`);
ringBuff.displayAll();