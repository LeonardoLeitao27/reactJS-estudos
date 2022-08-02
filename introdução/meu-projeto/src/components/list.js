//Usado na aula de fragment

import Item from './item'

function list(){
    return(
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca='ferrari' />
                <Item marca='Fiat' />
            </ul>
        </>
    )
}

export default list