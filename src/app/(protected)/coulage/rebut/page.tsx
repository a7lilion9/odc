import Button from "@/components/Primitives/Button";
import Container from "@/components/Primitives/Container";
import Select from "@/components/Primitives/Select";
import { rebutCoulageAction } from "@/modules/actions";
import db from "@/modules/db";
import Link from "next/link";

const RebutCoulagePage = async () => {
  const managers = await db.manager.findMany();

  // Matricules
  const operators = await db.operator.findMany();
  const matricules = operators.map((operator) => ({
    id: operator.matricule,
    label: operator.matricule,
  }));

  console.log({ matricules });
  return (
    <Container>
      <p>
        <Button>Rebut</Button>
      </p>
      <form
        action={rebutCoulageAction}
        className="flex flex-col items-center justify-between gap-4"
      >
        <Select
          required={true}
          data={managers}
          name="manager"
          title="Chef de Secteur"
        />
        <Select
          required={true}
          data={matricules}
          name="operator"
          title="Matricule"
        />
        <Button>Suivant</Button>
      </form>
      <Link className="absolute bottom-4" href="/coulage">
        <Button>Retour</Button>
      </Link>
    </Container>
  );
};

export default RebutCoulagePage;
