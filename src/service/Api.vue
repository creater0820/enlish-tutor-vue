<script>
import Axios from'Axios'

const apiNewContract = process.env.VUE_APP_URL
const apiHeader = axios.create({
    'Authorization' : localStorage.getItem('token')
})

export default{
newContract:{
    index(){
        return get(apiNewContract);
    }
}
}
</script>