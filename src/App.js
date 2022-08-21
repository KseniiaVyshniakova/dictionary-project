import bookmarks from './bookmarks.png';
import './App.css';
import Dictionary from "./Dictionary";

export default function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="App-header d-flex justify-content-center">
          <img src={bookmarks} className="App-logo img-fluid" alt="logo" />
          <h1>Dictionary</h1>
        </div>
        <main>
          <Dictionary defaultKeyword="brave" />
        </main>
        <footer className="App-footer">
          Coded by Kseniia Vyshniakova{" "}
          <a
            href="https://github.com/KseniiaVyshniakova/dictionary-project"
            target="_blank"
            rel="noreferrer"
          >
            open-sourced on GitHub
          </a>
        </footer>
      </div>
    </div>
  );
}


