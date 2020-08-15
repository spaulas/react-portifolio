import React from "react";

interface ProjectContainerProps {
  title: string;
  description: string;
  tech: Array<string>;
  link: string;
  github: string;
  mainImage: string;
  sideImage: string;
}

function ProjectContainer({
  title,
  description,
  tech,
  link,
  github,
  mainImage,
  sideImage
}: ProjectContainerProps) {
  return <div>Projectocontainer</div>;
}

export default ProjectContainer;
