/**
 * Write a function mergeRanges that takes an array of meeting time ranges and returns an array of condensed ranges.
 *
 * Example:
 * var times = [[0, 1], [3, 5], [4, 8], [10, 12], [9, 10]]
 *
 * mergeRanges(times); -> [[0, 1], [3, 8], [9, 12]]
 *
 * Do not assume the ranges are in order
 */


function mergeRanges(array) {
  const mergeRange = (range1, range2) => {
    // ...
    return {
      merged: false,
      range: null,
    };
  };

  const merged = [];

  for (let i = 0; i < array.length; i += 1) {
    const range = array[i];

    for (let j = 0; j < array.length; j += 1) {
      const mergedRange = mergeRange(array[i], merged[j]);
      if (mergedRange.merged) {

      }
      else {
        
      }
      // const updated = updateRange(range[0], range[1]);

    }
  }

  return merged;
}

module.exports = mergeRanges;
