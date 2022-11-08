// //Работа с объектами и классами
// //Реализуйте класс дерево и поиск элементов дерева в ширину и глубину
class Node{
    constructor(value){
        this.value= value
        this.left = null
        this.right =null
    }
}
class Tree {
    constructor() {
        this.root = null
    }

    add(value) {
        const newNode = new Node(value)
        if (this.root === null) {
            this.root = newNode;
            return;
        }
        let currentNode = this.root;
        while (currentNode) {
            if (newNode.value < currentNode.value) {
                if (!currentNode.left) {
                    currentNode.left = newNode;
                    return;
                }
                currentNode = currentNode.left;
            } else {
                if (!currentNode.right) {
                    currentNode.right = newNode;
                    return;
                }
                currentNode = currentNode.right;
            }
        }
    }
    order(node,callback){
        if(!node){
            return;
        }
        if(callback){
            callback(node)
        }
        this.order(node.left,callback);
        this.order(node.right,callback);
    }
    traverseDFS(callback){
            return this.order(this.root,callback);
    }
    traverseBFS(callback){
        const q=[this.root];
        while (q.length){
            const node=q.shift();
            callback(node);
            if(node.left){
                q.push(node.left)
            }
            if(node.right){
                q.push(node.right);
            }
        }

    }
}
let myTree=new Tree();
myTree.add(8);
myTree.add(7);
myTree.add(9);
myTree.add(5);
myTree.add(10);
myTree.add(20);
myTree.add(6);
myTree.add(2);
myTree.add(11);
console.log(myTree);

myTree.traverseDFS((node)=>{
    console.log(node.value)
});

myTree.traverseBFS((node)=>{
    console.log(node.value)
});