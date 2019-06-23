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
