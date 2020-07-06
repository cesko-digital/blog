import styled from 'styled-components';
import media from '../layout/media-queries';

export const MainPost = styled.div`
  width: 66%;
  padding: 10px;

  ${media.tablet} {
    width: 100%;
  }
`;

export const Press = styled.div`
  width: 34%;
  padding: 10px;

  ${media.tablet} {
    width: 100%;
  }
`;

export const Post = styled.div`
  width: 33%;
  padding: 10px;

  ${media.tablet} {
    width: 50%;
  }

  ${media.phone} {
    width: 100%;
  }
`;

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: normal;
  justify-content: flex-start;
  width: 100%;
`;
