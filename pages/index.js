import axios from "axios";
import { useCallback, useEffect, useState } from "react";


// Backend url system if you set the override you 
// change the url in the development stage
// do not commit the change of BACKEND_OVERRIDE
const BACK_OVERRIDE = "https://evercode-bac-mongodb-yqbgv4ldc.herokuapp.com";

const BACK_ENDPOINT = process.env.NODE_ENV === "development" ?
  BACK_OVERRIDE ?? process.env.BACK_ENDPOINT :
  BACK_OVERRIDE ?? process.env.NEXT_PUBLIC_BACK_ENDPOINT

export default function Home() {
  const [data, setData] = useState(null);
  const [btn, setBtn] = useState(false);

  const addUser = useCallback((e) => {
    e.preventDefault();
    axios.get(BACK_ENDPOINT+ "/addUser");
  }, []);

  useEffect(() => {
    if (!data || btn) {
      axios.get(BACK_ENDPOINT+ "/users").then((response) => {
        setData(response.data);
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
