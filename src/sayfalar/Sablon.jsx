import { Outlet, Link } from "react-router-dom"

function Sablon() {

    return (
        <>
            <header className="container">
                <h1>Sayfa Üst Bölümü</h1>
                <nav className="nav d-flex gap-3">
                    <Link className="btn btn-success" to="/">Ana sayfa</Link>
                    <Link className="btn btn-success"  to="/hakkimizda">Hakkımızda</Link>
                    <Link className="btn btn-success"  to="/ekibimiz">Ekibimiz</Link>
                    <Link className="btn btn-success"  to="/iletisim">İletişim</Link>
                </nav>
            </header>
            
            <section className="container">
                <Outlet />
            </section>

            <footer className="container">SAYFA EN ALT BÖLÜM</footer>
        </>
    )
}

export default Sablon