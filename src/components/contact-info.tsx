import React, { memo } from 'react';
import styled from '@emotion/styled';

import { Icon, IIconProps } from '../icons';
import Outbound from './outbound';
import { ITheme } from '../type';
import Themed, { ThemeProvision } from '../containers/themed';

interface IContactInfo {
  type: IIconProps['type']
  href: string
}

type ContactInfoProps = Pick<ThemeProvision, 'theme'>;

const ContactInfo = function ContactInfo ({ theme }: ContactInfoProps) {
  return (
    <Container>
      {info.map(renderContact(theme))}
    </Container>
  );
};

const Container = styled.ul`
  display: flex;
  flex-direction: column;
  margin: 0;
  list-style: none;
`;

const Text = styled.span`
  margin-left: 16px;
`;

const linkStyle = {
  display: 'flex',
  alignItems: 'center',
};

const info: IContactInfo[] = [
  { type: 'twitter', href: 'https://twitter.com/shantanuraj' },
  { type: 'github', href: 'http://github.com/shantanuraj' },
  { type: 'medium', href: 'https://medium.com/@shantanuraj' },
  { type: 'mail', href: 'mailto:s@sraj.me' },
];

const renderContact = (theme: ITheme) => (item: IContactInfo) => (
  <li key={item.type}>
    <Outbound href={item.href} style={linkStyle}>
      <Icon type={item.type} color={theme.accent} />
      <Text>{item.type}</Text>
    </Outbound>
  </li>
);

const MemoizedContactInfo = memo(ContactInfo);

const ContactInfoContainer = () => <Themed render={MemoizedContactInfo} />;

export default ContactInfoContainer;
