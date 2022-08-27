import {
  expect as expectCDK,
  matchTemplate,
  MatchStyle,
} from "@aws-cdk/assert";
import * as cdk from "@aws-cdk/core";
import { BookStack } from "../lib/book-stack";

test("Empty Stack", () => {
  const app = new cdk.App();
  // WHEN
  const stack = new BookStack(app, "MyTestStack");
  // THEN
  expectCDK(stack).to(
    matchTemplate(
      {
        Resources: {
          bookBucket9061173A: {
            Type: "AWS::S3::Bucket",
            Properties: {
              BucketEncryption: {
                ServerSideEncryptionConfiguration: [
                  {
                    ServerSideEncryptionByDefault: {
                      SSEAlgorithm: "AES256",
                    },
                  },
                ],
              },
              BucketName: "hiroga-book-bucket",
              VersioningConfiguration: {
                Status: "Enabled",
              },
            },
            UpdateReplacePolicy: "Delete",
            DeletionPolicy: "Delete",
          },
        },
      },
      MatchStyle.EXACT
    )
  );
});
