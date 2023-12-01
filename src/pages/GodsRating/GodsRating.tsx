import { useDispatch, useSelector } from 'react-redux';
import React, { useEffect } from 'react';
import ComputerAppWrapper from '../../components/ComputerAppWrapper/ComputerAppWrapper';
import { GodsRatingConfig, LokiCaughtTimeblock, LokiCheatingTimeblock } from '../../config/godsRatingConfig';
import store from '../../reducers/store';
import { Container, Text } from 'nes-ui-react';
import { GodsCharacters, openScriptLine } from '../../reducers/dialogueReducer';

function GodsRating() {
  const dispatch = useDispatch();

  const currentTimeBlock = useSelector((state: ReturnType<typeof store.getState>) => state.time).currentTimeBlock;
  const providence = useSelector((state: ReturnType<typeof store.getState>) => state.providence).providenceAmount;

  useEffect(() => {
    let text: string = '';
    switch (currentTimeBlock) {
      case 0:
        text = 'So colorful... Is it some kind of rating?';
        break;
      case LokiCheatingTimeblock:
        text = 'Wait, what? He must be cheating! I will never catch up on him.';
        break;
      case LokiCaughtTimeblock:
        text = 'Ha! I heard they caught Loki giving people some petition to sign. It turned out to be some tricky document about how Loki is the most moral and powerful god. They left him all he big numbers he made, but it\'s all negative now!';
        break;
    }
    if (text.length)
      dispatch(openScriptLine({text, speaker: GodsCharacters.Anubis}));
  }, []);

  const colors = ['gold', 'lightgrey', 'maroon']

  const AnubisRatingDummy = [];
  // dirty, but works flawlessly and avoids inserting into a sorted array
  for (let i = 0; i <= currentTimeBlock; i++) {
    AnubisRatingDummy.push(providence);
  }
  const todayRating = [...GodsRatingConfig, {name: 'Anubis', rating: AnubisRatingDummy}];
  todayRating.sort((a, b) => Math.max(b.rating[currentTimeBlock]) - Math.max(a.rating[currentTimeBlock]));

  const content = todayRating.map((god, index) => {
    return (
      <div
        key={god.name}>
        <Container
          title={god.name}
          alignTitle="center"
          style={{
            backgroundColor: `${colors[index] ? colors[index] : 'cornflowerblue'}`,
            color: 'black'
        }}
        >
          <Text
            size='xlarge'
            centered={true}
            color={'dark'}
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
