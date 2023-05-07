import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { VpcStack } from '../lib/vpc-stack';
import { ParamProps } from '../lib/type';

const app = new cdk.App();

const env: string = app.node.tryGetContext('env');
if (!env) {
  throw new Error('env is not provided');
}

const param_ = app.node.tryGetContext('param');

const param: ParamProps = {
  env: env,
  prefix: `${env}-${param_['default']['prefix']}`
}

new VpcStack(app, `${param.prefix}-Vpc`, param);
