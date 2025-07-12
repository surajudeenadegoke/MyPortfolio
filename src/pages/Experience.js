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
    <div style={{ marginTop: "100px", marginBottom: "150px" }}>
      <VerticalTimeline>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{
            background: "rgb(33, 150, 243)",
            color: "black",
            fontSize: "0.9rem",
          }}
          contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
          date="March 2024 - till date"
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
          <h4 className="vertical-timeline-element-subtitle">Benin City</h4>
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
              <li>
                {" "}
                Maintained and improved websites to enhance user experience and
                performance.
              </li>
              <li>Optimized applications for maximum speed </li>
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
          date="March 2021 - November 2022"
          iconStyle={{
            background: "rgb(233,30,99",
            color: "#fff",
            fontSize: "0.9rem",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">Software Engineer</h3>
          <h4 className="vertical-timeline-element-subtitle">
            Decagon, Edo-Tech Park, Benin City
          </h4>
          <div style={style}>
            <ul>
              <li> Contributed to building various projects</li>
              <li>
                {" "}
                Developed high performance application by writing testable,
                reusable, and efficient code
              </li>
              <li>
                Built and deployed several projects with Node.js and React
                framework.
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
          date="January 2020 - February 2021"
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
            Kurama Tech. Media
          </h4>
          <div style={style}>
            <ul>
              <li>
                Contributed to creating responsive user-friendly web pages
              </li>
              <li>
                {" "}
                Maintained and improved websites to enhance user experience and
                performance.
              </li>
              <li>Optimized applications for maximum speed </li>
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
          date="November 2016 - December 2019"
          iconStyle={{
            background: "rgb(233,30,99",
            color: "#fff",
            fontSize: "0.9rem",
          }}
          icon={<WorkIcon />}
        >
          <h3 className="vertical-timeline-element-title">
            Centralized System Operation Officer
          </h3>
          <h4 className="vertical-timeline-element-subtitle">
            Benin Electricity Distribution Company, Benin City
          </h4>
          <div style={style}>
            <ul>
              <li> Network Coordination</li>
              <li> Data Analysis</li>
              <li> Load Forecast</li>
            </ul>
          </div>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Experience;
