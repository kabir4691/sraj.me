/**
 * Note's duration info component
 */

import React, { memo } from 'react';
import { formatDate } from '../utils/format-date';
import { formatTimeToRead } from '../utils/format-time-to-read';

interface IDurationInfoProps {
  date: string;
  timeToRead: number;
}

function DurationInfo ({ date, timeToRead }: IDurationInfoProps) {
  return (
    <small>
      {formatDate(date)}
      <strong>{' • '}</strong>
      {formatTimeToRead(timeToRead)}
    </small>
  );
}

export default memo(DurationInfo);
