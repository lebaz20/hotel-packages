/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type package_insert_input = {|
  packageId?: ?number,
  name?: ?string,
  photo?: ?string,
  price?: ?any,
  type?: ?string,
|};
export type NewPackageMutationVariables = {|
  object: package_insert_input
|};
export type NewPackageMutationResponse = {|
  +insert_package_one: ?{|
    +packageId: number,
    +name: string,
    +type: string,
    +price: any,
    +photo: string,
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
    type
    price
    photo
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
            name: "type",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "price",
            storageKey: null,
          },
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "photo",
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
      cacheID: "b60e6cbae673a9e33e534ee6b35cf0f3",
      id: null,
      metadata: {},
      name: "NewPackageMutation",
      operationKind: "mutation",
      text:
        "mutation NewPackageMutation(\n  $object: package_insert_input!\n) {\n  insert_package_one(object: $object) {\n    packageId\n    name\n    type\n    price\n    photo\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '42c0b9472b12b7fdb82cb2ae22fb963d';

module.exports = node;
