import { Component } from "react";
import { Section } from "../../types";
import MenuItem from "../menu-item/menu-item.component";
import "./directory.styles.scss";

interface DirectoryState {
  sections: Section[];
}

class Directory extends Component<{}, DirectoryState> {
  state: Readonly<DirectoryState> = {
    sections: [
      {
        title: "hats",
        imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
        id: 1,
        linkUrl: "shop/hats",
      },
      {
        title: "jackets",
        imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
        id: 2,
        linkUrl: "shop/jackets",
      },
      {
        title: "sneakers",
        imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
        id: 3,
        linkUrl: "shop/sneakers",
      },
      {
        title: "womens",
        imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
        size: "large",
        id: 4,
        linkUrl: "shop/womens",
      },
      {
        title: "mens",
        imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
        size: "large",
        id: 5,
        linkUrl: "shop/mens",
      },
    ],
  };

  constructor(props = {}) {
    super(props);
  }

  render() {
    return (
      <div className="directory-menu">
        {this.state.sections.map(({ id, ...rest }) => (
          <MenuItem key={id} {...rest} />
        ))}
      </div>
    );
  }
}

export default Directory;
