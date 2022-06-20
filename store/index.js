import Vuex from 'vuex';

const createStore = () => {
    return new Vuex.Store({
        state: {
            currencies: [],
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
                const index = state.currencies.findIndex(cur => cur.id === currency.id);
                console.log('index', index, currency);
                if(index !== -1) {
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
            editCurrency(state, id) {
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
            }            
        }
    });
}

export default createStore;