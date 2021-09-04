<template>
    <div>
           <div class="row">
            <card >

            <div slot="header">
                <h4 class="card-title">Calcula la dieta para tu ganado</h4>
            </div>

            <div class="row" > 

                

                

                <div class="col-4">
                    <slot name="label">
                        <label>Animal</label>
                    </slot>

                    <el-select value="1" placeholder="Selecciona una plantilla" class="select-success" style="width:100%">
                        <el-option class="text-dark" value="animalOvino" label="Ovino"></el-option>
                        
                    </el-select>
                </div>

                    <div class="col-4">
                    <slot name="label">
                        <label>Etapa</label>
                    </slot>

                    <el-select value="1" placeholder="Selecciona una plantilla" class="select-success" style="width:100%">
                        <el-option class="text-dark" value="etapa1" label="Cordero"></el-option>
                        <el-option class="text-dark" value="etapa2" label="Primipara"></el-option>
                        <el-option class="text-dark" value="etapa3" label="Multipara"></el-option>
                        <el-option class="text-dark" value="etapa4" label="Semental"></el-option>
                        
                    </el-select>
                </div>

                <div class="col-4">
                    <base-input label="Ingresa el peso" type="text" placeholder="Ej: 48 kg"></base-input>
                </div>


            </div>
           

            </card>
        </div>
    </div>
</template>

<script>
import { Table, TableColumn } from "element-ui";
import { Select, Option } from "element-ui";

export default{
    components:{
        [Table.name]: Table,
        [TableColumn.name]:TableColumn,
        [Option.name]:Option,
        [Select.name]: Select, 
    },
    
};

</script>

