import Image from "next/image";
import { Archivo_Black } from 'next/font/google';
const archivoBlack = Archivo_Black({ subsets: ['latin'], weight: "400"});
import Background from "./Background";


export default function Home() {
  {/*<section className="header-section">
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:'transparent'}} data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Brian Torres</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Pricing</a>
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="row text-white align-items-center justify-content-center">
        <div className="col-6">
          <p className={archivoBlack.className}>Hi, I'm</p>
          <span className={archivoBlack.className} style={{fontSize:"9vw", lineHeight:"0.7"}}>Brian<br/>Torres</span>
          <p className={archivoBlack.className}>Your best option for Web Solutions</p>
        </div>
        <div className="col-4">
          <img src="me/_MG_4044.png" className="img-fluid"/>
        </div>
      </div>
      <Background />
    </section>*/}
  return (
    <div style={{height:"100vh"}}>
    <Background />
    <section className="header-section">
      <nav className="navbar navbar-expand-lg" style={{backgroundColor:'transparent', pointerEvents:"all"}} data-bs-theme="dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Brian Torres</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" href="#">Home</a>
              <a className="nav-link" href="#">Features</a>
              <a className="nav-link" href="#">Pricing</a>
              <a className="nav-link disabled" aria-disabled="true">Disabled</a>
            </div>
          </div>
        </div>
      </nav>
      <div className="row text-white align-items-center justify-content-center">
        <div className="col-6">
          <p className={archivoBlack.className}>Hi, I&apos;m</p>
          <span className={archivoBlack.className} style={{fontSize:"9vw", lineHeight:"0.7"}}>Brian<br/>Torres</span>
          <p className={archivoBlack.className}>Your best option for Technology Solutions</p>
        </div>
        <div className="col-4">
          <img src="me/_MG_4044.png" className="img-fluid"/>
        </div>
      </div>
    </section>
    </div>
  );
}
