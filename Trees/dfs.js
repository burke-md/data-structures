clase Node {
    constructor(name) {
        this.name = name;
        this.children = [];
    }

    addChild(name) {
        this.children.push(new Node(name));
        return this;
    }

    //depth first search
    dfs(array) {
        array.push(this.name);
        for (const el of this.children) {
            el.dfs(array);
        }
        return array;
    }
}
