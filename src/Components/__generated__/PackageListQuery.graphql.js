/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PackageListQueryVariables = {||};
export type PackageListQueryResponse = {|
  +package: $ReadOnlyArray<{|
    +_id: number,
    +name: string,
    +price: any,
    +duration: string,
    +validity: string,
    +description: string,
  |}>
|};
export type PackageListQuery = {|
  variables: PackageListQueryVariables,
  response: PackageListQueryResponse,
|};
*/

/*
query PackageListQuery {
  package {
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
      alias: null,
      args: null,
      concreteType: "package",
      kind: "LinkedField",
      name: "package",
      plural: true,
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
      argumentDefinitions: [],
      kind: "Fragment",
      metadata: null,
      name: "PackageListQuery",
      selections: (v0 /*: any*/),
      type: "query_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: [],
      kind: "Operation",
      name: "PackageListQuery",
      selections: (v0 /*: any*/),
    },
    params: {
      cacheID: "2228f514e39a2a696aa3f1cabed55799",
      id: null,
      metadata: {},
      name: "PackageListQuery",
      operationKind: "query",
      text:
        "query PackageListQuery {\n  package {\n    _id: packageId\n    name\n    price\n    duration\n    validity\n    description\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = 'f9cf66e169e3683fbb817eebb27a0622';

module.exports = node;
