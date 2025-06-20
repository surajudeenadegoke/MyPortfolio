import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Education = () => {
  return (
    <div style={{ marginTop: "100px", marginBottom: "200px" }}>
      <h1 style={{ height: "100vh", marginTop: "20px" }}>
        <VerticalTimeline lineColor="black">
          <VerticalTimelineElement
            className="vertical-timeline--education"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="January 2017 - November 2019"
            iconStyle={{ backgroundColor: "black", color: "white" }}
            icon={<SchoolIcon />}
          >
            <h4
              className="vertical-timeline-element-subtitle"
              id="vertical-timeline"
            >
              University of Benin
            </h4>
            <p>Master of Science (Computer Science) [CWA:69.8%]</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline--work"
            contentStyle={{
              background: "rgb(33, 150, 243)",
              color: "black",
            }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="January 2009 - November 2016"
            iconStyle={{ backgroundColor: "black", color: "white" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-subtitle">
              University of Benin
            </h4>
            <p>Bachelor of Science (Computer Science) [CGPA:4.26]</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="November 1996 - November 1998"
            iconStyle={{ backgroundColor: "black", color: "white" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-subtitle">
              The Federal Polytechnic, Ede
            </h4>
            <p>National Diploma (Electrical and Electronics Engineering) [Upper Credit]</p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </h1>
    </div>
  );
};

export default Education;
