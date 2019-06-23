/**
 * Notes container
 */

import React, { memo } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { MarkdownQueryList, NoteQuery } from '../type';

type NoteProvision = { notes: NoteQuery[] };
interface INotesContainerProps {
  render: (data: NoteProvision) => React.ReactElement;
}

function NotesContainer({ render: Component }: INotesContainerProps) {
  const data: MarkdownQueryList = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: {fields: [frontmatter___date], order: DESC}, limit: 1000) {
        edges {
          node {
            timeToRead
            frontmatter {
              path
              title
              date
            }
          }
        }
      }
    }
  `);

  const notes = selectNotes(data);

  return (
    <Component notes={notes} />
  );
}

const selectNotes = (data: MarkdownQueryList) =>
  data.allMarkdownRemark.edges.map(e => e.node);

export default memo(NotesContainer);
