<template>
    <h1>Ini Halaman index</h1>

    <table>
        <thead>
            <tr>
                <th>Nama</th>
                <th>Kelas</th>
                <th>Deskripsi</th>
            </tr>
        </thead>

        <tbody>
            <tr v-for ="(siswa, index) in siswas" :key="index">
                <td>{{siswa.nama}}</td>
                <td>{{siswa.kelas}}</td>
                <td>{{ siswa.deskripsi }}</td>
            </tr>
        </tbody>
    </table>
</template>

<script>

import axios from 'axios'

import { onMounted, ref } from 'vue';

export default{
    setup(){
        let siswas = ref([])

        onMounted(() => {
            axios.get('http://localhost:8000/api/siswa').then(response =>{
                siswas.value = response.data.data
            }).catch(error => {
                console.log(error.response.data)
            })
        }
        
        )

        return {siswas}
    }
}

</script>