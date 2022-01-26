import { useContent } from 'fusion:content';
import PropTypes from 'prop-types';
import './default.scss';

const Nav = (props) => {
    const { config } = props.customFields;
    const sections = useContent({
        source: config.contentService,
        query: config.contentConfigValues
    })

    return (
        <div>
            <br/>
            { sections?.children.map(section => <span className='nav-tab'> { section.name } </span>) }
            <br/>
        </div>
    )

}

Nav.propTypes = {
    customFields: PropTypes.shape({
        config: PropTypes.contentConfig()
    })
}

export default Nav