import Image from 'next/image';
import React, { useState } from 'react';
import * as ga from '../lib/ga';
import logo from '../public/transparentLogo.png';
import ContactModal from './Modal';

export default function Header({ toast, ToastContainer }) {
  const [modalOpen, setModalOpen] = useState(false);

  const setModalState = () => {
    setModalOpen(!modalOpen);
  };

  const sendContactClicked = () => {
    ga.event({
      event_label: 'contact_form',
      action: 'generate_lead',
    });
  };
  return (
    <header>
      <div className="header-inner">
        <Image
          src={logo}
          alt="Picture of the author"
          width={150}
          height={150}
        />
        <nav>
          <ul>
            <ContactModal
              ToastContainer={ToastContainer}
              toast={toast}
              modalOpen={modalOpen}
              setModalState={setModalState}
            />
            <li className="btn">
              <button
                id="contact-us"
                onClick={() => {
                  setModalState();
                  sendContactClicked();
                }}
              >
                Contact Us
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
