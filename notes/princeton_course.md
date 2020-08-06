# Week 6

## Hash Tables

**Hash function**: method for computing array index from key. 

Issues: 
    * Collision detection: What happens when two keys hash to the same index? 


Space-Time Tradeoff: 
    * No space limitation: Use the keys themselves
    * No time limitation: Hash everything to the same place, and perform sequential search
    * Hashing tries the middle road 

Hash Functions
    * Efficiently computable
    * Each table index equally likely 
    