import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import { ParamProps } from './type';

export class VpcStack extends cdk.Stack {
  constructor(scope: Construct, id: string, param: ParamProps, props?: cdk.StackProps) {
    super(scope, id, props);

    const vpc = new cdk.aws_ec2.Vpc(this, 'CdkVpc',  {
      vpcName: `${param.prefix}-Vpc`,
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

    const securityGroupPub = new cdk.aws_ec2.SecurityGroup(this, 'CdkSecurityGroupPub', {
      vpc: vpc,
      securityGroupName: `${param.prefix}-SecurityGroupPub`,
    });

    securityGroupPub.addIngressRule(
      cdk.aws_ec2.Peer.anyIpv4(),
      cdk.aws_ec2.Port.tcp(22),
    );
  }
}
