/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type EditPackageQueryVariables = {|
  packageId: number
|};
export type EditPackageQueryResponse = {|
  +package_by_pk: ?{|
    +_id: number,
    +name: string,
    +price: any,
    +duration: string,
    +validity: string,
    +description: string,
  |}
|};
export type EditPackageQuery = {|
  variables: EditPackageQueryVariables,
  response: EditPackageQueryResponse,
|};
*/

/*
query EditPackageQuery(
  $packageId: Int!
) {
  package_by_pk(packageId: $packageId) {
    _id: packageId
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
        name: "packageId",
      },
    ],
    v1 = [
      {
        alias: null,
        args: [
          {
            kind: "Variable",
            name: "packageId",
            variableName: "packageId",
          },
        ],
        concreteType: "package",
        kind: "LinkedField",
        name: "package_by_pk",
        plural: false,
        selections: [
          {
            alias: "_id",
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
      name: "EditPackageQuery",
      selections: (v1 /*: any*/),
      type: "query_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: (v0 /*: any*/),
      kind: "Operation",
      name: "EditPackageQuery",
      selections: (v1 /*: any*/),
    },
    params: {
      cacheID: "cdef8abbdd7ab86dd2117620eee65738",
      id: null,
      metadata: {},
      name: "EditPackageQuery",
      operationKind: "query",
      text:
        "query EditPackageQuery(\n  $packageId: Int!\n) {\n  package_by_pk(packageId: $packageId) {\n    _id: packageId\n    name\n    price\n    duration\n    validity\n    description\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'a85a2d8e38792ea5a91e491761df172a';

module.exports = node;
