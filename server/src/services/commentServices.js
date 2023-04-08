const Comment = require('../models/Comment');

const Instrumen = require('../models/Instrument')

const getById = (commentId) => {
    return Comment.findById(commentId);
}

const getAllByInstrumentId = async (instrumentId) => {
    const instrument = await Instrumen.findById(instrumentId)
        .populate({
            path: 'comments',
            populate: {
                path: 'owner',
                select: 'email',
                model: 'User'
            }
        });

    return instrument.comments;
}

const create = async (item) => {
    const data = {
        text: item.text,
        instrument: item.instrument,
        owner: item.owner
    };
    const comment = await Comment.create(data);

    const instrument = await Instrumen.findById(item.instrument);
    instrument.comments.push(comment);
    instrument.save();
    
    return comment;
}

const updateById = async (existing, data) => {
    existing.text = data.text;

    await existing.save();

    return existing;
}

const deleteById = (commentId) => {
    const deleted = Comment.findByIdAndDelete(commentId);
    return deleted;
}

module.exports = {
    getAllByInstrumentId,
    create,
    updateById,
    getById,
    deleteById
}