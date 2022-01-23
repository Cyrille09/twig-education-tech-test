function groupArrayElements(myArray, chunkSize) {
  const arrayLength = myArray.length;

  // Rounds chunk size length upward to its nearest integer
  const chunkSizeLength = Math.ceil(myArray.length / chunkSize);

  let index = 0;
  let groupArray = [];
  for (index = 0; index < arrayLength; index += chunkSizeLength) {
    // get an array of each groupArray
    const myChunk = myArray.slice(index, index + chunkSizeLength);

    // Push each chunk to the groupArray
    groupArray.push(myChunk);
  }

  return groupArray;
}
const result = groupArrayElements([1, 2, 3, 4, 5], 3);
// results : [ [1,2], [3,4], [5] ]
console.log(result);
