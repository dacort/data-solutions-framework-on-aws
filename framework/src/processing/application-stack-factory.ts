// Copyright Amazon.com, Inc. or its affiliates. All Rights Reserved.
// SPDX-License-Identifier: MIT-0

import { Construct } from 'constructs';
import { ApplicationStack, ApplicationStackProps } from './application-stack';

/**
* Abstract class that needs to be implemented to pass the application Stack to the CICD pipeline.
*/
export abstract class ApplicationStackFactory {

  /**
   * Abstract method that needs to be implemented to return the application Stack.
   * @param scope The scope to create the stack in.
   * @param stage The stage of the pipeline.
   */
  abstract createStack(scope: Construct, id: string, props: ApplicationStackProps): ApplicationStack;
}