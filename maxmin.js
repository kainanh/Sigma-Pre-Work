let array = [1, 2, 4, 1, 0, 2, -1];

function maxmin(array) {
  let maxval = array[0];
  for (let i = 1; i < array.length; i++) {
    if (array[i] > maxval) maxval = array[i];
  }
  //console.log(maxval);
  let minval = array[0];
  for (let v = 1; v < array.length; v++) {
    if (array[v] < minval) minval = array[v];
  }
  //console.log(minval);
  let maxminvalue = [maxval, minval];
  console.log(maxminvalue);
}

maxmin(array);
