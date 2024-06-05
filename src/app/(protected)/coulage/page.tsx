import Button from "@/components/Primitives/Button";
import Link from "next/link";

const CoulagePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[calc(100vh-100px)]">
      <Link href="/coulage/pre-scan"><Button>Coulage Piece</Button></Link>
      <Button>Rebut</Button>
    </div>
  )
}

export default CoulagePage;