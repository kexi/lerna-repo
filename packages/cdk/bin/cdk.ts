#!/usr/bin/env node
import * as cdk from 'aws-cdk-lib';
import { IacStack } from '../lib/cdk-stack';

const app = new cdk.App();
new IacStack(app, 'CdkStack');
