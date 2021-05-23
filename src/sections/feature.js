/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from 'components/section-header';
import FeatureCard from 'components/feature-card.js';
import Performance from 'assets/feature/1.png';
import Partnership from 'assets/feature/2.png';
import Subscription from 'assets/feature/3.png';
import Support from 'assets/feature/4.png';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Q: Why did the web designer drown? A: He didn’t know if he should float:left or float:right.',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Q: Why was the web developer fired from his job? A: He was getting too Sassy.',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'Why you shouldn\'t trust JavaScript programmers? Because they make lots of promises but they never callback.',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      'Hardware - the part of a computer that you can kick!',
  },
];

export default function Feature() {
  return (
   <section sx={{variant: 'section.feature'}}>
    <Container>
      <SectionHeader slogan='Quality Features' title='Amazing useful features'/>

      <Grid sx={styles.grid}>
        {data.map((item)=>(
          <FeatureCard key={item.id} src={item.imgSrc} alt={item.altText} title={item.title} text={item.text} />
        ))}
      </Grid>
    </Container>
   </section>
  );
}

const styles = {
  grid: {
    pt: [0, null, null, null, null, null, 2],
    px: [5, 6, 0, null, 7, 8, 7],
    gridGap: [
      '40px 0',
      null,
      '45px 30px',
      null,
      '60px 50px',
      '70px 50px',
      null,
      '80px 90px',
    ],
    gridTemplateColumns: ['repeat(1,1fr)', null, 'repeat(2,1fr)'],
  },
};
