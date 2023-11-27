import React, { useRef } from "react";
import "./InvoiceModal.css";
import { Modal } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import Qrticket from "./Qr-ticket";
import { ticketClicked } from "../../../redux/actions/userAction";
import { formatDateFull } from "../../../utils/formatDateFull";
import { extractOrderTime } from "../../../utils/utils";

export default function InvoiceModal({
  invoiceModal,
  handleInvoiceModalClose,
  showQrCode,
  setShowQrCode,
  exportAllTickets,
}) {
  const { user } = useSelector((state) => state.user);
  const { clickedInvoice } = useSelector((state) => state.orders);
  const dispatch = useDispatch();

  const tableRef = useRef(null);

  return (
    <>
      <Modal
        size="xl"
        aria-labelledby="contained-modal-title-vcenter"
        centered
        className="invoice_modal"
        show={invoiceModal}
        onHide={handleInvoiceModalClose}
      >
        <Modal.Body className="d-flex justify-content-center items-center half-colored-background">
          <div className="orders-body">
            {showQrCode ? (
              <Qrticket clickedInvoice={clickedInvoice} />
            ) : (
              <div className="inner-body-box">
                <p>
                  Bestellung : {clickedInvoice ? clickedInvoice?.code : ""}{" "}
                </p>
                <div className="user-pyt-prst">
                  <div className="user-inf">
                    <span>
                      {user.lastname} {user.firstname}
                    </span>
                    <div className="user-inf-icon d-flex align-items-center gap-1">
                      <svg
                        width="10"
                        height="10"
                        viewBox="0 0 10 10"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_519_5636)">
                          <path
                            d="M8.94442 2.45658C8.9094 2.22248 8.79167 2.00868 8.61256 1.85392C8.43345 1.69917 8.20482 1.61371 7.96812 1.61304H1.8889C1.65219 1.61371 1.42356 1.69917 1.24446 1.85392C1.06535 2.00868 0.947614 2.22248 0.912598 2.45658L4.92851 5.05521L8.94442 2.45658Z"
                            fill="#444790"
                          />
                          <path
                            d="M5.07434 5.60113C5.03086 5.62925 4.98019 5.6442 4.92842 5.6442C4.87665 5.6442 4.82598 5.62925 4.7825 5.60113L0.897461 3.08743V7.07136C0.897745 7.33419 1.00228 7.58618 1.18813 7.77203C1.37399 7.95788 1.62597 8.06242 1.88881 8.06271H7.96803C8.23087 8.06242 8.48285 7.95788 8.66871 7.77203C8.85456 7.58618 8.9591 7.33419 8.95938 7.07136V3.08716L5.07434 5.60113Z"
                            fill="#444790"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_519_5636">
                            <rect
                              width="8.59938"
                              height="8.59938"
                              fill="white"
                              transform="translate(0.628906 0.538086)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>{user.email}</p>
                    </div>
                  </div>
                  <div className="pyt-mtf">
                    <span>Zahlungsmethode</span>
                    <div className="user-inf-icon d-flex align-items-center gap-1">
                      <svg
                        width="12"
                        height="12"
                        viewBox="0 0 12 12"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_519_5672)">
                          <path
                            d="M10.4995 2.85864H1.50251C1.14814 2.85864 0.859863 3.14692 0.859863 3.50129V8.86441C0.859863 9.21878 1.14814 9.50706 1.50251 9.50706H10.4995C10.8539 9.50706 11.1422 9.21878 11.1422 8.86441V3.50129C11.1422 3.1469 10.8539 2.85864 10.4995 2.85864ZM1.50251 3.07285H10.4995C10.7358 3.07285 10.928 3.26499 10.928 3.50129V4.2185H1.07407V3.50129C1.07407 3.26499 1.26621 3.07285 1.50251 3.07285ZM10.4995 9.29283H1.50251C1.26621 9.29283 1.07407 9.10069 1.07407 8.86439V5.67588H10.928V8.86441C10.928 9.10069 10.7358 9.29283 10.4995 9.29283Z"
                            fill="#444790"
                          />
                          <path
                            d="M6.43492 7.06494H1.92938C1.87018 7.06494 1.82227 7.11285 1.82227 7.17206C1.82227 7.23126 1.87018 7.27917 1.92938 7.27917H6.4349C6.49411 7.27917 6.54202 7.23126 6.54202 7.17206C6.54202 7.11285 6.49413 7.06494 6.43492 7.06494Z"
                            fill="#444790"
                          />
                          <path
                            d="M4.26484 7.89185H1.92938C1.87018 7.89185 1.82227 7.93976 1.82227 7.99896C1.82227 8.05816 1.87018 8.10607 1.92938 8.10607H4.26482C4.32402 8.10607 4.37193 8.05816 4.37193 7.99896C4.37193 7.93976 4.32404 7.89185 4.26484 7.89185Z"
                            fill="#444790"
                          />
                          <path
                            d="M10.0733 7.89185H9.825C9.76573 7.89185 9.71777 7.93981 9.71777 7.99908C9.71777 8.05834 9.76573 8.10631 9.825 8.10631H10.0733C10.1325 8.10631 10.1805 8.05834 10.1805 7.99908C10.1805 7.93981 10.1325 7.89185 10.0733 7.89185Z"
                            fill="#444790"
                          />
                          <path
                            d="M9.08354 7.89185H8.83526C8.77599 7.89185 8.72803 7.93981 8.72803 7.99908C8.72803 8.05834 8.77599 8.10631 8.83526 8.10631H9.08354C9.1428 8.10631 9.19077 8.05834 9.19077 7.99908C9.19077 7.93981 9.1428 7.89185 9.08354 7.89185Z"
                            fill="#444790"
                          />
                          <path
                            d="M8.09377 7.89185H7.84551C7.78624 7.89185 7.73828 7.93981 7.73828 7.99908C7.73828 8.05834 7.78624 8.10631 7.84551 8.10631H8.09379C8.15306 8.10631 8.20102 8.05834 8.20102 7.99908C8.20102 7.93981 8.15304 7.89185 8.09377 7.89185Z"
                            fill="#444790"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_519_5672">
                            <rect
                              width="10.7492"
                              height="10.7492"
                              fill="white"
                              transform="translate(0.626465 0.80835)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>{clickedInvoice?.paymentDetails?.method}</p>
                    </div>
                  </div>
                  <div className="prsh-date">
                    <span>Kaufdatum</span>
                    <div className="user-inf-icon d-flex align-items-center gap-1">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_519_5699)">
                          <path
                            d="M3.98653 6.27054C3.98653 6.40987 3.87253 6.52384 3.73323 6.52384H2.46668C2.32738 6.52384 2.21338 6.40984 2.21338 6.27054V5.42396C2.21338 5.28463 2.32738 5.17065 2.46668 5.17065H3.73323C3.87256 5.17065 3.98653 5.28466 3.98653 5.42396V6.27054Z"
                            fill="#444790"
                          />
                          <path
                            d="M3.98653 8.49491C3.98653 8.63424 3.87253 8.74821 3.73323 8.74821H2.46668C2.32738 8.74821 2.21338 8.63421 2.21338 8.49491V7.64832C2.21338 7.50899 2.32738 7.39502 2.46668 7.39502H3.73323C3.87256 7.39502 3.98653 7.50902 3.98653 7.64832V8.49491Z"
                            fill="#444790"
                          />
                          <path
                            d="M6.40062 6.27054C6.40062 6.40987 6.28662 6.52384 6.14732 6.52384H4.88074C4.74141 6.52384 4.62744 6.40984 4.62744 6.27054V5.42396C4.62744 5.28463 4.74144 5.17065 4.88074 5.17065H6.14732C6.28665 5.17065 6.40062 5.28466 6.40062 5.42396V6.27054Z"
                            fill="#444790"
                          />
                          <path
                            d="M6.40062 8.49491C6.40062 8.63424 6.28662 8.74821 6.14732 8.74821H4.88074C4.74141 8.74821 4.62744 8.63421 4.62744 8.49491V7.64832C4.62744 7.50899 4.74144 7.39502 4.88074 7.39502H6.14732C6.28665 7.39502 6.40062 7.50902 6.40062 7.64832V8.49491Z"
                            fill="#444790"
                          />
                          <path
                            d="M8.78392 6.27054C8.78392 6.40987 8.66992 6.52384 8.53062 6.52384H7.26405C7.12471 6.52384 7.01074 6.40984 7.01074 6.27054V5.42396C7.01074 5.28463 7.12474 5.17065 7.26405 5.17065H8.53062C8.66995 5.17065 8.78392 5.28466 8.78392 5.42396V6.27054Z"
                            fill="#444790"
                          />
                          <path
                            d="M8.78392 8.49491C8.78392 8.63424 8.66992 8.74821 8.53062 8.74821H7.26405C7.12471 8.74821 7.01074 8.63421 7.01074 8.49491V7.64832C7.01074 7.50899 7.12474 7.39502 7.26405 7.39502H8.53062C8.66995 7.39502 8.78392 7.50902 8.78392 7.64832V8.49491Z"
                            fill="#444790"
                          />
                          <path
                            d="M2.84595 3.27604C2.69461 3.27604 2.5708 3.15223 2.5708 3.00087V1.51175C2.5708 1.36038 2.69461 1.23657 2.84595 1.23657H3.41837C3.5697 1.23657 3.69354 1.36038 3.69354 1.51175V3.00087C3.69354 3.1522 3.56973 3.27604 3.41837 3.27604H2.84595Z"
                            fill="#444790"
                          />
                          <path
                            d="M7.61108 3.27604C7.45975 3.27604 7.33594 3.15223 7.33594 3.00087V1.51175C7.33594 1.36038 7.45975 1.23657 7.61108 1.23657H8.1835C8.33484 1.23657 8.45868 1.36038 8.45868 1.51175V3.00087C8.45868 3.1522 8.33487 3.27604 8.1835 3.27604H7.61108Z"
                            fill="#444790"
                          />
                          <path
                            d="M9.90619 2.36206C9.90619 2.36206 9.45188 2.36206 9.10521 2.36206C9.05944 2.36206 8.97476 2.36206 8.97476 2.46757V2.93859C8.97476 3.38829 8.72568 3.75416 8.15919 3.75416H7.6322C7.09506 3.75416 6.81662 3.38829 6.81662 2.93859L6.81665 2.49217C6.81665 2.40783 6.75773 2.36206 6.68744 2.36206C6.0164 2.36206 5.05587 2.36206 4.36102 2.36206C4.3094 2.36206 4.21128 2.36206 4.21128 2.49568V2.93859C4.21128 3.38829 3.98705 3.75416 3.39571 3.75416H2.86872C2.2139 3.75416 2.05315 3.38829 2.05315 2.93859V2.51326C2.05315 2.39377 1.94558 2.36206 1.88702 2.36206C1.5444 2.36206 1.12174 2.36206 1.12174 2.36206C0.975552 2.36206 0.855957 2.48166 0.855957 2.82475V9.92675C0.855957 9.87603 0.975552 9.99563 1.12174 9.99563H9.90617C10.0524 9.99563 10.172 9.87603 10.172 9.92675V2.82475C10.172 2.48166 10.0524 2.36206 9.90619 2.36206ZM9.58134 9.1392C9.58134 9.28539 9.46175 9.40499 9.31556 9.40499H1.71238C1.56619 9.40499 1.4466 9.28539 1.4466 9.1392V4.73847C1.4466 4.59228 1.56619 4.47269 1.71238 4.47269H9.31556C9.46175 4.47269 9.58134 4.59228 9.58134 4.73847V9.1392Z"
                            fill="#444790"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_519_5699">
                            <rect
                              width="9.31599"
                              height="9.31599"
                              fill="white"
                              transform="translate(0.855957 0.958252)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>{formatDateFull(clickedInvoice?.orderDate)}</p>
                    </div>
                    <div className="user-inf-icon d-flex align-items-center gap-1">
                      <svg
                        width="11"
                        height="11"
                        viewBox="0 0 11 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <g clipPath="url(#clip0_519_5681)">
                          <path
                            d="M8.98531 2.19288C8.03785 1.24543 6.77801 0.723633 5.43818 0.723633C4.09835 0.723633 2.8385 1.24543 1.89105 2.19288C0.943596 3.14034 0.421875 4.40001 0.421875 5.73994C0.421875 7.07987 0.943596 8.33954 1.89105 9.28699C2.8385 10.2344 4.09835 10.7562 5.43818 10.7562C6.77801 10.7562 8.03785 10.2344 8.98531 9.28699C9.93276 8.33954 10.4545 7.07987 10.4545 5.73994C10.4545 4.40001 9.93276 3.14034 8.98531 2.19288ZM5.43818 9.913C3.1372 9.913 1.26502 8.04099 1.26502 5.73994C1.26502 3.43888 3.1372 1.56687 5.43818 1.56687C7.73916 1.56687 9.61134 3.43888 9.61134 5.73994C9.61134 8.04099 7.73916 9.913 5.43818 9.913Z"
                            fill="#444790"
                          />
                          <path
                            d="M3.90409 8.4038C3.74222 8.31039 3.53504 8.36571 3.44131 8.52761C3.34793 8.68968 3.4035 8.89688 3.56538 8.99031C3.61866 9.02117 3.67701 9.03586 3.73451 9.03586C3.85146 9.03586 3.96521 8.97512 4.02803 8.86652C4.12151 8.7044 4.06612 8.49725 3.90409 8.4038Z"
                            fill="#444790"
                          />
                          <path
                            d="M3.72864 3.12615C3.78634 3.12615 3.84495 3.11144 3.89848 3.0804C4.06011 2.9865 4.11524 2.7791 4.02129 2.61745C3.92715 2.4556 3.72003 2.40069 3.55833 2.49457C3.39648 2.58847 3.34159 2.79564 3.43553 2.9575C3.49837 3.06569 3.61184 3.12615 3.72864 3.12615Z"
                            fill="#444790"
                          />
                          <path
                            d="M2.31167 4.33143C2.36493 4.36199 2.42311 4.37673 2.48055 4.37673C2.59759 4.37673 2.71158 4.31601 2.77417 4.20717C2.8676 4.04532 2.81199 3.83815 2.65011 3.74472C2.48804 3.65106 2.28089 3.70665 2.18743 3.8687C2.09398 4.03083 2.14962 4.23778 2.31167 4.33143Z"
                            fill="#444790"
                          />
                          <path
                            d="M5.43293 2.66686C5.43318 2.66686 5.43318 2.66686 5.43336 2.66686C5.62047 2.66638 5.7718 2.51458 5.77165 2.32749C5.77112 2.14038 5.61939 1.98905 5.43225 1.9895C5.24512 1.98973 5.09381 2.14156 5.09424 2.32862C5.09447 2.5155 5.24602 2.66686 5.43293 2.66686Z"
                            fill="#444790"
                          />
                          <path
                            d="M2.31488 7.15664C2.15301 7.2503 2.09787 7.45744 2.19183 7.61937C2.25467 7.72769 2.36842 7.78825 2.48522 7.78825C2.5429 7.78825 2.60125 7.77354 2.65478 7.74248C2.81663 7.64885 2.87172 7.4414 2.77781 7.27975C2.68393 7.1179 2.47673 7.06271 2.31488 7.15664Z"
                            fill="#444790"
                          />
                          <path
                            d="M2.36532 5.744C2.36507 5.55687 2.21326 5.40556 2.0262 5.40576C1.83912 5.40599 1.68776 5.5578 1.68799 5.74465C1.68824 5.93176 1.8398 6.08309 2.02668 6.08309H2.02686C2.21402 6.08287 2.36557 5.93104 2.36532 5.744Z"
                            fill="#444790"
                          />
                          <path
                            d="M5.44049 8.81372C5.25368 8.81397 5.10205 8.96555 5.10205 9.15261C5.1023 9.33972 5.25393 9.4913 5.44099 9.49105C5.62805 9.49105 5.77968 9.33922 5.77943 9.15214C5.77946 8.96528 5.6277 8.81372 5.44049 8.81372Z"
                            fill="#444790"
                          />
                          <path
                            d="M8.56389 7.15322C8.40209 7.05959 8.19497 7.11491 8.10122 7.27678C8.00759 7.43863 8.06292 7.64581 8.22478 7.73949C8.27831 7.77034 8.33666 7.78501 8.39408 7.78501C8.51112 7.78501 8.62486 7.72455 8.68745 7.6159C8.78116 7.45405 8.72577 7.24685 8.56389 7.15322Z"
                            fill="#444790"
                          />
                          <path
                            d="M8.85015 5.3938C8.66309 5.39428 8.51171 5.54633 8.51221 5.73339C8.51221 5.73528 8.51221 5.73716 8.51221 5.73877C8.51221 5.7395 8.51221 5.73995 8.51221 5.74042C8.51221 5.92751 8.66374 6.07909 8.85082 6.07909C9.03796 6.07909 9.18952 5.92751 9.18952 5.74042C9.18952 5.73924 9.18952 5.73784 9.18952 5.73646C9.18952 5.73505 9.18952 5.73339 9.18952 5.73179C9.18909 5.5447 9.03721 5.39357 8.85015 5.3938Z"
                            fill="#444790"
                          />
                          <path
                            d="M6.97038 3.07502C7.02358 3.10585 7.08179 3.12031 7.13921 3.12031C7.25624 3.12031 7.37024 3.0596 7.43283 2.95075C7.52629 2.78863 7.47067 2.58148 7.30859 2.48805C7.14647 2.39485 6.93927 2.45044 6.84609 2.61257C6.75271 2.77464 6.80828 2.98184 6.97038 3.07502Z"
                            fill="#444790"
                          />
                          <path
                            d="M6.97615 8.40221C6.8143 8.49584 6.75898 8.70298 6.85286 8.86488C6.91568 8.97323 7.02938 9.03397 7.14623 9.03397C7.20393 9.03397 7.26208 9.01925 7.31554 8.98827C7.47742 8.89461 7.53255 8.68742 7.43892 8.52549C7.34519 8.36361 7.138 8.30827 6.97615 8.40221Z"
                            fill="#444790"
                          />
                          <path
                            d="M8.39076 4.36671C8.44871 4.36671 8.50706 4.35175 8.56077 4.32069C8.72245 4.22655 8.77736 4.01938 8.68323 3.85776C8.58932 3.69588 8.3819 3.64122 8.22027 3.73513C8.0586 3.82901 8.00371 4.03641 8.09764 4.19806C8.16049 4.3062 8.27398 4.36671 8.39076 4.36671Z"
                            fill="#444790"
                          />
                          <path
                            d="M7.56405 5.97697L5.78748 5.8558L5.61015 3.25374C5.60403 3.16423 5.52959 3.09473 5.43982 3.09473C5.35008 3.09473 5.27574 3.16423 5.26957 3.25374L5.09538 5.8086L4.81103 5.78921C4.7731 5.7866 4.73581 5.79987 4.70804 5.82583C4.68033 5.85176 4.66455 5.88808 4.66455 5.9261V6.30162C4.66455 6.33967 4.68033 6.37594 4.70804 6.40188C4.73352 6.42568 4.76706 6.43885 4.80172 6.43885C4.80478 6.43885 4.80789 6.43875 4.81103 6.43854L5.05357 6.42199L5.03606 6.67805C5.0329 6.72523 5.04938 6.77158 5.08163 6.80609C5.11389 6.84065 5.15906 6.86027 5.20636 6.86027H5.67333C5.67353 6.86027 5.67376 6.86027 5.67386 6.86027C5.76806 6.86027 5.84446 6.78387 5.84446 6.68961C5.84446 6.68131 5.82261 6.36945 5.82261 6.36945L7.56413 6.25071C7.63613 6.24579 7.69207 6.18597 7.69207 6.11381C7.69192 6.04171 7.63606 5.98189 7.56405 5.97697Z"
                            fill="#444790"
                          />
                        </g>
                        <defs>
                          <clipPath id="clip0_519_5681">
                            <rect
                              width="10.0326"
                              height="10.0326"
                              fill="white"
                              transform="translate(0.421875 0.723633)"
                            />
                          </clipPath>
                        </defs>
                      </svg>
                      <p>{extractOrderTime(clickedInvoice?.orderDate)}</p>
                    </div>
                  </div>
                </div>
                <div className="orders-tbl-container" ref={tableRef}>
                  <table className="table orders-tbl table-responsive">
                    <thead>
                      <tr>
                        <th scope="col">Ref</th>
                        <th scope="col">VERANSTALTUNG</th>
                        <th scope="col">Eintrittskarten</th>
                        <th scope="col">PREIS</th>
                        <th scope="col">GESAMT</th>
                        <th scope="col">Gesamtpreis</th>
                      </tr>
                    </thead>
                    <tbody>
                      {clickedInvoice?.tickets?.map((ticket, i) => (
                        <tr key={i}>
                          <td>{i}</td>
                          <td>{clickedInvoice?.event.eventName}</td>
                          <td>{ticket?.ticket?.name}</td>
                          <td>{ticket?.ticket?.price.toFixed(2)} €</td>
                          <td className="text-center">{ticket?.quantity}</td>
                          <td>
                            {(ticket?.ticket?.price * ticket?.quantity).toFixed(
                              2
                            )}{" "}
                            €
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
                <div className="orders-ttl">
                  <div className="ordr-ttl">
                    <p>Gesamt</p>
                    <span>{clickedInvoice?.paymentDetails?.totalAmount} €</span>
                  </div>
                </div>
                <div className="export-btn mt-4">
                  <div
                    className="exp-btn"
                    onClick={() => exportAllTickets(clickedInvoice._id)}
                  >
                    <svg
                      width="20"
                      height="21"
                      viewBox="0 0 20 21"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M7.10899 6.91426L8.98836 5.03488V12.8792C8.98836 13.3695 9.31521 13.6964 9.80548 13.6964C10.2958 13.6964 10.6226 13.3695 10.6226 12.8792V5.03488L12.502 6.91426C12.8288 7.24111 13.3191 7.24111 13.646 6.91426C13.9728 6.58741 13.9728 6.09714 13.646 5.77029L10.3775 2.50181C10.2958 2.4201 10.214 2.33838 10.1323 2.33838C9.96891 2.25667 9.72377 2.25667 9.47864 2.33838C9.39692 2.33838 9.31521 2.4201 9.2335 2.50181L5.96502 5.77029C5.63817 6.09714 5.63817 6.58741 5.96502 6.91426C6.29187 7.24111 6.78214 7.24111 7.10899 6.91426ZM17.1596 12.0621C16.6693 12.0621 16.3424 12.389 16.3424 12.8792V16.1477C16.3424 16.638 16.0156 16.9648 15.5253 16.9648H4.08564C3.59537 16.9648 3.26852 16.638 3.26852 16.1477V12.8792C3.26852 12.389 2.94167 12.0621 2.4514 12.0621C1.96113 12.0621 1.63428 12.389 1.63428 12.8792V16.1477C1.63428 17.5368 2.69653 18.5991 4.08564 18.5991H15.5253C16.9144 18.5991 17.9767 17.5368 17.9767 16.1477V12.8792C17.9767 12.389 17.6498 12.0621 17.1596 12.0621Z"
                        fill="white"
                      />
                    </svg>
                    Exportieren
                  </div>
                </div>
              </div>
            )}
          </div>
          <div className="orders-body-tickets">
            <div className="my-order-invoice mb-4">
              <div className="invoice-name-icon d-flex align-items-center gap-2">
                <div className="ino-icon">
                  <svg
                    width="20"
                    height="21"
                    viewBox="0 0 20 21"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_511_5287)">
                      <path
                        d="M17.6555 4.61762L13.4358 0.186974C13.3202 0.0655289 13.1644 0 13.0054 0H6.89835C6.5625 0 6.28983 0.286308 6.28983 0.638947V4.3076H2.79602C2.46017 4.3076 2.1875 4.59375 2.1875 4.94655V20.3611C2.1875 20.7137 2.46017 21 2.79602 21H13.1226C13.4586 21 13.7312 20.7137 13.7312 20.3611V16.6924H17.225C17.5609 16.6924 17.8336 16.4062 17.8336 16.0535V5.0696C17.8336 4.90714 17.774 4.74211 17.6555 4.61762ZM16.6165 15.4145H13.7312V9.3772C13.7312 9.21169 13.6699 9.04779 13.553 8.92506L9.3335 4.49458C9.2189 4.37409 9.06342 4.30744 8.90305 4.30744H7.50702V1.27789H12.3969V5.0696C12.3969 5.42223 12.6695 5.70854 13.0054 5.70854H16.6165V15.4145ZM12.514 19.7221H3.40454V5.58549H8.29437V9.3772C8.29437 9.72984 8.56705 10.0161 8.90305 10.0161H12.514V19.7221ZM9.51157 6.48896L11.6536 8.73809H9.51157V6.48896ZM15.7559 4.43065H13.6139V2.18152C13.8817 2.46254 15.5423 4.20634 15.7559 4.43065Z"
                        fill="#444790"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_511_5287">
                        <rect width="20" height="21" fill="white" />
                      </clipPath>
                    </defs>
                  </svg>
                </div>
                <p>{clickedInvoice?.code}</p>
              </div>
              <div className="invoice-price">
                <p>{clickedInvoice?.paymentDetails?.totalAmount} €</p>
              </div>
              <div className="invoice-icons d-flex gap-2">
                <button
                  className="btn_orders"
                  onClick={() => exportAllTickets(clickedInvoice._id)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5.80004 5.13343L7.33337 3.6001V10.0001C7.33337 10.4001 7.60004 10.6668 8.00004 10.6668C8.40004 10.6668 8.66671 10.4001 8.66671 10.0001V3.6001L10.2 5.13343C10.4667 5.4001 10.8667 5.4001 11.1334 5.13343C11.4 4.86676 11.4 4.46676 11.1334 4.2001L8.46671 1.53343C8.40004 1.46676 8.33337 1.4001 8.26671 1.4001C8.13337 1.33343 7.93337 1.33343 7.73337 1.4001C7.66671 1.4001 7.60004 1.46676 7.53337 1.53343L4.86671 4.2001C4.60004 4.46676 4.60004 4.86676 4.86671 5.13343C5.13337 5.4001 5.53337 5.4001 5.80004 5.13343ZM14 9.33343C13.6 9.33343 13.3334 9.6001 13.3334 10.0001V12.6668C13.3334 13.0668 13.0667 13.3334 12.6667 13.3334H3.33337C2.93337 13.3334 2.66671 13.0668 2.66671 12.6668V10.0001C2.66671 9.6001 2.40004 9.33343 2.00004 9.33343C1.60004 9.33343 1.33337 9.6001 1.33337 10.0001V12.6668C1.33337 13.8001 2.20004 14.6668 3.33337 14.6668H12.6667C13.8 14.6668 14.6667 13.8001 14.6667 12.6668V10.0001C14.6667 9.6001 14.4 9.33343 14 9.33343Z"
                      fill="white"
                    />
                  </svg>
                </button>
                <button
                  className="btn_orders"
                  onClick={() => setShowQrCode(false)}
                >
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 16 16"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <g clipPath="url(#clip0_511_5291)">
                      <path
                        d="M8.00003 10.575C9.42068 10.575 10.575 9.42068 10.575 8.00003C10.575 6.57939 9.42068 5.42512 8.00003 5.42512C6.57939 5.42512 5.42512 6.57939 5.42512 8.00003C5.42512 9.42068 6.57939 10.575 8.00003 10.575ZM8.19537 8.76363C8.51502 8.76363 8.78139 8.49726 8.78139 8.17761H9.63377C9.61602 8.97673 8.97673 9.61602 8.19537 9.61602V8.76363Z"
                        fill="white"
                      />
                      <path
                        d="M0.186459 8.53281C1.0566 9.61605 4.16426 13.1499 8 13.1499C11.8357 13.1499 14.9434 9.61605 15.8135 8.53281C16.0622 8.23092 16.0622 7.78697 15.8135 7.46733C14.9434 6.38409 11.8357 2.85023 8 2.85023C4.16426 2.85023 1.0566 6.38409 0.186459 7.46733C-0.0621529 7.76921 -0.0621529 8.21317 0.186459 8.53281ZM8 4.27088C10.0599 4.27088 11.7292 5.94014 11.7292 8.00007C11.7292 10.06 10.0599 11.7293 8 11.7293C5.94007 11.7293 4.27081 10.06 4.27081 8.00007C4.27081 5.94014 5.94007 4.27088 8 4.27088Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_511_5291">
                        <rect
                          width="16"
                          height="16"
                          fill="white"
                          transform="matrix(-1 0 0 -1 16 16)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            <div className="my-order-tickets-container">
              <div className="order-body-tickets">
                {clickedInvoice?.tickets?.map((ticket, index) => (
                  <div className="my-order-ticket-box" key={index}>
                    <div className="ticket-details">
                      <div className="ticket-inf">
                        <div className="icn">
                          <svg
                            width="30"
                            height="26"
                            viewBox="0 0 30 31"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              d="M5.62322 1.05097L3.55697 6.07677C3.51475 6.17082 3.49292 6.27274 3.49292 6.37583C3.49292 6.47892 3.51475 6.58085 3.55697 6.6749C3.6358 6.8647 3.78663 7.01553 3.97644 7.09436L5.4368 7.68472C5.86645 7.86833 6.23098 8.17685 6.48308 8.57024C6.73519 8.96363 6.86321 9.42372 6.85054 9.89079H29.121L6.64081 0.631503C6.54648 0.592027 6.44528 0.571565 6.34302 0.571292C6.24076 0.571019 6.13945 0.59094 6.04491 0.629912C5.95036 0.668884 5.86445 0.72614 5.79208 0.798395C5.71972 0.87065 5.66234 0.956482 5.62322 1.05097Z"
                              fill="white"
                            />
                            <path
                              d="M0.776786 30.0874H33.4018C33.6078 30.0874 33.8054 30.0056 33.9511 29.8599C34.0967 29.7142 34.1786 29.5167 34.1786 29.3106V23.8732C34.1786 23.6671 34.0967 23.4696 33.9511 23.3239C33.8054 23.1782 33.6078 23.0964 33.4018 23.0964H31.8482C31.2302 23.0964 30.6374 22.8508 30.2004 22.4138C29.7634 21.9768 29.5179 21.3841 29.5179 20.766C29.5179 20.148 29.7634 19.5552 30.2004 19.1182C30.6374 18.6812 31.2302 18.4357 31.8482 18.4357H33.4018C33.6078 18.4357 33.8054 18.3538 33.9511 18.2081C34.0967 18.0625 34.1786 17.8649 34.1786 17.6589V12.2214C34.1786 12.0153 34.0967 11.8178 33.9511 11.6721C33.8054 11.5264 33.6078 11.4446 33.4018 11.4446H0.776786C0.570769 11.4446 0.373191 11.5264 0.227515 11.6721C0.0818397 11.8178 0 12.0153 0 12.2214V17.6589C0 17.8649 0.0818397 18.0625 0.227515 18.2081C0.373191 18.3538 0.570769 18.4357 0.776786 18.4357H2.33036C2.94841 18.4357 3.54114 18.6812 3.97817 19.1182C4.4152 19.5552 4.66071 20.148 4.66071 20.766C4.66071 21.3841 4.4152 21.9768 3.97817 22.4138C3.54114 22.8508 2.94841 23.0964 2.33036 23.0964H0.776786C0.570769 23.0964 0.373191 23.1782 0.227515 23.3239C0.0818397 23.4696 0 23.6671 0 23.8732V29.3106C0 29.5167 0.0818397 29.7142 0.227515 29.8599C0.373191 30.0056 0.570769 30.0874 0.776786 30.0874ZM23.3036 15.3285C23.3036 15.1225 23.3854 14.9249 23.5311 14.7792C23.6768 14.6336 23.8743 14.5517 24.0804 14.5517C24.2864 14.5517 24.484 14.6336 24.6296 14.7792C24.7753 14.9249 24.8571 15.1225 24.8571 15.3285V16.8821C24.8571 17.0881 24.7753 17.2857 24.6296 17.4314C24.484 17.577 24.2864 17.6589 24.0804 17.6589C23.8743 17.6589 23.6768 17.577 23.5311 17.4314C23.3854 17.2857 23.3036 17.0881 23.3036 16.8821V15.3285ZM23.3036 19.9892C23.3036 19.7832 23.3854 19.5856 23.5311 19.44C23.6768 19.2943 23.8743 19.2124 24.0804 19.2124C24.2864 19.2124 24.484 19.2943 24.6296 19.44C24.7753 19.5856 24.8571 19.7832 24.8571 19.9892V21.5428C24.8571 21.7488 24.7753 21.9464 24.6296 22.0921C24.484 22.2377 24.2864 22.3196 24.0804 22.3196C23.8743 22.3196 23.6768 22.2377 23.5311 22.0921C23.3854 21.9464 23.3036 21.7488 23.3036 21.5428V19.9892ZM23.3036 24.6499C23.3036 24.4439 23.3854 24.2463 23.5311 24.1007C23.6768 23.955 23.8743 23.8732 24.0804 23.8732C24.2864 23.8732 24.484 23.955 24.6296 24.1007C24.7753 24.2463 24.8571 24.4439 24.8571 24.6499V26.2035C24.8571 26.4095 24.7753 26.6071 24.6296 26.7528C24.484 26.8985 24.2864 26.9803 24.0804 26.9803C23.8743 26.9803 23.6768 26.8985 23.5311 26.7528C23.3854 26.6071 23.3036 26.4095 23.3036 26.2035V24.6499ZM10.0982 16.1053H19.4196C19.6257 16.1053 19.8232 16.1871 19.9689 16.3328C20.1146 16.4785 20.1964 16.6761 20.1964 16.8821C20.1964 17.0881 20.1146 17.2857 19.9689 17.4314C19.8232 17.577 19.6257 17.6589 19.4196 17.6589H10.0982C9.8922 17.6589 9.69462 17.577 9.54894 17.4314C9.40327 17.2857 9.32143 17.0881 9.32143 16.8821C9.32143 16.6761 9.40327 16.4785 9.54894 16.3328C9.69462 16.1871 9.8922 16.1053 10.0982 16.1053ZM10.0982 19.9892H19.4196C19.6257 19.9892 19.8232 20.0711 19.9689 20.2167C20.1146 20.3624 20.1964 20.56 20.1964 20.766C20.1964 20.972 20.1146 21.1696 19.9689 21.3153C19.8232 21.461 19.6257 21.5428 19.4196 21.5428H10.0982C9.8922 21.5428 9.69462 21.461 9.54894 21.3153C9.40327 21.1696 9.32143 20.972 9.32143 20.766C9.32143 20.56 9.40327 20.3624 9.54894 20.2167C9.69462 20.0711 9.8922 19.9892 10.0982 19.9892ZM10.0982 23.8732H19.4196C19.6257 23.8732 19.8232 23.955 19.9689 24.1007C20.1146 24.2463 20.1964 24.4439 20.1964 24.6499C20.1964 24.856 20.1146 25.0535 19.9689 25.1992C19.8232 25.3449 19.6257 25.4267 19.4196 25.4267H10.0982C9.8922 25.4267 9.69462 25.3449 9.54894 25.1992C9.40327 25.0535 9.32143 24.856 9.32143 24.6499C9.32143 24.4439 9.40327 24.2463 9.54894 24.1007C9.69462 23.955 9.8922 23.8732 10.0982 23.8732Z"
                              fill="white"
                            />
                          </svg>
                        </div>
                        <span>{ticket.ticket.name}</span>
                        <p>
                          {ticket.ticket.price.toFixed(2).replace(".", ",")} €
                        </p>
                      </div>
                      <div className="ticket-icn d-flex flex-column justify-content-between gap-2 ">
                        <svg
                          width="150"
                          height="1"
                          viewBox="0 0 171 1"
                          fill="none"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <line
                            y1="0.5"
                            x2="171"
                            y2="0.5"
                            stroke="#64C3C5"
                            stroke-dasharray="3 3"
                          />
                        </svg>
                        <div className="d-flex justify-content-center gap-2">
                          <button className="btn_orders">
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <path
                                d="M5.80004 5.13343L7.33337 3.6001V10.0001C7.33337 10.4001 7.60004 10.6668 8.00004 10.6668C8.40004 10.6668 8.66671 10.4001 8.66671 10.0001V3.6001L10.2 5.13343C10.4667 5.4001 10.8667 5.4001 11.1334 5.13343C11.4 4.86676 11.4 4.46676 11.1334 4.2001L8.46671 1.53343C8.40004 1.46676 8.33337 1.4001 8.26671 1.4001C8.13337 1.33343 7.93337 1.33343 7.73337 1.4001C7.66671 1.4001 7.60004 1.46676 7.53337 1.53343L4.86671 4.2001C4.60004 4.46676 4.60004 4.86676 4.86671 5.13343C5.13337 5.4001 5.53337 5.4001 5.80004 5.13343ZM14 9.33343C13.6 9.33343 13.3334 9.6001 13.3334 10.0001V12.6668C13.3334 13.0668 13.0667 13.3334 12.6667 13.3334H3.33337C2.93337 13.3334 2.66671 13.0668 2.66671 12.6668V10.0001C2.66671 9.6001 2.40004 9.33343 2.00004 9.33343C1.60004 9.33343 1.33337 9.6001 1.33337 10.0001V12.6668C1.33337 13.8001 2.20004 14.6668 3.33337 14.6668H12.6667C13.8 14.6668 14.6667 13.8001 14.6667 12.6668V10.0001C14.6667 9.6001 14.4 9.33343 14 9.33343Z"
                                fill="white"
                              />
                            </svg>
                          </button>
                          <button
                            className="btn_orders"
                            onClick={() => {
                              setShowQrCode(true);
                              dispatch(ticketClicked(ticket));
                            }}
                          >
                            <svg
                              width="16"
                              height="16"
                              viewBox="0 0 16 16"
                              fill="none"
                              xmlns="http://www.w3.org/2000/svg"
                            >
                              <g clipPath="url(#clip0_511_5291)">
                                <path
                                  d="M8.00003 10.575C9.42068 10.575 10.575 9.42068 10.575 8.00003C10.575 6.57939 9.42068 5.42512 8.00003 5.42512C6.57939 5.42512 5.42512 6.57939 5.42512 8.00003C5.42512 9.42068 6.57939 10.575 8.00003 10.575ZM8.19537 8.76363C8.51502 8.76363 8.78139 8.49726 8.78139 8.17761H9.63377C9.61602 8.97673 8.97673 9.61602 8.19537 9.61602V8.76363Z"
                                  fill="white"
                                />
                                <path
                                  d="M0.186459 8.53281C1.0566 9.61605 4.16426 13.1499 8 13.1499C11.8357 13.1499 14.9434 9.61605 15.8135 8.53281C16.0622 8.23092 16.0622 7.78697 15.8135 7.46733C14.9434 6.38409 11.8357 2.85023 8 2.85023C4.16426 2.85023 1.0566 6.38409 0.186459 7.46733C-0.0621529 7.76921 -0.0621529 8.21317 0.186459 8.53281ZM8 4.27088C10.0599 4.27088 11.7292 5.94014 11.7292 8.00007C11.7292 10.06 10.0599 11.7293 8 11.7293C5.94007 11.7293 4.27081 10.06 4.27081 8.00007C4.27081 5.94014 5.94007 4.27088 8 4.27088Z"
                                  fill="white"
                                />
                              </g>
                              <defs>
                                <clipPath id="clip0_511_5291">
                                  <rect
                                    width="16"
                                    height="16"
                                    fill="white"
                                    transform="matrix(-1 0 0 -1 16 16)"
                                  />
                                </clipPath>
                              </defs>
                            </svg>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Modal.Body>
      </Modal>
    </>
  );
}