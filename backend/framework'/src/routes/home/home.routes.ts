import { Router } from "../../../config/common.config";
import { home_get } from "../../controller";

Router.route('/home')
.get(home_get)

module.exports=Router