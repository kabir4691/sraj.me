import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import { NoteData } from '../type';
import NotesContainer from '../containers/notes-container';
import Layout from '../components/layout';

interface INotesProps {
  notes: NoteData[];
}

function Notes({ notes }: INotesProps) {
  return (
    <Layout>
      <Helmet title="Notes" />
      <>
        <h1>Notes</h1>
        {notes.map(Note)}
      </>
    </Layout>
  )
};

export function Note({ title, path }: NoteData) {
  return (
    <li key={path}>
      <Link to={path}>{title}</Link>
    </li>
  );
}

const MemoizedNotes = memo(Notes);

const NotesWrapper = () => (
  <NotesContainer render={MemoizedNotes} />
);

export default NotesWrapper;
