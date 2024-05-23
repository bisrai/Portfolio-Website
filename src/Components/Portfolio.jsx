/**
 * Portfolio component
 *
 * Highlights some of  your creations. These can be designs, websites,
 * open source contributions, articles you've written and more.
 *
 * This is a great area for you to to continually add to and refine
 * as you continue to learn and create.
 */

import React from "react";

/**
 * Desk image
 *
 * Below is a sample desk image. Feel free to update this to an image of your choice,
 * updating below imageAltText to string that represents what you see in that image.
 *
 * Need an image? Check out https://unsplash.com to download a photo you
 * freely use on your site.
 */
import image from "../images/design-desk.jpg";

const imageAltText = "desktop with books and laptop";

/**
 * Project list
 *
 * An array of objects that will be used to display for your project
 * links section. Below is a sample, update to reflect links you'd like to highlight.
 */
const projectList = [
  {
    title: "Weather-App",
    description:
      "I made this weather project using HTML, CSS, and React. It's basically an application that tells you the weather for any location you want. You just type in the place, and it shows you the current temperature, weather condition, and other details.",
    url: "https://github.com/bisrai/weather-project",
  },
  {
    title: "Tattoo Website",
    description:
      "In this project, I have skillfully used HTML, CSS and JavaScript to create an attractive tattoo website. It includes essential elements such as a contact form, a user-friendly navbar, an elegant header, and a clean footer. This website is also designed to be responsive, which means it looks great on any device you're using.",
    url: "https://github.com/bisrai/TW-Internship/tree/main/Task%202",
  },
  {
    title: "My Resume Site",
    description:
      "Created from Microsoft's resume workshop and deployed to GitHub pages. Includes my experience and design abilities.",
    url: "https://github.com/bisrai/Resume",
  },
  {
    title: "Phone Website",
    description:
      "I made phone website using HTML, CSS, and Bootstrap. You can explore the latest phone models and their awesome features in a super easy and user-friendly way!",
    url: "https://github.com/bisrai/Mobile-Phone-website",
  },
];

const Portfolio = () => {
  return (
    <section className="padding" id="portfolio">
      <h2 style={{ textAlign: "center" }}>Portfolio</h2>
      <div style={{ display: "flex", flexDirection: "row", paddingTop: "3rem" }}>
        <div style={{ maxWidth: "40%", alignSelf: "center" }}>
          <img
            src={image}
            style={{ height: "90%", width: "100%", objectFit: "cover",  }}
            alt={imageAltText}
          />
        </div>
        <div className="container">
          {projectList.map((project) => (
            <div className="box" key={project.title}>
              <a href={project.url} target="_blank" rel="noopener noreferrer">
                <h3 style={{ flexBasis: "40px" }}>{project.title}</h3>
              </a>
              <p className="small">{project.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
