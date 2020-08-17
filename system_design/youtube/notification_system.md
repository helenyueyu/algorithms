**Publisher**
**Subscriber**


**Functional Requirements**
    **APIs**: define system behavior, a set of operations the system will support 
**Nonfunctional Requirements**
    **scalability, maintainability, testability**, etc. 


**Functional**
    * createTopic(topicName)
    * publish(topicName, message)
    * subscribe(topicName, endpoint)
**Nonfunctional**
    * scalable (large number of topics, publishers, subscribers)
    * highly available (survives hardware/network failure, no single source of failure)
    * highly performant (keep end to end latency low)
    * security/operational costs, etc. 

All requests from our clients go through a **load balancer** first: ensures that requests are equally distributed among servers 

Use a **meta data database** to store information about topics and subscriptions 
    * metadata service will act as cache (don't need to hit database with every message)
    * **facade pattern** 

Temporary storage (store messages for some short duration of time (e.g. a few days))
    * if all subscribers are not available, maybe want to store the message a little bit longer 

**Sender** - calls meta data to retrieve info about subscribers

**Frontend Service**
* lightweight web service responsible for: 
1. request validation
2. authentication/authorization
3. TLS (SSL) termination
4. server-side encryption
5. caching
6. rate limiting (throttling)
7. request dispatching 
8. request deduplication 
9. usage data collection 

**Reverse Proxy**
    * responsible for SSL termination (encrypted -> unencrypted)
    * encryping responses and sending back to clients
    * compression (e.g.) gzip - reduce bandwidth for data transfer
    * may pass 503 if service temporarily slow/unavailable
** Frontend Service**
    * cache (e.g. write our own LRU cache or use Google Guava)
    * writes logs to local disk (logs service health/logs exceptions/emit metrics - number of requests/latency)
