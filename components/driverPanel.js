import styled from 'styled-components'

const driverPanelBase = ({
  actions: { closeDriverPanel },
  data: { Driver },
  className,
  driverPanelIsOpen,
  selectedDriver
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
