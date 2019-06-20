import React, { memo } from 'react';

type OutboundProps = React.AnchorHTMLAttributes<HTMLAnchorElement>;

/**
 * Oubound link wrapper
 */
const Outbound = ({
  href,
  children,
  ...props
}: OutboundProps) => (
  <a href={href} target="_blank" rel="noopener" {...props}>
    {children}
  </a>
);

export default memo(Outbound);
