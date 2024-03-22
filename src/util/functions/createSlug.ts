const createSlug = (title: string): string => {
  // Convert the title to lowercase and trim whitespace
  const normalizedTitle = title.toLowerCase().trim();

  // Replace spaces and special characters with hyphens
  const slug = normalizedTitle.replace(/[\s\W-]+/g, '-');

  // Generate a unique ID. Here, we're using a timestamp for simplicity,
  // but you might want to use a more robust method in production.
  const uniqueId = Date.now().toString();

  // Concatenate the slug and the unique ID
  return `${slug}-${uniqueId}`;
};

export default createSlug;
