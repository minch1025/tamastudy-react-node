import React from 'react';
import { css } from '@emotion/core';
import theme from '../../theme';
import ContentFrame from '../../components/molecules/ContentFrame';
import Intro from '../../components/organisms/Contents/Intro';
import Slider from '../../components/organisms/Contents/Slider';
import News from '../../components/organisms/Contents/News';
import Banner from '../../components/organisms/Contents/Banner';
import { withRouter } from 'react-router-dom';
import setTitle from '../../utils/setTitle';

const Home = () => {
  // eslint-disable-next-line
  return (
    <>
      {setTitle('Welcome !!')}
      <ContentFrame text="Intro" css={marginBottom(4)}>
        <Intro />
      </ContentFrame>

      <ContentFrame text="Slider" css={marginBottom(8)}>
        <Slider />
      </ContentFrame>

      <ContentFrame text="News" css={marginBottom(8)}>
        <News />
      </ContentFrame>

      <ContentFrame text="Banner" css={marginBottom(8)}>
        <Banner />
      </ContentFrame>
    </>
  );
};

const marginBottom = (num = 1) => css`
  margin-bottom: ${theme.space * num}px;
`;

export default withRouter(Home);
