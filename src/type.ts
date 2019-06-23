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
export interface MarkdownQuery<T> {
  frontmatter: T;
  html: string;
}

/**
 * Frontmatter note data
 */
export interface NoteData {
  date: string;
  path: string;
  title: string;
}

/**
 * Markdown list query
 */
export interface MarkdownQueryList {
  allMarkdownRemark: {
    edges: Array<{ node: { frontmatter: NoteData } }>;
  }
}
