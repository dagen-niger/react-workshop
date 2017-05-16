import React from 'react';

const alert = `<span>
  Minimum 
  4
   required.
</span>`

const withMinLengthValidation = (component, count) =>
    props => {
        const fail = String(props.value).length <= 4
        return (
            <div>
                {React.createElement(component, { ...props })}
                {fail && alert}
            </div>
        )
    }


export default withMinLengthValidation