<template>
<div class="filterGroup">
        <h6>Сортировать</h6>
        <button class="filterButton filterButtonMargin" id="sortPrice"  @click="PFilter">По цене</button>
        
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" @change="BFilter"> С багажом
          </label>
        </div>
        <div class="form-check">
          <label class="form-check-label">
            <input class="form-check-input" type="checkbox" @change="TFilter"> Прямые рейсы
          </label>
        </div>
     
</div>

</template>

<script>
import {mapGetters, mapActions} from 'vuex'

export default{
  name: "filterform",
  methods:{
     ...mapActions(["baggageFilter","transferFilter","priceFilter"]),
    BFilter(event){  
      if(event.target.checked) {
        this.baggageFilter(true);
      }  
      else{
        this.baggageFilter(false);
      }  
      
    },
    TFilter(event){
      if(event.target.checked){
        this.transferFilter(true);
      }
      else{
        this.transferFilter(false);
      }
      
    },
    PFilter(){
        this.priceFilter();
    },
    

  }
}
</script>

