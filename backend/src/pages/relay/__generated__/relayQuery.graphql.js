/**
 * @flow
 * @relayHash 1378428bd3c6aa6c69997567c5a7c344
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListCustomers_customers$ref = any;
type Viewer_viewer$ref = any;
export type relayQueryVariables = {||};
export type relayQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Viewer_viewer$ref
  |},
  +allCustomers: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ListCustomers_customers$ref
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
    ...Viewer_viewer
    id
  }
  allCustomers {
    ...ListCustomers_customers
    id
  }
}

fragment ListCustomers_customers on Customer {
  id
  name
}

fragment Viewer_viewer on User {
  name
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
          {
            "kind": "FragmentSpread",
            "name": "Viewer_viewer",
            "args": null
          }
        ]
      },
      {
        "kind": "LinkedField",
        "alias": null,
        "name": "allCustomers",
        "storageKey": null,
        "args": null,
        "concreteType": "Customer",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListCustomers_customers",
            "args": null
          }
        ]
      }
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
      {
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
      }
    ]
  },
  "params": {
    "operationKind": "query",
    "name": "relayQuery",
    "id": null,
    "text": "query relayQuery {\n  viewer {\n    ...Viewer_viewer\n    id\n  }\n  allCustomers {\n    ...ListCustomers_customers\n    id\n  }\n}\n\nfragment ListCustomers_customers on Customer {\n  id\n  name\n}\n\nfragment Viewer_viewer on User {\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '18e5570019da7fd95dbe3b2c8ff58a20';
module.exports = node;
