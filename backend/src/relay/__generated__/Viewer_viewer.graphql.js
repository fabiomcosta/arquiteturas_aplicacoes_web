/**
 * @flow
 */

/* eslint-disable */

'use strict';

/*::
import type { ReaderFragment } from 'relay-runtime';
import type { FragmentReference } from "relay-runtime";
declare export opaque type Viewer_viewer$ref: FragmentReference;
declare export opaque type Viewer_viewer$fragmentType: Viewer_viewer$ref;
export type Viewer_viewer = {|
  +name: ?string,
  +$refType: Viewer_viewer$ref,
|};
export type Viewer_viewer$data = Viewer_viewer;
export type Viewer_viewer$key = {
  +$data?: Viewer_viewer$data,
  +$fragmentRefs: Viewer_viewer$ref,
  ...
};
*/


const node/*: ReaderFragment*/ = {
  "kind": "Fragment",
  "name": "Viewer_viewer",
  "type": "User",
  "metadata": null,
  "argumentDefinitions": [],
  "selections": [
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
(node/*: any*/).hash = '30956cb1f48edb269f67db7eaf385b9a';
module.exports = node;
