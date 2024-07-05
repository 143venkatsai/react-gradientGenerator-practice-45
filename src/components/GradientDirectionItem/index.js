// Write your code here
import {GradientItem, GradientButton} from './styledComponents'

const GradientDirectionItem = props => {
  const {eachOption, isActive, gradientItemDirection} = props
  const {displayText, value} = eachOption

  const onClickGradientDirection = () => {
    gradientItemDirection(value)
  }

  return (
    <GradientItem>
      <GradientButton
        type="button"
        isActive={isActive}
        onClick={onClickGradientDirection}
      >
        {displayText}
      </GradientButton>
    </GradientItem>
  )
}

export default GradientDirectionItem
