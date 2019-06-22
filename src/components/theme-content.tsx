/**
 * Theme related content
 */

import React, { memo } from 'react';
import Helmet from 'react-helmet';
import { Global, css } from '@emotion/core';

import Themed, { ThemeProvision } from '../containers/themed';

function ThemeContent ({ theme }: Pick<ThemeProvision, 'theme'>) {
  const style = css`
    html,
    body {
      background: ${theme.background};
      display: flex;
      flex-direction: column;
      color: ${theme.text};
    }

    body {
      border: 24px solid ${theme.accent};
      overflow: scroll;
    }

    a {
      color: ${theme.text};
    }

    .sh-icon svg {
      fill: ${theme.accent};
    }
  `;

  return (
    <>
      <Helmet
        meta={[
          {
            name: 'theme-color',
            content: theme.accent,
          },
        ]}
      />
      <Global styles={style} />
    </>
  );
}

const MemoizedThemeContent = memo(ThemeContent);

const ThemeContentContainer = () => <Themed render={MemoizedThemeContent} props={['theme']} />;

export default ThemeContentContainer;
