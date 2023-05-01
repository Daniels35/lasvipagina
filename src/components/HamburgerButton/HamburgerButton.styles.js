import styled from '@emotion/styled';

export const MenuButton = styled.button`

  display: none;
  flex-direction: column;
  justify-content: space-between;
  height: 26px;
  width: 26px;
  cursor: pointer;
  border: none;
  background: none;
  padding: 0;
  -webkit-tap-highlight-color: transparent;
  @media (max-width: 840px) {
    display: block;
  }
  .bar {
    width: 100%;
    height: 4px;
    background-color: #0098CA;
    transition: all 0.3s ease;
    margin-top: 20%;
    position: relative;
  }
  .bar::before {
    content: '';
    position: absolute;
    top: 0;
    left: 26%;
    width: 80%;
    height: 4px;
    background-color: #0098CA;
    transition: all 0.3s ease;
  }
  &.active .bar:first-of-type {
    transform: rotate(-50deg) translateY(6px) translateX(6px);
  }
  &.active .bar:last-child {
    transform: rotate(45deg) translateY(-6px) translateX(7px);
  }
  &.active .bar:nth-of-type(2) {
    opacity: 0;
  }
  &.active .bar:first-of-type::before {
    transform: translateY(8px);
  }
  &.active .bar:last-child::before {
    transform: translateY(-8px);
  }
  @media (max-width: 376px) {
    height: 26px;
    width: 26px;
    display: block;
    .bar {
      height: 3px;
    }
    .bar::before {
      height: 3px;
      left: 28%;
    }
  }
`;  