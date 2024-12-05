const navigation = ({currentSection, setCurrentSection}) => {
  const links = [
    { name: "Home", section: "home" },
    { name: "History", section: "history" },
    { name: "Past Work", section: "pastWork" },
    { name: "Staff", section: "staff" },
    { name: "Contact", section: "contact" },
    { name: "External Links", section: "externalLinks" },
  ];

  return (
    <nav style={{margin:"20px", }}>
      <ul>
        {links.map((link, index) => (
          <li key={index}>
            <button onClick={() => setCurrentSection(link.section)}>
              {link.name}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
}
export default navigation;