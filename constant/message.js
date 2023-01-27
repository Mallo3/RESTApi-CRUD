module.exports ={
    "errMsgs": {
        "dataMismatch" : ()=> ({
            "status": 400,
            "message": "Input data mismatch"
        }),

        "sameProduct" : ()=> ({
            "status": 400,
            "message": "same product already exists "
        }),

        "notExist" : ()=> ({
            "status": 400,
            "message": "Product does not exist"
        })
    },

    "successMsgs": {

        "add_successMsg": () => ({
            "status": 200,
            "message": "Product added successfully" 
        }),

        "delete_successMsg": () => ({
            "status": 200,
            "message": "Product deleted successfully" 
        }),

        "update_successMsg": () => ({
            "status": 200,
            "message": "Product updated successfully" 
        }),

        "found_successMsg": () => ({
            "status": 200,
            "message": "Product found successfully by Id" 
        }),

        "all_found_successMsg": () => ({
            "status": 200,
            "message": "All Products found successfully" 
        })

    },

    "unexpectedErr" : {
        "DbError": () => ({
            "status": 500,
            "message": "Unexpected error" 
        })
    }

}