import { Sun } from './sun';
import { Night } from './night';
import { Mail } from './mail';
import { Medium } from './medium';
import { Github } from './github';
import { Twitter } from './twitter';
import { Bluetooth } from './bluetooth';

/**
 * Icon wrapper
 */

const Icons = {
  sun: Sun,
  night: Night,
  mail: Mail,
  medium: Medium,
  github: Github,
  twitter: Twitter,
  bluetooth: Bluetooth,
};

export interface IIconProps {
  type: keyof typeof Icons;
  color?: string;
  size?: string | number;
}

export const Icon = ({ type, color, size = 24 }: IIconProps) => {
  const Comp = Icons[type];
  return (
    <div
      className="sh-icon"
      style={{
        fill: color,
        height: size,
        width: size,
        minHeight: size,
        minWidth: size,
        display: 'flex',
      }}
    >
      <Comp />
    </div>
  );
};
