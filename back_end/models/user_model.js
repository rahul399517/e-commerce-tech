/* 
                          Thought Note 
 Here i define  a Mongoose schema for a user  in an e-commerce website.

 It defines the properties that a user  can have, their data types
 and whether they are required or not.         
                
*/
const mongoose = require("mongoose");
const UserSchema = new mongoose.Schema({
  FullName: {
    type: String,
    required: true,
  },
  Email: { type: String, required: true },
  Password: { type: String, required: true },
  ProfileImg: {
    type: String,
    default:
      "https://images.unsplash.com/photo-1507114845806-0347f6150324?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NjR8fHBlb3BsZXxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60",
  },
  City: { type: String, required: true },
  HomeAddress: { type: String, required: true },
  State: { type: String, rerquired: true },
  Country: { type: String, required: true },
  Pin: { type: String, required: true },
});
const UserModel = mongoose.model("UserModel", UserSchema);
module.exports = UserModel;
