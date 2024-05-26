import Form from "@/components/Forms/Scan";
import { protect } from "@/modules/auth";
import { getErrorByServiceId } from "@/modules/error";
import { getUserById } from "@/modules/user";

export default async function Page() {
  return (
    <>
      <Form />
      <footer></footer>
    </>
  );
}
