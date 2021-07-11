import React from "react";
import Signin from "./../pages/SignIn";
import Adapter from "enzyme-adapter-react-16";
import { shallow, configure } from "enzyme";

configure({ adapter: new Adapter() });

describe("Tests for Signin Component", () => {
  const tree = shallow(<Signin />);
  it("Signin component should match with snapshot", () => {
    expect(tree).toMatchSnapshot();
  });
});
