/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListCustomers_customers$ref: FragmentReference;
declare export opaque type ListCustomers_customers$fragmentType: ListCustomers_customers$ref;
export type ListCustomers_customers = $ReadOnlyArray<{|
  +id: string,
  +name: ?string,
  +$refType: ListCustomers_customers$ref,
|}>;
export type ListCustomers_customers$data = ListCustomers_customers;
export type ListCustomers_customers$key = $ReadOnlyArray<{
  +$data?: ListCustomers_customers$data,
  +$fragmentRefs: ListCustomers_customers$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ListCustomers_customers",
  "type": "Customer",
  "metadata": {
    "plural": true
  },
  "argumentDefinitions": [],
  "selections": [
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "id",
      "args": null,
      "storageKey": null
    },
    {
      "kind": "ScalarField",
      "alias": null,
      "name": "name",
      "args": null,
      "storageKey": null
    }
  ]
};
// prettier-ignore
(node/*: any*/).hash = 'e93d298ebcafddff2f37345685f25d66';
module.exports = node;
