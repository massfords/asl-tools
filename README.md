# asl-tools

A set of tools useful for working with AWS Step Functions and the Amazon States Language

## [@asl-tools/asl-mock](./packages/asl-mock/README.md)

- provides class for executing Jest style tests using Docker via [testcontainers](https://testcontainers.com) 
- provides a command line utility for generating a unit test file from a MockConfigFile
- uses `@asl-tools/asl-mock-types` for the mock config file definition
- uses `@asl-tools/asl-puml` to produce [PUML](https://plantuml.com) diagrams the execution of each test case

## [@asl-tools/asl-mock-types](./packages/asl-mock-types/README.md)

- provides Typescript definitions for the shapes described in the [Amazon's Configuration File for Mocked Service Integrations](https://docs.aws.amazon.com/step-functions/latest/dg/sfn-local-mock-cfg-file.html).

## [@asl-tools/asl-mock-example](./packages/asl-mock-example/README.md)

- sample project to illustrate use of `@asl-tools/asl-mock` 
- port of the example from [aws-samples/aws-step-functions-examples](https://github.com/aws-samples/aws-stepfunctions-examples/blob/main/sam/app-local-testing-mock-config/README.md) Github repo

## [@asl-tools/asl-path-validator](./packages/asl-path-validator/README.md)

- generated parser to validate path expressions in step functions
- used in [asl-validator](https://github.com/ChristopheBougere/asl-validator)

## [@asl-tools/asl-puml](./packages/asl-puml/README.md)

- generates a [PUML](https://plantuml.com) diagram from an ASL json file
