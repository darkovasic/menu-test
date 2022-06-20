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
            drawer: false,
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
            updateCurrencies(state, currency) {
                state.currencies.push(currency);
            },            
            toggleDrawer(state, data) {
                state.drawer = data;
                if(data === false) {
                    setTimeout(() => {
                        state.currency = {};
                    }, 500)
                }
            },
            editCurrency(state, id) {
                state.currency = state.currencies.find(currency => currency.id === id);
                state.drawer = id;
            },
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