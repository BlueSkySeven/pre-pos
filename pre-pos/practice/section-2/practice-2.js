'use strict';

function countSameElements(collection) {

  var newArr = [];
  var arrA = [];
  var collectionA = [];
for(var i=0.;i<collection.length;i++)
{
  var ary = collection[i].split('');
  if(!ary[1])
  {
    collectionA.push(collection[i]);
  }
  else
  {

    for(j=0;j<ary[2];j++)
    {
      collectionA.push(ary[0]);
    }
  }
}
  for (var i = 0; i < collectionA.length - 1; i++) {
    if (newArr.indexOf(collectionA[i]) == -1) {
      newArr.push(collectionA[i]);
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
    for (var j = 0; j < collectionA.length; j++) {
      if (newArr[i] === collectionA[j]) {
        arrA[i].count++;
      }
    }
  }

  return arrA;
}
