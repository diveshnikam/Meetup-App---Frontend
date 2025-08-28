export const formatDateTime = (eventDate) => {
  const date = new Date(eventDate);

  // Format date
  const formattedDate = date.toLocaleDateString("en-US", {
    weekday: "short",   // full day name
    year: "numeric",
    month: "short",     // full month name
    day: "numeric",
    timeZone: "Asia/Kolkata" // force IST
  }).replace(/,/g, "");

  // Format time
  const formattedTime = date.toLocaleTimeString("en-US", {
    timeZone: "Asia/Kolkata",
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
    hour12: true,      // show AM/PM
    
  });

  
  return `${formattedDate} ${formattedTime} IST`;
};
