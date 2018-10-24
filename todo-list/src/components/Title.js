import React from 'react';

/**Title component only displays the title of the application and the todoCount*/
const Title = ({todoCount}) => {
    return (
        <div>
            <div className="title">
                <h1 className="heading"> My Todo ({todoCount})</h1><span className="howToSave">press enter to save</span>
            </div>
        </div>
    );
};

module.exports = Title;

