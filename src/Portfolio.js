import React from 'react';
import quiz from './images/javascript-coding-quiz.png';
import weather from './images/weather-dashboard.png';
import game from './images/game-finder.png';
import readme from './images/basic-readme-generator.png';
import { Github, Link45deg } from 'react-bootstrap-icons';

function Portfolio() {
  return (
    <div>
      <main class="container-fluid container-main" id="container-portfolio">
        <header>
          <h1 class="page-title">portfolio</h1>
        </header>
        <div class="row">      
          <div class="col-md text-center">
            <figure class="figure portfolio-figure">
              <img src={quiz} alt="webpage that has a button on the top left to view high scores, a timer with 3 minutes in the top right, and an introduction message with a start quiz button" class="figure-img img-fluid portfolio-thumb" />
              <div class="portfolio-overlay">
                <a href="https://github.com/ColeBallard/javascript-coding-quiz" target="_blank" rel="noreferrer">
                  <Github class="bi bi-github"></Github>
                </a>
                <a href="https://coleb.io/javascript-coding-quiz/" target="_blank" rel="noreferrer">
                  <Link45deg class="bi bi-link-45deg"></Link45deg>
                </a>
              </div>
            </figure>
          </div>
          <div class="col-md text-center">
            <figure class="figure portfolio-figure">
              <img src={weather} alt="app that is displaying the current weather and a 5-day forecast of Tokyo, Japan" class="figure-img img-fluid portfolio-thumb" />
              <div class="portfolio-overlay">
                <a href="https://github.com/ColeBallard/weather-dashboard" target="_blank" rel="noreferrer">
                  <Github class="bi bi-github"></Github>
                </a>
                <a href="https://coleb.io/weather-dashboard/" target="_blank" rel="noreferrer">
                  <Link45deg class="bi bi-link-45deg"></Link45deg>
                </a>
              </div>
            </figure>
          </div>
        </div>
        <div class="row">
          <div class="col-md text-center">
            <figure class="figure portfolio-figure">
              <img src={game} alt="webpage that is displaying the game 'Serious Sam Fusion 2017' with a youtube video of its gameplay and some info on it below" class="figure-img img-fluid portfolio-thumb" />
              <div class="portfolio-overlay">
                <a href="https://github.com/danbushong/gameFinder" target="_blank" rel="noreferrer">
                  <Github class="bi bi-github"></Github>
                </a>
                <a href="https://danbushong.github.io/gameFinder/" target="_blank" rel="noreferrer">
                  <Link45deg class="bi bi-link-45deg"></Link45deg>
                </a>
              </div>
            </figure>
          </div>
        </div>
        <div class="row">      
          <div class="col-md text-center">
            <figure class="figure portfolio-figure">
              <img src={readme} alt="command line prompts that ask for details to README in mac terminal" class="figure-img img-fluid portfolio-thumb" />
              <div class="portfolio-overlay">
                <a href="https://github.com/ColeBallard/basic-readme-generator" target="_blank" rel="noreferrer">
                  <Github class="bi bi-github"></Github>
                </a>
                <a href="https://www.npmjs.com/package/basic-readme-generator" target="_blank" rel="noreferrer">
                  <Link45deg class="bi bi-link-45deg"></Link45deg>
                </a>
              </div>
            </figure>
          </div>
        </div>
      </main>
    </div>
  );
}

export default Portfolio;
