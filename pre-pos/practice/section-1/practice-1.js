'use strict';

function collectSameElements(collectionA, collectionB) {
  var collectionC = [];
  var p=0;
  for(var i=0;i<collectionA.length;i++)
  {
    for(var j=0;j<collectionB.length;j++)
    {
      if(collectionA[i]==collectionB[j])
      {
        collectionC[p]=collectionA[i];
        p++;
        break;
      }
    }
  }
  return collectionC;
}
