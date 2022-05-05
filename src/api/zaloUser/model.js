import mongoose, { Schema } from 'mongoose'

const zaloUserSchema = new Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  accessToken: {
    type: String
  },
  instanceUrl: {
    type: String
  }
}, {
  timestamps: true,
  toJSON: {
    virtuals: true,
    transform: (obj, ret) => { delete ret._id }
  }
})

zaloUserSchema.methods = {
  view (full) {
    const view = {
      // simple view
      id: this.id,
      name: this.name,
      phone: this.phone,
      createdAt: this.createdAt,
      updatedAt: this.updatedAt
    }

    return full ? {
      ...view
      // add properties for a full view
    } : view
  }
}

const model = mongoose.model('ZaloUser', zaloUserSchema)

export const schema = model.schema
export default model
