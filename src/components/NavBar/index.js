import React, { useState } from "react";
import { List, Menu, Chng } from "./style";

const NavBar = () => {
  const [list, setList] = useState([
    { id: 1, name: "Sobre" },
    { id: 2, name: "Projetos" },
    { id: 3, name: "Contato" },
  ]);

  return (
    <nav>
      <Menu>
        {list.map((opc) => (
          <List key={opc.id}>
            <Chng href="#">{opc.name}</Chng>
          </List>
        ))}
      </Menu>
    </nav>
  );
};

export default NavBar;
