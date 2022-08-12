//Usado na aula de fragment

import Item from './item'

function list(){
    return(
        <>
            <h1>Lista</h1>
            <ul>
                <Item marca='ferrari' lancamento={1985} />
                <Item marca='Fiat' lancamento={1985} />
                <Item marca='peugeot'  />
                <Item />
            </ul>
        </>
    )
}

export default list