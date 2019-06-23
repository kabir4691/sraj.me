import React, { memo } from 'react';
import { Link } from 'gatsby';
import { NoteData, NoteQuery } from '../type';
import NotesContainer from '../containers/notes-container';

interface INotesFeedProps {
  notes: NoteQuery[];
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

function Note({ frontmatter: { path, title } }: NoteQuery) {
  return (
    <li key={path}>
      <Link to={path}>{title}</Link>
    </li>
  );
}

const MemoizedNotesFeed = memo(NotesFeed);

const NotesFeedWrapper = () => <NotesContainer render={MemoizedNotesFeed} />;

export default NotesFeedWrapper;
