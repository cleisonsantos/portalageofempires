import { useState, useEffect } from "react";
import Image from 'next/image'
import Link from 'next/link'
import styles from '../../styles/Header.module.css'
import logo from '../../public/logo.svg'

const Header = () => {

    const [civis, setCivis] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const res = await fetch(`http://localhost:8001/api/list-civs`)
                setCivis(await res.json())
            } catch (error) {
                console.log(error)
            }
        }
        fetchData()
    }, [])
    
    console.log(civis)
    return (
        <header className={styles.navbar}>
            <Link href='/' passHref >
                <Image height={100} width={250} src={logo} alt='' />
            </Link>
            <nav >
                <ul>
                    <li>
                        <Link href='/civis' >
                            Civilizações
                        </Link>

                        <div>
                            <ul>
                            {
                                civis.map((civ, i) => {
                                    return (
                                        <li key={i}>
                                            <Link href='/civis' >
                                                {/* <div> */}
                                                <>
                                                <Image height={10} width={10} src={civ.url_icone || 'favicon.ico'} />
                                                {civ.name}
                                                </>
                                                {/* </div> */}
                                            </Link>
                                        </li>
                                    )
                                })
                            }
                            </ul>
                        </div>

                    </li>
                    <li>
                        <Link href='#' >
                            Unidades
                        </Link>
                    </li>
                    <li>
                        <Link href='#' >
                            Notícias
                        </Link>
                    </li>
                    <li>
                        <Link href='#' >
                            Sobre
                        </Link>
                    </li>
                </ul>
            </nav>
            <ul>
                <li>
                    Buscar
                </li>
                <li>
                    Login
                </li>
            </ul>
        </header>
    )
}

export default Header