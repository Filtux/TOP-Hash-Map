export class Node {
    constructor(key = null, value = null, nextNode = null) {
      this.key = key;
      this.value = value;
      this.nextNode = nextNode;
    }
  }  

export class LinkedList {
    constructor() {
      this.headNode = null;
    }
  
    // Adds or updates a node containing the key-value pair
    add(key, value) {
      const newNode = new Node(key, value);
  
      if (this.headNode === null) {
        this.headNode = newNode;
      } else {
        let currentNode = this.headNode;
        while (currentNode.nextNode !== null) {
          if (currentNode.key === key) {
            currentNode.value = value; // Update value if key already exists
            return;
          }
          currentNode = currentNode.nextNode;
        }
        if (currentNode.key === key) {
          currentNode.value = value; // Update value if key already exists at the end
        } else {
          currentNode.nextNode = newNode;
        }
      }
    }
  
    // Finds a value by key
    find(key) {
      let currentNode = this.headNode;
      while (currentNode !== null) {
        if (currentNode.key === key) {
          return currentNode.value;
        }
        currentNode = currentNode.nextNode;
      }
      return null;
    }
  
    // Removes a node by key
    remove(key) {
      if (this.headNode === null) {
        return false;
      }
  
      if (this.headNode.key === key) {
        this.headNode = this.headNode.nextNode;
        return true;
      }
  
      let currentNode = this.headNode;
      while (currentNode.nextNode !== null) {
        if (currentNode.nextNode.key === key) {
          currentNode.nextNode = currentNode.nextNode.nextNode;
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    }
  
    // Returns all entries in the linked list as an array of key-value pairs
    entries() {
      const entries = [];
      let currentNode = this.headNode;
      while (currentNode !== null) {
        entries.push([currentNode.key, currentNode.value]);
        currentNode = currentNode.nextNode;
      }
      return entries;
    }
  
    // Represents LinkedList objects as strings. The format should be: ( key: value ) -> ( key: value ) -> null
    toString() {
      let string = "";
      let currentNode = this.headNode;
      while (currentNode !== null) {
        string += `( ${currentNode.key}: ${currentNode.value} ) -> `;
        currentNode = currentNode.nextNode;
      }
      string += 'null';
      return string;
    }
  
    // Returns true if the passed in key is in the list, otherwise returns false
    contains(key) {
      let currentNode = this.headNode;
      while (currentNode !== null) {
        if (currentNode.key === key) {
          return true;
        }
        currentNode = currentNode.nextNode;
      }
      return false;
    }
  
    // Returns the node at the given index
    at(index) {
      let count = 0;
      let currentNode = this.headNode;
      while (currentNode !== null && count < index) {
        currentNode = currentNode.nextNode;
        count++;
      }
      return currentNode;
    }
  
    // Returns the first node in the list
    head() {
      return this.headNode;
    }
  
    // Returns the last node in the list
    tail() {
      let currentNode = this.headNode;
      if (currentNode === null) {
        return null;
      }
      while (currentNode.nextNode !== null) {
        currentNode = currentNode.nextNode;
      }
      return currentNode;
    }
  
    // Returns the total number of nodes in the list
    size() {
      let count = 0;
      let currentNode = this.headNode;
      while (currentNode !== null) {
        count++;
        currentNode = currentNode.nextNode;
      }
      return count;
    }
  
    // Insert a node at a specific index
    insertAt(key, value, index) {
      if (index < 0 || index > this.size()) {
        return null;
      }
  
      if (index === 0) {
        this.prepend(key, value);
        return;
      }
  
      let newNode = new Node(key, value);
      let currentNode = this.headNode;
      let currentIndex = 0;
  
      while (currentIndex < index - 1) {
        currentNode = currentNode.nextNode;
        currentIndex++;
      }
  
      newNode.nextNode = currentNode.nextNode;
      currentNode.nextNode = newNode;
    }
  
    // Remove a node at a specific index
    removeAt(index) {
      if (index < 0 || index >= this.size()) {
        return null;
      }
      if (index === 0) {
        this.headNode = this.headNode.nextNode;
        return;
      }
  
      let currentNode = this.headNode;
      let currentIndex = 0;
      while (currentIndex < index - 1) {
        currentNode = currentNode.nextNode;
        currentIndex++;
      }
      currentNode.nextNode = currentNode.nextNode.nextNode;
    }
  }
  