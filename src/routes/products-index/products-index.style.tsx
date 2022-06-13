import styled from "styled-components";

export const Loading = styled.div`
  font-size: 5rem;
  font-weight: bold;

  color: #58d68d;
`;
export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;
export const ProductsIndexContainer = styled.div`
  width: 90vw;
  margin: 50px auto;
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(4, 1fr);
`;
