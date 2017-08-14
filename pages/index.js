import DriverPanelContainer from '../containers/DriverPanelContainer'
import SelectDriverContainer from '../containers/SelectDriverContainer'
import WithData from '../lib/withData'
import globalStyle from '../globalStyle'

export default WithData(props =>
  <main {...props}>
    <div className="animatedBg" />
    <div className="black-gradient" />
    <DriverPanelContainer
      imageAlt="Broken Hearts at Match"
      imageSrc="./static/brokenHeart.svg"
      subHeading="There is no love found on these streets. If you wish to return to the character selection menu, just click on the portrait of the current character selected."
      title="Mario Kart. Match Style."
    >
      <SelectDriverContainer />
    </DriverPanelContainer>
  </main>
)
