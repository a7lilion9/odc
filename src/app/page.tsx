import Block from "@/components/primitives/Block";
import Button from "@/components/primitives/Button";
import Form from "@/components/Forms/SignIn";
import Input from "@/components/primitives/Input";
import Main from "@/components/primitives/Main";
import Header from "@/components/primitives/Header";

export default async function Page() {
  return (
    <Main className="">
      <Header type="sign-in" />
      <Form>
        <Input
          id="username"
          type="text"
          label="Nom d'utilisateur"
          className=""
          required={true}
        />
        <Input
          id="password"
          type="password"
          label="Mot de Passe"
          className=""
          required={true}
        />
        <Button href="" className="bg-gray-600 text-white flex justify-center">
          Soumettre
        </Button>
      </Form>
    </Main>
  );
}
