/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type ListLocations_locations$ref: FragmentReference;
declare export opaque type ListLocations_locations$fragmentType: ListLocations_locations$ref;
export type ListLocations_locations = $ReadOnlyArray<{|
  +id: string,
  +name: ?string,
  +$refType: ListLocations_locations$ref,
|}>;
export type ListLocations_locations$data = ListLocations_locations;
export type ListLocations_locations$key = $ReadOnlyArray<{
  +$data?: ListLocations_locations$data,
  +$fragmentRefs: ListLocations_locations$ref,
  ...
}>;
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "ListLocations_locations",
  "type": "Location",
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
(node/*: any*/).hash = '31d1fa183bcf61729fd460ff801f28c6';
module.exports = node;
