const params = {
    website_url: ''
};

const schemaName = 'article';

const resolve = (props) => {
    const arcSite = props['arc-site'];
    return `/content/v4/stories/?website_url=${ props.website_url }&website=${ arcSite }`;
}

export default {
    resolve,
    params,
    schemaName
}