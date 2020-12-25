/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type package_insert_input = {|
  description?: ?string,
  duration?: ?string,
  name?: ?string,
  packageId?: ?number,
  price?: ?any,
  validity?: ?string,
|};
export type NewPackageMutationVariables = {|
  object: package_insert_input
|};
export type NewPackageMutationResponse = {|
  +insert_package_one: ?{|
    +packageId: number,
    +name: string,
    +duration: string,
    +validity: string,
    +description: string,
    +price: any,
  |}
|};
export type NewPackageMutation = {|
  variables: NewPackageMutationVariables,
  response: NewPackageMutationResponse,
|};
*/

/*
mutation NewPackageMutation(
  $object: package_insert_input!
) {
  insert_package_one(object: $object) {
    packageId
    name
    duration
    validity
    description
    price
  }
}
*/

const node /*: ConcreteRequest*/ = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "object",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "object",
            variableName: "object",
          },
        ],
        concreteType: "package",
        kind: "LinkedField",
        name: "insert_package_one",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "packageId",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "name",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "duration",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "validity",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "description",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "price",
            storageKey: null,
          },
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: (v0 /*: any*/),
      kind: "Fragment",
      metadata: null,
      name: "NewPackageMutation",
      selections: (v1 /*: any*/),
      type: "mutation_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: (v0 /*: any*/),
      kind: "Operation",
      name: "NewPackageMutation",
      selections: (v1 /*: any*/),
    },
    params: {
      cacheID: "25359ba3c0ca966eb0b0f4d9024cbf91",
      id: null,
      metadata: {},
      name: "NewPackageMutation",
      operationKind: "mutation",
      text:
        "mutation NewPackageMutation(\n  $object: package_insert_input!\n) {\n  insert_package_one(object: $object) {\n    packageId\n    name\n    duration\n    validity\n    description\n    price\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '997902be51127afb040229228028e3b8';

module.exports = node;
