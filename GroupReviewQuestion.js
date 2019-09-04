// Given a sorted array, write an algorithm that
// creates a BST from the elements of the sorted array in 
// O(n) runtime.  The resulting tree will be height balanced

// Assume that there is a fully functional BST class

// input: 3, 5, 7, 9, 11, 13, 15
//output:

// find the middle, cut in half until it is all in the tree

function createBST(arr, start = 0, end = arr.length-1) {
  if (start > end) {
    return;
  }

  let middle = Math.floor((start + end)/2);
  let tree = new createBST(arr[middle]); 
  tree.left = createBST(arr, start, middle - 1);
  tree.right = createBST(arr, middle + 1, end);

  return tree;
}