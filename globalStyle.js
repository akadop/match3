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

export default globalStyle
