import React from 'react';
import './Table.css';
import PropTypes from 'prop-types';
import { withRouter } from 'react-router-dom';
import data from '../../events.json';

const EventTable = (props) => {
    const { history } = props;

    return (
        /* The UI content from BigList will be copied here */
        <div className="tb-container">

        <table className="tb">
           <thead className="tb-head">
                  <tr>
                      <th className="tb-id">ID</th>
                      <th className="tb-name">NAME</th>
                  </tr>
           </thead>
           <tbody className="tb-body">
               {data.map((event) => (
               <tr key={event.id} onClick={() => history.push(`/event/${event.id}`)}>
                  <td><span className="tb-id">{event.id}</span></td>
                  <td><span className="tb-name">{event.name}</span></td>
               </tr>
               ))}
           </tbody>
        </table>
    </div>
    );
}

EventTable.propTypes = {
    history: PropTypes.object.isRequired
};

export default withRouter(EventTable);
