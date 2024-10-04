import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import arrow1 from "../assets/img/arrow1.svg";
import arrow2 from "../assets/img/arrow2.svg";
import colorSharp from "../assets/img/Skills-Back.jpg";
import GaugeChart from 'react-gauge-chart';

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 3 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 }
  };

  const skillsData = [
    { title: 'Languages & Frameworks', description: 'Java: Core, Servlet, Spring Boot, Hibernate; .NET: ASP.NET, ADO.NET', percent: 0.92 },
    { title: 'Frontend', description: 'React, HTML5, CSS, Bootstrap, JavaScript, jQuery', percent: 0.86 },
    { title: 'Backend', description: 'MySQL, MongoDB', percent: 0.93 },
    { title: 'Testing & Tools', description: 'Postman, Jira, Selenium WebDriver', percent: 0.84 },
    { title: 'Content Writing', description: 'SEO-friendly articles, educational materials', percent: 0.94 },
    { title: 'Project Management and Team Delegation', description: '', percent: 0.87 },
    { title: 'Classroom Teaching and Management', description: '', percent: 0.92 }
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p>
                As a dynamic Full Stack Developer, I blend artistry and technology to craft seamless web experiences. 
                With a robust command of both frontend and backend technologies, combined with my analytical thinking 
                from a background in Applied Physics and a talent for clear communication honed through content writing. 
                My expertise encompasses a vibrant spectrum of skills, including:
              </p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {skillsData.map((skill, index) => (
                  <div className="item" key={index}>
                    <GaugeChart 
                      id={`gauge-chart-${index}`} 
                      nrOfLevels={30} 
                      percent={skill.percent} 
                      colors={["#fff", "#2901dc"]} 
                    />
                    <h5>{skill.title}-</h5>
                    <h6>{skill.description}</h6>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="A decorative background" />
    </section>
  );
}
