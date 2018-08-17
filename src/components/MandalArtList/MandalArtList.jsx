import React from 'react';
import MandalArtItem from './MandalArtItem';
import MandalArtAddForm from './MandalArtAddForm';

class MandalArtList extends React.Component {
    render() {
        return (
            <React.Fragment 
                className="mandalart-list"
            >
                <MandalArtItem />
                <MandalArtItem />
                <MandalArtAddForm />
            </React.Fragment>
        )
    }
}

export default MandalArtList;