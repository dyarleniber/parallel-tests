# Parallel tests in Node.js with Jest and MongoDB (without mocking)

It's a common practice when writing tests, provide a mock implementation for your database, the problem with this approach is that, if there is any error in a query, this error will never be caught.
In this post I will demonstrate how to run tests in parallel using a shared database without mocking. We will develop a rest API with some routes and integration tests.

You can read the full post at [this link](https://dev.to/dyarleniber/parallel-tests-in-node-js-with-jest-and-mongodb-without-mocking-4jj2).
