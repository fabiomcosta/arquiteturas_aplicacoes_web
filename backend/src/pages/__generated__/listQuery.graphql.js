/**
 * @flow
 * @relayHash fa55cc7d9b9992999256321be0d5fefe
 */

/* eslint-disable */

'use strict';

/*::
import type { ConcreteRequest } from 'relay-runtime';
export type listQueryVariables = {||};
export type listQueryResponse = {|
  +hello: ?string
|};
export type listQuery = {|
  variables: listQueryVariables,
  response: listQueryResponse,
|};
*/


/*
query listQuery {
  hello
}
*/

const node/*: ConcreteRequest*/ = (function(){
var v0 = [
  {
    "kind": "ScalarField",
    "alias": null,
    "name": "hello",
    "args": null,
    "storageKey": null
  }
];
return {
  "kind": "Request",
  "fragment": {
    "kind": "Fragment",
    "name": "listQuery",
    "type": "Query",
    "metadata": null,
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "operation": {
    "kind": "Operation",
    "name": "listQuery",
    "argumentDefinitions": [],
    "selections": (v0/*: any*/)
  },
  "params": {
    "operationKind": "query",
    "name": "listQuery",
    "id": null,
    "text": "query listQuery {\n  hello\n}\n",
    "metadata": {}
  }
};
})();
// prettier-ignore
(node/*: any*/).hash = '486ca2d3eabfb5df1b00703597a6b39a';
module.exports = node;
