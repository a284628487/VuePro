<template>
  <div id="network">
    <button @click="axiosConfig">axios(config)</button>
    <br/>
    <button @click="axiosGet">axios.get</button>
    <br/>
    <button @click="asyncAxiosGet">async axios</button>
  </div>
</template>

<script>
import axios from 'axios'
import '../util/myhttp'

export default {
  name: 'Network',
  mounted () {
    // axiosConfig
    this.axiosConfig()
    // axiosGet
    // this.axiosGet()
    // async & await
    // this.asyncAxiosGet()
  },
  methods: {
    axiosConfig () {
      // axios(config)
      axios({
        method: 'get',
        url: './static/movies_01.json'
      }).then(response => {
        console.log('data by `axios(config)` ', response.data)
      }).catch(error => {
        console.log('data by `axios(config)` error ', JSON.stringify(error))
      })
    },
    axiosGet () {
      // axios.get
      axios.get('./static/movies_02.json')
        .then(response => {
          console.log('data by `axios.get(url)` ', response.data)
        })
    },
    async asyncGet () {
      const response = await axios.get('./static/movies_03.json')
      console.log('await response: ', response)
      return response
    },
    asyncAxiosGet () {
      this.asyncGet()
        .then(response => {
          console.log('asyncAxiosGet:', response.data)
        })
    }
  }
}
</script>

<style scoped>

</style>
