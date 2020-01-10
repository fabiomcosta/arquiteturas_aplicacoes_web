/**
 * @flow
 * @relayHash 91489737ac6999d865f744bb1c015e9e
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
type ListLocations_locations$ref = any;
type Viewer_viewer$ref = any;
export type locationsQueryVariables = {||};
export type locationsQueryResponse = {|
  +viewer: ?{|
    +$fragmentRefs: Viewer_viewer$ref
  |},
  +allLocations: ?$ReadOnlyArray<?{|
    +$fragmentRefs: ListLocations_locations$ref
  |}>,
|};
export type locationsQuery = {|
  variables: locationsQueryVariables,
  response: locationsQueryResponse,
|};
*/


/*
query locationsQuery {
  viewer {
    ...Viewer_viewer
    id
  }
  allLocations {
    ...ListLocations_locations
    id
  }
}

fragment ListLocations_locations on Location {
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
    "name": "locationsQuery",
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
        "name": "allLocations",
        "storageKey": null,
        "args": null,
        "concreteType": "Location",
        "plural": true,
        "selections": [
          {
            "kind": "FragmentSpread",
            "name": "ListLocations_locations",
            "args": null
          }
        ]
      }
    ]
  },
  "operation": {
    "kind": "Operation",
    "name": "locationsQuery",
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
        "name": "allLocations",
        "storageKey": null,
        "args": null,
        "concreteType": "Location",
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
    "name": "locationsQuery",
    "id": null,
    "text": "query locationsQuery {\n  viewer {\n    ...Viewer_viewer\n    id\n  }\n  allLocations {\n    ...ListLocations_locations\n    id\n  }\n}\n\nfragment ListLocations_locations on Location {\n  id\n  name\n}\n\nfragment Viewer_viewer on User {\n  name\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '670a2b9058bf93441c9511e274e8fda5';
module.exports = node;
