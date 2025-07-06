import "./styles.css";
import SearchEngine from "./SearchEngine";

export default function App() {
  return (
    <div className="App">
      <h1>Weather App</h1>
      <div>
        <SearchEngine />
      </div>
      <p>
        This project was coded by Katlin Pala and is{" "}
        <a href="https://github.com/Katlin2000/react-app-w4">
          open source on Github
        </a>{" "}
        and{" "}
        <a href="https://react-homework-w4.netlify.app/">hosted on Netlify</a>
      </p>
    </div>
  );
}
