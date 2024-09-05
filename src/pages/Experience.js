import React from "react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import WorkIcon from "@material-ui/icons/Work";

const Experience = () => {
  const style = { marginTop: "10px" };
  return (
    <div style={{marginTop:"100px", marginBottom:"150px"}}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "black",
            fontSize: "0.9rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="January 2024 - till date"
          iconStyle={{
            background: "rgb(233, 30, 99)",
            color: "#fff",
            fontSize: "0.9rem",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Freelance Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">Lagos</h4>
          <div style={style}>
            <ul>
              <li>Creating Custom Software</li>
              <li>
                Maintaining Clients Websites and Upgrading Software Products
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="November 2022 - January 2024"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            fontSize: "0.9rem",
            
          }}
        
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Frontend Developer(Remote)
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Zuri Health, Kenya
          </h4>
          <div style={style}>
            <ul>
              <li>
                Contributed to creating responsive user-friendly web pages
              </li>
              <li>Contributed to optimize code base</li>
            </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          date="March 2021 - November 2022"
          iconStyle={{
            background: "rgb(233, 30, 99)",
            color: "#fff",
            fontSize: "0.9rem",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
             Software Engineer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            AeroTech Innovations, Benin
          </h4>
          <div style={style}>
            <ul>
              <li>Contributed to building various projects</li>
              <li>
                Developed high performance application by writing testable,
                reusable, and efficient code
              </li>
              <li>
                Experienced code optimization and writing test cases using jest
                and supertest framework
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "black",
            fontSize: "0.9rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="January 2019 - February 2021"
          iconStyle={{
            background: "rgb(33, 150, 243)",
            color: "#fff",
            fontSize: "0.9rem",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Junior Software Developer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Kurama Tech Media, Lagos
          </h4>
          <div style={style}>
            <ul>
              <li>
                {" "}
                Collaborated with backend developers and DevOps to build
                software products
              </li>
              <li>
                {" "}
                Provided technical assistance, and translating business
                requirements into technical requirements.
              </li>
            </ul>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
