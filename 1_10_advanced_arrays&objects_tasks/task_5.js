//  Create a function to merge two sorted arrays into one sorted array without duplicates

function sortedArrays(s_arr) {
  const sorted_arr = s_arr.flat();
  console.log('sorted array',sorted_arr)

  for (let i = 0; i < sorted_arr.length; i++) {
    for (let y = i+1; y < sorted_arr.length; y++) {
      if (sorted_arr[i] === sorted_arr[y]) {
        
        sorted_arr.splice(y,1);
        
      }
    }
  }
 
  return sorted_arr;
}

const for_sort = [
  [1, 2, 3],
  [1, 4, 5],
  [2, 3, 6],
];

console.log(sortedArrays(for_sort));
