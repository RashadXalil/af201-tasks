import * as Yup from 'yup'

const UserSchema = Yup.object().shape({
  username: Yup.string().min(8).max(16).required().lowercase(),
  password: Yup.string().min(8).max(11).required(),
})

export default UserSchema
