# aws-cdk-vpc

A simple AWS CDK project for provisioning a VPC with public and private subnets.

## Overview

This project uses AWS CDK (TypeScript) to create a production-ready VPC infrastructure including:

- VPC with configurable naming prefix
- Public subnet with internet access
- Private subnet with NAT egress
- Security group for public resources (SSH access enabled)

## Prerequisites

- Node.js 18 or later
- pnpm
- AWS CLI configured with appropriate credentials
- AWS CDK CLI (`pnpm install` will handle this)

## Installation

```bash
pnpm install
```

## Deployment

Deploy the stack with an environment context:

```bash
pnpm cdk deploy -c env=dev
```

To use a specific AWS profile:

```bash
pnpm cdk deploy -c env=dev --profile <profile-name>
```

## Useful Commands

| Command | Description |
|---------|-------------|
| `pnpm build` | Compile TypeScript to JavaScript |
| `pnpm watch` | Watch for changes and compile |
| `pnpm test` | Run unit tests |
| `pnpm cdk diff` | Compare deployed stack with current state |
| `pnpm cdk synth` | Emit the synthesized CloudFormation template |
| `pnpm cdk destroy` | Remove the deployed stack |

## License

Apache-2.0
