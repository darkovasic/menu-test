import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            currencies: [
                { id: 1, name: 'American Dollar', code: 'USD', symbol: '$' },
                { id: 2, name: 'Canadian Dollar', code: 'CAD', symbol: '$' },
            ],
            currency: {
                name: '',
                code: '',
                symbol: ''
            },
            drawer: true,
        },
        mutations: {
            updateCurrencyName(state, currencyName) {
                state.currency.name = currencyName;
            },
            updateCurrencyCode(state, currencyCode) {
                state.currency.code = currencyCode;
            },
            updateCurrencySymbol(state, currencySymbol) {
                state.currency.symbol = currencySymbol;
            },
            toggleDrawer(state, data) {
                state.drawer = data;
            }   
        },
        actions: {

        },
        getters: {
            currencies(state) {
                return state.currencies;
            },
            currency(state) {
                return state.currency;
            },
            drawer(state) {
                return state.drawer;
            }            
        }
    });
}

export default createStore;