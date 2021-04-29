#!/usr/bin/env node
import "source-map-support/register";
import * as cdk from "@aws-cdk/core";
import { BookStack } from "../lib/book-stack";
import { Tags } from "@aws-cdk/core";

const app = new cdk.App();
new BookStack(app, "BookStack", {});
Tags.of(app).add("repository", "apps-aws");
