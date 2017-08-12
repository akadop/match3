import styled from 'styled-components'

// this component is not meant to be data-aware yet
// eventually make meaningful with mapDispatchToProps / mapActionsToProps (redux).

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
  justify-content: flex-end;
  justify-items: flex-end;
  
  .driversRow {
    align-content: center;
    align-items: center;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    justify-items: center;
    padding-right: 4em;
    padding-left: 4em;
  }

  .driverItem {
    margin: 1.5em;
    border-radius: 100px;
    width: 8.0%;
    
    &:hover {
      color: #32325d !important;
      transform: translateY(-3px);
      box-shadow: 0 18px 35px rgba(50, 50, 93, .1), 0 8px 15px rgba(0, 0, 0, .07);
    }
  }
`

export default SelectDriverList
