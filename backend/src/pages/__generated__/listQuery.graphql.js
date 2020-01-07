/**
 * @flow
 * @relayHash f8fa199acb80ad2f03f2f57f83c6bc86
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type listQueryVariables = {||};
export type listQueryResponse = {|
  +viewer: ?{|
    +name: ?string
  |},
  +allCustomers: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
  |}>,
|};
export type listQuery = {|
  variables: listQueryVariables,
  response: listQueryResponse,
|};
*/


/*
query listQuery {
  viewer {
    name
    id
  }
  allCustomers {
    id
    name
  }
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "name",
  "args": null,
  "storageKey": null
},
v1 = {
  "kind": "ScalarField",
  "alias": null,
  "name": "id",
  "args": null,
  "storageKey": null
},
v2 = {
  "kind": "LinkedField",
  "alias": null,
  "name": "allCustomers",
  "storageKey": null,
  "args": null,
  "concreteType": "Customer",
  "plural": true,
  "selections": [
    (v1/*: any*/),
    (v0/*: any*/)
  ]
};
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "listQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/)
        ]
      },
      (v2/*: any*/)
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "listQuery",
    "argumentDefinitions": [],
    "selections": [
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "viewer",
        "storageKey": null,
        "args": null,
        "concreteType": "User",
        "plural": false,
        "selections": [
          (v0/*: any*/),
          (v1/*: any*/)
        ]
      },
      (v2/*: any*/)
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "listQuery",
    "id": null,
    "text": "query listQuery {\n  viewer {\n    name\n    id\n  }\n  allCustomers {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '253faa592e579137abd6ad761fa03a07';
module.exports = node;
