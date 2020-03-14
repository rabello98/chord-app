import { routes } from 'Js/routes/routes'

$route.init({
    routes: routes,
    historyMode: false
})
$chord.init($route, '#app')
