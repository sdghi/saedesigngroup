import React from 'react'
import {Link} from 'gatsby'
import Img from "gatsby-image/withIEPolyfill"
import styled from 'styled-components'

const ProjectImageWithTitle = ({project}) => {
    const slug = project.node.uid;
    const projectName = project.node.data.project_name.text;
    const imageSrc = project.node.data.featured_image.localFile.childImageSharp.fixed;

    return (
        <ProjetContainer key={project.uid} right="10">
            <Img
            fixed={imageSrc}
            objectFit="cover"
            objectPosition="50% 50%"
            alt=""
            />
            <Link to={`/${slug}`}>{projectName}</Link>
      </ProjetContainer>
    )
}

export default ProjectImageWithTitle;

const ProjetContainer = styled.div`
    position: relative;
    width: fit-content;
    margin: 0 auto 0 auto;
    top: ${props => `${props.top}em`};
    left: ${props => `${props.left}em`};
    right: ${props => `${props.right}em`};
`;