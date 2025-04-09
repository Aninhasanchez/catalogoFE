import React, { useState } from "react";
import "./AninhaFlix.css";

export default function AninhaFlix() {
  const [perfil, setPerfil] = useState(null);
  const [trailer, setTrailer] = useState(null);

  const voltarHome = () => {
    setPerfil(null);
    setTrailer(null);
  };

  const renderTrailer = () => {
    if (trailer === "ozark") {
      return (
        <div className="trailer" style={{ backgroundImage: "url(https://www.kolpaper.com/wp-content/uploads/2020/05/Ozark-Computer-Wallpaper.jpg)" }}>
          <h1>OZARK</h1>
          <button onClick={() => setTrailer(null)}>X</button>
          <iframe width="854" height="480" src="https://www.youtube.com/embed/99Yf1j6p9_Q" title="Ozark Trailer" allowFullScreen></iframe>
        </div>
      );
    }
    if (trailer === "orphan") {
      return (
        <div className="trailer" style={{ backgroundImage: "url(https://images8.alphacoders.com/889/889220.jpg)" }}>
          <h1>ORPHAN BLACK</h1>
          <button onClick={() => setTrailer(null)}>X</button>
          <iframe width="854" height="480" src="https://www.youtube.com/embed/n_qNp4T1wqM" title="Orphan Black Trailer" allowFullScreen></iframe>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="app">
      <header className="header">
        {!perfil && <h1>Quem está assistindo à AninhaFlix?</h1>}
      </header>

      {!perfil && (
        <div className="perfis">
          <button onClick={() => setPerfil("aninhaflix")}> 
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Netflix-new-icon.png/768px-Netflix-new-icon.png" alt="AninhaFlix" width={200} height={200} />
          </button>
        </div>
      )}

      {perfil && !trailer && (
        <div className="conteudo">
          <button onClick={voltarHome} className="trocar">Trocar de perfil</button>

          <fieldset className="box">
            <legend>Minha lista</legend>
            <button onClick={() => setTrailer("ozark")}>              
              <img src="https://i.pinimg.com/originals/98/43/45/984345168a6a67fe8a5e0cacbe1fb7dc.jpg" alt="Ozark" width={180} height={250} />
            </button>
          </fieldset>

          <fieldset className="box">
            <legend>Continuar assistindo como AninhaFlix</legend>
            <button onClick={() => setTrailer("orphan")}>              
              <img src="https://media.fstatic.com/mDsObOO58e7ZniEwbDVKwET_0Eo=/290x478/smart/media/movies/covers/2013/06/orphan-black-1a-temporada_t67865.jpg" alt="Orphan Black" width={180} height={250} />
            </button>
          </fieldset>
        </div>
      )}

      {renderTrailer()}

      <footer className="footer">
        <img src="https://www.alura.com.br/assets/img/imersoes/dev-2021/logo-imersao-aluraflix.svg" alt="logo alura" width={200} />
        <a href="https://alura.com.br/" target="_blank" rel="noopener noreferrer">
          <img src="https://www.alura.com.br/assets/img/home/alura-logo.svg" alt="Alura logo" width={50} />
        </a>
      </footer>
    </div>
  );
}
