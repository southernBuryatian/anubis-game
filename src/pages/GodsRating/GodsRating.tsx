import { useSelector } from 'react-redux';
import React from 'react';
import ComputerAppWrapper from '../../components/ComputerAppWrapper/ComputerAppWrapper';
import { GodsRatingConfig } from '../../config/godsRatingConfig';
import store from '../../reducers/store';
import { Container, Text } from 'nes-ui-react';

function GodsRating() {
  const currentTimeBlock = useSelector((state: ReturnType<typeof store.getState>) => state.time).currentTimeBlock;

  const providence = useSelector((state: ReturnType<typeof store.getState>) => state.providence).providenceAmount;
  const AnubisRatingDummy = [];
  // dirty, but works flawlessly and avoids inserting into a sorted array
  for (let i = 0; i <= currentTimeBlock; i++) {
    AnubisRatingDummy.push(providence);
  }
  const todayRating = [...GodsRatingConfig, {name: 'Anubis', rating: AnubisRatingDummy}];
  todayRating.sort((a, b) => Math.max(b.rating[currentTimeBlock]) - Math.max(a.rating[currentTimeBlock]));

  const content = todayRating.map((god) => {
    return (
      <div
        key={god.name}>
        <Container
          title={god.name}
          alignTitle="center"
          style={{backgroundColor: 'cornflowerblue'}}
        >
          <Text
            size='xlarge'
            centered={true}
          >
            {god.rating[currentTimeBlock]}
          </Text>
        </Container>
     </div>)
  });

  return (
    <ComputerAppWrapper>
      { content }
    </ComputerAppWrapper>
  )
}

export default GodsRating;
