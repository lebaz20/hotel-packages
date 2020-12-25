/**
 * @flow
 */

/* eslint-disable */

"use strict";

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type PackageListDeleteMutationVariables = {|
  packageId: number
|};
export type PackageListDeleteMutationResponse = {|
  +delete_package_by_pk: ?{|
    +packageId: number
  |}
|};
export type PackageListDeleteMutation = {|
  variables: PackageListDeleteMutationVariables,
  response: PackageListDeleteMutationResponse,
|};
*/

/*
mutation PackageListDeleteMutation(
  $packageId: Int!
) {
  delete_package_by_pk(packageId: $packageId) {
    packageId
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
        name: "delete_package_by_pk",
        plural: false,
        selections: [
          {
            alias: null,
            args: null,
            kind: "ScalarField",
            name: "packageId",
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
      name: "PackageListDeleteMutation",
      selections: (v1 /*: any*/),
      type: "mutation_root",
      abstractKey: null,
    },
    kind: "Request",
    operation: {
      argumentDefinitions: (v0 /*: any*/),
      kind: "Operation",
      name: "PackageListDeleteMutation",
      selections: (v1 /*: any*/),
    },
    params: {
      cacheID: "b340a72bd0354309b42a50561dba6374",
      id: null,
      metadata: {},
      name: "PackageListDeleteMutation",
      operationKind: "mutation",
      text:
        "mutation PackageListDeleteMutation(\n  $packageId: Int!\n) {\n  delete_package_by_pk(packageId: $packageId) {\n    packageId\n  }\n}\n",
    },
  };
})();
// prettier-ignore
(node/*: any*/).hash = '6e0618e9373fef2403c775a6955969ee';

module.exports = node;
