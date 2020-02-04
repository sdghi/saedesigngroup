import React from 'react'
import {Link} from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"

const ProjectImageWithTitle = ({project}) => {
    const slug = project.node.uid;
    const projectName = project.node.data.project_name.text;
    const imageSrc = project.node.data.featured_image.localFile.childImageSharp.fixed;

    return (
        <div key={project.uid}>
            <Img
            fixed={imageSrc}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
            />
            <Link to={`/${slug}`}>{projectName}</Link>
      </div>
    )
}

export default ProjectImageWithTitle;