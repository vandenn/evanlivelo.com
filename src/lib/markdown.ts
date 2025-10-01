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

export function getExperienceFiles(): MarkdownFile[] {
  const experienceDir = path.join(process.cwd(), 'content/about/experience');
  const companies = fs.readdirSync(experienceDir);

  const experiences = companies.map(company => {
    const filePath = path.join(experienceDir, company, 'index.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { content, frontmatter: data };
  });

  // Sort by date descending (most recent first)
  return experiences.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || '1970-01');
    const dateB = new Date(b.frontmatter.date || '1970-01');
    return dateB.getTime() - dateA.getTime();
  });
}

export function getEducationFiles(): MarkdownFile[] {
  const educationDir = path.join(process.cwd(), 'content/about/education');
  const schools = fs.readdirSync(educationDir);

  const education = schools.map(school => {
    const filePath = path.join(educationDir, school, 'index.md');
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);
    return { content, frontmatter: data };
  });

  // Sort by date descending (most recent first)
  return education.sort((a, b) => {
    const dateA = new Date(a.frontmatter.date || '1970-01');
    const dateB = new Date(b.frontmatter.date || '1970-01');
    return dateB.getTime() - dateA.getTime();
  });
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
