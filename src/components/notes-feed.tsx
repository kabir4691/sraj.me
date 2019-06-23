import React, { memo } from 'react';
import { Link } from 'gatsby';
import { Note } from '../pages/notes';
import { NoteData } from '../type';
import NotesContainer from '../containers/notes-container';

interface INotesFeedProps {
  notes: NoteData[];
}

function NotesFeed({ notes }: INotesFeedProps) {
  return (
    <>
      <h3>
        <Link to="/notes">notes</Link>
      </h3>
      <ul>{notes.map(Note)}</ul>
    </>
  );
}

const MemoizedNotesFeed = memo(NotesFeed);

const NotesFeedWrapper = () => <NotesContainer render={MemoizedNotesFeed} />;

export default NotesFeedWrapper;
