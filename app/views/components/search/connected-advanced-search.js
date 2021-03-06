import React from 'react';
import compose from 'lodash/flowRight';
import {connect as connectToSearch} from 'focus-search/behaviours/search';
import {unitSearchActions} from '../../../action/search';
import {AdvancedSearch} from 'focus-search/components/advanced-search';
import paginate from 'focus-search/behaviours/paginate';

const searchOptions = {
    paginateConnector: paginate,
    searchName: 'advancedSearch',
    unitSearch: unitSearchActions
};

// search bar component connected to search store
const ConnectedSearch = compose(
    connectToSearch(searchOptions)
)(AdvancedSearch);
export default ConnectedSearch;
