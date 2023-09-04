import React from "react";
import SchoolIcon from "@material-ui/icons/School";
import WorkIcon from "@material-ui/icons/Work";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const Experience = () => {
  return (
    <div className="experience">
      <h1>
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
            <p>Master of Science[Computer Science]</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="January 2009 - November 2016"
            iconStyle={{ backgroundColor: "black", color: "white" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-subtitle">
              University of Benin
            </h4>
            <p>Bachelor of Science[Computer Science]</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="November 2022 - September 2023"
            iconStyle={{ backgroundColor: "yellow", color: "white" }}
            icon={<SchoolIcon />}
          >
            <h4 className="vertical-timeline-element-title">
              Zuri Health, Kenya
            </h4>
            <p>Front end Developer[Remote]</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline--work"
            id="vertical-timeline"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="March 2021 - November 2022"
            iconStyle={{ backgroundColor: "yellow", color: "white" }}
            icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-subtitle">
              Decagon Benin
            </h4>
            <p>Associate Software Engineer</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="March 2021 - November 2022"
            iconStyle={{ backgroundColor: "yellow", color: "white" }}
            icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-subtitle">
              Kurama Tech Media, Lagos
            </h4>
            <p>Software Developer </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline--work"
            contentStyle={{ background: "rgb(33, 150, 243)", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date="January 2020 - June 2020"
            iconStyle={{ backgroundColor: "yellow", color: "white" }}
            icon={<WorkIcon />}
          >
            <h4 className="vertical-timeline-element-subtitle">
              Freelance Developer, Benin
            </h4>
            <p>Software Developer/Content Writer </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </h1>
    </div>
  );
};

export default Experience;
