import React from 'react';
import './app.css';

function App() {
    return (
        <React.Fragment>
            <header>

            </header>
            <main>
              <div className="container">
                  <img className="photo" src="/assets/img/talha_turhan.jpg" alt="Talha Turhan"/>
                  <h1 className="name">Talha Turhan</h1>
                  <div className="job-info">
                      <span className="position">Software Developer</span>
                      {/* <a className="company" href="/" target="_blank" rel="nofollow">@</a> */}
                  </div>
                  <div className="links">
                      <a href="//github.com/tallhigh" className="github" target="_blank"></a>
                      <a href="//linkedin.com/in/talhaturhan" className="linkedin" target="_blank"></a>
                      <a href="//twitter.com/_tallhigh" className="twitter" target="_blank"></a>
                      {/* <a href="//tallhigh.eth" className="ethereum" target="_blank"></a> */}
                      <a href="mailto:info@talhaturhan.com" className="fa4 email" target="_blank"></a>
                  </div>
              </div>
            </main>
        </React.Fragment>
    );
}

export default App;
