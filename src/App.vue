<template>
  <div id="app">
    <div class="row">
      <div class="col-sm-2">
         <FilterForm/>
        
      </div>
      <div class="col-sm-10">
            <!--хорошо бы отдельный компонент-->
              <h4>Список рейсов:</h4>
              <div class="oneflight" v-for="(item, index) in allFlight" :key=index>  
                   <div v-for="(item2) in item.flights" >
                       
                     <div class="informationfromto">
                        <div v-for="(item3) in item2.from" class="aviafrom">
                          <div> <b>{{item3.name}}</b> </div>
                          <div class="name_eng">{{item3.name_en}}</div>
                        </div>                      
                        <div class="aviatime">
                          <span class="iconarrow"></span> 
                          {{item2.flytime}}
                          <span class="iconarrow"></span>
                        </div> 
                              
                        <div v-for="(item4) in item2.to" class="aviato">
                          <div><b>{{item4.name}}</b></div>
                          <div class="name_eng">{{item4.name_en}}</div>
                        </div>
                     </div> 
                     
                     <div class="informationdatetime">
                        <div> <b>Отправление: </b> {{item2.from.time}}</div>
                        <div> <b>Прибытие: </b>  {{item2.to.time}}</div>
                        <div v-if="item2.waittime > 0">Время ожидания пересадки: {{item2.waittime}} </div>
                     </div>
                     <hr>
                   </div> 
              <div class="informationcoast">
                <span><span class="iconprice"></span> <b>Стоимость:</b> {{item.price+' '+item.currency}}</span>
                <span> <span class="iconbaggage"></span> <b>Багаж: </b>              
                  <span v-if="item.baggage === '' || item.baggage ==='НЕТ'">Ручная кладь</span>
                  <span v-else> {{item.baggage}}</span>
                  </span>
                <span> <span class="iconclass"></span> <b>Класс:</b>  {{item.class}}</span>
              </div>      
                 
              </div>
              
      </div>

    </div>
   
    
  </div>
</template>

<script>
  //импорт различных методов из Vuex, в частиности здесь геттеры, котому что пользуемся именно мим
  import {mapGetters, mapActions} from 'vuex'
  import FilterForm from './components/FilterForm'

  export default{
    
   name: "app",
   //computed свойство, которое реагирует на изменение геттеров
/*   computed:{
      allFlight(){
        return this.$store.getters.allFlight;
      }
   },*/
    
   methods:{
    ...mapActions(["fetchFlight"]),
   },
    
   components:{FilterForm}, 
   computed: {
     ...mapGetters(["allFlight"]),
     
   },
   
   async mounted(){
    //this.$store.dispatch('fetchFlight');
    this.fetchFlight();
   },
  
   
  };
</script>


