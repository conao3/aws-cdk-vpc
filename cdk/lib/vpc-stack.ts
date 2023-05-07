import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ParamProps } from './type';

export class VpcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, param: ParamProps, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new cdk.aws_ec2.Vpc(this, 'CdkVpc',  {
      vpcName: `${param.prefix}-Vpc`,
      maxAzs: 3,
      subnetConfiguration: [
        {
          name: 'pub',
          subnetType: cdk.aws_ec2.SubnetType.PUBLIC,
        },
        {
          name: 'pri',
          subnetType: cdk.aws_ec2.SubnetType.PRIVATE_WITH_EGRESS,
        }
      ]
    });
  }
}
