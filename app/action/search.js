import {actionSearchBuilder} from 'focus-search/actions/action-search-builder'
import {singleActionCreatorBuilder} from 'focus-search/actions/single-action-creator'
import {unitSearchReducerBuilder} from 'focus-search/reducer'
import {searchTriggerMiddlewareBuilder} from 'focus-search/middleware/middleware-search';

import {search as serviceSearch} from '../services/search';

//advanced_search
export const searchAction = actionSearchBuilder({name: 'advancedSearch', type: 'search', service: serviceSearch});
export const {creators : unitSearchActions, types : unitSearchActionsTypes} = singleActionCreatorBuilder('advancedSearch');
export const unitSearchReducers = unitSearchReducerBuilder('advancedSearch');
export const middlewareAdvancedSearch = searchTriggerMiddlewareBuilder(
    [
        'ADVANCEDSEARCH_NEXT_PAGE',
        'ADVANCEDSEARCH_UPDATE_QUERY',
        'ADVANCEDSEARCH_UPDATE_SELECTED_FACETS',
        'ADVANCEDSEARCH_UPDATE_SORT',
        'ADVANCEDSEARCH_UPDATE_GROUP',
        'ADVANCEDSEARCH_START_SEARCH'
    ],
    state => state.advancedSearch,
    searchAction.action
);
