import { Chrono } from "react-chrono";
import UBClogo from './assets/ubc-logo.png';
import robokidsLogo from './assets/robokids-logo.png';

const WorkExperience = () => {
  const items = [
    {
      title: "Cloud Engineering Co-op",
      cardTitle: "Sep 2022 - Apr 2023",
      cardDetailedText: "• Containerized 15+ existing microservices to using Docker and Kubernetes on AWS, achieving a highly scalable and cost-effective infrastructure. • Utilized Terraform for infrastructure provisioning and ArgoCD for GitOps deployments, improving the efficiency of the pipeline process in the cloud environment. • Successfully integrated Grafana dashboard with Prometheus and Loki for system monitoring/logging, helped team reduce operational costs.",
      media: {
        type: "IMAGE",
        source: {
          url: "https://images.samsung.com/is/image/samsung/assets/global/about-us/brand/logo/300_186_4.png?$568_N_PNG$"
        }
      }
    },
    {
      title: "Undergraduate Teaching Assistant",
      cardTitle: "Jan 2023 - Apr 2024",
      cardDetailedText: "Provided instructional support for CPSC 213 - Introduction to Computer Systems (1 semester) and DSCI 100 - Introduction to Data Science (2 semesters). Enhanced student learning by leading weekly tutorials for over 100 students to reinforce key course material",
      media: {
        type: "IMAGE",
        source: {
          url: UBClogo
        }
      }
    },
    {
      title: "STEM Instructor",
      cardTitle: "Jul 2022 - May 2023",
      cardDetailedText: "Instructed summer camp and regular classes, supported over 30 elementary and middle school students to create personal projects using LEGO robotics, Roblox Studio, drone programming, micro:bit, and SketchUp",
      media: {
        type: "IMAGE",
        source: {
          url: robokidsLogo
        }
      }
    }
  ];

  return ( 
    <div className="workExperience">
    <br></br>
    <br></br>
    <h2>Work Experience</h2>
    <br></br>
    <br></br>
    <Chrono 
      // configurations for Chrono timeline
      items={items} 
      mode="VERTICAL_ALTERNATING"
      cardWidth = {300}
      theme={{
        primary: 'black',
        secondary: 'white',
        cardBgColor: 'white',
        titleColor: 'black',
        titleColorActive: 'black',
      }} 
      disableNavOnKey
      disableToolbar={true}
      allowDynamicUpdate={true}
      // cardLess={true}
      parseDetailsAsHTML={true}     // parses the cardDetailedText as HTML
      />
    </div>
  );
}
 
export default WorkExperience;