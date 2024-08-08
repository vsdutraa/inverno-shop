import { Logo } from "./logo";
import { ActionButtons } from "./action-buttons";
import { NavMenu } from "./nav-menu";

export const Navbar = () => {
  return (
    <div
      className="flex
    justify-between
    items-center px-10 border-b h-20"
    >
      <Logo />
      <NavMenu />
      <ActionButtons />
    </div>
  );
};
