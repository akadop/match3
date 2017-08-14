import { injectGlobal, keyframes } from 'styled-components'

const backgroundScroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-620px);
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
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
  height: 100%;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
  width: 100%;
}

body {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
    "Oxygen", sans-serif;
  color: white;
  display: block;
  font-size: 16px;
  font-weight: normal;
  background-color: #2d2d2d;
}

.animatedBg {
  animation: ${backgroundScroll} 30s linear infinite;
  background-color: #2d2d2d;
  background-image: url('./static/marioKartItems.png');
  background-position: cover;
  background-repeat: repeat;
  background-size: 928px auto;
  bottom: 0;
  box-sizing: content-box;
  height: 100%;
  left: 0;
  opacity: 0.06;
  padding-right: 100%;
  position: absolute;
  right: 0;
  top: 0;
  white-space: nowrap;
  width: 1200px;
  z-index: -1;
}

h1 {
  font-size: 6em;
  font-style: italic;
  font-weight: 800;
  letter-spacing: -0.05em;
  text-transform: uppercase;
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
