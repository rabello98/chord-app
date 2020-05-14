import { routes } from 'Js/routes/routes'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'Style/app.css'

$route.init({
    routes: routes,
    historyMode: false
})
$chord.init($route, '#app')
