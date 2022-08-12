//Usado na aula de fragment
//usado na aula de props e props avançado

import PropTypes from 'prop-types'
//usado para tipagem, fornecido pelo próprio react


function item({marca, lancamento}){
    return(
        <>
        
        <li>{marca} - {lancamento}</li>
        </>
    )
}

item.protoType = {
    marca: PropTypes.string.isRequired,
    lancamento: PropTypes.number.isRequired,
}

item.defaultProps = {
    marca: "Erro ao carregar marcar",
    lancamento: 0,
}

export default item