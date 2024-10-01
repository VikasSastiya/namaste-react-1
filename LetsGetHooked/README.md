- we have huge code in a single file(app.js) so we break our app into multiple files

- we kind of put the file into src folder , so lets create this folder so we put app.js to src folder

# Namaste Food
/**
 * Header
 *  -Logo
 *  - Nav Items
 * Body
 *   -Search
 *   -RestaurantContainer
 *     - RestaurantCard
 *      - Img
 *      - Name of Res,Star Rating , cuisins, delivery time
 *   Footer
 *      -Copyright
 * - Links
 * -Address
 *   -Contact
 * 
 */  


 - keep the code simple 


 # Two types of Export/Import

 - Default Export/Import

  export default Component;
  import Component from "path";

 - Named Export/Import

 export const Component;
 import {Component} from "path";