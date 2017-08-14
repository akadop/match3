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
    <section className={className}>
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
  justify-content: space-between;
  padding: 0 2.5em 0 5em;
  position: fixed;
  width: 100%;

  .driverLeft {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1;
    margin-top: -25px;
    > img {
      align-self: center;
      animation: ${pulsingHeart} 2s linear infinite;
      height: auto;
      margin-bottom: 4em;
      margin-left: -2px; 
      margin-top: -10px;
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
  }

  .driverRight {
    flex: 1.1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-self: stretch;
    align-content: stretch;
    padding: 3em;
    background: #E91034;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.8);
    transform: skewX(-24deg);
    
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
