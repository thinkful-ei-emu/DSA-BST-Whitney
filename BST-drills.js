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

const numberBST = new BST(3,3);
numberBST.insert(1,1);
numberBST.insert(4,4);
numberBST.insert(6,6);
numberBST.insert(9,9);
numberBST.insert(2,2);
numberBST.insert(5,5);
numberBST.insert(7,7);

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

function findHeight(bst, counter = 0) {
  if (bst === null) {
    return counter;
  }
  else {
    debugger;
    counter++;

    let leftHeight = findHeight(bst.left, counter);
    let rightHeight = findHeight(bst.right, counter);

    if (leftHeight > rightHeight) {
      counter = leftHeight;
    }
    else {
      counter = rightHeight;
    }
  }
  return counter;
}

console.log(findHeight(numberBST));
// Expected Output: 5, Output: 5

// ===== 6. Is it a BST? =====
// Write an algorithm to check whether an arbitrary
// binary tree is a binary search tree, assuming the
// tree does not contain duplicates.

// Attributes of a BST = no more than 2 children, no duplicate
// numbers (per instructions), all values on left < root/current node, all 
// values on right > root/current node

function isItABST(bst) {
  
  if (!bst.key) {
    return false;
  }
  
  if (bst.left) {
    if (bst.value > bst.left.value) {
      isItABST(bst.left);
    } 
    else {
      return false;
    }
  }
  if (bst.right) {
    if (bst.value < bst.right.value) {
      isItABST(bst.right);
    }
    else {
      return false;
    }
  }
  return true;
}

//console.log(isItABST(numberBST));
//console.log(isItABST([5, 7, 9]));


// ===== 7. 3rd Largest Node =====
// Write an algorithm to find the 3rd largest node in a 
// binary search tree

function thirdLargest(bst, largest = null, counter = 0) {//------> come back to
  // let newCounter = counter;
  
  // // Find the largest - all the way to the right
  
  // if (bst !== null) {
  //   largest = thirdLargest(bst.right, largest = bst, newCounter);
    
  // }
  
  // // Remove largest with our BST remove function, increment counter
  // while (newCounter < 2 ) {
  //   largest.remove(largest.key);
  //   newCounter++;
  //   thirdLargest(largest.parent, null, newCounter);  // ---> gets to correct node, but getting out of recursion messes it up
  // }
  // return largest;
}

//console.log(thirdLargest(numberBST));

// ===== 8. Balanced BST =====
// Write an algorithm that checks if a BST is balanced (i.e.,
// a tree where no 2 leaves differ in distance from the root
// by more than 1)

const balancedBST = new BST(5,5);
numberBST.insert(1,1);
numberBST.insert(10,10);


function isItBalanced(bst, counter = 0) {
  if (bst === null) {
    return true;
  }
  else {
    counter++;

    //CHANGE NEEDED: find side heights of subtrees? Then height +1?
    let leftHeight = findHeight(bst.left, counter);
    let rightHeight = findHeight(bst.right, counter);

    console.log(leftHeight, rightHeight);
    if (Math.abs(leftHeight - rightHeight) <= 1) {
      return true;
    }
    else {
      return false;
    }
  }
}

console.log(isItBalanced(numberBST));
// Expected output: false
//console.log(isItBalanced(balancedBST));
// Expected output: true



// ===== 9. Are they the same BSTs? =====
// You are given two arrays which represent two sequences
// of keys that are used to create two binary search trees.
//  Write a program that will tell wheter the two BSTs will
// be identical or not without actually constructing
// the tree.  YOu may use another data structure such as
// an array or a linnked list, but don't construct the BST.
// What is the time complexity of your algorithm?