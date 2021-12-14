import {
  Schema,
  model,
  PassportLocalSchema,
  PassportLocalModel,
  PassportLocalDocument,
} from 'mongoose';
import passportLocalMongoose from 'passport-local-mongoose';

interface LocalUserSchema extends PassportLocalSchema {
  email: string;
  displayname: string;
}

const UserSchema = new Schema<LocalUserSchema>({
  email: { type: String, required: true, unique: true },
  displayname: { type: String, required: true, unique: true },
});

UserSchema.plugin(passportLocalMongoose, {
  usernameField: 'email',
});

const UserModel: PassportLocalModel<PassportLocalDocument> = model(
  'User',
  UserSchema as LocalUserSchema
);

export default UserModel;
