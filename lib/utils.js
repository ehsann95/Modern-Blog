export function formatDate(dateString) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return new Date(dateString).toLocaleDateString('en-US', options);
}

export function getReadingTime(content) {
  // Remove HTML tags
  const plainText = content.replace(/<[^>]+>/g, '');
  
  // Count words (rough estimate)
  const words = plainText.split(/\s+/).length;
  
  // Average reading time (words per minute)
  const wpm = 225;
  
  // Calculate reading time in minutes
  const readingTime = Math.ceil(words / wpm);
  
  return readingTime;
}

export function truncateText(text, length = 150) {
  if (text.length <= length) return text;
  return text.slice(0, length).trim() + '...';
}

export function createSlug(text) {
  return text
    .toLowerCase()
    .replace(/[^\w\s]/g, '')
    .replace(/\s+/g, '-');
}

export function debounce(func, delay) {
  let timeout;
  return function(...args) {
    clearTimeout(timeout);
    timeout = setTimeout(() => func.apply(this, args), delay);
  };
}

export function generatePageTitle(title) {
  return title ? `${title} | Modern Blog` : 'Modern Blog';
}

export function generatePageDescription(description) {
  return description || 'A modern blog built with Next.js featuring minimalist design, user experience insights, and design system guidance.';
}

export function getHumanReadableDate(dateString) {
  const date = new Date(dateString);
  const now = new Date();
  const diff = Math.abs(now - date) / 1000; // Time difference in seconds
  
  const days = Math.floor(diff / 86400);
  
  if (days < 1) {
    return 'Today';
  } else if (days === 1) {
    return 'Yesterday';
  } else if (days < 7) {
    return `${days} days ago`;
  } else if (days < 30) {
    const weeks = Math.floor(days / 7);
    return `${weeks} ${weeks === 1 ? 'week' : 'weeks'} ago`;
  } else {
    return formatDate(dateString);
  }
}
