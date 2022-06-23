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
            //replace w/ overflow logic
            console.log(`Buffer is full`);
            return;
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

    display() {
        let current = this.head;
        while (current != null) {
            console.log(`${current.value} \n ===`);
            current = current.next;
        }
    }
}

// Populate buffer w/data and display


// Test buffer overflow condition
