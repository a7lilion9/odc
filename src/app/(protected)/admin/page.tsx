import Button from "@/components/Primitives/Button";
import Container from "@/components/Primitives/Container";
import { generateBCoulage } from "@/modules/actions";

export default function AdminPage() {
  return (
    <Container>
      <form action={generateBCoulage}>
        <Button>Generate b-coulage</Button>
      </form>
    </Container>
  );
}
