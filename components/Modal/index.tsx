"use client";

import React from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children: React.ReactNode;
}

export const Modal = ({ children }: ModalProps) => {
  return createPortal(
    <li className="flex h-24 justify-between border">{children}</li>,
    document.body,
  );
};

function ModalFrofile({ children }: { children: React.ReactNode }) {
  return <div className="flex">{children}</div>;
}

function ModalFrofilePersoner({
  name,
  email,
}: {
  name: string;
  email: string;
}) {
  return (
    <div className="">
      <p className="">{name}</p>
      <p className="">{email}</p>
    </div>
  );
}

function ModalFrofileCompany({
  name,
  timestamp,
  isOnline = false,
}: {
  name: string;
  timestamp: string;
  isOnline: boolean;
}) {
  return isOnline ? (
    <div className="">
      <p className="">{name}</p>
      <div className="">
        <div className="bg-emerald-500/20">
          <div className="bg-emerald-500"></div>
        </div>
        <p className="">Online</p>
      </div>
    </div>
  ) : (
    <div className="">
      <p className="">Co-Founder / CTO</p>
      <p className="">
        Last seen <time dateTime={timestamp}>3h ago</time>
      </p>
    </div>
  );
}

Modal.Frofile = ModalFrofile;
Modal.Personer = ModalFrofilePersoner;
Modal.Company = ModalFrofileCompany;
