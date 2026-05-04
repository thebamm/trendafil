import { clsx } from "clsx";
import { twMerge } from "tailwind-merge"

export function cn(...inputs) {
  return twMerge(clsx(inputs));
}

const days = [
  "недела",
  "понеделник",
  "вторник",
  "среда",
  "четврток",
  "петок",
  "сабота"
];

const months = [
  "јануари",
  "февруари",
  "март",
  "април",
  "мај",
  "јуни",
  "јули",
  "август",
  "септември",
  "октомври",
  "ноември",
  "декември"
];

export function formatMacedonianDate(date = new Date()) {
  const weekday = days[date.getDay()];
  const day = date.getDate();
  const month = months[date.getMonth()];
  const year = date.getFullYear();

  return `${weekday}, ${day} ${month} ${year}`;
}

export function getPostUrl(post) {
  const date = new Date(post.publishedAt)
  const year = date.getFullYear()
  const month = String(date.getMonth() + 1).padStart(2, '0')
  const day = String(date.getDate()).padStart(2, '0')
  const category = post.category?.slug?.current ?? 'uncategorized'

  return `/sections/${category}/${year}/${month}/${day}/${post.slug.current}`
}

export function getReadTime(body) {
  if (!body) return 0

  // Extract all text from Sanity's block content
  const text = body
    .filter((block) => block._type === 'block')
    .map((block) => block.children.map((child) => child.text).join(''))
    .join(' ')

  const wordsPerMinute = 200
  const words = text.trim().split(/\s+/).length
  const minutes = Math.ceil(words / wordsPerMinute)

  return minutes
}
