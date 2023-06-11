import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  margin: 24px;
  gap: 24px;
`;

export const List = styled.ul`
  display: inline-flex;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const ListInfo = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 12px;
  list-style: none;
  margin: 0;
  padding: 0;
  list-style-type: none;
`;

export const LinkInfo = styled(Link)`
  text-decoration: none;
  font-weight: 600;
  font-size: 18px;
  color: #191d1e;

  &:hover {
    color: tomato;
  }
`;
