/**
 * Bio component
 */
import React from 'react';
import { Link } from 'gatsby';

import Outbound from './outbound';

function Bio () {
  return (
    <div>
      <h2>
        <Link to="/notes">Notes</Link>
      </h2>
      <p>
        by
        {' '}
        <Outbound href="https://twitter.com/shantanuraj">Shantanu Raj</Outbound>
      </p>
    </div>
  );
}

export default Bio;
