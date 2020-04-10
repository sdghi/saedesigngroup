import styled from 'styled-components'
import { white, pink, breakpointMedium, breakpointSmall } from '../../variables'
import { HeadingTwo, Paragraph } from '../../elements'
import { motion } from 'framer-motion'

export const ProfileCard = styled(motion.div)`

    background: ${white};
    z-index: ${({ index, isSelected }) => isSelected === index ? '200' : '0'};
    position: absolute;
    user-select: none;
    height: 363px;
    width: 260.25px;
    top: calc(50% - 181.5px);
    left: calc(50% - 130.125px);
    

    @media(min-width: ${breakpointSmall}){
        width: 390.4px;
        height: 544.5px;
        left: calc(50% - 195.2px);
        height: calc(50% - 272.25);
    }


    @media(min-width: ${breakpointMedium}){
        height: ${({ isSelected, index }) => isSelected === index ? '544.5px' : '363px'};
        width: ${({ isSelected, index }) => isSelected === index ? '390.4px' : '260.25px'};
        position: ${({ isSelected, index }) => isSelected === index ? 'absolute' : 'relative'};
        top: 0;
        left: 0;
    }


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