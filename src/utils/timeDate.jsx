export const timeDate = (eventDate) => {
  const date = new Date(eventDate);

  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "Asia/Kolkata"
  }).replace(/,/g, "");

  const formattedTime = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "2-digit",   // ← was "numeric"
    second: "2-digit",   // ← was "numeric"
    hour12: true
  });

  return `${formattedDate} at ${formattedTime} IST`; // ← add "at"
};
