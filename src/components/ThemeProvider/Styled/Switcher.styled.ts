import styled from "styled-components";

const StyledSwitcher = styled.div`
  margin: auto;
  position: relative;
  text-align: center;
  font-size: 1rem;
  text-transform: uppercase;
  font-weight: 500;

  .radio1,
  .radio2,
  .radio3 {
    position: absolute;
    left: -9999px;
  }
  .topLabelContainer {
    margin: auto;
  }
  .labelTop1,
  .labelTop2,
  .labelTop3 {
    width: 5em;
    margin: auto;
    padding: 0px;
    display: inline-block;
    text-align: center;
  }
  .labelLeft {
    width: 6em;
    height: 3em;
    padding-right: 0.5em;
    position: relative;
    display: inline-block;
    vertical-align: middle;
    text-align: right;
  }
  .sliderContainer {
    height: 2em;
    width: 6em;
    position: relative;
    display: contents;
  }

  .label1,
  .label2,
  .label3 {
    height: 100%;
    width: 100%;
    padding: 2px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgb(200, 200, 200);
  }
  .radio1:checked ~ span .label1,
  .radio1:checked ~ span .label3,
  .radio2:checked ~ span .label1,
  .radio2:checked ~ span .label2,
  .radio3:checked ~ span .label2,
  .radio3:checked ~ span .label3 {
    /*hide labels */
    position: absolute;
    left: -9999px;
  }
  .slider {
    border-radius: 1em;
    width: 5em;
    height: 1.5em;
    position: absolute;
    display: inline-block;
    pointer-events: none;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgb(100, 100, 100);
    -webkit-transition: 0.4s;
    transition: 0.4s;
    z-index: -1;
  }

  .radio2:checked ~ span .slider {
    -webkit-transform: translateX(5em);
    -ms-transform: translateX(5em);
    transform: translateX(5em);
  }

  .radio3:checked ~ span .slider {
    -webkit-transform: translateX(10em);
    -ms-transform: translateX(10em);
    transform: translateX(10em);
  }

  .content1 {
    height: 4em;
    width: 100%;
    position: relative;
    display: block;
    margin: 0 auto;
    padding: 1em;
    text-align: center;
    font-size: 1.3em;
    background: beige;
  }
  .content1 p {
    margin: 0;
  }
  .labelTop1,
  .radio1:checked ~ .sliderContainer .slider,
  .radio1:checked ~ .content1 {
    color: ${({ theme }) => theme.primaryOne};
  }
  .radio1:checked ~ .topLabelContainer .labelTop1 {
    color: ${({ theme }) => theme.primaryTwo};
    text-shadow: 0 0 1px rgb(200, 200, 200),
      0 0 8px ${({ theme }) => theme.primaryOne};
  }
  .radio1:checked ~ .sliderContainer .slider {
    background: ${({ theme }) => theme.primaryOne};
  }
  .labelTop2,
  .radio2:checked ~ .content1 {
    color: rgb(200, 200, 200);
  }
  .radio2:checked ~ .topLabelContainer .labelTop2 {
    color: white;
    text-shadow: 0 0 1px rgb(200, 200, 200), 0 0 6px rgb(200, 200, 200);
  }
  .radio2:checked ~ .sliderContainer .slider {
    background: rgb(200, 200, 200);
  }
  .labelTop3,
  .radio3:checked ~ .content1 {
    color: ${({ theme }) => theme.primaryOne};
  }
  .radio3:checked ~ .topLabelContainer .labelTop3 {
    color: ${({ theme }) => theme.primaryTwo};
    text-shadow: 0 0 1px rgb(50, 50, 50),
      0 0 8px ${({ theme }) => theme.primaryOne};
  }
  .radio3:checked ~ .sliderContainer .slider {
    background: ${({ theme }) => theme.primaryOne};
  }
`;

export default StyledSwitcher;
