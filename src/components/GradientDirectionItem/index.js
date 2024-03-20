// Write your code here
import {DirectionButton, ListItem} from './styledComponents'

const GradientDirectionItem = props => {
  const {direction, updateDirection, isActive} = props
  const {value, displayText} = direction

  const onDirectionClick = () => {
    updateDirection(value)
  }

  return (
    <ListItem>
      <DirectionButton
        isActive={isActive}
        onClick={onDirectionClick}
        type="button"
      >
        {displayText}
      </DirectionButton>
    </ListItem>
  )
}

export default GradientDirectionItem
