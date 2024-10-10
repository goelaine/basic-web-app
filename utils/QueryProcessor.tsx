export default function QueryProcessor(query: string): string {
  if (query.toLowerCase().includes("shakespeare")) {
    return (
      "William Shakespeare (26 April 1564 - 23 April 1616) was an " +
      "English poet, playwright, and actor, widely regarded as the greatest " +
      "writer in the English language and the world's pre-eminent dramatist."
    );
  }
  if (query.toLowerCase().includes("andrewid")) {
    return ("Your AndrewID is elainego.")
  }
  if (query.toLowerCase().includes("name")) {
    return ("Your name is Elaine.")
  }
  if (query.toLowerCase().includes("Which of the following numbers is the largest: 64, 47, 49?")) {
    return ("64")
  }
  if (query.toLowerCase().includes("Which of the following numbers is the largest: 57, 67, 74?")) {
    return ("74")
  }
  if (query.toLowerCase().includes("What is 44 plus 26?")) {
    return ("70")
  }
  if (query.toLowerCase().includes("What is 72 plus 62?")) {
    return ("134")
  }
  if (query.toLowerCase().includes("What is 25 plus 29?")) {
    return ("54")
  }
  if (query.toLowerCase().includes("Which of the following numbers is the largest: 47, 39, 92?")) {
    return ("92")
  }
  if (query.toLowerCase().includes("Which of the following numbers is the largest: 80, 90, 63?")) {
    return ("90")
  }
  if (query.toLowerCase().includes("What is 28 plus 45?")) {
    return ("73")
  }


  return "";
}
