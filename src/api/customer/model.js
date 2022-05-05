import mongoose, { Schema } from 'mongoose'

const customerSchema = new Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  zaloUserId: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

customerSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      phone: this.phone,
      nickname: this.nickname,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('Customer', customerSchema)

export const schema = model.schema
export default model
