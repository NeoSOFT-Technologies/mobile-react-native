import ApplicationGraph from "./applicationgraph";
import {Injectable,Inject} from 'di'
import FooService from "./fooservices";
import React from "react";
@Injectable(ApplicationGraph)
class ClassComponent extends React.Component {
  @Inject() private fooService!: FooService;
   constructor(props){
     super(props);
    console.log('hey')
   }
}
export default ClassComponent;