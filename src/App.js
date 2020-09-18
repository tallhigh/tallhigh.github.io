import React from 'react';
import './app.css';

function App() {
    return (
        <React.Fragment>
            <header>

            </header>
            <main>
              <div className="container">
                  <img className="photo" src="/assets/img/talha_turhan_cmp.jpg" alt="Talha Turhan"/>
                  <h1 className="name">Talha Turhan</h1>
                  <div className="job-info">
                      <span className="position">Frontend Developer</span>
                      <a className="company" href="//defacto.com.tr" target="_blank" rel="nofollow">@DeFacto</a>
                  </div>
                  <div className="links">
                      <a href="//github.com/tallhigh" className="github"></a>
                      <a href="//linkedin.com/in/talhaturhan" className="linkedin"></a>
                      <a href="//twitter.com/tallhighs" className="twitter"></a>
                      <a href="mailto:info@talhaturhan.com" className="email"></a>
                  </div>
              </div>
            </main>
        </React.Fragment>
    );
}

export default App;
