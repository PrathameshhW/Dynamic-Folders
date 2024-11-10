import { Button } from "@mantine/core";
import { MdOutlineArrowBack } from "react-icons/md";
import { useNavigate } from "react-router-dom";

const BackButton = ({
  className,
  path,
}: {
  className?: string;
  path?: string;
}) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (path) {
      navigate(path);
      return;
    }

    navigate(-1);
  };

  return (
    <Button
      variant="default"
      onClick={handleClick}
      className={className}
      leftSection={<MdOutlineArrowBack size={20} />}
    >
      Back
    </Button>
  );
};

export default BackButton;
