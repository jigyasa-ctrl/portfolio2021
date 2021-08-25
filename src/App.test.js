// function sum(a,b) {
//   return a + b;
// }
// test("check if sum is working", () =>{
//   const result = sum(2,3)
//   expect(result).toBe(5)
// })

import { shallow } from "enzyme";
import React from "react";
import App from "./App"

test("HomePage is rendered", () => {
  // to check if component is there
  const component = shallow(<App />)
  // to find if homepage is there
  const exists = component.find("Homepage").exists()
  expect(exists).toBe(true);

})