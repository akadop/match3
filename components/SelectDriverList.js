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
      <h1>Select Your Character</h1>
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
  )
}

// now we style our base component and export it to make it a data-aware component, aka container

const SelectDriverList = styled(DriversList)`
  display: flex;
  flex-wrap: wrap;
  justify-items: flex-start;
  width: 100%;

  .driverItem {
    padding: 1.2em;
    width: 21%;
    z-index: 99;
    &:hover {
      color: #32325d !important;
      transform: translateY(-3px);
    }
  }
`

export default SelectDriverList
