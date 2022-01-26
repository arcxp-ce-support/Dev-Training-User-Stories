import React from 'react';
import PropTypes from 'prop-types';
import { useContent } from 'fusion:content';
import storyCardFilter from '../../../content/filters/story-card';

const Card = (props) => {
    const { contentService, contentConfigValues } = props.customFields.storyConfig;

    const story = useContent({
        source: contentService,
        query: contentConfigValues,
        filter: storyCardFilter
    });
    
    return (
        story ?
            <article className="card">
                <div className="card-body">
                    <h2 className="card-title">{story.headlines.basic}</h2>
                    <h5 className="card-text">{story.subheadlines.basic}</h5>
                </div>
            </article>
            : null
    );
}

Card.propTypes = {
    customFields: PropTypes.shape({
      storyConfig: PropTypes.contentConfig().tag({
        label: 'Story URL',
      }).isRequired,
    }),
};

export default Card;