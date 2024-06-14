import Button from "@/components/Primitives/Button";
import Container from "@/components/Primitives/Container";
import Link from "next/link";

const RebutCoulagePage = async ({searchParams}) => {

    // Encode an array "searchParams" to a url query
    const urlParams = new URLSearchParams(searchParams).toString();

    return (
        <Container>
            <div className="flex flex-col items-center gap-4">
                <Link href={`/scan?${urlParams}&error=rebut-demoulage`}>
                    <Button>Rebut Demoulage</Button>
                </Link>
                <Link href={`/scan?${urlParams}&error=rebut-finition`}>
                    <Button>Rebut Finition</Button>
                </Link>
            </div>
            <Link className="absolute bottom-4" href="/coulage/rebut">
                <Button>Retour</Button>
            </Link>
        </Container>
    );
};

export default RebutCoulagePage;
