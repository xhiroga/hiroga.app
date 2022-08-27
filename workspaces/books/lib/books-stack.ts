import * as cdk from 'aws-cdk-lib';
import { Construct } from 'constructs';
import * as s3 from 'aws-cdk-lib/aws-s3';

type BooksStackProps = {
  readonly bucketName: string;
} & cdk.StackProps;

export class BooksStack extends cdk.Stack {
  constructor(scope: Construct, id: string, props?: BooksStackProps) {
    super(scope, id, props);
    new s3.Bucket(this, 'booksBucket', {
      bucketName: props?.bucketName,
      versioned: true,
    });
  }
}
