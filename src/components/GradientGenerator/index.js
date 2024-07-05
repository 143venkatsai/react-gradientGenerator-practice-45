import {Component} from 'react'

import {
  AppContainer,
  GradientContainer,
  Heading,
  Paragraph,
  DirectionListItems,
  ColorInputContainer,
  CustomColor,
  CustomLabel,
  CustomInput,
  GenerateButton,
} from './styledComponents'

import GradientDirectionItem from '../GradientDirectionItem'

const gradientDirectionsList = [
  {directionId: 'TOP', value: 'top', displayText: 'Top'},
  {directionId: 'BOTTOM', value: 'bottom', displayText: 'Bottom'},
  {directionId: 'RIGHT', value: 'right', displayText: 'Right'},
  {directionId: 'LEFT', value: 'left', displayText: 'Left'},
]
// Write your code here

class GradientGenerator extends Component {
  state = {
    fromInput: '#8ae323',
    toInput: '#014f7b',
    activeDirection: gradientDirectionsList[0].value,
    gradientColor: `to ${gradientDirectionsList[0].value},#8ae323,#014f7b`,
  }

  onChangeFromInput = event => {
    this.setState({fromInput: event.target.value})
  }

  onChangeToInput = event => {
    this.setState({toInput: event.target.value})
  }

  onClickGenerate = () => {
    const {fromInput, toInput, activeDirection} = this.state

    this.setState({
      gradientColor: `to ${activeDirection}, ${fromInput}, ${toInput}`,
    })
  }

  gradientItemDirection = value => {
    this.setState({activeDirection: value})
  }

  render() {
    const {fromInput, toInput, gradientColor, activeDirection} = this.state
    return (
      <AppContainer
        gradientColor={gradientColor}
        data-testid="gradientGenerator"
      >
        <GradientContainer>
          <Heading>Generate a CSS Color Gradient</Heading>
          <Paragraph>Choose Direction</Paragraph>
          <Paragraph>Pick the Colors</Paragraph>
          <DirectionListItems>
            {gradientDirectionsList.map(eachOption => (
              <GradientDirectionItem
                key={eachOption.directionId}
                eachOption={eachOption}
                isActive={activeDirection === eachOption.value}
                gradientItemDirection={this.gradientItemDirection}
              />
            ))}
          </DirectionListItems>
          <ColorInputContainer>
            <CustomColor>
              <CustomLabel>{fromInput}</CustomLabel>
              <CustomInput
                value={fromInput}
                type="color"
                onChange={this.onChangeFromInput}
              />
            </CustomColor>
            <CustomColor>
              <CustomLabel>{toInput}</CustomLabel>
              <CustomInput
                value={toInput}
                type="color"
                onChange={this.onChangeToInput}
              />
            </CustomColor>
          </ColorInputContainer>
          <GenerateButton type="button" onClick={this.onClickGenerate}>
            Generate
          </GenerateButton>
        </GradientContainer>
      </AppContainer>
    )
  }
}

export default GradientGenerator
