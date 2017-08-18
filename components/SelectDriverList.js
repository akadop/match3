import styled from 'styled-components'

// this component is not meant to be data-aware yet
// eventually make meaningful with mapDispatchToProps / mapActionsToProps (redux).

const DriversList = ({
  actions: { selectDriver },
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
            selectDriver({ selectedDriver: driver.id })
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
  align-content: center;
  align-self: stretch;
  background: #E91034;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: flex-end;
  padding: 4em;
  transform: skewX(-24deg);

  > * {
    transform: skewX(24deg);
  }

  h1 {
    position: relative;
    transform: skewX(24deg)
    text-align: right;
    &:before {
      background-color: #1044E9;
      bottom: .12em;
      content: "";
      display: block;
      height: 1.15em;
      left: -22%;
      position: absolute;
      transform: skewX(-24deg);
      width: 200%;
      z-index: -1;
    }
  }

  .driverItem {
    padding: 1.2em;
    width: 21%;
    z-index: 99;
    &:hover {
      color: #32325d !important;
      transform: translateY(-4px);
      > img {
        transform: skewX(24deg);
      }
    }
  }
`

export default SelectDriverList
