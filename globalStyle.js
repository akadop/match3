import { injectGlobal } from 'styled-components'

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

button,
select {
  background: none;
  border: none;
  font-family: inherit;
  outline: none;
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
  overflow-x: hidden;
  text-rendering: optimizeLegibility;
  text-size-adjust: 100%;
  width: 100%;
}

body {
  font-family: BlinkMacSystemFont, -apple-system, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue", "Helvetica", "Arial", sans-serif;
  background-color: #2d2d2d;
  background-position: cover;
  background: url('./static/bg.svg');
  color: white;
  display: block;
  font-size: 1.3rem;
  font-weight: normal;
  min-height: 100%;
  overflow: hidden;
  padding: 0;
  position: fixed;
  width: 100%;
}
`

export default globalStyle
