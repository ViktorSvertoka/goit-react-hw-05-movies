import styled from '@emotion/styled';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding-left: 15px;
  padding-right: 15px;
`;

export const NavLink = styled(Link)`
  display: inline-block;
  text-decoration: none;
  padding: 14px;
  margin-left: 10px;
  font-weight: 600;
  font-size: 18px;
  color: #191d1e;

  &:hover {
    color: #e87460;
  }
`;
