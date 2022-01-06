const express = require('express')

const router = express.Router()

//require model 
const Contact = require('../model/Contact')


// require controllers

const controllers = require('../controllers/contact.controllers')
/**
 * des : add new contact
 * method : POST
 * path : 'http://localhost:5000/api/contact/'
 * data: req.body
 */
router.post('/', controllers.addContact)

/**
 * @description: get all contacts
 * @method: get 
 * @path : 'http://localhost:5000/api/contact/'
 * 
 */

router.get('./' , controllers.getContacts)

/**
 * @description: delete contact by id
 * @method: delete
 * @path : 'http://localhost:5000/api/contact/'
 * 
 */

router.delete('/:id', controllers.deleteContact)

/**
 * @description: delete one contact
 * @method: DELETE
 * @path: "http://localhost:5000/api/contact/:_id"
 * @data:
 */

 router.get('/:id' , controllers.getContact)

/**
 * @description: update one contact 
 * @method: PUT 
 * @path: "http://localhost:5000/api/contact/:_id"
 * @data : req.params and req.body 
 */

router.put('/:_id', controllers.updateContact)


module.exports = router