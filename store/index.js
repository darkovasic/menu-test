import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            currencies: [
                {id: 1, name: 'American Dollar', code: 'USD', symbol: '$'},
                {id: 2, name: 'Canadian Dollar', code: 'CAD', symbol: '$'}
            ],
            currency: {
                name: '',
                code: '',
                symbol: ''
            },
            search: '',
            drawer: false,
        },
        mutations: {
            updateSearch(state, search) {
                state.search = search;
            },            
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
                const index = state.currencies.some(cur => cur.id === currency.id);
                console.log('index', index, currency);
                if(index) {
                    const newCurrencies = state.currencies.map((cur) => {
                        if (cur.id === currency.id) return currency
                        else return cur;
                    })
                    console.log('newCurrencies', newCurrencies);
                    state.currencies = newCurrencies;
                } else {
                    console.log('push', currency);
                    state.currencies.push(currency);
                }
                state.drawer = false;
                this.commit("clearCurrency")
            },            
            toggleDrawer(state, data) {
                state.drawer = data;
                if(data === false) {
                    setTimeout(() => {
                        this.commit("clearCurrency")
                    }, 500)
                }
            },
            loadCurrency(state, id) {
                console.log('edit currency', id);
                state.currency = state.currencies.find(currency => currency.id === id);
                this.commit("toggleDrawer", id)
            },
            clearCurrency(state) {
                state.currency = {
                    name: '',
                    code: '',
                    symbol: ''
                }
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
            },
            search(state) {
                return state.search;
            }                       
        }
    });
}

export default createStore;