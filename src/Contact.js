import React from 'react';
import { Github, Linkedin, Twitter } from 'react-bootstrap-icons';

function Contact() {
  return (
    <div>
      <main class="container-sm container-main">
        <header>
          <h1 class="page-title">contact</h1>
        </header>
        
        <div class="container-fluid mt-5" id="contact-icons">
          <div class="row">
            <div class="col text-center">
              <a href="https://github.com/ColeBallard" class="text-white" target="_blank">
                <Github class="bi bi-github" style={{ fontSize: "2rem" }}></Github>
              </a>
            </div>
            <div class="col text-center">
              <a href="https://www.linkedin.com/in/cole-ballard/" class="text-white" target="_blank">
                <Linkedin class="bi bi-linkedin" style={{ fontSize: "2rem" }}></Linkedin>
              </a>
            </div>
            <div class="col text-center">
              <a href="https://twitter.com/colebdev0" class="text-white" target="_blank">
                <Twitter class="bi bi-twitter" style={{ fontSize: "2rem" }}></Twitter>
              </a>
            </div>
          </div>     
        </div>
      </main>
    </div>
  );
}

export default Contact;
