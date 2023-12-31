import './manager.css'
import Column from '../column/column'

export default function Manager() {
    return (
        <div className='master-div'>
            <div className='search-div grid'>
                <input className='home-search col-12' type="search" placeholder='Busca...'/>
            </div>
            <div className='columns-div grid'>
                <div className='column-container col-4'>
                    <Column></Column>
                </div>
                <div className='column-container col-4'>
                    <Column></Column>
                </div>
                <div className='column-container col-4'>
                    <Column></Column>
                </div>
            </div>
        </div>
    )
}