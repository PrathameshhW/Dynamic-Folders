import { useQuery } from "@tanstack/react-query";
import { getData } from "./MainApi";

const MainLayout = () => {
  const { data: info } = useQuery({
    queryKey: ["data"],
    queryFn: getData,
  });

  return <div>{info?.map((item) => item.name)}</div>;
};

export default MainLayout;
