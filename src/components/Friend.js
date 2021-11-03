import React from 'react';

const Friend = props => {
    // const { info } = props; --> Could also see it this way
    // This just means one doesn't have to keep on typing 'props' everywhere
    // like a lunatic, and can instead just refer to info as...info.
    return (
        <div className='friend'>
            {props.info.name}
            <button onClick={() => openDetails(props.info.id)}>
                See details
            </button>
        </div>
  )
}

export default Friend;