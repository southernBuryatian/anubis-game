import { Heading, Hr, Text } from 'nes-ui-react';
import React, { useEffect } from 'react';
import ComputerAppWrapper from '../../components/ComputerAppWrapper/ComputerAppWrapper';
import { useDispatch } from 'react-redux';
import { GodsCharacters, openScriptLine } from '../../reducers/dialogueReducer';

function Creators() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(openScriptLine({text: "Creators? I don't know any of them. Must be someone powerful?", speaker: GodsCharacters.Anubis}));
  }, [])

  return (
    <ComputerAppWrapper>
      <Heading size='large' centered>Creators</Heading>

      <Hr color="primary" height={1} />
      <Hr color="error" height={2} />

      <Text size='large' color="color27">
        Sasha Faleychik - @southernBuryatian on github and itch.io - was doing all the code and pretty much everything else.
        <a
          style={{fontSize: '1em'}}
          href="mailto:sasha.faleychik@gmail.com">
          You can mail me!
        </a>
      </Text>
      <Hr color="error" height={2} />
      <Hr color="success" height={2} />

      <Text size='large' color="color27">
        Tatiana Rajala was working on narrative design, pictures and an overall vibe of the game. Despite of her busy life!
        <a target="_blank"
           style={{fontSize: '1em'}}
           rel="noreferrer"
           href="https://www.linkedin.com/in/tatiana-andreeva-05457b1a6/"
           className="nes-ui-anchor">
          Find her on LinkedIn!
        </a>
      </Text>
      <Hr color="success" height={2} />
      <Hr color="primary" height={1} />

      <Text color="color3B">
          We also want to thank:
      </Text>
      <Text color="color3B">
        <a target="_blank"
           style={{fontSize: '1em'}}
           rel="noreferrer"
           href="https://github.com/kyr0/nes-ui-react"
           className="nes-ui-anchor">
          kyr0
        </a>
        for their nes-ui-react library;
      </Text>
      <Text color="color3B">
        https://www.flaticon.com for their free icons;
      </Text>
      <Text color="color3B">
        Terry A. Davis for the beautiful idea of TempleOS;
      </Text>
      <Text color="color3B">
        <a
          target="_blank"
          rel="noreferrer"
          style={{fontSize: '1em'}}
           href="https://commons.wikimedia.org/wiki/User:Jeff_Dahl"
           className="nes-ui-anchor">
          Jeff_Dahl from Wikipedia
        </a>
         for Anubis picture;
      </Text>

      <Text color="color3B">
          www.vectorportal.com for Isis picture;
      </Text>

      <Text color="color3B">
        Alex Müller for enthusiasm;
      </Text>

      <Text color="color3B">
        pngtree.com for scales picture.
      </Text>
      <Hr color="primary" height={1} />

    </ComputerAppWrapper>
  )
}

export default Creators;
