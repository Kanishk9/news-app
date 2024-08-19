//Function to extract date and time from provided string by api
export const extractDateTime = (dateString) => {
    const dateObject = new Date(dateString);

    // Extract the date parts
    const day = String(dateObject.getDate()).padStart(2, "0");
    const month = String(dateObject.getMonth() + 1).padStart(2, "0");
    const year = dateObject.getFullYear();
    const date = `${day}/${month}/${year}`;

    // Extracts the time part
    const time = dateObject
      .toISOString()
      .split("T")[1]
      .split(":")
      .slice(0, 2)
      .join(":");

    return time + ", " + date;
  };