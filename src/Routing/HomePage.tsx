import React from "react";
export const Home = () => {
  const [data, setData] = React.useState(null);

  React.useEffect(() => {
    fetch("/api")
      .then((res) => res.json())
      .then((data) => setData(data.message));
  }, []);
  return (
    <div>
      <h1>Home Page Auto reload build</h1>
      <p>{!data ? "Loading..." : data}</p>
    </div>
  );
};

export const SubMenu = () => {
  return <div>sub Menu</div>;
};
