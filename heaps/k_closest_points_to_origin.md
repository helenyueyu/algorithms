## Implementation

The **naive** solution is to sort the array. This requires sorting **every single coordinate** (note that we are potentially doing redundant work, in the sense that we still need to sort all of the coordinates, even if K is very small, e.g. `1`). 

```js
var kClosest = function(points, K) {
    return points.sort((a,b) => euclideanDist(a) < euclideanDist(b) ? -1 : 1).slice(0, K); 
};

function euclideanDist(point) {
    const [x, y] = point; 
    return Math.sqrt(x**2 + y**2); 
}
```

A second **slightly less naive** solution is to use a heap. 

Something that's a little better is to use a heap. That way we don't have to consider every single element in our array, we can store only the top `K` elements. If our heap has reached its capacity, we compare the new element with the root of the maxHeap, and if it is smaller, we insert it into the maxHeap and eject the root. Otherwise, if it's bigger, we ignore it. 


A third solution is to use **quick select**. 
