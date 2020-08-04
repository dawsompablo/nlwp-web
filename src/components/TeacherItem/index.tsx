import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img src="https://avatars3.githubusercontent.com/u/38766471?s=460&v=4" alt="Pablo Dawson" />
        <div>
          <strong>Pablo Dawson</strong>
          <span>Informática</span>
        </div>
      </header>

      <p>
        Formação técnica em Informática com mais de 800h de estudo e com alguns serviços para pequenas empresas.
            <br />
        <br />
            Gosto bastante de aprender e ensinar.
          </p>

      <footer>
        <p>
          Preço/hora
              <strong>R$ 30,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  )
}

export default TeacherItem;