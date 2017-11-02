'use strict'

// PSEUDO CODE:
// How to sort objects within multiple sorted arrays based upon the object's date?
// logSource = [
//      {date: xxx, msg: "xxx"}, // a logEntry
//      {date: xxx, msg: "xxx"},
//      {date: xxx, msg: "xxx"},
//      {date: xxx, msg: "xxx"},
//      {date: xxx, msg: "xxx"}
// ]
// logEntries within logSource are already sorted oldest - newest
// have multiple logSources
// print logEntries merged based upon date (oldest - newest)
// Need to use a sorting algorithm that can sort multiple sorted arrays
// K-Way Merge Algorithms
// Option 1: [O(kn)] Merge 2 arrays at a time - Arr1 with Arr2, result with Arr3, etc.
// Iterative 2-way merge; suboptimal
// Option 2: [O(nlogk)] Or can divide and conquer like merge sort --
// Merge Arr1 with Arr2, Arr3 with Arr4, Arr5 with Arr6, etc.
// Keep merging 2 arrays together until one last resulting array (recursion)
// Option 3: [O(nlogk), best case O(n)] iteratively merging the two shortest arrays
// Most complicated
// Even faster, better options that are beyond my reach right now: heaps & tournament trees
// Going to try Option 2 -- Optimal enough for now

module.exports = (logSources, printer) => {
	throw new Error('Not implemented yet!  That part is up to you!')
}