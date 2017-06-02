'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectionC = [];
  var p=0;
  for(var i=0;i<collectionA.length;i++)
  {
    for(var j=0;j<collectionB.value.length;j++)
    {
      if(collectionA[i].key==collectionB.value[j])
      {
        collectionC[p]=collectionA[i].key;
        p++;
        break;
      }
    }
  }
  return collectionC;
}
