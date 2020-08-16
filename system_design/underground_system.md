## Overview
Assumptions we make: 

* Each `start-end` time pair for a customer is valid, that is `start < end`. 
* Customers can show up multiple times, but if they do, their `start-end` intervals should not be overlapping. In other words, a customer of `id` of 1 that gets on at station of Waterloo at time `3`, and gets off at station of Cambridge at time `7`, cannot have gotten on at a station of Toronto at time `4`. 

The overall approach is to create two hashes, one for `times` and the other for `customers`. 

* When we check a customer in, we insert two pieces of information, `stationName` and `t`, time. 
* When we check a customer out, we grab their time in the hash (it already exists, since we assume they've always checked in before checking out), and add a unique key value pair to our `this.times`, which keeps track of all direct routes from each unique `start_station-end_station` pair. 


## New Implementation

```js
var UndergroundSystem = function() {
    this.times = {} 
    this.customers = {} 
};

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    this.customers[id] = [stationName, t]; 
};


UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    const [startStation, startTime] = this.customers[id]; 
    const [endStation, endTime] = [stationName, t]; 
    
    const pair = `${startStation}_${endStation}`; 
    if (this.times[pair] === undefined) {
        this.times[pair] = [endTime - startTime, 1]; 
    } else {
        this.times[pair][0] += endTime - startTime;
        this.times[pair][1]++; 
    }
    
};


UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const pair = `${startStation}_${endStation}`; 
    return this.times[pair][0]/this.times[pair][1]; 
};

```

## Complexity
Time: 

* `checkIn`: `O(1)`
* `checkOut`: `O(1)`
* `getAverageTime`: `O(1)` 


## Old Implementation (Fails)


**Note**: This fails to take into consideration that the paths **must be direct**. A.k.a. to compute the time from `A` to `B`, we cannot include the times if a customer goes from `A` to `C`, and then from `C` to `B`. 

```js
var UndergroundSystem = function() {
    this.h = {} 
};

UndergroundSystem.prototype.checkIn = function(id, stationName, t) {
    if (this.h[stationName] === undefined) {
        this.h[stationName] = {
            "start": {}, 
            "end": {} 
        }
    } 
    if (this.h[stationName]["start"][id] === undefined) {
        this.h[stationName]["start"][id] = [t]; 
    } else {
        this.h[stationName]["start"][id].push(t); 
    }
};


UndergroundSystem.prototype.checkOut = function(id, stationName, t) {
    if (this.h[stationName] === undefined) {
        this.h[stationName] = {
            "start": {}, 
            "end": {} 
        }
    } 
    if (this.h[stationName]["end"][id] === undefined) {
        this.h[stationName]["end"][id] = [t]; 
    } else {
        this.h[stationName]["end"][id].push(t); 
    }
};


UndergroundSystem.prototype.getAverageTime = function(startStation, endStation) {
    const times = []; 
    const startIds = Object.keys(this.h[startStation]["start"]); 
    for (let id of startIds) {
        const startTimes = this.h[startStation]["start"][id]; 
        const endTimes = this.h[endStation]["end"][id]; 
        if (endTimes == undefined) continue; 
        for (let i = 0; i < startTimes.length; i++) {
            times.push(endTimes[i] - startTimes[i]); 
        }
    }
    return (times.reduce((a,b) => a + b, 0))/times.length; 
};
```