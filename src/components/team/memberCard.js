import React, { useEffect } from "react"
import styled from "styled-components"
import { motion } from "framer-motion"
import { HeadingTwo, Paragraph, ImageContainer } from "../../elements"
import { white, pink } from "../../variables"

const MemberCard = ({ index, handleSelect, person }) => {
  const selectPerson = () => {
    handleSelect(person.name.text)
  }

  const { name, role, fun_fact, profile_picture } = person

  const imageUrl = profile_picture.fluid

  return (
    <ProfileCard
      onClick={selectPerson}
      key={index}
      index={index}
      whileHover={{ scale: 1.1 }}
      layoutId={name.text}
    >
      <div className="card-container">
        <div className="front">
          <div className="profile-image-container">
            <ImageContainer
              fluid={imageUrl}
              objectFit="cover"
              height="100%"
              heightMd="100%"
              widthMd="100%"
            />
          </div>

          <div className="bottom-container">
            <div className="info">
              <HeadingTwo fontSize="37px" textAlign="center" bottom="0">
                {name.text}
              </HeadingTwo>
              <Paragraph
                fontSize="18px"
                textAlign="center"
                fontWeight="300"
                margin="0"
                top="0"
              >
                {role.text}
              </Paragraph>
            </div>
            <div className="fun-fact">
              <Paragraph
                top="0"
                bottom="0"
                textAlign="center"
                fontSize="12px"
                fontWeight="700"
              >
                <strong>Fun Fact:</strong>
                <br />
                {fun_fact.text}
              </Paragraph>
            </div>
          </div>
        </div>
      </div>
    </ProfileCard>
  )
}

export default MemberCard

const ProfileCard = styled(motion.div)`
  background: ${white};
  user-select: none;
  height: 363px;

  .card-container {
    padding: 22px 15px 18px 15px;
    height: 100%;
    width: 100%;
    position: relative;
    overflow: hidden;
  }

  .profile-image-container {
    height: 100%;
    width: 100%;
    top: 0;
    left: 0;
    padding: 22px 15px 18px 15px;
    position: absolute;
  }

  .bottom-container {
    position: absolute;
    left: 15px;
    bottom: 18px;
    width: calc(100% - 30px);

    ${HeadingTwo},
    ${Paragraph} {
      color: ${white};
    }
  }

  .fun-fact {
    padding: 14px 14px 11px 14px;
    background: ${pink};

    ${Paragraph} {
      strong {
        font-size: 18px;
        text-transform: uppercase;
        margin-right: 9px;
      }
    }
  }
`
