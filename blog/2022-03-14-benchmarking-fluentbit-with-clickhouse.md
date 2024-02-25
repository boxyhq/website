---
slug: benchmarking-fluentbit-with-clickhouse
title: Benchmarking fluent-bit with Clickhouse
author: Utkarsh Mehta
author_title: Senior Software Engineer (Open Source Dev Tools) @BoxyHQ
author_url: https://www.linkedin.com/in/utkarsh-mehta2612/
author_image_url: /images/authors/utkarsh.jpg
tags_disabled:
  [
    enterprise-readiness,
    engineering,
    audit-logs,
    hermes,
    fluent-bit,
    clickhouse,
    benchmarking,
    research,
    load-testing,
  ]
image: /img/blog/fluentbit-clickhouse.png
---

One of our products, [Hermes](https://github.com/boxyhq/hermes) is an audit logs service. Currently, Hermes is in the prototype phase and uses a [Go](https://go.dev/) REST API server to ingest audit logs and send them to [Loki](https://grafana.com/oss/loki/).

We were trying out different databases, ingesters & tools to see which are best suited for Hermes and should be able to scale with high traffic without losing a single audit log & which can search through high amount data efficiently.

![Title Image](/img/blog/fluentbit-clickhouse.png)

We decided to benchmark different combinations of ingesters (Vector, Fluentd, Fluent-Bit, etc.) and storage & query tools (Mongodb, Clickhouse, Elasticsearch, etc.).

The first round of benchmarks will be lightweight and extensive benchmarks will follow later once we pick the right tools for Hermes.

## Hardware Configuration

The following tests and benchmarks have been performed on a MacBook Pro (14-inch, 2021) with Apple M1 Pro and 16 GB RAM, the tools to be tested were dockerized with docker desktop running with 4 GB Memory, 4 CPUs & 1 GB Swap.

> Fluent Bit is a super-fast, lightweight, highly scalable logging and metrics processor and forwarder.
> It is the preferred choice for cloud and containerized environments.
> Source: [fluent-bit website](https://fluentbit.io/)
> Clickhouse is the fastest OLAP database on earth. ClickHouse works 100–1000x faster than traditional approaches.
> Companies like Uber, Cloudflare, Spotify, and eBay use Clickhouse.
> Source: [Clickhouse website](https://clickhouse.com/)

So few pointers before we go ahead,

1. Fluent-bit is fast at ingesting logs/data, processing them, and sending them to a destination.

2. Clickhouse is efficient at handling and querying data.

3. Fluent-bit does not support Clickhouse by default.

4. The fluent-bit ecosystem lets users write their plugins in Golang and add additional support required.

5. For faster querying in Clickhouse, an efficient table schema with indexes, compression, etc. should be established.

## Clickhouse plugin for fluent-bit

<!-- ![Funny Gif](https://media0.giphy.com/media/bAplZhiLAsNnG/giphy.webp?cid=dda24d507bdfdacf288d461758839009285c1ed114150484&rid=giphy.webp&ct=g) -->

I developed a fluent-bit output [plugin](https://github.com/boxyhq/fluent-bit-clickhouse) for Clickhouse.

## Fluent-Bit config

![Fluent-bit Configuration](/img/blog/fluentbit-config.png)

This config makes fluent-bit ingest data via HTTP server listening on port 8888 and sends the data to Clickhouse with configuration stated.

## Clickhouse config

<!-- ![Funny Gif](https://media0.giphy.com/media/aS8ypUweGOXMA/200w.webp?cid=dda24d5064d326145a245fce898f7775bc4b7e4ce5f8f178&rid=200w.webp&ct=g) -->

I ramped up the number of concurrent requests/queries by modifying the config.xml. After multiple tests, I finalized the following config.

![Clickhouse Configuration](/img/blog/clickhouse-config.png)

## Load testing tool

<!-- ![Funny Gif](https://media1.giphy.com/media/B6SyssSlTgPXq/200w.webp?cid=dda24d50edfaf581e3165a3d10a7dd26c246ebb459fcebb5&rid=200w.webp&ct=g) -->

I developed a load testing tool with Node.js that can be used to benchmark REST API-based endpoints of Fluent-bit.

[API Benchmarking](https://github.com/boxyhq/api-benchmarking)

Another tool to load test is the querying part of Clickhouse.

[Clickhouse Load Testing](https://github.com/boxyhq/clickhouse-db-load-testing)

## The results

These results are dependent on the ram allocated to the Docker engine, in my case, it's(4 GiBs).

### Ingester

![Ingester results](/img/blog/results-ingester.png)

### Query

![Queryer result](/img/blog/results-query.png)

## Conclusion

### Ingester

1. Fluent-bit can handle loads up to 2000 req/sec but in the case of bigger batches, the speed goes down drastically. (200 X 10) & (300 X 10)

2. In the case of long-term light batches, Fluent-bit performs consistently. (10 X 1000)

3. Fluent-bit performs at average speeds in the case of average loads (50 X 50).

### Query

1. Clickhouse shows the best req/sec performance with an average load (50 X 50).

2. Also, Clickhouse's performance was pretty satisfactory for all the different variations of records in DB. (1.1 mils, 50k, 25k, 10k, 2k & 1k).

3. Clickhouse was able to manage short-term high loads and long-term light loads efficiently. (100 X 10) and (10 X 5000).

We will be posting more blogs regarding benchmarks, tools, etc., as we go on to build Hermes and many other dev tools. Please leave comments below.

Thank you!
