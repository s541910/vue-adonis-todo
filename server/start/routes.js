'use strict'

const { route } = require('@adonisjs/framework/src/Route/Manager')
const UserController = require('../app/Controllers/Http/UserController')

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URL's and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use('Route')

// Route.get('/',({request})=>
// {
//     return{
//         greeting:'Welcome to Adonis project'
//     }
// })

Route.group(()=>{
    Route.post('auth/register','UserController.register');
    Route.post('auth/login','UserController.login');
}).prefix('api');
