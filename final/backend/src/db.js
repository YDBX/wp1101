import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const LinkSchema = new Schema({
  owner: {type: String},
  origin: {type: String, required: true },
  short: {type: String, required: true },
  num_of_view: {type: Number}
})
const UserSchema = new Schema({
  name: {type: String, required: true },
  encrypted_password: {type: String, required: true }
})

const UserModel = mongoose.model("User", UserSchema);
const LinkModel = mongoose.model("Link", LinkSchema);
export { LinkModel, UserModel};