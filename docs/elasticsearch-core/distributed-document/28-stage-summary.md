---
outline: deep
---
# 阶段总结 & 什么是 distributed document store

## 阶段性总结

- 01~08讲：快速入门了一下，最基本的原理，最基本的操作
- 09~13讲：在入门之后，对 ES 的分布式的基本原理，进行了相对深入一些的剖析
- 14~27讲：围绕着 document 这个东西，进行操作，进行讲解和分析

## 什么是 distributed document store

到目前为止，你觉得你在学什么东西，给大家一个直观的感觉，好像已经知道了 es 是分布式的，包括一些基本的原理，然后花了不少时间在学习 document 本身相关的操作，增删改查。一句话点出来，给大家归纳总结一下，其实我们应该思考一下，es 的一个最最核心的功能，已经被我们相对完整的讲完了。

Elasticsearch 在跑起来以后，其实起到的第一个最核心的功能，就是一个分布式的文档数据存储系统。ES 是分布式的。文档数据存储系统。文档数据，存储系统。

- 文档数据：es 可以存储和操作 json 文档类型的数据，而且这也是 es 的核心数据结构。
- 存储系统：es 可以对 json 文档类型的数据进行存储，查询，创建，更新，删除，等等操作。

    其实已经起到了一个什么样的效果呢？其实 ES 满足了这些功能，就可以说已经是一个 NoSQL 的存储系统了。

围绕着 document 在操作，其实就是把 es 当成了一个 NoSQL 存储引擎，一个可以存储文档类型数据的存储系统，在操作里面的 document。

es 可以作为一个分布式的文档存储系统，所以说，我们的应用系统，是不是就可以基于这个概念，去进行相关的应用程序的开发了。

**什么类型的应用程序呢？**

1. 数据量较大，es 的分布式本质，可以帮助你快速进行扩容，承载大量数据
2. 数据结构灵活多变，随时可能会变化，而且数据结构之间的关系，非常复杂，如果我们用传统数据库，那是不是很坑，因为要面临大量的表
3. 对数据的相关操作，较为简单，比如就是一些简单的增删改查，用我们之前讲解的那些 document 操作就可以搞定
4. NoSQL 数据库，适用的也是类似于上面的这种场景

举个例子，比如说像一些网站系统，或者是普通的电商系统，博客系统，面向对象概念比较复杂，但是作为终端网站来说，没什么太复杂的功能，就是一些简单的 CRUD 操作，而且数据量可能还比较大。这个时候选用 ES 这种 NoSQL 型的数据存储，比传统的复杂的功能务必强大的支持 SQL 的关系型数据库，更加合适一些。无论是性能，还是吞吐量，可能都会更好。
