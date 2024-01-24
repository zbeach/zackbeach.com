import styled from 'styled-components';
import { Header } from './header';
import { PageBody } from './page-body';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: #45496c;
`;

export const Page = () => (
  <Style>
    <Header />
    <PageBody />
  </Style>
);
