+++
title = "Getting Started with Weaviate"
date = "2024-09-18T15:12:10-03:00"
description = "Learn how to set up Weaviate, perform basic operations, and leverage hybrid queries for efficient vector and text-based searches."
tags = ["generative-ai"]
+++


## How to use weaviate

Weaviate is a vector DB usually used for Retrieval Augmented Generation.
I like it because they  provide hybrid queries.
You can use both dense and sparse verctor search.
My goal is walk you trough the basics of Weaviate.

### Starting a weaviate instance

Let's get an instance of Weaviate running with docker:

```bash
docker run -p 8080:8080 -p 50051:50051 cr.weaviate.io/semitechnologies/weaviate:1.26.3
```

### The python SDK

To interact with Weaviate, we'll use the Python SDK. Install it with:

```bash
pip install -U weaviate-client  # For beta versions: `pip install --pre -U "weaviate-client==4.*"`
```

Create a `weaviate.py` file and add the following:

```python
import weaviate
client = weaviate.connect_to_local(headers=headers)
```

### Basic Operations

#### Creating a collection

To create a new collection in Weaviate:

```python
client.collections.create("<collection_name>")
```

#### Adding data

Insert data into your collection:

```python
collection = client.collections.get("<collection_name>")
collection.data.insert({"property": "text"}, vector: list[float]=vector)
```

#### Search

Weaviate allows dense, sparse and hybrid search.

##### Vector

Perform a vector-based search:

```python
collection = client.collections.get("<collection_name>")
collection.query.near_vector(vector, limit=10)
```

##### Full-text

Execute a text-based search using BM25:

```python
collection = client.collections.get("<collection_name>")
response = collection.query.bm25("<query>", limit=10)
```

##### Hybrid

Combine vector and text-based search for optimal results:

```python
collection = client.collections.get("<collection_name>")
response = collection.query.hybrid(
    query="<query>",
    vector=vector, 
    limit=10,
)
```
