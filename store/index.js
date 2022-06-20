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
            }
        },
        mutations: {
            // setCurrencies(state, currencies) {
            //     state.currencies = currencies;
            // },
            updateCurrencyName(state, currencyName) {
                console.log(currencyName);
                state.currency.name = currencyName;
            }
        },
        actions: {
            // nuxtServerInit(vuexContext, context) {
            //     console.log('nuxtServerInit');
            //     vuexContext.commit('setCurrencies', [
            //         { id: 1, name: 'American Dollar', code: 'USD', symbol: '$' },
            //         { id: 2, name: 'Canadian Dollar', code: 'CAD', symbol: '$' },
            //     ]);
            // },
            // setCurrencies(vuexContext, currencies) {
            //     vuexContext.commit('setCurrencies', currencies);
            // }
        },
        getters: {
            currencies(state) {
                return state.currencies;
            },
            currency(state) {
                return state.currency;
            }
        }
    });
}

export default createStore;