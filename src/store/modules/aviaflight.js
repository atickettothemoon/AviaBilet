import myjson from './LEDMOW.json'


export default{
  //объекты
  actions:{
    async fetchFlight(ctx){
      let flight = myjson;
     // console.log(flight);
      ctx.commit('updateFlight',flight)
    },
    /*****вот это все ниже можно собрать в один кусок,дублируется****/
    async baggageFilter(ctx,flag){
      ctx.commit('updateBFilter',flag)
    },
    async transferFilter(ctx,flag){  
      ctx.commit('updateTFilter',flag)
    },
    async priceFilter(ctx){
      let fPri = true;
      ctx.commit('updatePFilter',fPri)
    }
    
  },

//функции, который будут изменять store
  mutations:{
    updateFlight(state,aviaflight){
      state.aviaflight = aviaflight
    },
    /*****вот это все ниже можно собрать в один кусок,дублируется****/
    updateBFilter(state,fBaggage){
      state.fBaggage = fBaggage
    },
    updateTFilter(state,fTravsfer){
      state.fTravsfer = fTravsfer;
    },
    updatePFilter(state,fPrice){
      state.fPrice = fPrice;
    }
    
  },

//изначальные данные, данные которые есть в приложении
  state:{
    //наш массив с перелетами - изначально пустой
    aviaflight:[],
    //перемнные фильтров 
    fBaggage:false,
    fTravsfer:false,
    fPrice:false

  },
//трансоформировать и получать данные из store
  getters:{
    allFlight:state => {
      //это все конечно такое себе....
      if(state.fBaggage == false && state.fTravsfer==false && state.fPrice==false){
        return state.aviaflight.results;
      }
      else if(state.fTravsfer == true && state.fBaggage == false && state.fPrice == false){
        return state.aviaflight.results.filter(results => results.flights.length < 2);
      }
      else if(state.fTravsfer == true && state.fBaggage == true && state.fPrice == false){
        return state.aviaflight.results.filter(results =>  results.flights.length < 2 && results.baggage && results.baggage!='НЕТ')
      }
      else if(state.fBaggage == true && state.fTravsfer == false && state.fPrice == false){
        return state.aviaflight.results.filter(results => results.baggage && results.baggage!='НЕТ');
      }
      else if(state.fPrice == true &&state.fTravsfer == true && state.fBaggage == true){
       return (state.aviaflight.results.sort((a,b) => a.price - b.price)&&( state.aviaflight.results.filter(results => results.flights.length < 2)&& state.aviaflight.results.filter(results =>  results.flights.length < 2 && results.baggage && results.baggage!='НЕТ' ) ) );     
      }
      else if(state.fBaggage == false && state.fTravsfer == false && state.fPrice == true){
        return state.aviaflight.results.sort((a,b) => a.price - b.price);
      }
      else if(state.fBaggage == true && state.fTravsfer == false && state.fPrice == true){
        return (state.aviaflight.results.sort((a,b) => a.price - b.price)&&state.aviaflight.results.filter(results => results.baggage&& results.baggage!='НЕТ'));
      }
      else if(state.fBaggage == false && state.fTravsfer == true && state.fPrice == true){
        return (state.aviaflight.results.sort((a,b) => a.price - b.price)&&state.aviaflight.results.filter(results => results.flights.length < 2));
      }
      
     
      
     /* switch(state.filterpere){
        case 0:
          return state.aviaflight.results;
          break;
        case 1:
          return state.aviaflight.results.filter(results => results.baggage);
          break;
        case 2:
          return state.aviaflight.results.filter(results => results.flights.length < 2);
          break;
        case 3:
          break;
        default:
          break;

      }*/
     /*   if(state.fBaggage == true){
          //return state.aviaflight.results.filter(results => results.flights.length < 2);
          return state.aviaflight.results.filter(results => results.baggage);
        }
        if(state.fTravsfer == true){
          return state.aviaflight.results.filter(results => results.flights.length < 2);
        }
        if(state.fPrice == true){
          return state.aviaflight.results.filter(results => results.price < 4000);
        }*/
      
      
    },
    
   /* priceFilter: (state) => {
      return state.aviaflight.results.sort(results => results.price);
    },
    baggageFilter: (state) => {
      return state.aviaflight.results.filter(results => results.baggage);
    },
    transferFilter: (state) => {
      //console.log(state.aviaflight.results.filter(results => results.flights.length < 2));
      return state.aviaflight.results.filter(results => results.flights.length < 2);
    }*/
    
  },
}

