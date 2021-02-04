import scare from '../Assets/Scarecrow.png'

export default function errorPage(): JSX.Element {

    return(
    <div>
      <div className="container">
        <div className="Header-not-found">
          <h1 className="not-found-text">404 NOT FOUND</h1>
        </div>
        <div className="test">
          <div className="imgContainer">
            <img src={scare} alt="If you're seeing this things are really bad." />
          </div>
          <div className="bad-news">
            <h1>I have some bad news for you</h1>
            <p>The page you are looking for might be removed or is temporarily unavailable</p>
            <button className="homeButton">
              <a href="/" className="buttonText">
                Back to Homepage
              </a>
            </button>
          </div>
        </div>
        <footer>
          <a href="/" className="signature">W3lsh</a> @
          <a href="/" className="signature">Devchallenges.io</a>
        </footer>
      </div>
    </div>
    )
}