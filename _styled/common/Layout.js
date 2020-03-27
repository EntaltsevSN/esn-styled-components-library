import styled from 'styled-components';

const Layout = styled.div`
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
  'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
  sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;

  ${props => {
    switch(props.type) {
      case 'flex':
        return `
          display: flex;
          flex-wrap: wrap;
        `;
      case 'grid':
        return `
          display: grid;
        `;
      case 'undefined':
        break;
      default:
        break;
    }
  }}
`

export default Layout;