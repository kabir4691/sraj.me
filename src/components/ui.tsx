/**
 * Common UI components
 */

import styled from '@emotion/styled';

export const Split = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: 960px) {
    flex-direction: row;
  }
`;

export const Pane = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
`;
