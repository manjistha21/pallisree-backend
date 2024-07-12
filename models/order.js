import mongoose from 'mongoose';

const orderSchema = new mongoose.Schema({

    AMLstatus: {
        type: String,
        required: true,
      },

    tags: {
        type: String,
        required: true,
      },

    customer: {
        type: String,
        required: true,
    },

    reasonfortransfer: {
        type: String,
        required: true,
    },

    foreigncurrency: {
        type: String,
        required: true,
    },

    country: {
        type: String,
        required: true,
    },

    sourceoffunds: {
        type: String,
        required: true,
    }, 

});

const order = mongoose.models.orders || mongoose.model('orders', orderSchema);
export default order;

    