import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import { NoteData } from '../type';
import { formatDate } from '../utils/format-date';
import NotesContainer from '../containers/notes-container';
import Layout from '../components/layout';

interface INotesProps {
  notes: NoteData[];
}

function Notes({ notes }: INotesProps) {
  return (
    <Layout>
      <Helmet title="Shantanu's Notes" />
      <>
        <h1>Notes</h1>
        <ul>
          {notes.map(Note)}
        </ul>
      </>
    </Layout>
  )
};

function Note({ title, path, date }: NoteData) {
  return (
    <li key={path}>
      <h2>
        <Link to={path}>{title}</Link>
      </h2>
      <small>
        {formatDate(date)}
      </small>
    </li>
  );
}

const MemoizedNotes = memo(Notes);

const NotesWrapper = () => (
  <NotesContainer render={MemoizedNotes} />
);

export default NotesWrapper;
