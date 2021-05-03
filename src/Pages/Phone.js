import React from "react";
import PhoneDetail from "./PhoneDetail";
import PhoneMaker from "./PhoneMaker";

import Modal from "../Modal";
import ModalCart from "../Components/Modal/ModalCart";
import { useSelector } from "react-redux";

function Phone() {
  const isModalOpen = useSelector((store) => store.modalReducer);

  return (
    <>
      <PhoneMaker />
      <PhoneDetail />
      {isModalOpen && (
        <Modal>
          <ModalCart />
        </Modal>
      )}
    </>
  );
}

export default Phone;
