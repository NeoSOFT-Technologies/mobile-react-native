import ApplicationGraph from './ApplicationGraph';
import FooService from './fooservice';
import React from 'react';
import {Inject, Injectable} from 'di';

@Injectable(ApplicationGraph)
class ClassComponent extends React.Component {
  @Inject() private fooService!: FooService;
   constructor(props){
     super(props);
    console.log('hey')
   }
}
export default ClassComponent;
