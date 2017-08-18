import styled, { keyframes } from 'styled-components'

import SelectDriverContainer from '../containers/SelectDriverContainer'

// base component
const driverPanelBase = ({
  actions: { closeDriverPanel },
  data: { Driver },
  className,
  driverPanelIsOpen,
  selectedDriver
}) => {
  return (
    <section className={className}>
      <div className="driverLeft">
        <img src="./static/brokenHeart.svg" alt="Broken Hearts at Match" />
        <h1 className="driverLeft-Title">Mario Kart. Match Style.</h1>
        <p>Broken Hearts at Match</p>
      </div>
      {Driver && driverPanelIsOpen
        ? <div className="driverSelected" onClick={closeDriverPanel}>
            <h1>
              {Driver.name}
            </h1>
            <img
              src={Driver.background.url}
              style={{ maxWidth: '80%', margin: 'auto' }}
            />
            <audio src={Driver.soundOnSelect.url} autoPlay="true" />
          </div>
        : <div className="driverRight">
            <SelectDriverContainer />
          </div>}
    </section>
  )
}

// animation for the heart image
const pulsingHeart = keyframes`
  0% { transform: scale(1); }
  30% { transform: scale(1); }
  40% { transform: scale(1.08); }
  50% { transform: scale(1); }
  60% { transform: scale(1); }
  70% { transform: scale(1.05); }
  80% { transform: scale(1); }
  100% { transform: scale(1); }
`

// styling our base component
export const DriverPanel = styled(driverPanelBase)`
  align-items: center;
  display: flex;
  height: 100%;
  padding: 0 2.5em 0 5em;
  position: fixed;

  .driverLeft {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-right: 2em;
    width: 50%;
    > img {
      align-self: center;
      animation: ${pulsingHeart} 2s linear infinite;
      margin-bottom: 2em;
      margin-top: 1em;
      width: 15em;
    }
  }

  .driverRight {
    display: flex;
    width: 50%;
    height: 100%;
    flex-wrap: wrap;
    align-content: center;
    justify-content: center;
  }

  .driverSelected {
    align-content: flex-end;
    align-self: center;
    justify-content: center;
    justify-items: center;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    width: 50%;

    h1 {
      position: relative;
      text-align: right;
      &:before {
        background-color: #27ae60;
        bottom: .08em;
        content: "";
        display: block;
        height: 1.15em;
        position: absolute;
        transform: skewX(-24deg);
        width: 200%;
        z-index: -1;
      }
    }
  }
`
