import { Outlet, Link } from "react-router-dom"

function Sablon() {

    return (
        <>
            <header >
                <nav >
                    <Link className="btn btn-success" to="/">Ana sayfa</Link>
                    <Link className="btn btn-success"  to="/Toplama">Toplama</Link>
                    <Link className="btn btn-success"  to="/MaliyetHesapla">Maliyet Hesapla</Link>
                </nav>
            </header>
            
            <section>
                <Outlet />
            </section>

        </>
    )
}

export default Sablon