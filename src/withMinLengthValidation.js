import React from 'react';

const alert = count => <span>Minimum {count} required.</span>
const isFail = (props, count) => String(props.value).length <= count

const withMinLengthValidation = (component, count) =>
    props => (
        <div>
            {React.createElement(component, props)}
            {isFail(props, count) && alert(count)}
        </div>
    )

export default withMinLengthValidation