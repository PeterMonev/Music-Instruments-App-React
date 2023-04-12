const Instrument = require('../models/Instrument');
const { ValidationError } = require('../utils/createValidationError');


async function getAll(query) {
    const page = parseInt(query?.page) || 1; // 1
    const limit = parseInt(query?.limit) || 6; // 5
    const sort = query?.sort; // createdAt
    const order = query?.order; // desc/asc
    const search = query?.search; // asdasd
    const category = (query?.category || '').trim(); // summary
    const owner = (query?.owner || '') // id of owner
    const except = (query?.except || '').trim(); // summary
    const skipIndex = (page - 1) * limit;

    const sortCriteria = {};
    let buildedQuery = {};

    if (category === 'createdAt' || category === 'updatedAt') {
        throw new ValidationError('You cannot serach by createdAt or updatedAt.', 403)
    }

    if (sort && sort !== 'null' && order && order !== 'null') {
        sortCriteria[sort] = order;
        
    }

    if (search && search !== 'null' || category && category !== 'null') {
        if(search && category === 'Select category'){
            buildedQuery.title = { $regex: new RegExp(search, 'gi') };

        } else if (!search && category ){
            buildedQuery.category=category;

        } else if (search && category){
            buildedQuery.title = { $regex: new RegExp(search, 'gi') };
            buildedQuery.category=category
        }

    };

    if (owner && owner !== 'null') {
        buildedQuery['owner'] = owner;
    }

    if (except && except !== 'null') {
        buildedQuery._id = { $nin: except.split(',') }
    }
   
    let count = await Instrument
        .find(buildedQuery)
        .countDocuments();
  
    let instruments =   await Instrument
        .find({...buildedQuery})
        .select('title category address imageUrl price year description createdAt updatedAt owner')
        .limit(limit)
        .skip(skipIndex)
        .sort(sortCriteria)
        .populate('owner', 'email')
        .lean();

    return { instruments, count };
}

async function create(item) {
    const result = new Instrument({
        title: item.title,
        category: item.category,
        address: item.address,
        imageUrl: item.imageUrl,
        price: item.price,
        year: item.year ,
        description: item.description,
        owner: item.owner
    });

    await result.save();

    return result;
}

async function getById(id) {
    return Instrument.findById(id).populate('owner', 'email');
}

async function updateById(existing, item) {
    existing.title = item.title;
    existing.category = item.category;
    existing.address = item.address;
    existing.imageUrl = item.imageUrl;
    existing.price = item.price;
    existing.year = item.year;
    existing.description = item.description;
    console.log(item);
    console.log(existing);
    await existing.save();

    return existing;
}

async function deleteById(id) {
    return await Instrument.findByIdAndDelete(id);
}

module.exports = {
    getAll,
    create,
    getById,
    updateById,
    deleteById
};