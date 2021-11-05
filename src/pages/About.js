import React from 'react';
import styled from 'styled-components';
import PText from '../components/PText';
import Button from '../components/Button';
import AboutImg from '../assets/images/about-page-img.png';
import AboutInfoItem from '../components/AboutInfoItem';
import ContactBanner from '../components/ContactBanner';

const AboutPageStyles = styled.div`
  padding: 20rem 0 10rem 0;

  .top-section {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 2rem;
  }
  .left {
    flex: 3;
  }
  .right {
    flex: 2;
  }
  .about__subheading {
    font-size: 2.2rem;
    margin-bottom: 2rem;
    span {
      background-color: var(--deep-dark);
      padding: 0.5rem;
      border-radius: 8px;
    }
  }
  .about__heading {
    font-size: 3.6rem;
    margin-bottom: 3rem;
  }
  .about__info {
    margin-bottom: 4rem;
    .para {
      max-width: 100%;
    }
  }
  .right {
    img {
      border: 2px solid var(--gray-1);
    }
  }
  .about__info__items {
    margin-top: 15rem;
  }
  .about__info__item {
    margin-bottom: 10rem;
  }
  .about__info__heading {
    font-size: 3.6rem;
    text-transform: uppercase;
  }
  @media only screen and (max-width: 768px) {
    padding: 10rem 0;
    .top-section {
      flex-direction: column;
      gap: 5rem;
    }
    .about__subheading {
      font-size: 1.8rem;
    }
    .about__heading {
      font-size: 2.8rem;
    }
    .about__info__heading {
      font-size: 3rem;
    }
  }
`;

export default function About() {
  return (
    <>
      <AboutPageStyles>
        <div className="container">
          <div className="top-section">
            <div className="left">
              <p className="about__subheading">
                Hi, I am <span>Aryan Sridharala</span>
              </p>
              <h2 className="about__heading">Student at Bennett University</h2>
              <div className="about__info">
                <PText>
                  A passionate and collaborative computer science student. I
                  believe my strengths are communication, critical thinking and
                  providing creative solutions, I am also very eager to learn
                  new things. Even though I'm a fresher, I assure you that I
                  will give my best so that I can contribute as much as I can
                  towards the growth and welfare of this great organisation.
                  <br />
                  <br />
                  My vision is to make the world a better place. Now almost
                  everything is becoming better than ever. It is time for us to
                  create more good stuff that helps the world to become a better
                  place.
                </PText>
              </div>
              <Button
                btnText="Download CV"
                btnLink={'../assets/data/resume.pdf'.default}
              />
            </div>
            <div className="right">
              <img src={AboutImg} alt="me" />
            </div>
          </div>
          <div className="about__info__items">
            <div className="about__info__item">
              <h1 className="about__info__heading">Education</h1>

              <AboutInfoItem
                title="BTech, CSE"
                items={['Bennett University (2019-2023), current CGPA 7.4']}
              />
              <AboutInfoItem
                title="Intermediate, MPC"
                items={[
                  'Sri Chaiatanya junior college (2017-2019), CGPA: 9.3/10',
                ]}
              />
              <AboutInfoItem
                title="Class X"
                items={['CBSE, Dr.K.K.R Gowtham School, CGPA 10']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">My Skills</h1>

              <AboutInfoItem title="Skills" items={['Azure', 'AWS']} />
              <AboutInfoItem
                title="Languages"
                items={['Python', 'MySQL', 'C++']}
              />
            </div>
            <div className="about__info__item">
              <h1 className="about__info__heading">Certifactions</h1>

              <AboutInfoItem
                title="AZ-104"
                items={['Microsoft Azure Administrator Associate']}
              />
              <AboutInfoItem
                title="AI-900"
                items={['Microsoft Azure AI fundamentals']}
              />
              <AboutInfoItem
                title="DP-900"
                items={['Microsoft Azure Data Fundamentals']}
              />
              <AboutInfoItem
                title="AZ-900"
                items={['Microsoft Azure Fundamentals']}
              />
            </div>
          </div>
        </div>
        <ContactBanner />
      </AboutPageStyles>
    </>
  );
}
