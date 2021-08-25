// function sum(a,b) {
//   return a + b;
// }
// test("check if sum is working", () =>{
//   const result = sum(2,3)
//   expect(result).toBe(5)
// })

import { shallow } from "enzyme";
import React from "react";
import { describe } from "yargs";
import App from "./App"



  test("Homepage is rendered", () => { 
    const component = shallow(<App />)
    // to find if homepage is there
    const exists = component.find("Homepage").exists()
    expect(exists).toBe(true);
  
  })
  
  test("About is rendered", () => {
    const component = shallow(<App />)
    const aboutComp = component.find("About").exists()
    expect(aboutComp).toBe(true)
  
  })
 
  test("Projects is rendered", () => {
    const component = shallow(<App />)
    const project = component.find("Projects").exists()
    expect(project).toBe(true)
  
  })
 
  

