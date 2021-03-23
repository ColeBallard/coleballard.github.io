import React from 'react';
import colorado from './images/colorado.jpg';
import myself from './images/myself.JPG';

function Home() {
  return (
    <div>
      <figure class="figure top-element">
        <img src={colorado} class="figure-img img-fluid" alt="somewhere in colorado of a lake with a backdrop of mountains on a mildly cloudy day" />
        <figcaption class="figure-caption text-center text-italic text-small">Colorado (August 28, 2018)</figcaption>
      </figure>

      <main class="container-main" id="container-home">
        <div>
          <img src={myself} id="about-me-pic" alt="me, standing on top of a mountain in Phoenix, Arizona, as the sun sets" />
          <h1>About Me</h1>
          <p>I grew up in a small town 30 minutes northeast of Austin, TX called Hutto, falling in love with computers at a young age and learning HTML and CSS in school when I was 14. I took all the computer science classes my school had to offer, and competed on the CS UIL team for my high school.</p>
          <p>After high school, my initial plan was to get a bachelors degree in math, with a minor in computer science, but after 2 semesters at Texas State University, I dropped out. Leading up to that point in my life, I had never lived outside of the town I grew up in, and it became my immediate goal to spend my youth travelling - experiencing the world outside the tiny snow globe where everything important and meaningful ever happened to me. So I bought a van.</p>
          <p>I spent the next 2 years travelling to different parts of the US for no more than a few months at a time. I lived in many parts of north and south California, Phoenix AZ, Denver CO, Portland OR, visited the Grand Canyon, and spent a few weeks in Malibu on the beach with only a flip phone. Throughout my time on the road, I would work on personal projects - mostly android apps - and study whatever science-related topic interested me at the time, which was mostly math, neurology, and  artificial intelligence.</p>
          <p>I learned a lot over the past few years and unequivocally don't regret any of it. Now, I've come to the point where I'm ready to take my career more seriously and get a job as a software developer to secure my future.</p>
        </div>
      </main>
    </div>
  );
}

export default Home;
