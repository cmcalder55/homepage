// Filename - pages/projects/Automation.js

import ProjectPage from "../../ProjectPage";

const Automation = () => {
  const project_data = {
    name: "Automation",
    topics: [
      {
        title: "Blender3D Flower Generator",
        pagelink: "/automation/flower_generator",
        description: "Blender3D Python script to generate cherry blossoms.",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/art/tree/main/flower-generator-blender3d",
          },
        ],
      },
      {
        title: "Path Finding",
        pagelink: "/automation/path_finding",
        description: "Information about topic 2",
        links: [
          {
            text: "View on GitHub",
            url: "https://github.com/cmcalder55/autonomous-mobile-robotics",
          },
        ],
      },
      // Add more topics as needed
    ],
  };

  return ProjectPage({ project_data });
};

export default Automation;
