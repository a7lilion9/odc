import Button from "@/components/Primitives/Button";
import Container from "@/components/Primitives/Container";
import Select from "@/components/Primitives/Select";
import Link from "next/link";

const RebutCoulagePage = () => {
  return (
    <Container>
      <Button>Rebut</Button>
      <Select title="Code Defaut" />
      <Select title="Chef de Secteur" />
      <Link href="/coulage/scan">
        <Button>Scanner</Button>
      </Link>
      <Link href="/coulage">
        <Button>Retour</Button>
      </Link>
    </Container>
  );
};

export default RebutCoulagePage;
