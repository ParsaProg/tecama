import { useEffect, useState } from "react";
import axios from "axios";

export const GetDataFromApi = () => {
  const [userList, setUserList] = useState([]);
  useEffect(() => {
    const response = async () => {
      const res = await axios.get("https://retoolapi.dev/tPNiZj/tecama-users");
      const userList = res.data;
      setUserList(userList);
    };
    response();
  }, []);

  return (
    <>
      {userList
        ? userList.map((val, _i) => {
            return <div className="text-white text-lg">{val.fname}</div>;
          })
        : null}
    </>
  );
};
