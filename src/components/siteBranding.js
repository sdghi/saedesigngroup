import React from "react"
import { Link } from "gatsby"
import styled from 'styled-components'
import { pink } from '../variables'
import { useCursorChange } from '../hooks'

const SiteBranding = ({ toggleNav, isNavOpen }) => {

  const [bind] = useCursorChange({ selected: "selected" });

  return (
    <Link to="/">
      <BrandingContainer
        {...bind}
      >
        <svg
          version="1.1"
          id="Layer_1"
          xmlns="http://www.w3.org/2000/svg"
          x="0px"
          y="0px"
          viewBox="0 0 80 80"
          onClick={isNavOpen ? toggleNav : undefined}
        >
          <g>
            <g>
              <g id="sdg-face">
                <path
                  className="st0"
                  d="M42.65,15c-0.12,0-0.23,0-0.35,0c-13.63,0-24.8,10.99-24.99,24.66C17.12,53.44,28.18,64.81,41.96,65
               c0.12,0,0.23,0,0.35,0c13.63,0,24.81-10.99,24.99-24.66C67.49,26.56,56.43,15.19,42.65,15z M42.31,62.45c-0.1,0-0.21,0-0.31,0
               c-12.38-0.17-22.31-10.38-22.14-22.75c0.17-12.27,10.2-22.14,22.44-22.14c0.1,0,0.21,0,0.31,0
               c12.38,0.17,22.31,10.38,22.14,22.75C64.58,52.58,54.55,62.45,42.31,62.45z M34.34,43.94c2.99,0,4.26-1.68,4.26-5.62
               c0-3.03-0.83-4.39-3.31-5.38l-1.09-0.43c-1.21-0.48-1.76-1.04-1.76-3.1c0-2.28,0.77-2.75,1.92-2.75c0.97,0,1.88,0.33,1.97,2.69
               c0,0.22,0.09,0.41,0.25,0.53c0.16,0.12,0.35,0.15,0.56,0.1l0.75-0.13l0.06-0.02c0.48-0.16,0.48-0.56,0.48-0.71
               c-0.09-3.05-1.47-4.6-4.1-4.6c-2.72,0-4.1,1.66-4.1,4.93c0,2.99,0.81,4.27,3.34,5.25l1.09,0.43c1.17,0.46,1.73,1.07,1.73,3.34
               c0,3.08-0.92,3.33-2.03,3.33c-1.23,0-2.03-0.52-2.21-3.09c0-0.3-0.15-0.46-0.24-0.53c-0.11-0.09-0.3-0.17-0.57-0.1l-0.79,0.16
               c-0.2,0.03-0.54,0.17-0.54,0.73C30.17,42.27,31.62,43.94,34.34,43.94z M30.58,47.55c-0.39,0-0.68,0.29-0.68,0.68v3.21
               c0,2.25,0.97,3.66,2.95,4.3c1.01,0.33,2.13,0.44,6.42,0.44c0.11,0,11.16,0,12.5-0.44c1.99-0.64,2.95-2.05,2.95-4.3v-3.21
               c0-0.39-0.29-0.68-0.68-0.68 M52.72,51.28c0,1.31-0.45,1.99-1.54,2.37C50.53,53.85,44.36,54,39.23,54
               c-4.02,0-5.03-0.11-5.78-0.35c-1.1-0.38-1.55-1.06-1.55-2.37v-1.55h20.82V51.28z M54.18,33.44h-3.41c-0.39,0-0.69,0.3-0.69,0.69
               v0.75c0,0.39,0.3,0.69,0.69,0.69h1.89c0,3.93-0.09,4.39-0.24,4.9c-0.31,0.87-0.96,1.31-1.94,1.31c-0.98,0-1.64-0.44-1.94-1.3
               c-0.17-0.55-0.25-1.05-0.25-6.25c0-5.2,0.08-5.7,0.24-6.23c0.31-0.89,0.91-1.31,1.92-1.31c1.27,0,1.96,0.71,2.19,2.23
               c0.03,0.2,0.14,0.36,0.29,0.46c0.11,0.07,0.3,0.14,0.53,0.07l0.77-0.16l0.05-0.01c0.35-0.12,0.53-0.42,0.47-0.81
               c-0.34-2.54-1.87-3.94-4.31-3.94c-2.06,0-3.46,0.96-4.05,2.77c-0.29,0.88-0.37,1.68-0.37,6.93c0,5.26,0.07,6.05,0.37,6.93
               c0.59,1.81,2,2.77,4.06,2.77c2.06,0,3.46-0.96,4.06-2.77c0.29-0.88,0.37-1.62,0.37-6.32v-0.72
               C54.87,33.74,54.58,33.44,54.18,33.44z"
                />
              </g>
            </g>
          </g>
        </svg>
        <svg id="sdg-heading" data-name="Group 2" xmlns="http://www.w3.org/2000/svg" width="150.667" height="17.443" viewBox="0 0 150.667 17.443">
          <path id="Path_2" data-name="Path 2" d="M83.737,45.925c-2.748,0-4.169-1.476-4.247-4.45,0-.148.047-.25.2-.273l2.1-.351a.219.219,0,0,1,.273.226c.078,1.8.6,2.5,1.749,2.5,1.077,0,1.6-.578,1.6-2.42,0-1.819-.351-2.42-1.671-2.951l-1.023-.4c-2.35-.921-3.045-2.147-3.045-4.794,0-2.92,1.327-4.521,4.123-4.521s4.021,1.5,4.169,4.146a.268.268,0,0,1-.226.273l-2,.3c-.148.023-.273-.047-.273-.2-.047-1.4-.5-2.171-1.6-2.171-1.046,0-1.546.648-1.546,2.046,0,1.577.3,2.046,1.647,2.577l1.023.4c2.225.874,3.1,2.077,3.1,4.974C88.086,44.176,86.962,45.925,83.737,45.925Z" transform="translate(-79.49 -28.482)" fill="#ea3056" />
          <path id="Path_3" data-name="Path 3" d="M96.769,29.02c.047-.148.125-.25.273-.25h2.1a.272.272,0,0,1,.273.25l3.6,16.49a.192.192,0,0,1-.2.25h-2.124a.257.257,0,0,1-.273-.25l-.671-3.42H96.37L95.7,45.51a.257.257,0,0,1-.273.25H93.3a.2.2,0,0,1-.2-.25Zm2.545,10.822-1.2-6.317h-.078l-1.249,6.317Z" transform="translate(-82.472 -28.544)" fill="#ea3056" />
          <path id="Path_4" data-name="Path 4" d="M109.16,29.02a.238.238,0,0,1,.25-.25h6.972a.238.238,0,0,1,.25.25v1.921a.238.238,0,0,1-.25.25h-4.4a.129.129,0,0,0-.148.148v4.474a.129.129,0,0,0,.148.148h3.795a.238.238,0,0,1,.25.25v1.921a.238.238,0,0,1-.25.25h-3.795a.129.129,0,0,0-.148.148v4.646a.129.129,0,0,0,.148.148h4.4a.238.238,0,0,1,.25.25v1.921a.238.238,0,0,1-.25.25H109.41a.238.238,0,0,1-.25-.25Z" transform="translate(-85.994 -28.544)" fill="#ea3056" />
          <path id="Path_5" data-name="Path 5" d="M122.63,29.02a.238.238,0,0,1,.25-.25h3.92c2.225,0,3.521.9,4.123,2.725.3.921.422,2.077.422,5.77s-.125,4.849-.422,5.77c-.6,1.827-1.9,2.725-4.123,2.725h-3.92a.238.238,0,0,1-.25-.25Zm2.819,14.32h1.077a1.67,1.67,0,0,0,1.8-1.226c.2-.625.3-1.452.3-4.849s-.1-4.224-.3-4.849a1.675,1.675,0,0,0-1.8-1.226h-1.077a.129.129,0,0,0-.148.148V43.183A.138.138,0,0,0,125.449,43.339Z" transform="translate(-88.947 -28.544)" fill="#ea3056" />
          <path id="Path_6" data-name="Path 6" d="M138.08,29.02a.238.238,0,0,1,.25-.25H145.3a.238.238,0,0,1,.25.25v1.921a.238.238,0,0,1-.25.25h-4.4a.129.129,0,0,0-.148.148v4.474a.129.129,0,0,0,.148.148H144.7a.238.238,0,0,1,.25.25v1.921a.238.238,0,0,1-.25.25h-3.795a.129.129,0,0,0-.148.148v4.646a.129.129,0,0,0,.148.148h4.4a.238.238,0,0,1,.25.25v1.921a.238.238,0,0,1-.25.25H138.33a.238.238,0,0,1-.25-.25V29.02Z" transform="translate(-92.334 -28.544)" fill="#ea3056" />
          <path id="Path_7" data-name="Path 7" d="M155.1,45.925c-2.748,0-4.169-1.476-4.247-4.45,0-.148.047-.25.2-.273l2.1-.351a.219.219,0,0,1,.273.226c.078,1.8.6,2.5,1.749,2.5,1.077,0,1.6-.578,1.6-2.42,0-1.819-.351-2.42-1.671-2.951l-1.023-.4c-2.35-.921-3.045-2.147-3.045-4.794,0-2.92,1.327-4.521,4.123-4.521s4.021,1.5,4.169,4.146a.268.268,0,0,1-.226.273l-2,.3c-.148.023-.273-.047-.273-.2-.047-1.4-.5-2.171-1.6-2.171-1.046,0-1.546.648-1.546,2.046,0,1.577.3,2.046,1.647,2.577l1.023.4c2.225.874,3.1,2.077,3.1,4.974C159.446,44.176,158.322,45.925,155.1,45.925Z" transform="translate(-95.133 -28.482)" fill="#ea3056" />
          <path id="Path_8" data-name="Path 8" d="M165.76,29.02a.238.238,0,0,1,.25-.25h2.171a.238.238,0,0,1,.25.25V45.51a.238.238,0,0,1-.25.25H166.01a.238.238,0,0,1-.25-.25Z" transform="translate(-98.402 -28.544)" fill="#ea3056" />
          <path id="Path_9" data-name="Path 9" d="M173.48,37.2c0-4.724.078-5.325.328-6.074a3.846,3.846,0,0,1,4.021-2.647c2.452,0,3.951,1.3,4.224,3.974a.259.259,0,0,1-.2.3l-2.022.351a.218.218,0,0,1-.273-.2c-.125-1.327-.7-2-1.7-2a1.458,1.458,0,0,0-1.476.953c-.148.476-.172.671-.172,5.348s.023,4.872.172,5.348a1.674,1.674,0,0,0,3.022,0c.125-.422.172-.671.172-3.826a.129.129,0,0,0-.148-.148h-1.327a.238.238,0,0,1-.25-.25v-1.85a.238.238,0,0,1,.25-.25h3.795a.238.238,0,0,1,.25.25v.75c0,4.7-.078,5.294-.328,6.043a4.36,4.36,0,0,1-8.019,0C173.55,42.526,173.48,41.925,173.48,37.2Z" transform="translate(-100.094 -28.48)" fill="#ea3056" />
          <path id="Path_10" data-name="Path 10" d="M188.77,29.02a.238.238,0,0,1,.25-.25h2.647a.316.316,0,0,1,.351.25l3.147,11.743h.125V29.02a.238.238,0,0,1,.25-.25h1.85a.238.238,0,0,1,.25.25V45.51a.238.238,0,0,1-.25.25h-2.475a.316.316,0,0,1-.351-.25l-3.295-11.743h-.148V45.51a.238.238,0,0,1-.25.25h-1.85a.238.238,0,0,1-.25-.25Z" transform="translate(-103.446 -28.544)" fill="#ea3056" />
          <path id="Path_11" data-name="Path 11" d="M204.93,37.208c0-4.974.078-5.622.328-6.371a3.273,3.273,0,0,1,3.42-2.327,3.429,3.429,0,0,1,3.646,3.35c.023.172-.023.273-.172.328l-.726.148c-.172.047-.273-.023-.3-.172-.226-1.5-.953-2.42-2.452-2.42a2.079,2.079,0,0,0-2.171,1.5c-.172.578-.25,1.1-.25,5.973s.078,5.4.25,5.973a2.367,2.367,0,0,0,4.4,0c.172-.578.25-1.1.25-4.974a.129.129,0,0,0-.148-.148H208.99a.238.238,0,0,1-.25-.25v-.7a.238.238,0,0,1,.25-.25h3.2a.238.238,0,0,1,.25.25v.671c0,4.4-.078,5.044-.328,5.793a3.677,3.677,0,0,1-6.84,0C205.008,42.83,204.93,42.181,204.93,37.208Z" transform="translate(-106.989 -28.487)" fill="#ea3056" />
          <path id="Path_12" data-name="Path 12" d="M225.867,45.76a.247.247,0,0,1-.273-.172l-2.2-7.5a7.311,7.311,0,0,1-1.046.078h-1.171a.129.129,0,0,0-.148.148V45.51a.238.238,0,0,1-.25.25h-.8a.238.238,0,0,1-.25-.25V29.02a.238.238,0,0,1,.25-.25h2.42c2.975,0,4.326,1.249,4.326,4.7,0,2.374-.75,3.7-2.1,4.294l2.3,7.745c.047.148,0,.25-.125.25Zm-.453-12.289c0-2.623-.851-3.474-2.92-3.474h-1.327a.129.129,0,0,0-.148.148v6.668a.129.129,0,0,0,.148.148h1.327C224.516,36.968,225.414,36.2,225.414,33.47Z" transform="translate(-110.233 -28.544)" fill="#ea3056" />
          <path id="Path_13" data-name="Path 13" d="M233.9,43.579c-.25-.75-.328-1.4-.328-6.371s.078-5.622.328-6.371a3.677,3.677,0,0,1,6.84,0c.25.75.328,1.4.328,6.371s-.078,5.622-.328,6.371a3.677,3.677,0,0,1-6.84,0Zm5.6-.4c.172-.578.273-1.1.273-5.973s-.1-5.4-.273-5.973a2.321,2.321,0,0,0-4.341,0c-.172.578-.25,1.1-.25,5.973s.078,5.4.25,5.973a2.321,2.321,0,0,0,4.341,0Z" transform="translate(-113.267 -28.487)" fill="#ea3056" />
          <path id="Path_14" data-name="Path 14" d="M248.42,41.762V29.02a.238.238,0,0,1,.25-.25h.8a.238.238,0,0,1,.25.25V41.864c0,1.975.953,2.873,2.374,2.873s2.4-.9,2.4-2.873V29.02a.238.238,0,0,1,.25-.25h.773a.238.238,0,0,1,.25.25V41.762c0,2.826-1.476,4.2-3.67,4.2S248.42,44.589,248.42,41.762Z" transform="translate(-116.523 -28.544)" fill="#ea3056" />
          <path id="Path_15" data-name="Path 15" d="M263.68,45.76a.238.238,0,0,1-.25-.25V29.02a.238.238,0,0,1,.25-.25h2.452c2.975,0,4.349,1.374,4.349,4.919,0,3.521-1.4,4.95-4.349,4.95h-1.249a.129.129,0,0,0-.148.148V45.51a.238.238,0,0,1-.25.25Zm5.5-12.063c0-2.7-.828-3.7-3.045-3.7h-1.249a.129.129,0,0,0-.148.148v7.121a.129.129,0,0,0,.148.148h1.249C268.349,37.413,269.177,36.414,269.177,33.7Z" transform="translate(-119.813 -28.544)" fill="#ea3056" />
        </svg>

      </BrandingContainer>
    </Link>
  )
}

export default SiteBranding

const BrandingContainer = styled.div`
  display: flex;
  align-items: center;
  max-width: 500px;
  width: 10%;
  position: fixed;
  top: 10px;
  left: 20px;
  z-index: 99999;

  svg{
    width: 100%;
    fill: ${pink};
  }

  #sdg-face{
    transition: all .2s ease-out;
    transform-origin: center;
  }

  #sdg-heading{
    width: 200%;
  }

  &:hover{
    #sdg-face{
      transform: rotate(360deg);
    }
  }
`;