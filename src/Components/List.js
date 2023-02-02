import React, { useEffect, useState } from "react";
import ListItem from "./ListItem";
import classes from "./List.module.css";
import Pagination from "./pagination";
const List = (props) => {
  const [data, setdata] = useState([]);
  const [isLoading, setisLoading] = useState(true);
  const [httperror, sethttperror] = useState();
  const [currentpage, setcurrentpage] = useState(1);
  const itemsperpage = 3;
  useEffect(() => {
    const fetchdata = async () => {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/users"
      );
      if (!response.ok) {
        throw new Error("something went wrong");
      }
      const responsedata = await response.json();
      const data = [];
      for (const key in responsedata) {
        data.push({
          id: responsedata[key].id,
          name: responsedata[key].name,
          username: responsedata[key].username,
          email: responsedata[key].email,
          address: responsedata[key].address,
          phone: responsedata[key].phone,
          website: responsedata[key].website,
          company: responsedata[key].company,
        });
      }
      setdata(data);
      setisLoading(false);
    };
    fetchdata().catch((error) => {
      setisLoading(false);
      sethttperror(error);
    });
  }, []);
  if (isLoading) {
    return (
      <div>
        <section className={classes.loading}>
          {isLoading && <p>Loading...</p>}
        </section>
      </div>
    );
  }
  if (httperror) {
    return (
      <section className={classes.errorLoading}>
        <p>Failed to load! Try again later.</p>
      </section>
    );
  }
  const lastindex = currentpage * itemsperpage;
  const firstindex = lastindex - itemsperpage;
  const pagedata = data.slice(firstindex, lastindex);
  const currentpagehandler = (page) => {
    setcurrentpage(page);
  };
  const users = pagedata.map((user) => (
    <ListItem
      key={user.id}
      id={user.id}
      name={user.name}
      username={user.username}
      email={user.email}
      address={user.address}
      phone={user.phone}
      website={user.website}
      company={user.company}
    ></ListItem>
  ));
  return (
    <div className={classes.list}>
      <ul>{users}</ul>
      <Pagination
        totalitems={data.length}
        itemsperpage={itemsperpage}
        setcurrentpage={currentpagehandler}
        currentpage={currentpage}
      ></Pagination>
    </div>
  );
};

export default List;
