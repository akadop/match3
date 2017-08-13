import DriverPanelContainer from '../containers/DriverPanelContainer'
import SelectDriverContainer from '../containers/SelectDriverContainer'
import WithData from '../lib/withData'
import globalStyle from '../globalStyle'

export default WithData(props =>
  <div {...props} className="black-gradient">
    <DriverPanelContainer
      imgAlt="Broken Hearts at Match"
      imgSrc="./static/brokenHeart.svg"
      subHeading="No love found here."
      title="Mario Kart @ Match"
    >
      <SelectDriverContainer />
    </DriverPanelContainer>
  </div>
)
