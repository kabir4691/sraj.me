import React from 'react';
import { Link } from 'gatsby';

interface INote {
  title: string;
  link: string;
}

function Notes() {
  return (
    <>
      <h3>
        <Link to="/notes">notes</Link>
      </h3>
      <ul>{notes.map(Note)}</ul>
    </>
  );
}

function Note({ title, link }: INote) {
  return (
    <li key={link}>
      <Link to={link}>{title}</Link>
    </li>
  );
}

const notes: INote[] = [{ title: 'uses', link: '/uses' }];

export default Notes;
