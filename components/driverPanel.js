import styled from 'styled-components'

const driverPanelBase = ({
  actions: { closeDriverPanel },
  data: { Driver },
  className,
  driverPanelIsOpen,
  selectedDriver
}) => {
  return (
    <div className={className}>
      {Driver && driverPanelIsOpen
        ? <div className="driverInfoPanel" onClick={closeDriverPanel}>
            <h2 className="title">
              {Driver.name}
            </h2>
            <audio src={Driver.soundOnSelect.url} autoPlay="true" />
          </div>
        : <div className="pageInfo" />}
    </div>
  )
}

// styling our base component

export const DriverPanel = styled(driverPanelBase)`
align-content: center;
align-items: center;
display: flex;
flex-direction: row;
flex-wrap: wrap;
justify-content: center;
justify-items: center;

.driverInfoPanel {
  width: 50%;
  display: flex;
  
  .title {
    color: : #332E48;
    font-size: 4.0rem;
    font-weight: 600;
    line-height: 1.5;
    margin: 0 auto;
    padding: 0 20px;
    text-align: center;

    @media (min-width: 48em) {
      font-size: 5.2rem;
    }
    
    @media (min-width: 62em) {
      font-size: 5.4rem;
    }
  }
}

`
