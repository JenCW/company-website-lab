import React, { useState } from "react";
import navigation from "./navigation";

const App = () => {
  const [currentSection, setCurrentSection] = useState("home");

  const content = {
    home: "Welcome to my Company!",
    history: "Our company was founded in 2000...",
    pastWork: ["Project 1", "Project 2", "Project 3"],
    staff: [
      { name: "John", role: "CEO" },
      { name: "Jane", role: "CFO" },
      { name: "Joe", role: "CTO" },
    ],
    contact: "Contact us at",
    externalLinks: [
      { name: "Google", url: "https://www.google.com" },
      { name: "Facebook", url: "https://www.facebook.com" },
    ],
  };

  const renderSection = () => {
    switch (currentSection) {
      case "home":
        return <p>{content.home}</p>;
      case "history":
        return <p>{content.history} </p>;
      case "pastWork":
        return (
          <ul>
            {content.pastWork.map((work, index) => (
              <li key={index}>{work}</li>
            ))}
          </ul>
        );
      case "staff":
        return (
          <ul>
            {content.staff.map((staff, index) => (
              <li key={index}>
                {staff.name} - {staff.role}
              </li>
            ))}
          </ul>
        );
      case "contact":
        return <p>{content.contact}</p>;
      case "externalLinks":
        return (
          <ul>
            {content.externalLinks.map((link, index) => (
              <li key={index}>
                <a href={link.url}>{link.name}</a>
              </li>
            ))}
          </ul>
        );
      default:
        return <p>Page not found</p>;
    }
  };
  return
  (
  <navigation currentSection={currentSection} setCurrentSection={setCurrentSection}>
  <main>{renderSection()}</main>);
};

export default App;
