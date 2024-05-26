"use client";

import { FaArrowAltCircleLeft, FaArrowAltCircleRight } from "react-icons/fa";
import Button from "../primitives/Button";
import Combobox from "../primitives/Combobox";
import React from "react";
import { selectArticle } from "@/modules/actions";

export default function TypeSelection({ ctypes }) {
  const [articles, setArticles] = React.useState([]);

  function handleTypeChange(e) {
    const id = e.target.value;
    const selectedType = ctypes.find((e) => e.id === id);
    setArticles(selectedType?.articles);
  }
  return (
    <>
      <form action={selectArticle} className="flex flex-col">
        <Combobox
          id="type"
          onChange={handleTypeChange}
          data={ctypes}
          required={true}
          title="Famille"
        />
        <Combobox
          id="article"
          data={articles}
          required={true}
          title="Article"
        />
        <div className="m-12"></div>
        <div className="flex justify-center gap-2">
          <Button href="/home" className="bg-gray-300 w-1/2">
            <div className="flex items-center gap-2">
              <FaArrowAltCircleLeft />
              <span className="mx-auto">Retour</span>
            </div>
          </Button>
          <Button href="" className="bg-sky-300 w-1/2 flex justify-center">
            <span className="">Suivant</span>
            <FaArrowAltCircleRight />
          </Button>
        </div>
      </form>
    </>
  );
}
