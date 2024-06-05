import Button from "@/components/Primitives/Button";

const Menu = () => {
  return (
    <div className="flex flex-col items-center mt-24">
      <Button>Coulage</Button>
      <Button>Emaillage</Button>
      <Button>Cuisson</Button>
      <Button>Triage</Button>
    </div>
  );
};

export default Menu;
