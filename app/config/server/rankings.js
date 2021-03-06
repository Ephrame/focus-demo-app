import builder from 'focus-application/util/url-builder';
import {apiRoot} from './index';

const rankingsRoot = `${apiRoot}movies/rankings/`;

export default {
    dateRanking: builder(rankingsRoot + 'date', 'GET'),
    markRanking: builder(rankingsRoot + 'mark', 'GET')
};
