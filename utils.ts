import { getCollection } from 'astro:content';
import type { CollectionEntry } from 'astro:content';

function formatDate(date: Date): string {
  const options: Intl.DateTimeFormatOptions = {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  };

  return new Date(date).toLocaleDateString(undefined, options);
}

function buildTOC(headings: any) {
  const toc = [];
  const parentHeadings = new Map();
  headings.forEach((h: any) => {
    const heading = { ...h, subheadings: [] };
    parentHeadings.set(heading.depth, heading);

    if (heading.depth === 2) {
      toc.push(heading);
    } else {
      parentHeadings.get(heading.depth - 1).subheadings.push(heading);
    }
  });
  return toc;
}

let allArticles: CollectionEntry<'articles'>[] | null = null;

async function fetchAllArticles(): Promise<CollectionEntry<'articles'>[]> {
  if (!allArticles) {
    allArticles = await getCollection('articles');
  }
  return allArticles;
}

function capitalizeFirstLetterOfWords(word: string) {
  return word.replace(/\b(\w)/g, (char) => char.toUpperCase());
}

export { formatDate, buildTOC, fetchAllArticles, capitalizeFirstLetterOfWords };
