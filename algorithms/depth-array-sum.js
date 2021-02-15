/**
 * 
 * https://leetcode.com/problems/nested-list-weight-sum/submissions/
 * // This is the interface that allows for creating nested lists.
 * // You should not implement it, or speculate about its implementation
 * function NestedInteger() {
 *
 *     Return true if this NestedInteger holds a single integer, rather than a nested list.
 *     @return {boolean}
 *     this.isInteger = function() {
 *         ...
 *     };
 *
 *     Return the single integer that this NestedInteger holds, if it holds a single integer
 *     Return null if this NestedInteger holds a nested list
 *     @return {integer}
 *     this.getInteger = function() {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a single integer equal to value.
 *     @return {void}
 *     this.setInteger = function(value) {
 *         ...
 *     };
 *
 *     Set this NestedInteger to hold a nested list and adds a nested integer elem to it.
 *     @return {void}
 *     this.add = function(elem) {
 *         ...
 *     };
 *
 *     Return the nested list that this NestedInteger holds, if it holds a nested list
 *     Return null if this NestedInteger holds a single integer
 *     @return {NestedInteger[]}
 *     this.getList = function() {
 *         ...
 *     };
 * };
 */
/**
 * @param {NestedInteger[]} nestedList
 * @return {number}
 */

function nestedListSum(nestedList, depth, result) {
  nestedList.forEach((ele) => {
      let list = ele.getList();
      if (list.length)
      {
          nestedListSum(list, depth + 1, result);       
      }
      else {
          result.sum = result.sum + (ele.getInteger() * depth);
      }
  });
}

var depthSum = function(nestedList) {
let result = {
    sum: 0
}
nestedListSum(nestedList, 1, result);
return result.sum;
};