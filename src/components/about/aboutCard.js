import React from 'react'
import styled from 'styled-components'
import { white, pink } from '../../variables'
import { HeadingTwo, Paragraph, ImageContainer } from '../../elements'
import { motion } from 'framer-motion'


const AboutCard = ({ index, isSelected, setIsSelected, person }) => {

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
            x: 'calc(50vw - 200px)',
            y: 'calc(50vh - 300px)',
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
        <Card
            variants={cardVariants}
            animate={isSelected === index ? 'selected' : 'unselected'}
            onClick={() => selectPerson()}
            positionTransition
            key={index}
            isSelected={isSelected}
            index={index}
            whileHover={{ scale: 1.1 }}
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
        </Card>
    )
}

export default AboutCard;

const Card = styled(motion.div)`
    background: ${white};
    height: ${({ isSelected, index }) => isSelected === index ? '544.5px' : '363px'};
    width: ${({ isSelected, index }) => isSelected === index ? '390.4px' : '260.25px'};
    position: ${({ isSelected, index }) => isSelected === index ? 'absolute' : 'relative'};
    z-index: ${({ index, isSelected }) => isSelected === index ? '200' : '0'};
    top: ${({ index, isSelected }) => isSelected === index && 0};
    left: ${({ index, isSelected }) => isSelected === index && 0};
    user-select: none;

    .back{
        transform: rotateY(180deg);
        background: red;
        height: 100%;
        width: 100%;
    }

    .card-container{
        padding: 22px 15px 18px 15px;
        height: 100%;
        width: 100%;
        position: relative;
        overflow: hidden;
    }

    .profile-image-container{
        height: 100%;
        width: 100%;
        top: 0;
        left: 0;
        padding: 22px 15px 18px 15px;
        z-index: -1;
        position: absolute;
    }

    .bottom-container{
        position: absolute;
        left: 15px;
        bottom: 18px;
        width: calc(100% - 30px);

        ${HeadingTwo},
        ${Paragraph}{
            color: ${white};
        }
    }


    .fun-fact{
        padding: 14px 14px 11px 14px;
        background: ${pink};

        ${Paragraph}{
            strong{
                font-size: 18px;
                text-transform: uppercase;
                margin-right: 9px;
            }
        }
    }
`;