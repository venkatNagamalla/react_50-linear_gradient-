import {useState} from 'react'

import GradientDirectionItem from '../GradientDirectionItem'
import {
  BackgroundContainer,
  InnerContainer,
  Heading,
  Text,
  DirectionsContainer,
  FormContainer,
  ColorCode,
  Input,
  InputContainer,
  GenerateButton,
  InputLabelContainer,
} from './styledComponents'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

const GradientGenerator = () => {
  const [direction, setDirection] = useState(gradientDirectionsList[0].value)
  const [firstColor, setFirstColor] = useState('#8ae323')
  const [secondColor, setSecondColor] = useState('#014f7b')
  const [colorData, setColorData] = useState(
    `to ${gradientDirectionsList[0].value},${'#8ae323'},${'#014f7b'}`,
  )

  const updateDirection = dir => {
    setDirection(dir)
    setColorData(`to ${dir},${firstColor},${secondColor}`)
  }

  const updateFirstColor = e => {
    setFirstColor(e.target.value)
  }

  const updateSecondColor = e => {
    setSecondColor(e.target.value)
  }

  const onGenerateClick = e => {
    e.preventDefault()
    setColorData(`to ${direction},${firstColor},${secondColor}`)
  }

  return (
    <BackgroundContainer data-testid="gradientGenerator" colorData={colorData}>
      <InnerContainer>
        <Heading>Generate a CSS Color Gradient</Heading>
        <Text>Choose Direction</Text>
        <DirectionsContainer>
          {gradientDirectionsList.map(eachDirection => (
            <GradientDirectionItem
              updateDirection={updateDirection}
              key={eachDirection.directionId}
              direction={eachDirection}
              isActive={eachDirection.value === direction}
            />
          ))}
        </DirectionsContainer>
        <Text>Pick the Colors</Text>
        <FormContainer>
          <InputLabelContainer>
            <InputContainer>
              <ColorCode>{firstColor}</ColorCode>
              <Input
                value={firstColor}
                onChange={updateFirstColor}
                type="color"
              />
            </InputContainer>
            <InputContainer>
              <ColorCode>{secondColor}</ColorCode>
              <Input
                value={secondColor}
                onChange={updateSecondColor}
                type="color"
              />
            </InputContainer>
          </InputLabelContainer>
          <GenerateButton onClick={onGenerateClick} type="button">
            Generate
          </GenerateButton>
        </FormContainer>
      </InnerContainer>
    </BackgroundContainer>
  )
}

export default GradientGenerator
