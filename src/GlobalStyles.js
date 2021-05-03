import { createGlobalStyle } from 'styled-components'

export const GlobalStyles = createGlobalStyle`

html {
  --scrollbarBG: #C1EDCC;
  --thumbBG: #90A4AE;
}
body::-webkit-scrollbar {
  width: 11px;
}
body {
  scrollbar-width: thin;
  scrollbar-color: var(--thumbBG) var(--scrollbarBG);
}
body::-webkit-scrollbar-track {
  background: var(--scrollbarBG);
}
body::-webkit-scrollbar-thumb {
  background-color: var(--thumbBG) ;
  border-radius: 6px;
  border: 3px solid var(--scrollbarBG);
}

html {
	scroll-behavior: smooth;
	color: #414361;
}

body{
	background-color: #C1EDCC;
  max-width: 100vw;
  overflow-x: hidden;
	font-family: 'Josefin Sans', sans-serif;
}

  body, div, dl, dt, dd, ul, ol, li, h1, h2, h3, h4, h5, h6, pre, 
form, fieldset, input, p, blockquote, table, th, td, embed, object {
	padding: 0;
	margin: 0; 
	}
table {
	border-collapse: collapse;
	border-spacing: 0;
	}
fieldset, img, abbr {
	border: 0;
	}
address, caption, cite, code, dfn, em, 
h1, h2, h3, h4, h5, h6, strong, th, var {
	font-weight: normal;
	font-style: normal;
	}
ul {
	list-style: none;
	}
caption, th {
	text-align: left;
	}
h1, h2, h3, h4, h5, h6 {
	font-size: 1.0em;
	}
q:before, q:after {
	content: '';
	}
a, ins {
	text-decoration: none;
	}
`