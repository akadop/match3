import styled, { injectGlobal } from 'styled-components'

import { map } from 'ramda'

// this component is not meant to be data-aware yet, so i'm just passing props that we're going eventually make meaningful with mapDispatchToProps / mapActionsToProps (redux).

const DriversList = ({
  data: { allDrivers = [] },
  selectedDriver,
  className,
  actions: { openDriverPanel, selectDriver }
}) => {
  return (
    <div className={className}>
      <div className="driversRow">
        {allDrivers.map((driver, index) =>
          <div
            key={driver.id}
            className="driverItem"
            onClick={() => {
              selectDriver({ selectedDriver: driver.id }), openDriverPanel()
            }}
          >
            <img src={driver.image.url} style={{ maxWidth: '100%' }} />
          </div>
        )}
      </div>
    </div>
  )
}

// now we style our base component and export it to make it a data-aware component, aka container

injectGlobal`
* {
  box-sizing: border-box;
}

blockquote,
body,
button,
dd,
dl,
figure,
h1,
h2,
h3,
h4,
h5,
h6,
ol,
p,
pre,
ul {
  margin: 0;
  padding: 0;
}

ol,
ul {
  list-style: none;
}

a {
  text-decoration: none;
}

button,
select {
  border: none;
  outline: none;
  background: none;
  font-family: inherit;
}

a,
button,
input,
select,
textarea {
  -webkit-tap-highlight-color: transparent;
}

:root {
  overflow-x: hidden;
  height: 100%;
}

html {
  -moz-osx-font-smoothing: grayscaled;
  -ms-text-size-adjust: 100%;
  -ms-text-size-adjust: 100%;
  -webkit-font-smoothing: antialiased;
  -webkit-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  box-sizing: border-box;
  font-size: 62.5%;
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
  max-height: 100vh;
}

body {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  font-size: 1.3rem;
  padding: 0;
  background: url('./static/bg.svg');
  background-position: cover;
}`

const SelectDriverList = styled(DriversList)`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  align-content: center;
  align-items: center;
  justify-items: flex-end;
  justify-content: flex-end;
  min-height: 100vh;
  height: 100vh;
  max-height: 100vh;
  
  .driversRow {
    display: flex;
    justify-items: center;
    align-items: center;
    align-content: center;
    justify-content: center;
    flex-wrap: wrap;
    margin-bottom: 10px;
  }

  .driverItem {
    margin: 1em;
    width: 7.5%;
    &:hover {
      color: #32325d !important;
      transform: translateY(-3px);
      box-shadow: 0 18px 35px rgba(50, 50, 93, .1), 0 8px 15px rgba(0, 0, 0, .07);
    }
  }
`

export default SelectDriverList
