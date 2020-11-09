import logo from './logo.svg';
import './App.css';
import androidDownload from './images/google-play-badge.png'
import appleDownload from './images/app-store-badge.png'
import beerGif from './images/BeerLoading.gif'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1 className="Title">Smashed</h1>
        <h3 className="UnderTitle">The last drinking app you will ever need</h3>
        <div className="downloads">
        <a href="https://play.google.com/store/apps/details?id=com.idupont.smashed"><img src={androidDownload} className="Android-download-badge" alt="android-download-badge" /></a>
        <a href="https://www.google.com/"><img src={appleDownload} className="Apple-download-badge" alt="apple-download-badge" /></a>
        </div>
        <div>
        <a href="https://i.pinimg.com/originals/cd/c0/80/cdc080b56fd1249b96d5edb7b2c43d5e.gif"><img src={beerGif} className="BeerGif" alt="beer-factory-gif" /></a>
        </div>
      </header>
      <div>
        <h1>Policies</h1>
        <h2>Privacy Policy</h2>
        <p>text...</p>
        <h2>App Usage</h2>
        <p>text...</p>
      </div>
    </div>
  );
}

export default App;