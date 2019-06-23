/**
 * Note's duration info component
 */

import React, { memo } from 'react';
import { formatDate } from '../utils/format-date';

interface IDurationInfoProps {
  date: string;
}

function DurationInfo ({ date }: IDurationInfoProps) {
  return (
    <small>
      {formatDate(date)}
    </small>
  );
}

export default memo(DurationInfo);
