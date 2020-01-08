/**
 * @flow
 * @relayHash dd408f3aabd3027f70642926fe652ab3
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type relayQueryVariables = {||};
export type relayQueryResponse = {|
  +viewer: ?{|
    +name: ?string
  |},
  +allCustomers: ?$ReadOnlyArray<?{|
    +id: string,
    +name: ?string,
  |}>,
|};
export type relayQuery = {|
  variables: relayQueryVariables,
  response: relayQueryResponse,
|};
*/


/*
query relayQuery {
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
    "name": "relayQuery",
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
    "name": "relayQuery",
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
    "name": "relayQuery",
    "id": null,
    "text": "query relayQuery {\n  viewer {\n    name\n    id\n  }\n  allCustomers {\n    id\n    name\n  }\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = 'fee117354271cef72385f2b011c0d2d3';
module.exports = node;
