import CoulagePreScan from "@/components/ClientParts/CoulagePreScan";
import db from "@/modules/db";

const CoulageScanPage = async () => {
  const bcoulage = await db.bCoulage.findMany();

  const articleTypes = await db.type.findMany({ include: { articles: true } });

  // Numbers of "Post de Travail"
  const nposts = [
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
  ];

  // N-Coulee
  const ncoulees = [
    { id: "1", label: "1" },
    { id: "2", label: "2" },
    { id: "3", label: "3" },
  ];

  // Matricules
  const operators = await db.operator.findMany();
  const matricules = operators.map((operator) => ({
    id: operator.matricule,
    label: operator.matricule,
  }));

  // Manager
  const managers = await db.manager.findMany();

  const data = {
    nposts,
    ncoulees,
    bcoulage,
    articleTypes,
    matricules,
    managers,
  };

  return <CoulagePreScan data={data} />;
};

export default CoulageScanPage;
