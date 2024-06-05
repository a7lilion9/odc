import Button from "@/components/Primitives/Button";
import Container from "@/components/Primitives/Container";
import Link from "next/link";

const Menu = () => {
  return (
    <Container>
      <Link href="/coulage"><Button>Coulage</Button></Link>
      <Button>Emaillage</Button>
      <Button>Cuisson</Button>
      <Button>Triage</Button>
      <Button>Inspection</Button>
    </Container>
  );
};

export default Menu;
