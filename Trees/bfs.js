class Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    bfs(array) {
        let queue = [this];
        while (queue.length > 0) {
            const current = queue.shift();
            array.push(current.name);
            for (const el of current.children) {
                queue.push(el);
            }
        }
        return array;
    }
}
