import { useEffect, useState } from 'react'
import styled from '@emotion/styled'
import Error from './Error'

import useSelectMonedas from '../hooks/useSelectMonedas'

import { monedas } from '../data/monedas'

const InputSubmit = styled.input`
background-color: #07CB15;
border: none;
width: 100%;
padding: 10px;
color: #FFF;
font-weight: 700;
text-transform: uppercase;
font-size: 20px;
border-radius: 5px;
margin-top: 30px;
transition: background-color .3s ease;

&:hover {
    background-color: #11fc21;
    cursor: pointer;
}
`

const Formulario = ({setMonedas}) => {

    const [criptos, setCriptos] = useState([])
    const [error, setError] = useState(false)

    const [moneda, SelectMoneda] = useSelectMonedas('Tipo de Cambio:', monedas)
    const [criptomoneda, SelectCriptomoneda] = useSelectMonedas('Criptomoneda:', criptos)

    useEffect(() => {
        const consultarAPI = async () => {
            const url = "https://min-api.cryptocompare.com/data/top/mktcapfull?limit=25&tsym=USD"
            const respuesta = await fetch(url)
            const resultado = await respuesta.json()

            const arrayCriptos = resultado.Data.map(cripto => {
                const obj = {
                    id: cripto.CoinInfo.Name,
                    nombre: cripto.CoinInfo.FullName
                }

                return obj
            })

            setCriptos(arrayCriptos)

        }
        consultarAPI()
    }, [])

    const handleSubmit = e => {
        e.preventDefault()

        if ([moneda, criptomoneda].includes('')) {
            setError(true)
            return
        }

        setError(false)
        setMonedas({
            moneda,
            criptomoneda
        })
    }

    return (
        <>
            {error && <Error>Por favor, llene todos los campos</Error>}
            <form onSubmit={handleSubmit}>
                <SelectMoneda />
                <SelectCriptomoneda />
                <InputSubmit type="submit" value="Cotizar" />
            </form>
        </>
    )
}

export default Formulario