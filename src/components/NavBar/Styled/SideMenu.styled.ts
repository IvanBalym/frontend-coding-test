import styled from "styled-components";
import type { IMenu } from "../../../interfaces";

const StyledSideMenu = styled.nav<IMenu>`
  @media screen and (min-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    background: ${({ theme }) => theme.primaryTwo};
    position: sticky;

    a {
      font-size: 1rem;
      text-transform: uppercase;
      padding: 1rem 1rem;
      border-right: ${({ theme }) => theme.primaryOne} 1px solid;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.primaryOne};
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: ${({ theme }) => theme.primaryHover};
      }
    }
  }

  @media screen and (max-width: ${({ theme }) => theme.mobile}) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    background: ${({ theme }) => theme.primaryTwo};
    height: 100vh;
    text-align: left;
    padding: 2rem;
    position: absolute;
    top: 0;
    left: 0;
    transition: transform 0.3s ease-in-out;
    transform: ${({ open }) => (open ? "translateX(0)" : "translateX(-100%)")};

    @media (max-width: ${({ theme }) => theme.mobile}) {
      width: 100%;
    }

    a {
      font-size: 2rem;
      text-transform: uppercase;
      padding: 2rem 0;
      font-weight: bold;
      letter-spacing: 0.5rem;
      color: ${({ theme }) => theme.primaryOne};
      text-decoration: none;
      transition: color 0.3s linear;

      @media (max-width: ${({ theme }) => theme.mobile}) {
        font-size: 1.5rem;
        text-align: center;
      }

      &:hover {
        color: ${({ theme }) => theme.primaryHover};
      }
    }
  }
`;

export default StyledSideMenu;
