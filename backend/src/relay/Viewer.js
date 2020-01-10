import React from 'react';
import { graphql, createFragmentContainer } from 'react-relay';

// Just showing that it's fine to have the component and the graphql fragment
// in the same file. But we could also import the Viewer component.
function Viewer({ viewer }) {
  return (
    <div>
      <h1>Viewer</h1>
      <div>{viewer.name}</div>
    </div>
  );
}

export default createFragmentContainer(Viewer, {
  viewer: graphql`
    fragment Viewer_viewer on User {
      name
    }
  `
});
