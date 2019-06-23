import React, { memo } from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'gatsby';

import { NoteData, NoteQuery } from '../type';
import NotesContainer from '../containers/notes-container';
import Layout from '../components/layout';
import DurationInfo from '../components/duration-info';

interface INotesProps {
  notes: NoteQuery[];
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

function Note({
  timeToRead,
  frontmatter: { title, path, date, spoiler }
}: NoteQuery) {
  return (
    <li key={path}>
      <h2>
        <Link to={path}>{title}</Link>
      </h2>
      <DurationInfo date={date} timeToRead={timeToRead} />
      <p>{spoiler}</p>
    </li>
  );
}

const MemoizedNotes = memo(Notes);

const NotesWrapper = () => (
  <NotesContainer render={MemoizedNotes} />
);

export default NotesWrapper;
