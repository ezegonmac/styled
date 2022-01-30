import styled, { keyframes } from "styled-components"

const P = styled.p`
  font-style: 24px;
  color: red;
`

const Content = styled.div`
  padding: 20px 25px;
`

const Button = styled.button`
  background-color: ${props => props.primary? 'red' : 'white'};
  color: ${props => props.primary? 'white' : 'red'};
  padding: 10px 15px;
  border: 2px solid red;
  border-radius: 4px;

  &:hover {
    box-shadow: 1px 2px 5px rgb(0, 0, 0, 0.3);
  }

  &.secondary {
    color: blue;
    border: 2px solid blue;
  }

  .info {
    font-size: 28px;
  }
`

const BlockButton = styled(Button)`
  width: 100%;
  font-size: 24px;
`

const Link = ({ className, ...props}) => {
  return <a className={className} {...props}></a>
}

const StyledLink = styled(Link)`
  color: blue;
`

// const Input = ({ className }) => {
//   return <input type="text" className={className}></input>
// }
//  ===== >>

const Input = styled.input.attrs(props => ({
  type: 'text',
  color: props.color || 'red'
}))`
  font-size: 20px;
  border: 1px solid yellow;
  color: ${props => props.color};
`

const Password = styled(Input).attrs({
  type: 'password',
})``

const girar = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const Rotar = styled.div`
  display: inline-block;
  animation: ${girar} 2s linear infinite;
`

function App() {
  return (
    <Content>
      <P>Hola soy un parrafo</P>
      <Button>Enviar</Button>
      <Button primary>Enviar <p className="info">Info</p></Button>
      <Button className="secondary">Enviar</Button>
      <BlockButton>Enviar</BlockButton>
      <BlockButton primary as="a" href="#">Enviar</BlockButton>
      <Link>Link</Link>
      <StyledLink>Link con estilo</StyledLink>
      <Input color="green"></Input>
      <Password></Password>
      <br/>

      <Rotar>Estoy girando</Rotar>
    </Content>
  );
}

export default App;
