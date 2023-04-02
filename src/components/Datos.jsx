import styled from "@emotion/styled"

const Contenedor = styled.div`
color: #FFF;
font-family: 'Lato', sans-serif;
display: flex;
align-items: center;
gap: 1rem;
margin-top: 30px;

@media(max-width: 454px){
  display: block;
  div{
    text-align: center;
  }
}
`
const Texto = styled.p`
font-size: 30px;
span{
    font-weight: 700;
}
`
const Texto2 = styled.p`
font-size: 18px;
span{
    font-weight: 700;
}
`

const Imagen = styled.img`

width: 150px;

`

const Datos = ({ datos }) => {

    const { PRICE, HIGHDAY, LOWDAY, CHANGEPCT24HOUR, IMAGEURL, LASTUPDATE } = datos
    return (
        <Contenedor>
            <div>
                <Imagen src={`http://cryptocompare.com/${IMAGEURL}`} alt="imagen-cripto"></Imagen>
            </div>
            <div>
                <Texto>Precio: <span>{PRICE}</span></Texto>
                <Texto2>Precio más alto del día: <span>{HIGHDAY}</span></Texto2>
                <Texto2>Precio más bajo del día: <span>{LOWDAY}</span></Texto2>
                <Texto2>Variación en las últimas 24 horas: <span>{CHANGEPCT24HOUR}</span></Texto2>
                <Texto2>Última actualización: <span>{LASTUPDATE}</span></Texto2>
            </div>
        </Contenedor>
    )
}

export default Datos