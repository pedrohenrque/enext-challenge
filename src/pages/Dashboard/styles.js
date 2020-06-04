import styled, { css } from 'styled-components';
import { shade } from 'polished';

export const Container = styled.div`
  flex: 1;
  max-width: 980px;
`;

export const Breeds = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: space-between;

  h1 {
    color: #ff79c6;
    font-family: Roboto;
  }
  button {
    flex: 1;
    margin-left: 5px;
    background: #bd93f9;
    border: none;
    transition: 0.2s;
    border-radius: 4px;

    &:hover {
      background: ${shade(0.2, '#bd93f9')};
    }
  }
`;

export const SelectBreeds = styled.select`
  margin-left: 10px;
  background: #424549;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 16px;
  color: #fff;

  option {
    margin-top: 10px;
    font-size: 16px;
    color: #fff;
  }
`;

export const SearchForms = styled.form`
  flex: 1;
  align-items: center;
  text-align: center;

  input {
    width: 100%;
    margin-top: 50px;
    border: none;
    padding: 10px 20px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.1);
    color: #fff;

    &::placeholder {
      color: #a8a8b3;
    }
  }

  > button {
    margin-top: 20px;
    border-radius: 4px;
    font-size: 20px;
    padding: 10px 25px;
    border: none;
    background: #50fa7b;
    transition: 0.2s;

    &:hover {
      background: ${shade(0.2, '#50fa7b')};
    }
  }

  > div {
    display: flex;
    justify-content: space-between;
  }
`;

export const ColorView = styled.div`
  margin-top: 10px;
  padding: 10px;
  p {
    color: #fff;
  }
  button {
    margin-top: 10px;
    width: 35px;
    height: 35px;
    border-radius: 50%;
    border: 6px solid #fff;

    & + button {
      margin-left: 10px;
    }
  }
`;

export const FontView = styled.div`
  margin-top: 10px;
  padding: 10px;
  text-align: right;
  p {
    color: #fff;
  }
  button {
    margin-top: 10px;
    border: none;
    padding: 5px 15px;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.2);
    color: #fff;
    transition: 0.2s;

    & + button {
      margin-left: 10px;
    }

    &:hover {
      box-shadow: 0px 0px 10px rgba(255, 255, 255, 0.3);
    }
  }
`;

export const Title = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;

  img {
    width: auto;
    height: 50px;
  }

  h1 {
    font-size: 50px;
    color: #fff;
  }
`;

export const CustomDog = styled.div`
  margin-top: 60px;
  display: flex;
  justify-content: center;
  align-items: center;

  div {
    background: #fff;
    max-width: 300px;
    text-align: center;

    h1 {
      padding: 25px;
      text-align: center;
    }

    img {
      padding: 10px;
      width: 300px;
      height: 350px;
      object-fit: cover;
    }
  }
`;

export const Modal = styled.div`
  display: flex;
  width: 170px;
  height: 50px;
  top: 20px;
  right: 30px;
  position: absolute;
  background: #6272a4;
  align-items: center;
  text-align: center;
  border-radius: 4px;
  opacity: 0;
  transition: 0.4s;

  button {
    border: none;
    background: none;
    color: #ff79c6;
    margin: 0 10px;
  }

  ${(props) =>
    props.hasOpen &&
    css`
      opacity: 1;
    `}
`;

export const TextModal = styled.h3`
  color: #8be9fd;
  font-weight: 400;
`;
