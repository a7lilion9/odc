import Menu from "@/components/ClientParts/Menu";
import { getUserIdFromToken } from "@/modules/auth";
import { getUserById } from "@/modules/user";

const MenuPage = async () => {
  const userId = await getUserIdFromToken();
  const user = await getUserById(userId);

  return <Menu user={user} />;
};

export default MenuPage;
