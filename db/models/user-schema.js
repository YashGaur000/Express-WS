import { SchemaTypes } from "mongoose";
import mongoose from "../connections.js";
const schema=mongoose.Schema
const UserSchema=new schema({
    'email': {type:SchemaTypes.String, required: true, unique: true},
    'password': {type:SchemaTypes.String, required: true, minLength:8 ,maxLength:100},
    'name': {type:SchemaTypes.String, required: true},
    'phone': {type:SchemaTypes.String, required:true}
});
export const UserModel =mongoose.model('users',UserSchema);