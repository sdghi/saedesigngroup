import React, { useState } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import styled from 'styled-components'
import { dark_blue, breakpointMedium } from "../../variables"
import MemberCardMobile from './memberCardMobile'


const TeamMobile = () => {
    const [isSelected, setIsSelected] = useState(null);

    const data = useStaticQuery(graphql`
      {
        allPrismicTeam{
            edges{
                node{
                data{
                    member{
                    name{
                        text
                    }
                    role{
                        text
                    }
                    fun_fact{
                        text
                    }
                    profile_picture{
                        localFile{
                        childImageSharp{
                            fluid(quality: 90){
                            ...GatsbyImageSharpFluid
                            }
                        }
                        }
                    }
                    }
                }
                }
            }
            }
        }
    `)

    const { member } = data.allPrismicTeam.edges[0].node.data

    return (
        <TeamMobileContainer>
            {member.map((person, i) => (
                <MemberCardMobile
                    key={i}
                    index={i + 1}
                    isSelected={isSelected}
                    setIsSelected={setIsSelected}
                    person={person}
                />
            ))}
        </TeamMobileContainer>
    )
}

export default TeamMobile;

const TeamMobileContainer = styled.section`
    background: ${ dark_blue};
    height: 80vh; 
    width: 100%;
    position: relative;

    @media(min-width: ${breakpointMedium}){
        display: none;
    }
`;