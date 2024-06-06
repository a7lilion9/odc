import Button from "@/components/Primitives/Button";
import Container from "@/components/Primitives/Container";
import Link from "next/link";

const CoulagePage = () => {
  return (
    <Container>
      <div className="flex flex-col gap-2">
        <Link href="/coulage/pre-scan">
          <Button>Coulage Piece</Button>
        </Link>
        <Link href="/coulage/rebut">
          <Button>Rebut</Button>
        </Link>
      </div>
      <Link href="/menu">
        <Button>Retour</Button>
      </Link>
    </Container>
  );
};

export default CoulagePage;
