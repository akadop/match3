import { map } from 'ramda'
import styled from 'styled-components'

// this component is not meant to be data-aware yet, so i'm just passing props that we're going eventually make meaningful with mapDispatchToProps / mapActionsToProps (redux).

const DriversList = ({
  actions: { openDriverPanel, selectDriver },
  data: { allDrivers = [] },
  selectedDriver,
  className
}) => {
  return (
    <div className={className}>
      <div className="driversRow">
        {allDrivers.map((driver, index) =>
          <div
            key={driver.id}
            className="driverItem"
            onClick={() => {
              selectDriver({ selectedDriver: driver.id }), openDriverPanel()
            }}
          >
            <img src={driver.image.url} style={{ maxWidth: '100%' }} />
          </div>
        )}
      </div>
    </div>
  )
}

// now we style our base component and export it to make it a data-aware component, aka container

const SelectDriverList = styled(DriversList)`
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  height: 100vh;
  justify-content: flex-end;
  justify-items: flex-end;
  max-height: 100vh;
  min-height: 100vh;
  
  .driversRow {
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    margin-bottom: 10px;
  }

  .driverItem {
    margin: 1.5em;
    border-radius: 60px;
    width: 8.5%;
    
    &:hover {
      color: #32325d !important;
      transform: translateY(-3px);
      box-shadow: 0 18px 35px rgba(50, 50, 93, .1), 0 8px 15px rgba(0, 0, 0, .07);
    }
  }
`

export default SelectDriverList
