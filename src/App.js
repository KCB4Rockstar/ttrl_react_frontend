import React, { Component } from 'react';
import Header from './components/layout/Header';
import Main from './components/layout/Main';
import 'font-awesome/css/font-awesome.min.css';
import 'bootstrap-css-only/css/bootstrap.min.css';
import 'mdbreact/dist/css/mdb.css';
import './App.css';
import axios from 'axios';

class App extends Component {
    constructor(){
        super();

        this.state = {
            users: [],
            products: [],
            description: '',
            selectedFile: '',
            loaded: 0
        }
    }

    handleselectedFile = (event) => {
        this.setState({
            selectedFile: event.target.files[0],
            loaded: 0,
        })
    };

    onChange = (e) => {
        switch (e.target.name) {
            case 'selectedFile':
                this.setState({ selectedFile: e.target.files[0] });
                break;
            default:
                this.setState({ [e.target.name]: e.target.value });
        }
    };

    onSubmit = (e) => {
        e.preventDefault();
        const { description, selectedFile } = this.state;
        let formData = new FormData();

        formData.append('description', description);
        formData.append('selectedFile', selectedFile);

        axios.post("/ttrl/upload", formData, {
            onUploadProgress: ProgressEvent => {
                this.setState({
                    loaded: (ProgressEvent.loaded / ProgressEvent.total*100),
                })
            },
        }).then(res => {
            console.log(res.statusText)
        });
    };

    componentDidMount() {

    }

  render() {
    return (
        <div className="App">
            <div className="container-fluid">
                <div className="row">
                    <Header/>
                </div>
                <div className="row mt-5"/>
                <div className="row mt-5"/>
                <div className="row">
                    <Main/>
                </div>
            </div>
        </div>
    );
  }
}

export default App;
