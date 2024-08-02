export const timeAgo = (timestamp) => {
  const secondsAgo = Math.floor((Date.now() - timestamp * 1000) / 1000);
  let interval = Math.floor(secondsAgo / 31536000);

  if (interval >= 1) {
    return interval + (interval === 1 ? " year" : " years") + " ago";
  }

  interval = Math.floor(secondsAgo / 2592000);
  if (interval >= 1) {
    return interval + (interval === 1 ? " month" : " months") + " ago";
  }

  interval = Math.floor(secondsAgo / 86400);
  if (interval >= 1) {
    return interval + (interval === 1 ? " day" : " days") + " ago";
  }

  interval = Math.floor(secondsAgo / 3600);
  if (interval >= 1) {
    return interval + (interval === 1 ? " hour" : " hours") + " ago";
  }

  interval = Math.floor(secondsAgo / 60);
  if (interval >= 1) {
    return interval + (interval === 1 ? " minute" : " minutes") + " ago";
  }

  return (
    Math.floor(secondsAgo) +
    (secondsAgo === 1 ? " second" : " seconds") +
    " ago"
  );
};
