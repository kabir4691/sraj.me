import React, { memo } from 'react';

/**
 * Oubound link wrapper
 */
const Outbound = ({ href, children }: { href: string, children: React.ReactElement | string }) => (
  <a href={href} target="_blank" rel="noopener">{children}</a>
);

export default memo(Outbound);
