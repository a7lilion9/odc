import Button from "@/components/Primitives/Button";
import Container from "@/components/Primitives/Container";
import Select from "@/components/Primitives/Select";
import { rebutCoulageAction, test } from "@/modules/actions";
import db from "@/modules/db";
import Link from "next/link";

const RebutCoulagePage = async ({ searchParams }) => {
  console.log(searchParams);
  const urlParams = new URLSearchParams(searchParams).toString();
  return (
    <Container>
      <div className="flex flex-col items-center gap-4">
        <Button>Rebut</Button>
        <Link href={`/scan?${urlParams}&error=piece-coulee`}>
          <Button>Piece Coulee</Button>
        </Link>
        <Link href="/coulage/scan">
          <Button>Rebut Coulage</Button>
        </Link>
      </div>
      <Link className="absolute bottom-4" href="/coulage/rebut">
        <Button>Retour</Button>
      </Link>
    </Container>
  );
};

export default RebutCoulagePage;
