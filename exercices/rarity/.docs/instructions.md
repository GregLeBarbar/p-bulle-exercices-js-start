# Instructions

A company has hired you to create a function that returns a random item of any type from an array, the odds of which are linked to a number array of weights.

If you have an array with 5 things inside of it, along with a weight array that looks like [4, 1, 1, 1], you are more likely to get the first item than the others.

If an item has a weight of 0, it will not appear.

If both arrays have mismatched lengths, then the function should throw a ValueError.

If an array is empty or missing, then the function should throw a ValueError as well.

```javascript
const items = ["item1", "item2", "item3", "item4", "item5"];

let result;

result = weightedRandom(items, [0, 0, 0, 0, 1]); // result would be "item5", as the other weights are set to 0
result = weightedRandom(items, [0, 0, 0, 0, 0]); // This would throw a ValueError, as the total weight cannot be 0
result = weightedRandom(items, [5, 5, 10, 5, 5]); // "item3" would be more likely to be picked, as its weight value is greater than the others
```