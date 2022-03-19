import React from "react";
import { BodyModal } from "./BodyModal";
import { ContentModal } from "./ContentModal";
import { FooterModal } from "./FooterModal";
import { HeaderModal } from "./HeaderModal";
import { MainModal } from "./MainModal";
export const ModalSettings = () => {
  return (
    <MainModal>
      {/* <!-- Modal content --> */}
      <ContentModal>
        {/* <!-- Modal header --> */}
        <HeaderModal label="Terms of Service" />
        {/* <!-- Modal body --> */}
        <BodyModal>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            With less than a month to go before the European Union enacts new
            consumer privacy laws for its citizens, companies around the world
            are updating their terms of service agreements to comply.
          </p>
          <p className="text-base leading-relaxed text-gray-500 dark:text-gray-400">
            The European Union’s General Data Protection Regulation (G.D.P.R.)
            goes into effect on May 25 and is meant to ensure a common set of
            data rights in the European Union. It requires organizations to
            notify users as soon as possible of high-risk data breaches that
            could personally affect them.
          </p>
        </BodyModal>
        {/* <!-- Modal footer --> */}
        <FooterModal>
          <button
            data-modal-toggle="defaultModal"
            type="button"
            className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          >
            I accept
          </button>
          <button
            data-modal-toggle="defaultModal"
            type="button"
            className="text-gray-500 bg-white hover:bg-gray-100 focus:ring-4 focus:ring-gray-300 rounded-lg border border-gray-200 text-sm font-medium px-5 py-2.5 hover:text-gray-900 focus:z-10 dark:bg-gray-700 dark:text-gray-300 dark:border-gray-500 dark:hover:text-white dark:hover:bg-gray-600"
          >
            Decline
          </button>
        </FooterModal>
      </ContentModal>
    </MainModal>
  );
};
ModalSettings.displayName = "ModalSettings";
