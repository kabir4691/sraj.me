/**
 * Theme interface
 */
export interface ITheme {
  theme: 'dark' | 'light' | 'blue';
  background: string;
  accent: string;
  text: string;
}

/**
 * Markdown query result
 */
export interface NoteQuery {
  frontmatter: NoteData;
  html: string;
  timeToRead: number;
}

/**
 * Frontmatter note data
 */
export interface NoteData {
  date: string;
  path: string;
  title: string;
  spoiler: string;
}

/**
 * Markdown list query
 */
export interface MarkdownQueryList {
  allMarkdownRemark: {
    edges: Array<{ node: NoteQuery }>;
  }
}
