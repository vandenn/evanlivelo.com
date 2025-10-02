import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

export interface MarkdownFile {
  content: string;
  frontmatter: Record<string, any>;
}

export function getMarkdownContent(filePath: string): MarkdownFile {
  const fullPath = path.join(process.cwd(), filePath);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const { data, content } = matter(fileContents);

  return {
    content,
    frontmatter: data,
  };
}

export function getProjectFiles(): MarkdownFile[] {
  const projectsDir = path.join(process.cwd(), 'content/projects/projects');
  const projects = fs.readdirSync(projectsDir);

  const projectList = projects.map(project => {
    const filePath = path.join(projectsDir, project, 'index.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Resolve image path to public directory if it exists
    if (data.image && data.image.startsWith('./')) {
      data.image = `/images/projects/projects/${project}/${data.image.substring(2)}`;
    }

    return { content, frontmatter: data };
  });

  // Sort by date descending (most recent first)
  return projectList.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || '1970-01');
    const dateB = new Date(b.frontmatter.date || '1970-01');
    return dateB.getTime() - dateA.getTime();
  });
}

export function getPublicationFiles(): MarkdownFile[] {
  const publicationsDir = path.join(process.cwd(), 'content/projects/publications');
  const publications = fs.readdirSync(publicationsDir);

  const publicationList = publications.map(publication => {
    const filePath = path.join(publicationsDir, publication, 'index.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { content, frontmatter: data };
  });

  // Sort by date descending (most recent first)
  return publicationList.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || '1970-01');
    const dateB = new Date(b.frontmatter.date || '1970-01');
    return dateB.getTime() - dateA.getTime();
  });
}

export function getBlogFiles(): MarkdownFile[] {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const files = fs.readdirSync(blogDir).filter(file => file.endsWith('.md'));

  const blogList = files.map(file => {
    const filePath = path.join(blogDir, file);
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    // Extract date and slug from filename (yyyy-mm-dd-slug.md)
    const match = file.match(/^(\d{4})-(\d{2})-(\d{2})-(.+)\.md$/);
    if (match) {
      const [, year, month, day, slug] = match;
      data.date = data.date || `${year}-${month}-${day}`;
      data.year = year;
      data.month = month;
      data.day = day;
      data.slug = slug;
    }

    return { content, frontmatter: data };
  });

  // Sort by date descending (most recent first)
  return blogList.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || '1970-01');
    const dateB = new Date(b.frontmatter.date || '1970-01');
    return dateB.getTime() - dateA.getTime();
  });
}

export function getBlogPost(year: string, month: string, day: string, slug: string): MarkdownFile | null {
  const blogDir = path.join(process.cwd(), 'content/blog');
  const filename = `${year}-${month}-${day}-${slug}.md`;
  const filePath = path.join(blogDir, filename);

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    data.date = data.date || `${year}-${month}-${day}`;
    data.year = year;
    data.month = month;
    data.day = day;
    data.slug = slug;

    return { content, frontmatter: data };
  } catch {
    return null;
  }
}
