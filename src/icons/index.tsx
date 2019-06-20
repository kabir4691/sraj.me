import { Sun } from './sun';
import { Night } from './night';

/**
 * Icon wrapper
 */

const Icons = {
  sun: Sun,
  night: Night,
}

interface IIconProps {
  type: keyof typeof Icons
  color?: string
  size?: string | number
}

export const Icon = ({ type, color, size }: IIconProps) => {
  const Comp = Icons[type];
  return (
    <div style={{
      fill: color,
      height: size,
      width: size,
      minHeight: size,
      minWidth: size,
      display: 'flex',
    }}>
      <Comp />
    </div>
  )
}
