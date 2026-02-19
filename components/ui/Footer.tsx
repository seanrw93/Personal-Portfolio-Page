"use client";

import { useState } from "react";
import { useTranslation } from "@/context/TranslationContext";
import { Modal } from "@/components/ui/Modal";
import { BsGithub, BsLinkedin, BsEnvelopeAt } from "react-icons/bs";

const Footer = () => {
  const { translations } = useTranslation();
  const { footerContent, modal } = translations?.common?.footer || {};
  
  const [isModalOpen, setIsModalOpen] = useState(false);

  const modalTitles = modal ? Object.values(modal).map((item) => item.title) : [];
  const modalContents = modal ? Object.values(modal).map((item) => item.content) : [];

  const modalSections = modalTitles.map((title, index) => (
    <div key={index} className="mb-4">
      <h3 className="text-lg font-semibold text-gray-700">{title}</h3>
      <p className="mt-2 text-gray-600">{modalContents[index]}</p>
    </div>
  ));

  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <h2 className="footer__cta">
            {footerContent?.cta}
          </h2>
          <div className="footer__contact">
            <a href="mailto:s.roennau_wergen@proton.me" aria-label="Email">
              <BsEnvelopeAt size={24} />
            </a>
            <a
              href="https://github.com/seanrw93"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
            >
              <BsGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/sean-roennau-wergen"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <BsLinkedin size={24} />
            </a>
          </div>
          <p className="footer__text">
            &copy; {new Date().getFullYear()} Sean Roennau-Wergen · {footerContent?.allRights}
          </p>
          <button 
            className="footer__legal"
            onClick={() => setIsModalOpen(true)}
          >
            {footerContent?.legalNotice}
          </button>
        </div>
      </footer>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <Modal.Title>
          <h2 className="text-2xl font-bold">
            {modal?.title}
          </h2>
        </Modal.Title>
        <Modal.Content>
          {modalSections}
        </Modal.Content>
        <Modal.Actions>
          <button
            onClick={() => setIsModalOpen(false)}
            className="bg-pink-600 text-white px-4 py-2 rounded hover:bg-pink-700"
          >
            Close
          </button>
        </Modal.Actions>
      </Modal>
    </>
  );
};

export default Footer;