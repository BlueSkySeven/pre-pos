'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectionC = [];
  var p=0;
  for(var i=0;i<collectionA.length;i++)
  {
    for(var j=0;j<collectionB.value.length;j++)
    {
      if(collectionA[i]==collectionB.value[j])
      {
        collectionC[p]=collectionA[i];
        p++;
        break;
      }
    }
  }
  return collectionC;
}
