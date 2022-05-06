import axios from "axios";
import { useCallback, useEffect, useState } from "react";

export default function Home() {
  const [data, setData] = useState(null);
  const [btn, setBtn] = useState(false);

  const addUser = useCallback((e) => {
    e.preventDefault();
    axios.get("api/user/addUser");
  }, []);

  useEffect(() => {
    if (!data || btn) {
      axios.get("/api/user/users").then((response) => {
        setData(response.data.data);
        setBtn(false);
      });
    }
  }, [btn]);

  if (!data) return null;
  
  return (
    <div>
      {data.map((user, id) => {
        return <div key={id}>{JSON.stringify(user)}</div>;
      })}
      <button
        onClick={(e) => {
          setBtn(true);
          addUser(e);
        }}
      />
    </div>
  );
}
