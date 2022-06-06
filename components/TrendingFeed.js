import React from "react";

function TrendingFeed() {
  const [load, setLoad] = useState(false);
  const [output,setOutput] = useState([]);
  let list;

  useEffect(async () => {
    list = await axios.get("/user/followingFeed", user_id);
    setLoad(true);
  }, []);

  const objArray = () => {
    for (let i = 0; i < list.result.lenght; i++) {
      setOutput(output[i] = (
        <PanelTile
          title={list.result[i].title}
          date={list.result[i].date}
          description={list.result[i].description}
          language={list.result[i].language}
        />
      ));
    }
  };
  if (load) {
    objArray();
    return <div className="grid grid-cols-3 gap-3">{output}</div>;
  }
}
export default TrendingFeed;
