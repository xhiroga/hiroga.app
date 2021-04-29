import * as cdk from "@aws-cdk/core";
import { removableBucket } from "./resources/customized-buckets";

export class BookStack extends cdk.Stack {
  constructor(scope: cdk.Construct, id: string, props?: cdk.StackProps) {
    super(scope, id, props);
    removableBucket(this, "bookBucket", {
      bucketName: "hiroga-book-bucket",
    });
  }
}
