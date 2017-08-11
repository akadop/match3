import styled from 'styled-components'

const driverPanelBase = ({
  data: { Driver },
  className,
  driverPanelIsOpen,
  selectedDriver,
  actions: { closeDriverPanel }
}) => {
  return Driver
    ? <div className={className} onClick={closeDriverPanel}>
        <h4>
          {Driver.name}
        </h4>
        <audio src={Driver.soundOnSelect.url} autoPlay="true" />
      </div>
    : null
}

export const DriverPanel = styled(driverPanelBase)`
display: flex;
`
