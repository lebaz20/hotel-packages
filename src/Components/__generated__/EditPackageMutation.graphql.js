/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type package_set_input = {|
  description?: ?string,
  duration?: ?string,
  name?: ?string,
  packageId?: ?number,
  price?: ?any,
  validity?: ?string,
|};
export type package_pk_columns_input = {|
  packageId: number
|};
export type EditPackageMutationVariables = {|
  _set: package_set_input,
  pk_columns: package_pk_columns_input,
|};
export type EditPackageMutationResponse = {|
  +update_package_by_pk: ?{|
    +packageId: number,
    +name: string,
    +price: any,
    +duration: string,
    +validity: string,
    +description: string,
  |}
|};
export type EditPackageMutation = {|
  variables: EditPackageMutationVariables,
  response: EditPackageMutationResponse,
|};
*/

/*
mutation EditPackageMutation(
  $_set: package_set_input!
  $pk_columns: package_pk_columns_input!
) {
  update_package_by_pk(_set: $_set, pk_columns: $pk_columns) {
    packageId
    name
    price
    duration
    validity
    description
  }
}
*/

const node /*: ConcreteRequest*/ = (function () {
  var v0 = [
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "_set",
      },
      {
        defaultValue: null,
        kind: "LocalArgument",
        name: "pk_columns",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "_set",
            variableName: "_set",
          },
          {
            kind: "Variable",
            name: "pk_columns",
            variableName: "pk_columns",
          },
        ],
        concreteType: "package",
        kind: "LinkedField",
        name: "update_package_by_pk",
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
            name: "price",
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
        ],
        storageKey: null,
      },
    ];
  return {
    fragment: {
      argumentDefinitions: (v0 /*: any*/),
      kind: "Fragment",
      metadata: null,
      name: "EditPackageMutation",
      selections: (v1 /*: any*/),
      type: "mutation_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: (v0 /*: any*/),
      kind: "Operation",
      name: "EditPackageMutation",
      selections: (v1 /*: any*/),
    },
    params: {
      cacheID: "3f2b5a05ef0a1a8c9942203580bf86e4",
      id: null,
      metadata: {},
      name: "EditPackageMutation",
      operationKind: "mutation",
      text:
        "mutation EditPackageMutation(\n  $_set: package_set_input!\n  $pk_columns: package_pk_columns_input!\n) {\n  update_package_by_pk(_set: $_set, pk_columns: $pk_columns) {\n    packageId\n    name\n    price\n    duration\n    validity\n    description\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'bf5e39c3240baeb2910aee4a47592f0f';

module.exports = node;
