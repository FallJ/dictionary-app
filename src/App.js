import "./App.css";
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <header className="App-header"></header>
        <main>
          <Dictionary defaultKeyword="phantom" />
        </main>
        <footer className="App-footer">
          <a
            href="https://github.com/FallJ/dictionary-app"
            target="_blank"
            rel="noreferrer"
          >
            {" "}
            Coded
          </a>{" "}
          by Julie Fallan
        </footer>
      </div>
    </div>
  );
}
