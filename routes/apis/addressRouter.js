
import  CreateAddressController  from "../../app/Controllers/AddressApi/CreateAddressController.js";
import  GetAddressController  from "../../app/Controllers/AddressApi/GetAddaressController.js";
import  ListAddressController  from "../../app/Controllers/AddressApi/ListAddressController.js";
import  UpdateAddressController  from "../../app/Controllers/AddressApi/UpdateAddresscontroller.js";
import  DeleteAddressController  from "../../app/Controllers/AddressApi/DeleteAddressController.js";
import { Router } from "express"; 


export default (() => {
    const router = Router();

      router.get('/', ListAddressController);
    
        router.post('/', CreateAddressController );
    
        router.post('/', CreateAddressController);
    
        router.put('/:id', UpdateAddressController);
    
        router.delete('/:id', DeleteAddressController)

    return router;
})();