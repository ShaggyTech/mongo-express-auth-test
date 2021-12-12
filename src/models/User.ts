import { Schema, model } from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

interface User {
    email: string;
    username: string;
}
  
const UserSchema = new Schema<User>({   
    email: {type: String, required:true, unique:true},
    username : {type: String, required:true, unique: true},
});  
const UserModel = model<User>('User', UserSchema)

// plugin for passport-local-mongoose
UserSchema.plugin(passportLocalMongoose);
  
// export userschema
//  module.exports = mongoose.model("User", UserSchema);
export default UserModel;
