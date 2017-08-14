import styled, { keyframes } from 'styled-components'

// base component
const driverPanelBase = ({
  actions: { closeDriverPanel },
  data: { Driver },
  className,
  children,
  driverPanelIsOpen,
  imageAlt,
  imageSrc,
  selectedDriver,
  subHeading,
  title
}) => {
  return (
    <div className={className}>
      <div className="driverLeft">
        <img src={imageSrc} alt={imageAlt} />
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
  width: 100%;

  .driverLeft {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    margin-top: -50px;
    width: 50%;
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
    align-content: stretch;
    align-self: stretch;
    background: #222;
    box-shadow: 0 5px 100px, 0, rgba(black, .8);
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    padding: 2em;
    transform: skewX(-24deg);
    width: 50%;
    
    > * {
      transform: skewX(24deg);
    }

    p {
      color: black;
      font-size: .8em;
      font-weight: 800;
      letter-spacing: .1em;
      opacity: .5;
    }
  }
`
