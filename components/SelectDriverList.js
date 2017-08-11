import { map } from 'ramda'
import styled from 'styled-components'

// this component is not meant to be data-aware yet, so i'm just passing props that we're going eventually make meaningful with mapDispatchToProps / mapActionsToProps (redux).

const DriversList = ({
  selectedDriver,
  className,
  actions: { openDriverPanel, selectDriver },
  data: { allDrivers = [] }
}) => {
  const mapDrivers = map(({ image, id }) =>
    <div
      key={id}
      className="driversItem"
      onClick={() => {
        selectDriver({ selectedDriver: id }), openDriverPanel()
      }}
    >
      <img src={image.url} />
    </div>
  )
  return (
    <div className={className}>
      <h2>
        {driversTitle}
      </h2>
      <div className="driversRow">
        {mapDrivers}
      </div>
    </div>
  )
}

// now we style our base component and export it to make it a data-aware component, aka container

export const SelectDriverList = styled(DriversList)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  
  .driversRow {
    display: flex;
    flex-direction: row;
    align-items: center;
    align-content: center;
    justify-items: center;
    justify-content: center;
  }

  .driversItem {
    width: 20%;
  }
`
