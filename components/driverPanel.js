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
      <div className="driverLeft">
        <h1>Mario Kart, Match edition.</h1>
        <p>A little less dangerous than driving on US75.</p>
      </div>
      {Driver && driverPanelIsOpen
        ? <div className="driverRight" onClick={closeDriverPanel}>
            <h1>
              {Driver.name}
            </h1>
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
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;

  .driverLeft {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: 50px;

    > img {
      align-self: center;
      animation: music-icon 100s linear infinite;
      height: auto;
      margin-bottom: 3em;
      width: 20em;
    }

    h1 {
      position: relative;
      margin: 0 0 1rem;
      
      &:before {
        background-color: #1044E9;
        bottom: .12em;
        box-shadow: 0 5px 80px, 4px, rgba(black, .5);
        content: "";
        display: block;
        height: 1.23em;
        left: -95%;
        position: absolute;
        transform: skewX(-24deg);
        width: 200%;
        z-index: -1;
      }
    }

    p {
      font-size: .9em;
      opacity: .4;
    }
}`
