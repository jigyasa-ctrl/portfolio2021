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


  test("Components are rendered", () => { 
    const component = shallow(<App />)
    // to find if homepage is there
    const homepage = component.find("Homepage").exists()
    expect(homepage).toBe(true);
     // to find if about is there
    const aboutComp = component.find("About").exists()
    expect(aboutComp).toBe(true)
     // to find if project is there
    const project = component.find("Projects").exists()
    expect(project).toBe(true)
  
  })

  

