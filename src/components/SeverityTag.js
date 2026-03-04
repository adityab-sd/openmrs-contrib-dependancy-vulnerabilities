function SeverityTag({ severity }) {
  //Transform severity to upperCase, since json data has severity label in uppercase
  const normalized = (severity || "LOW").toUpperCase();
  return (
    <span className={`pill ${normalized}`}>
      {normalized}
    </span>
  );
}