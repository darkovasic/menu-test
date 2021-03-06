import Vuex from 'vuex';

const createStore = () => {
    const savedCurrencies = JSON.parse(localStorage.getItem('currencies')) ?? [];
    return new Vuex.Store({
        state: {
            storedCurrencies: savedCurrencies,
            loadedCurrencies: savedCurrencies,
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
                if(search.length >= 1) {

                    const filteredCurrencies = state.loadedCurrencies.filter(function(cur) {
                        return Object.keys(cur).some(key => cur[key].toString().toLowerCase().includes(search.toLowerCase()));
                        // return Object.keys(cur).some(function(key) {
                        //     return cur[key].toString().toLowerCase().indexOf(search) !== -1;
                        // })
                    })
                    this.commit("updateLoadedCurrencies", filteredCurrencies);
                } else {
                    this.commit("refreshLoadedCurrencies");
                }
            }, 
            updateLoadedCurrencies(state, currencies) {
                state.loadedCurrencies = currencies;
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
                const isEdit = state.storedCurrencies.some(cur => cur.id === currency.id);
                if(isEdit) {
                    const newCurrencies = state.storedCurrencies.map((cur) => {
                        if (cur.id === currency.id) return currency;
                        else return cur;
                    })
                    state.storedCurrencies = newCurrencies;
                    this.commit('refreshLoadedCurrencies');
                } else {
                    state.storedCurrencies.push(currency);
                    this.commit('refreshLoadedCurrencies');
                }
                state.drawer = false;
                this.commit("clearCurrency");
            },            
            toggleDrawer(state, data) {
                state.drawer = data;
                if(data === false) {
                    setTimeout(() => {
                        this.commit("clearCurrency");
                    }, 500)
                }
            },
            refreshLoadedCurrencies(state) {
                state.loadedCurrencies = [...state.storedCurrencies];
                localStorage.setItem('currencies', JSON.stringify(state.storedCurrencies));
            },
            loadCurrency(state, id) {
                state.currency = structuredClone(state.loadedCurrencies.find(currency => currency.id === id));
                this.commit("toggleDrawer", id);
            },
            clearCurrency(state) {
                state.currency = {
                    name: '',
                    code: '',
                    symbol: ''
                }
            },
            deleteCurrency(state, id) {
                const storedIndex = state.storedCurrencies.findIndex(currency => currency.id === id);
                state.storedCurrencies.splice(storedIndex, 1);
                this.commit('refreshLoadedCurrencies');
            }
        },
        actions: {},
        getters: {
            loadedCurrencies(state) {
                return state.loadedCurrencies;
            },
            currency(state) {
                return state.currency;
            },
            drawer(state) {
                return state.drawer;
            },                   
        }
    });
}

export default createStore;