import React from 'react';
import PropTypes from 'prop-types';
import { useEditableContent } from 'fusion:content';

const Header = (props) => {
    const { name, displayName, textColor, description } = props.customFields;
    const { editableField } = useEditableContent();

    return(
        <div>
            <h1 style={{color: textColor || 'black'}}> Hello {name && displayName ? name : 'there'}! </h1>
            <span {...editableField('description')}>{ description }</span>
        </div>
    )
    
}

Header.propTypes = {
    customFields: PropTypes.shape({
        name: PropTypes.string.tag({
            label: 'Name'
        }),
        textColor: PropTypes.oneOf([
            'purple', 'green'
          ]).tag({
            label: 'Text Color'
          }),
        displayName: PropTypes.boolean.tag({
            label: 'Display Name'
        }),
        description: PropTypes.string.tag({
            label: 'Additional description'
        }).isRequired
    })
}

Header.static = true;
Header.label = 'Header Block Training'

export default Header;
