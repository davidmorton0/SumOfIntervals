var assert  = require('assert');

function sumIntervals(intervals) {
  intervals.sort((firstEl, secondEl) => {
    return firstEl[0] - secondEl[0] || firstEl[1] - secondEl[1];
  })
  let highestInterval = intervals[0][0];
  return intervals.reduce((sum, interval) => {
    sum += Math.max(0, interval[1] - Math.max(interval[0], highestInterval))
    highestInterval = Math.max(highestInterval, interval[1]);
    return sum;
  }, 0)
}

//Tests
assert(sumIntervals([[1,5]]) == 4);
assert(sumIntervals([[1,5],[6,10]]) == 8);
assert(sumIntervals([[1,5],[1,5]]) == 4);
assert(sumIntervals([[1,4],[7, 10],[3, 5]]) == 7);
assert(sumIntervals([[1,2],[6, 10],[11, 15]]) == 9);
assert(sumIntervals([[1,5],[10, 20],[1, 6],[16, 19],[5, 11]]) == 19);
