/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type package_set_input = {|
  packageId?: ?number,
  name?: ?string,
  photo?: ?string,
  price?: ?any,
  type?: ?string,
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
    +photo: string,
    +price: any,
    +type: string,
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
    photo
    price
    type
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
            name: "photo",
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
            name: "type",
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
      cacheID: "192ab10c21e73557d7bfdfff0c4ef318",
      id: null,
      metadata: {},
      name: "EditPackageMutation",
      operationKind: "mutation",
      text:
        "mutation EditPackageMutation(\n  $_set: package_set_input!\n  $pk_columns: package_pk_columns_input!\n) {\n  update_package_by_pk(_set: $_set, pk_columns: $pk_columns) {\n    packageId\n    name\n    photo\n    price\n    type\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'c7bb70ebac6ef9118b659cd70c846d1a';

module.exports = node;
