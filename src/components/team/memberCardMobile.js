import React from 'react'
import { HeadingTwo, Paragraph, ImageContainer, ProfileCard } from '../../elements'

const MemberCardMobile = ({ index, isSelected, setIsSelected, person }) => {

    const selectPerson = () => {
        if (isSelected !== index) {
            setIsSelected(index)
        }
        else {
            setIsSelected(null)
        }
    }

    const cardVariants = {
        selected: {
            rotateY: '180deg',
            transition: {
                type: 'spring',
                duration: 0.1,
            }
        },
        unselected: {
            x: 0,
            y: 0,
            rotateY: '0deg',
            transition: {
                type: "tween",
                duration: 0.4
            }
        }
    }


    const { name, role, fun_fact, profile_picture } = person

    const imageUrl = profile_picture.localFile.childImageSharp.fluid


    return (
        <ProfileCard
            variants={cardVariants}
            animate={isSelected === index ? 'selected' : 'unselected'}
            positionTransition
            key={index}
            isSelected={isSelected}
            index={index}
            drag="x"
            onDragEnd={() => selectPerson()}
            dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
            dragElastic={0.2}
        >
            <div className="card-container">
                {isSelected !== index &&
                    <div className="front">
                        <div className="profile-image-container">
                            <ImageContainer fluid={imageUrl} objectFit="cover" height="100%" heightMd="100%" widthMd="100%" />
                        </div>

                        <div className="bottom-container">
                            <div className="info">
                                <HeadingTwo fontSize="37px" textAlign="center" bottom="0">{name.text}</HeadingTwo>
                                <Paragraph fontSize="18px" textAlign="center" fontWeight="300" margin="0" top="0">{role.text}</Paragraph>
                            </div>
                            <div className="fun-fact">
                                <Paragraph top="0" bottom="0" textAlign="center" fontSize="12px" fontWeight="700"><strong>Fun Fact:</strong> {fun_fact.text}</Paragraph>
                            </div>
                        </div>
                    </div>
                }

                {isSelected === index &&
                    <div className="back">back</div>
                }
            </div>
        </ProfileCard>
    )
}

export default MemberCardMobile;

