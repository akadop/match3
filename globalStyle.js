import { injectGlobal, keyframes } from 'styled-components'

const backgroundScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-300px);
  }
`

const globalStyle = injectGlobal`
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

:root {
  overflow-x: hidden;
  height: 100%;
}

html {
  -moz-osx-font-smoothing: grayscaled;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  min-height: 100vh;
  height: 100%;
  text-rendering: optimizeLegibility;
  width: 100%;
}

body {
  background-color: #2d2d2d;
  color: white;
  display: block;
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
  "Oxygen", sans-serif;
  font-size: 16px;
  font-weight: normal;
  overflow: hidden;
}

.animatedBg {
  animation: ${backgroundScroll} 30s linear infinite;
  background-color: #2d2d2d;
  background-image: url('./static/marioKartItems.png');
  background-position: cover;
  background-size: 1200px auto;
  bottom: 0;
  box-sizing: content-box;
  height: 100%;
  left: 0;
  opacity: 0.10;
  padding-right: 100%;
  position: absolute;
  right: 0;
  top: 0;
  white-space: nowrap;
  width: 1200px;
  z-index: -1;
}

h1 {
  font-size: 5.4em;
  font-style: italic;
  font-weight: 800;
  letter-spacing: -0.05em;
  text-transform: uppercase;
  
  @media only screen and (max-width: 1400px) {
    font-size: 4.4em;
  }

  @media only screen and (max-width: 1250px) {
    font-size: 4.2em;
  }

  @media only screen and (max-width: 720px) {
    font-size: 3.4em;
  }

  @media only screen and (max-width: 520px) {
    font-size: 2.8em;
  }
}

p {
  font-size: .9em;
  opacity: .5;
}

.black-gradient {
  background: linear-gradient(0deg,rgba(0,0,0,.9),transparent);
  bottom: 0;
  height: 100%;
  left: 0;
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  z-index: 0;
}
`

export default globalStyle
