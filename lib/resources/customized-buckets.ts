import { Bucket, BucketEncryption, BucketProps } from "@aws-cdk/aws-s3";
import { Construct, RemovalPolicy } from "@aws-cdk/core";

export const removableBucket = (
  scope: Construct,
  id: string,
  props: BucketProps
): Bucket => {
  return new Bucket(scope, id, {
    publicReadAccess: false,
    removalPolicy: RemovalPolicy.DESTROY,
    versioned: true,
    encryption: BucketEncryption.S3_MANAGED,
    ...props,
  });
};
