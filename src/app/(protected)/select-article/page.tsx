import Button from "@/components/primitives/Button";
import Combobox from "@/components/primitives/Combobox";
import { getAllTypes } from "@/modules/articleType";
import Form from "@/components/Forms/TypeSelection";

import { FaArrowAltCircleLeft } from "react-icons/fa";
import { FaArrowAltCircleRight } from "react-icons/fa";

export default async function Page() {
  const articleTypes = await getAllTypes();
  console.log({ articleTypes });

  const ctypes = articleTypes.map((e) => ({
    id: e.id,
    label: e.label,
    articles: e.articles,
  }));

  return (
    <>
      <Form ctypes={ctypes} />
      <footer></footer>
    </>
  );
}
