import styled from 'styled-components';
import { Header } from './header';
import { UnderConstruction } from './under-construction';
import { PageData } from './types';

const Style = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  background-color: var(--secondary-color);
`;

const Centered = styled.div`
  display: flex;
  justify-content: center;
`;

export const Page = (props: PageData) => (
  <Style>
    <Header variant='small' />
    <Centered>{''}</Centered>

    <UnderConstruction />
  </Style>
);
