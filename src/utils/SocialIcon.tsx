import React from 'react';
import { IconContext } from 'react-icons';

type IconProps = {
  color?: string;
  className: string;
};

type Props = {
  iconProps: IconProps;
  children: React.ReactNode;
};

export const SocialIcon: React.FC<Props> = ({
  iconProps = { color: 'white', className: 'class' },
  children,
}) => <IconContext.Provider value={iconProps}>{children}</IconContext.Provider>;
