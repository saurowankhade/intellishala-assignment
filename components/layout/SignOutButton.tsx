import { Button } from "@/components/ui/Button";
import { LogOut} from "@/components/icons";

interface SignOutButtonProps {
  onClick?: () => void;
}

const SignOutButton = ({ onClick }: SignOutButtonProps) => {
  return (
    <Button.Red
      flat
      large
      onClick={onClick}
      leftIcon={<LogOut size={18} />}
      className="w-full justify-start"
    >
      Sign out
    </Button.Red>
  );
};

export default SignOutButton;
