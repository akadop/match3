import DriverPanelContainer from '../containers/DriverPanelContainer'
import SelectDriverContainer from '../containers/SelectDriverContainer'
import WithData from '../lib/withData'
import globalStyle from '../globalStyle'

export default WithData(props =>
  <main {...props}>
    <div className="black-gradient">
      <DriverPanelContainer
        imageAlt="Broken Hearts at Match"
        imageSrc="./static/brokenHeart.svg"
        subHeading="There is no love found on these streets."
        title="Mario Kart @ Match"
      >
        <SelectDriverContainer />
      </DriverPanelContainer>
    </div>
  </main>
)
