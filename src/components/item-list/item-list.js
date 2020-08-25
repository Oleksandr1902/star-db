import React, { Component } from 'react';
import SwapiService from '../../service/swapiservice';
import Spinner from '../spinner';

export default class ItemList extends Component {

    state = {
        peopleList: null
    }

    swapiService = new SwapiService;

    componentDidMount() {
        this.swapiService
        .getAllPeople()
        .then((peopleList) => {
            this.setState({
                peopleList
            });
        });
    }

    renderItems(arr) {
        return arr.map(({id, name}) => {
            return (
                <li className="list-group-item" 
                key={id}
                onClick={() => this.props.onPersonSelected(id)}>
                {name}
                </li>
            );  
        });
    }

    render() {

        const { peopleList } = this.state;

       

        if (!peopleList) {
            return <Spinner/>;
        }

        const characters = this.renderItems(peopleList);

        return (
            <ul className="item-list list-group">
                {characters}
            </ul>
        );
    }
    
};