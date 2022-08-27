#!/usr/bin/env node
import 'source-map-support/register';
import * as cdk from 'aws-cdk-lib';
import { BooksStack } from '../lib/books-stack';
import { Tags } from 'aws-cdk-lib';

const app = new cdk.App();
new BooksStack(app, 'BooksStack', {
  bucketName: 'hiroga-books',
});
Tags.of(app).add('repository', 'hiroga.app');
