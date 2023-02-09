import { Component, ReactNode } from "react";
import { BaseViewModel } from "./base_view_model";

export abstract class  BasePage<T extends BaseViewModel> extends Component {

    readonly viewModel: T

    constructor(props) {
        super(props);
        this.viewModel =  this.initViewModel();
    }

    abstract initViewModel(): T
  

}
 
