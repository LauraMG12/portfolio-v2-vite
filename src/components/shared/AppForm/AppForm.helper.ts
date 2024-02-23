export function capitalize(text: string): string {
  return text[0].toUpperCase() + text.slice(1);
}

export function extractCorporativeName(email: string): string {
  if (email === "" || !email.includes("@")) {
    return "";
  }

  const atPosition = email.indexOf("@");
  const lastDotPosition = email.lastIndexOf(".");
  const corporativeName = email.slice(atPosition + 1, lastDotPosition);
  if (emailDomains.includes(corporativeName)) {
    return "a company";
  }
  return capitalize(corporativeName);
}

const emailDomains = [
  "gmail",
  "hotmail",
  "outlook",
  "yahoo",
  "proton",
  "mailbox",
];
