import Default from '../containers/defaultContainer'
import DriverPanelContainer from '../containers/DriverPanelContainer'
import SelectDriverContainer from '../containers/SelectDriverContainer'
import WithData from '../lib/withData'
import globalStyle from '../globalStyle'

export default WithData(props =>
  <Default {...props}>
    <SelectDriverContainer />
    <DriverPanelContainer />
  </Default>
)
