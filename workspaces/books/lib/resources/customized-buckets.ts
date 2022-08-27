import { Bucket, BucketEncryption, BucketProps } from "@aws-cdk/aws-s3";
import { Construct, RemovalPolicy } from "@aws-cdk/core";

export const removableBucket = (
  scope: Construct,
  id: string,
  props: BucketProps
): Bucket => {
  return new Bucket(scope, id, {
    encryption: BucketEncryption.S3_MANAGED,
    removalPolicy: RemovalPolicy.DESTROY,
    versioned: true,
    ...props,
  });
};
