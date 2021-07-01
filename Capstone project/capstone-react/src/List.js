import React, { Component } from 'react';

class List extends Component {
    constructor(props){
        super(props)
        this.state={
            spies:[]
        }
        this.addspy=this.addStudent.bind(this);
        this.editspy=this.editspy.bind(this);
        this.deletespy=this.deletespy.bind(this);
        this.viewspy=this.viewspy.bind(this);
    }
    componentDidMount(){
        spyservice.get
    }


}



export default list;