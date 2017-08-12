import DriverPanelContainer from '../containers/DriverPanelContainer'
import SelectDriverContainer from '../containers/SelectDriverContainer'
import WithData from '../lib/withData'
import globalStyle from '../globalStyle'

export default WithData(props =>
  <div {...props}>
    <DriverPanelContainer />
    <SelectDriverContainer />
  </div>
)
