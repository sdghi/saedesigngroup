import React from 'react'
import { useCursorChange } from '../../hooks'
import styled from 'styled-components'

const ProjectGridToggle = ({ showLogos, projectCategoryFilter, displayProjectsGrid, setDisplayProjectsGrid }) => {
    return (
        <GridToggleContainer>{
            !showLogos && (
                <div className="display-btn-container">

                    {projectCategoryFilter === 'all' &&
                        <>
                            {displayProjectsGrid ?
                                <StaggeredBtn
                                    displayProjectsGrid={displayProjectsGrid}
                                    setDisplayProjectsGrid={setDisplayProjectsGrid}
                                /> : <GridBtn
                                    displayProjectsGrid={displayProjectsGrid}
                                    setDisplayProjectsGrid={setDisplayProjectsGrid}
                                />
                            }
                        </>
                    }

                </div>
            )
        }
        </GridToggleContainer>
    )
}

export default ProjectGridToggle

const GridToggleContainer = styled.div`
    position: sticky;
    top: 50%;
    padding-left: 20px;
    height: 50px;
`;

// Grid Btn
const GridBtn = ({ setDisplayProjectsGrid, displayProjectsGrid }) => {

    const [bind] = useCursorChange({ selected: 'selected' });

    return (
        <svg
            className={displayProjectsGrid ? "selected" : null}
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            onClick={() => setDisplayProjectsGrid(true)}
            {...bind}
        >
            <path
                d="M4-185h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22ZM4-176h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22ZM4-167h6v6H4Zm9,0h6v6H13Zm9,0h6v6H22Z"
                transform="translate(-4 185)"
            />
        </svg>
    )
}

// Staggered Btn
const StaggeredBtn = ({ setDisplayProjectsGrid, displayProjectsGrid }) => {

    const [bind] = useCursorChange({ selected: 'selected' });

    return (
        <svg
            className={!displayProjectsGrid ? "selected" : null}
            onClick={() => setDisplayProjectsGrid(false)}
            xmlns="http://www.w3.org/2000/svg"
            width="23.132"
            height="24"
            viewBox="0 0 23.132 24"
            {...bind}
        >
            <g transform="translate(-4 -4)">
                <rect width="5.337" height="4.801" transform="translate(21.795 4)" />
                <rect width="15" height="9.526" transform="translate(4 8.801)" />
                <rect
                    width="11.132"
                    height="7.227"
                    transform="translate(12.785 20.773)"
                />
            </g>
        </svg>
    )
}
