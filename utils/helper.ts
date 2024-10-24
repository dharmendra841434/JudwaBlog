export function formatPostDate(createdAt: string): string {
  const postDate = new Date(createdAt);
  const now = new Date();
  const timeDiff = now.getTime() - postDate.getTime();
  const millisecondsInDay = 24 * 60 * 60 * 1000;

  if (timeDiff < millisecondsInDay) {
    // Less than 24 hours ago
    return "just now";
  } else if (timeDiff < 7 * millisecondsInDay) {
    // Less than 7 days ago
    const daysAgo = Math.floor(timeDiff / millisecondsInDay);
    return daysAgo === 1 ? "1 day ago" : `${daysAgo} days ago`;
  } else {
    // Format as "date month_name year"
    const options: Intl.DateTimeFormatOptions = {
      year: "numeric",
      month: "long",
      day: "numeric",
    };
    return postDate.toLocaleDateString("en-US", options);
  }
}
