import Button from "@/components/primitives/Button";
import Combobox from "@/components/primitives/Combobox";
import { protect } from "@/modules/auth";
import { getErrorByServiceId } from "@/modules/error";
import { getUserById } from "@/modules/user";
import Form from "@/components/Forms/ErrorSelection";

export default async function Page() {
  const payload = await protect();

  const user = await getUserById(payload.id);

  const service = await getErrorByServiceId(user.service.id);
  const errors = service.errors;

  console.log({ errors });
  return (
    <>
      <section>
        <Form errors={errors} />
      </section>
      <footer></footer>
    </>
  );
}
