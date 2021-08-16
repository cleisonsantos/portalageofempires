import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import Header from '../../src/components/Header'
import axios from 'axios'
import ListaCivilizacao from '../../src/components/ListaCivilizacao'

const Civ = () => {
    const router = useRouter()
    const { id } = router.query
    const [civilizacao, setCivilizacao] = useState([])
    
    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://localhost:8000/api/list-civ/${id}`)
                setCivilizacao(response.data)
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [id])


    return (
        <div>
            <Header />
            <ListaCivilizacao civilizacao={civilizacao}/>
        </div>

    )
}

export default Civ
