'use strict';

function countSameElements(collection) {

  var newArr = [];
  var arrA = [];
  for (var i = 0; i < collection.length - 1; i++) {
    if (newArr.indexOf(collection[i]) == -1) {
      newArr.push(collection[i]);
    }
  }
  for(i=0;i<newArr.length;i++)
  {
    arrA.push({key:newArr[i],count:0});
    /*arrA[i] = {}
    arrA[i].key=newArr[i];
    arrA[i].count=0;*/
  }
  for (var i = 0; i < newArr.length; i++) {
    for (var j = 0; j < collection.length; j++) {
      if (newArr[i] === collection[j]) {
        arrA[i].count++;
      }
    }
  }

  return arrA;
}

