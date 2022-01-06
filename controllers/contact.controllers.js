const addContact = async (req,res) => {
    try {
        const newContact = req.body

        if( !newContact.name ||!newContact.email ) {
            return res.status(400).send({ msg : "name and email are required"})
        }

        const contactToFind = await Contact.findOne({ email : newContact.email})
        if(contactToFind) {
            return res.status(400).send({ msg : "Contact already exists"})
        }

        const contactToAdd = new Contact(newContact)
        await contactToAdd.save()
    
        res.status(200).send({ msg : "Contact added succ...", contactToAdd })
    } catch (error) {
        res.status(400).send({msg : "Contact not add...", error})
        
    }
}

//get all contacts 

const getContacts = async (req,res) => {

    try {
        const listContact = await Contact.find()
        console.log(listContact)
        res.status(200).send({ msg : " Got all contacts", listContact})
        
    } catch (error) {
        res.status(400).send({ msg : " Cannot get all contacts"})
        
    }
}

// delete contact 

const deleteContact = async (req,res) => {

    try {
        const contactId= req.params

    await Contact.deleteOne({id : contactId})  
    res.status(200).send({msg : "Contact deleted "}) 

    } catch (error) {
        res.status(400).send({ msg : "Contact can not be deleted ", error})
        
    }
}
 // get one contact 
 const getContact = async (req,res) => {

    try {
        const {_id} = req.params
        const contactToFind = await Contact.findOne({ _id})
        res.status(200).send({msg : "I find the contatct ..." , contactToFind })
        
    } catch (error) {
        res.status(400).send({ msg : " Cannot get contact with this id!!",error})
        
    }
}

// update one contact 

const updateContact = async (req,res) => {
    try {
        const { _id } = req.params
        const newContact = req.body
        await Contact.updateOne({_id}, {$set: {...newContact}})
        res.status(200).send({msg : "Contact updated succ ..."})

    } catch (error) {
res.status(400).send({ msg : "Can not update contact with this id !!", error})        
    }
}


module.exports=controllers = { addContact, getContacts, deleteContact, getContact,updateContact}