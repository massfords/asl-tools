# @asl-tools/asl-mock-types

This project provides Typescript definitions for the shapes described in the [Amazon's Configuration File for Mocked Service Integrations](https://docs.aws.amazon.com/step-functions/latest/dg/sfn-local-mock-cfg-file.html).

## How to use these types

The [Docker image](https://docs.aws.amazon.com/step-functions/latest/dg/sfn-local-docker.html) for the local step function emulator from AWS accepts a JSON file at startup that contains one or more test cases with mocked responses for Task states. 

The purpose of these types is to enable defining this config shape as a Typescript type and thus get compile time checking of the test configuration. The type that defines the config file can be serialized to JSON and passed to the container at startup. See the test runner in `@asl-tools/asl-mock` for an example.

## Installing

```shell
npm install -D @asl-tools/asl-mock-types
```

## Preference for singleton mock config

The AWS config supports a config file with multiple step functions but I've found it easier to maintain a single mock config file per step function definition. 
