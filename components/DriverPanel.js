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
        ? <div className="driverSelected" onClick={closeDriverPanel}>
            <h1>
              {Driver.name}
            </h1>
            <img
              src={Driver.background.url}
              style={{ maxWidth: '90%', margin: 'auto' }}
            />
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
    margin-right: 2em;
    flex: 1;
    width: 40%;
    > img {
      align-self: center;
      animation: ${pulsingHeart} 2s linear infinite;
      margin-bottom: 2em;
      margin-top: 1em;
      width: 16em;
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
  }

  .driverRight {
    align-content: stretch;
    align-self: stretch;
    background: #E91034;
    box-shadow: 0 5px 100px 0 rgba(0, 0, 0, 0.8);
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    flex: 1.1;
    justify-content: center;
    padding: 5em;
    transform: skewX(-24deg);
    
    > * {
      transform: skewX(24deg);
    }

    h1 {
      position: relative;
      text-align: right;
      &:before {
        background-color: #1044E9;
        bottom: .12em;
        box-shadow: 0 5px 80px, 4px, rgba(black, .5);
        content: "";
        display: block;
        height: 1.15em;
        left: -18%;
        position: absolute;
        transform: skewX(-24deg);
        width: 200%;
        z-index: -1;
      }
    }
  }

    .driverSelected {
      align-content: stretch;
      align-self: stretch;
      justify-content: center;
      display: flex;
      flex-direction: column;
      flex: 1.1;
      
      h1 {
        position: relative;
        text-align: right;
        &:before {
          background-color: #27ae60;
          bottom: .12em;
          box-shadow: 0 5px 80px, 4px, rgba(black, .5);
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