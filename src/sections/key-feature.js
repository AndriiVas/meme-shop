/** @jsx jsx */
import { jsx } from 'theme-ui';
import { Container, Grid } from 'theme-ui';
import SectionHeader from '../components/section-header';
import FeatureCardColumn from 'components/feature-card-column.js';
import Performance from 'assets/key-feature/1.png';
import Partnership from 'assets/key-feature/2.png';
import Subscription from 'assets/key-feature/3.png';
import Support from 'assets/key-feature/4.png';

const data = [
  {
    id: 1,
    imgSrc: Performance,
    altText: 'Fast Performance',
    title: 'Fast Performance',
    text:
      'Get your memes delivered at home, great family gags guaranteed!',
  },
  {
    id: 2,
    imgSrc: Partnership,
    altText: 'Partnership deal',
    title: 'Partnership deal',
    text:
      'A SEO expert walks into a bar, bars, pub, tavern, public house, Irish pub, drinks, beer, alcohol',
  },
  {
    id: 3,
    imgSrc: Subscription,
    altText: 'Pro Subscription',
    title: 'Pro Subscription',
    text:
      'Client to designer: “It doesn’t really look purple. It looks more like a mixture of red and blue.”',
  },
  {
    id: 4,
    imgSrc: Support,
    altText: 'Customer Support',
    title: 'Customer Support',
    text:
      '99 little bugs in the code, 99 little bugs in the code. Take one down, patch it around 117 little bugs in the code.',
  },
];

export default function KeyFeature() {
  return (
   <section id="feature" sx={{variant: 'section.keyFeature'}} >
      <Container>
        <SectionHeader
          slogan="What is this all about?"
          title="Meet the memes from our shop"
        />
        <Grid sx={styles.grid}>
          {data.map((item)=>(
            <FeatureCardColumn key={item.id} src={item.imgSrc} alt={item.altText} title={item.title} text={item.text} />
          ))}
        </Grid>

      </Container>
   </section>
  );
}

const styles = {
  grid: {
    width: ['100%', '80%', '100%'],
    mx: 'auto',
    gridGap: [
      '35px 0',
      null,
      '40px 40px',
      '50px 60px',
      '30px',
      '50px 40px',
      '55px 90px',
    ],
    gridTemplateColumns: [
      'repeat(1,1fr)',
      null,
      'repeat(2,1fr)',
      null,
      'repeat(4,1fr)',
    ],
  },
};
