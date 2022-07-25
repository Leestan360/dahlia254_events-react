import React, { useEffect, useState } from "react";


function Authentication() {

  const [users, setUsers] = useState({});

  useEffect(() => {
    fetch("https://dahlia254-react.herokuapp.com/users")
    .then(res => res.json())
    .then(user => {
      setUsers(user)
      console.log(user);
    })
  }, []);

  return (
    <div></div>
  );
}

export default Authentication;