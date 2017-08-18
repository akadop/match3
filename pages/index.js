import DriverPanelContainer from '../containers/DriverPanelContainer'
import WithData from '../lib/withData'
import globalStyle from '../globalStyle'

export default WithData(props =>
  <main>
    <div className="animatedBg" />
    <div className="black-gradient" />
    <DriverPanelContainer />
  </main>
)
