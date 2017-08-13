import styled, { keyframes } from 'styled-components'

const driverPanelBase = ({
  actions: { closeDriverPanel },
  data: { Driver },
  className,
  children,
  driverPanelIsOpen,
  imgAlt,
  imgSrc,
  selectedDriver,
  subHeading,
  title
}) => {
  return (
    <div className={className}>
      <div className="driverLeft">
        <img src={imgSrc} alt={imgAlt} />
        <h1>
          {title}
        </h1>
        <p>
          {subHeading}
        </p>
      </div>
      {Driver && driverPanelIsOpen
        ? <div className="driverRight" onClick={closeDriverPanel}>
            <p>
              {Driver.name}
            </p>
            <audio src={Driver.soundOnSelect.url} autoPlay="true" />
          </div>
        : <div className="driverRight">
            {children}
          </div>}
    </div>
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
  align-content: center;
  align-items: center;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  height: 100vh;

  .driverLeft {
    flex: 1;
    display: flex;
    flex-direction: column;
    margin-top: -50px;
    > img {
      align-self: center;
      animation: ${pulsingHeart} 2s linear infinite;
      height: auto;
      margin-bottom: 4em;
      width: 20em;
    }

    h1 {
      position: relative;
      margin: 0 0 1.4rem;
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
  }

  .driverRight {
    align-content: center;
    align-self: stretch;
    background: #222;
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1.1;
    justify-content: center;
    padding: 4em;
    box-shadow: 0 5px 100px, 0, rgba(black, .8);
    transform: skewX(-24deg);
    
    > * {
      transform: skewX(24deg);
    }

    p {
      font-size: .8em;
      font-weight: 800;
      letter-spacing: .1em;
      color: black;
      opacity: .5;
    }
  }
`
