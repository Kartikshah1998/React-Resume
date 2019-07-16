import React, {Component} from 'react';
import './Simple.css';
// import printJS from 'print-js';
class Simple extends Component {
  componentDidMount() {
const key = this.props.match? this.props.match.params ?this.props.match.params.action:'':'';
    switch (key) {
      case 'print':
      window.print();
        break;

      default:
        break;
    }
  }

  render() {
    try{
      return (
        <div className="Simple" id="top">
          <div id="cv" className="instaFade">
            <div className="mainDetails">
              <div id="headshot" className="quickFade"></div>
  
              <div id="name">
                <h1 className="quickFade delayTwo">{this.props.cv.fname}</h1>
                <h2 className="quickFade delayThree">{this.props.cv.jobTitle}</h2>
              </div>
  
              <div id="contactDetails" className="quickFade delayFour">
                <ul>
                  <li>e:
                    <a >{this.props.cv.email}</a>
                  </li>
                  <li>m: {this.props.cv.phone}</li>
                </ul>
              </div>
              <div className="clear"></div>
            </div>
  
            <div id="mainArea" className="quickFade delayFive">
              <section>
                <article>
                  <div className="sectionTitle">
                    <h1>Personal Profile</h1>
                  </div>
  
                  <div className="sectionContent">
                    <p>{this.props.cv.profile}</p>
                  </div>
                </article>
                <div className="clear"></div>
              </section>
  
              <section>
                <div className="sectionTitle">
                  <h1>Work Experience</h1>
                </div>
  
                <div className="sectionContent">
                  {this
                    .props
                    .cv
                    .workEx
                    .map((w) => (
                      <article key={w.jobTitle}>
                        <h2>{w.jobTitle}</h2>
                        <p className="subDetails">{w.from}-{w.to}</p>
                        <p>{w.description}</p>
                      </article>
                    ))}
                </div>
                <div className="clear"></div>
              </section>
  
              <section>
                <div className="sectionTitle">
                  <h1>Key Skills</h1>
                </div>
  
                <div className="sectionContent">
                  <ul className="keySkill">
                    {this
                      .props
                      .cv
                      .keySkill
                      .map((k) => (
                        <li key={k.skill}>{k.skill}</li>
                      ))}
                  </ul>
                </div>
                <div className="clear"></div>
              </section>
  
              <section>
                <div className="sectionTitle">
                  <h1>Education</h1>
                </div>
  
                <div className="sectionContent">
                  {this
                    .props
                    .cv
                    .edu
                    .map((e) => (
                      <article key={e.institute}>
                        <h2>{e.institute}</h2>
                        <p className="subDetails">{e.from}-{e.to}</p>
                        <p>{e.description}</p>
                      </article>
                    ))}
                </div>
                <div className="clear"></div>
              </section>
  
            </div>
          </div>
        </div>
      );
    }catch(e){
return (
  <h3>Waiting for data...</h3>
);
    }

  }
}

export default Simple;
