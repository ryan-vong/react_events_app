import React from 'react';
import { Route } from 'react-router-dom';
import NotFound from '../notfound/NotFound';
import './DetailEvent.css';
import data from '../../events.json';

class DetailEvent extends React.Component {
    constructor() {
        super();

        this.state = {
            event: {},
        };
    }

    componentDidMount() {
        // grab the id from url parameter and convert to integer
        const ID = parseInt(this.props.match.params.id, 10);
        let evt = {};

        for(var i = 0; i < data.length; i++) {
            var obj = data[i];
            // check if data[i].id matches ID
            if (obj.id === ID) {
                evt = obj;
            }
        }
        
        this.setState({ event: evt });
    }



    render() {
        const { event } = this.state;

        // if event object is empty, then route to NotFound component
        if (Object.keys(event).length === 0 && event.constructor === Object) {
            return <Route component={NotFound} />
        }


        return (
            <div className="dt">
               <h1 className="dt-heading">Seminar: {event.name}</h1>
               <div className="dt-container">
               <div className="dt-item">
                  ID: <span className="dt-value">{event.id}</span>
               </div>
               <div className="dt-item">
                  Name: <span className="dt-value">{event.name}</span>
               </div>
               <div className="dt-item">
                  Presenter: <span className="dt-value">{event.presenter}</span>
               </div>
               <div className="dt-item">
                  Summary: <span className="dt-value">{event.summary}</span>
               </div>
               <div className="dt-item">
                  Room: <span className="dt-value">{event.room}</span>
               </div>
               <div className="dt-item">
                  Date: <span className="dt-value">{event.date}</span>
               </div>
               <div className="dt-item">
                  Time: <span className="dt-value">{event.time}</span>
               </div>

               </div>


            </div>
        );
    }
}

export default DetailEvent;
