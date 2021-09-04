<template>
    <div>

         <!-- Formulario y agregar nuevo dispositivo-->
        <div class="row">
            <card >

            <div slot="header">
                <h4 class="card-title">Agregar nuevo dispositivo</h4>
            </div>

            <div class="row" > 

                <div class="col-4">
                    <base-input label="N. del dispositivo" type="text" placeholder="Ej: Vivero, Invernadero,"></base-input>
                </div>

                <div class="col-4" type="success">
                     <base-input label="ID del dispositivo" type="text" placeholder="Ej: 00-00-00"></base-input>
                </div>

                <div class="col-4">
                    <slot name="label">
                        <label>Plantillas</label>
                    </slot>

                    <el-select value="1" placeholder="Selecciona una plantilla" class="select-success" style="width:100%">
                        <el-option class="text-dark" value="Template 1" label="Plantilla 1"></el-option>
                        <el-option class="text-dark" value="Template 2" label="Plantilla 2"></el-option>
                        <el-option class="text-dark" value="Template 3" label="Plantilla 3"></el-option>
                    </el-select>
                </div>


            </div>
            <div class="row pull-right">
                <div class="col-12">
                   <base-button type="success" class="mb-3" size="lg">Agregar</base-button>

                </div>
            </div>

            </card>
        </div>

         <!-- Tabla de dispositivos-->
        <div class="row">
            <card >

            <div slot="header">
                <h4 class="card-title">Dispositivos</h4>
            </div>

            <el-table :data="devices">

                <el-table-column prop="name" label="Nombre"></el-table-column>
                <el-table-column prop="dId" label="Id del dispositivo"></el-table-column>
                <el-table-column prop="templateName" label="Plantilla"></el-table-column>

                <el-table-column label="Acciones">
                    
                    <div slot-scope="{row, $index }">

                        <el-tooltip style="margin-right:10px">
                           <i class="fas fa-database" :class="{'text-success': row.saverRule, 'text-dark' : !row.saverRule}" ></i>
                        </el-tooltip>

                        <el-tooltip content="Grabar en base de datos">
                            <base-switch @click="updateSaverRuleStatus($index)" :value="row.saverRule" type="success" on-text="On" off-text="Off"></base-switch>
                        </el-tooltip>
                       
                        <el-tooltip content="Eliminar" effect="light" :open-delay="300" placement="top">

                            <base-button type="danger" icon size="sm" class="btn-link" @click="deleteDevice(row)">
                                <i class="tim-icons icon-simple-remove"></i>
                            </base-button>
                        
                         </el-tooltip>

                    </div>    

                </el-table-column>

                

            </el-table>

            </card>
        </div>

       <json :value="devices"></json>
           

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
    data(){
        return{
            devices: [
                {
                    name: "Casa",
                    dId: "1010",
                    templateName: "Sensor de poder",
                    templateId: "fhrf-5124",
                    saverRule:false
                },
                {
                    name: "Invernadero",
                    dId: "1010",
                    templateName: "Sensor de poder",
                    templateId: "fhrf-5124",
                    saverRule:false
                },
                {
                    name: "Granja",
                    dId: "1010",
                    templateName: "Sensor de poder",
                    templateId: "fhrf-5124",
                    saverRule:true
                }

            ]
        };
    },
    methods:{
        deleteDevice(device){
            alert("Borrando "+ device.name)
        },

        updateSaverRuleStatus(index){
            this.devices[index].saverRule= !this.devices[index].saverRule
        }
    }
};

</script>
