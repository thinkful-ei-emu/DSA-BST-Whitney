// ===== 1. Draw a BST =====
// See image folder

// ===== 2. Remove the root =====
// See image folder

// ===== 3. Create a BST class =====
// See BST.js for BST class
const BST = require('./BST');

// Create a binary search tree called BST and insert
// 3, 1, 4, 6, 9, 2, 5, 7 into your tree, compare
// results with the result from 1st exercise

const numberBST = new BST(3);
numberBST.insert(1);
numberBST.insert(4);
numberBST.insert(6);
numberBST.insert(9);
numberBST.insert(2);
numberBST.insert(5);
numberBST.insert(7);

// Using https://www.cs.usfca.edu/~galles/visualization/BST.html
// for visualization instead of trying to write a 
// print function

// The trees look the same!

// Create a binary search tree called BST and insert
//  E A S Y Q U E S T I O N into your tree, compare
// results with the result from 1st exercise

const letterBST = new BST('E');
letterBST.insert('A');
letterBST.insert('S');
letterBST.insert('Y');
letterBST.insert('Q');
letterBST.insert('U');
letterBST.insert('E');
letterBST.insert('S');
letterBST.insert('T');
letterBST.insert('I');
letterBST.insert('O');
letterBST.insert('N');

// Relatively the same output, I chose to put duplicate letters 
// on the right side, rather than the left.

// ===== 4. What Does This Program Do? =====
// A function called tree that takes in 't'
function tree(t){

  // if 't' is false or doesn't exist return 0
  if(!t){
    return 0;
  }
  // otherwise, return t.left (if it doesn't equal 0 - recursive call)
  // plus the value of t, plus t.right (if it doesn't 
  // equal 0 - recursive call)
  
  return tree(t.left) + t.value + tree(t.right);
}
// This function should give you the sum of the parent 
// child nodes (if any).

let exampleTree = new BST(5,5);
exampleTree.insert(4,4);
exampleTree.insert(6,6);
//console.log(exampleTree);
//console.log(exampleTree.left, exampleTree.right);
//console.log('Tree Example: ', tree(exampleTree));
//Expected Output: 15, Output: 15

// ===== 5. Height of a BST =====
// Write an algorithm to find the height of a binary
// search tree.  What is the time compexity of your
// algorithm?

//Height = n+1 where n = level (starts at 0)

function findHeight(bst) {
  if (bst === null) {
    return 0;
  }
  else {
    let leftHeight = findHeight(bst.left);
    let rightHeight = findHeight(bst.right);

    if (leftHeight > rightHeight) {
      return (leftHeight + 1);
    }
    else {
      return (rightHeight + 1);
    }
  }
}

console.log(findHeight(numberBST));
// Expected Output: 5, Output: 5

// ===== 6. Is it a BST? =====
// Write an algorithm to check whether an arbitrary
// binary tree is a binary search tree, assuming the
// tree does not contain duplicates.



// ===== 7. 3rd Largest Node =====
// Write an algorithm to find the 3rd largest node in a 
// binary search tree

// ===== 8. Balanced BST =====
// Write an algorithm that checks if a BST is balanced (i.e.,
// a tree where no 2 leaves differ in distance from the root
// by more than 1)

// ===== 9. Are they the same BSTs? =====
// You are given two arrays which represent two sequences
// of keys that are used to create two binary search trees.
//  Write a program that will tell wheter the two BSTs will
// be identical or not without actually constructing
// the tree.  YOu may use another data structure such as
// an array or a linnked list, but don't construct the BST.
// What is the time complexity of your algorithm?