import Menu from "@/components/ClientParts/Menu";
import { getUserIdFromToken } from "@/modules/auth";
import { getUserById } from "@/modules/user";
import {redirect} from "next/navigation";

const MenuPage = async () => {
  const userId = await getUserIdFromToken();
  const user = await getUserById(userId);

  if (user.role === 'admin') {
    redirect('/display/operations');
  }

  return <Menu user={user} />;
};

export default MenuPage;
