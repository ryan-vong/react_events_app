import React from 'react';
import Load from '../common/Load';
import EventTable from './EventTable';



class BigList extends React.Component {
    constructor() {
        super();

        this.state = {
            loading: false,
            error: null,

        };

    }



    render() {
        const { loading, error } = this.state;

        if (loading) {
            return <div className="loading-container"><Load /></div>
        }

        if (error) {
            return <div className="error">{error}</div>
        }

        return (
            <div>
              <EventTable />
            </div>
        );
    }
}

export default BigList;
